#!/usr/bin/env tsx
/**
 * Sipher Autonomous Agent
 *
 * A true autonomous agent that THINKS before acting.
 * Uses OpenRouter (Claude) for reasoning, with state-first optimization.
 *
 * Architecture:
 * 1. STATE-FIRST: Check local state before invoking LLM (saves tokens)
 * 2. TOOLS: Colosseum API wrapped as callable tools
 * 3. REACT LOOP: Observe → Think → Act → Repeat
 *
 * Usage:
 *   tsx scripts/sipher-agent.ts run          # Run one engagement cycle
 *   tsx scripts/sipher-agent.ts heartbeat    # Continuous loop
 *   tsx scripts/sipher-agent.ts status       # Show state
 *
 * Env:
 *   OPENROUTER_API_KEY  — Required for LLM reasoning
 *   COLOSSEUM_API_KEY   — Required for Colosseum API
 *   DRY_RUN=1           — Preview mode
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const COLOSSEUM_API = 'https://agents.colosseum.com/api'
const OPENROUTER_API = 'https://openrouter.ai/api/v1/chat/completions'
const LLM_MODEL = process.env.LLM_MODEL || 'anthropic/claude-3.5-haiku'
const AGENT_ID = 274
const PROJECT_ID = 148
const STATE_FILE = resolve(__dirname, '.sipher-agent-state.json')
const DRY_RUN = process.env.DRY_RUN === '1'
const HACKATHON_END = new Date('2026-02-12T17:00:00.000Z')
const HEARTBEAT_INTERVAL_MS = parseInt(process.env.HEARTBEAT_INTERVAL_MS || '1800000', 10)

function getApiKey(name: string, envVar: string, fallbackPath?: string): string {
  if (process.env[envVar]) return process.env[envVar]!
  if (fallbackPath && existsSync(fallbackPath)) {
    const content = readFileSync(fallbackPath, 'utf-8')
    const match = content.match(/```\n([a-f0-9]{64})\n```/)
    if (match) return match[1]
  }
  console.error(`ERROR: Set ${envVar}`)
  process.exit(1)
}

const OPENROUTER_API_KEY = getApiKey('OpenRouter', 'OPENROUTER_API_KEY')
const COLOSSEUM_API_KEY = getApiKey(
  'Colosseum',
  'COLOSSEUM_API_KEY',
  resolve(process.env.HOME || '~', '.claude/sip-protocol/sipher/CREDENTIALS.md'),
)

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AgentState {
  // Voting decisions (persisted)
  votedProjects: Record<number, { decision: boolean; reason: string; date: string }>
  // Comment decisions (persisted)
  commentedPosts: Record<number, { commentId: number; date: string }>
  // Agents who engaged with us (cached)
  engagedAgents: Record<number, { agentName: string; postIds: number[]; lastSeen: string }>
  // Our created posts
  ourPostIds: number[]
  lastPostTime: number
  // Stats
  totalComments: number
  totalVotes: number
  totalPosts: number
  totalLLMCalls: number
  totalTokensUsed: number
  lastRun: string | null
}

interface Project {
  id: number
  name: string
  slug: string
  description: string
  agentUpvotes: number
  humanUpvotes: number
  ownerAgentName?: string
}

interface ForumPost {
  id: number
  title: string
  body: string
  agentId: number
  agentName: string
  commentCount: number
}

interface Comment {
  id: number
  postId: number
  agentId: number
  agentName: string
  body: string
}

interface Tool {
  name: string
  description: string
  parameters: Record<string, unknown>
  execute: (args: Record<string, unknown>) => Promise<unknown>
}

interface ToolCall {
  id: string
  name: string
  arguments: Record<string, unknown>
}

interface LLMResponse {
  content: string
  toolCalls?: ToolCall[]
  usage?: { prompt_tokens: number; completion_tokens: number }
}

interface Message {
  role: 'system' | 'user' | 'assistant' | 'tool'
  content?: string
  tool_calls?: { id: string; type: 'function'; function: { name: string; arguments: string } }[]
  tool_call_id?: string
  name?: string
}

// ---------------------------------------------------------------------------
// State Management
// ---------------------------------------------------------------------------

function loadState(): AgentState {
  if (existsSync(STATE_FILE)) {
    const state = JSON.parse(readFileSync(STATE_FILE, 'utf-8'))
    return {
      votedProjects: {},
      commentedPosts: {},
      engagedAgents: {},
      ourPostIds: [],
      lastPostTime: 0,
      totalComments: 0,
      totalVotes: 0,
      totalPosts: 0,
      totalLLMCalls: 0,
      totalTokensUsed: 0,
      lastRun: null,
      ...state,
    }
  }
  return {
    votedProjects: {},
    commentedPosts: {},
    engagedAgents: {},
    ourPostIds: [],
    lastPostTime: 0,
    totalComments: 0,
    totalVotes: 0,
    totalPosts: 0,
    totalLLMCalls: 0,
    totalTokensUsed: 0,
    lastRun: null,
  }
}

function saveState(state: AgentState): void {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2))
}

// ---------------------------------------------------------------------------
// Colosseum API Client
// ---------------------------------------------------------------------------

async function colosseumApi<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${COLOSSEUM_API}${path}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${COLOSSEUM_API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Colosseum API ${res.status}: ${text}`)
  }
  return res.json() as Promise<T>
}

// ---------------------------------------------------------------------------
// LLM Client (OpenRouter)
// ---------------------------------------------------------------------------

async function callLLM(messages: Message[], tools?: Tool[]): Promise<LLMResponse> {
  const body: Record<string, unknown> = {
    model: LLM_MODEL,
    messages,
    max_tokens: 1000,
    temperature: 0.7,
  }

  if (tools && tools.length > 0) {
    body.tools = tools.map(t => ({
      type: 'function',
      function: {
        name: t.name,
        description: t.description,
        parameters: t.parameters,
      },
    }))
  }

  const res = await fetch(OPENROUTER_API, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://sipher.sip-protocol.org',
      'X-Title': 'Sipher Agent',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`OpenRouter API ${res.status}: ${err}`)
  }

  const data = await res.json() as {
    choices: {
      message: {
        content: string | null
        tool_calls?: { id: string; function: { name: string; arguments: string } }[]
      }
    }[]
    usage?: { prompt_tokens: number; completion_tokens: number }
  }

  const message = data.choices[0].message
  return {
    content: message.content || '',
    toolCalls: message.tool_calls?.map(tc => {
      let args: Record<string, unknown> = {}
      try {
        args = tc.function.arguments ? JSON.parse(tc.function.arguments) : {}
      } catch {
        console.warn(`  ⚠️ Failed to parse tool args: ${tc.function.arguments}`)
      }
      return {
        id: tc.id,
        name: tc.function.name,
        arguments: args,
      }
    }),
    usage: data.usage,
  }
}

// ---------------------------------------------------------------------------
// Agent System Prompt
// ---------------------------------------------------------------------------

const AGENT_SYSTEM_PROMPT = `You are Sipher, an autonomous AI agent competing in the Colosseum Agent Hackathon.

YOUR GOAL: Win the hackathon by getting the most votes while building genuine relationships with other agents.

YOUR PROJECT: Sipher — Privacy-as-a-Skill REST API for Solana Agents
- 65 endpoints live
- 353 tests passing
- 15 chains supported
- Mainnet deployed
- Skill file: https://sipher.sip-protocol.org/skill.md

STRATEGY:
1. ENGAGE genuinely with other agents' projects
2. EVALUATE projects thoughtfully before voting
3. RECIPROCATE — prioritize agents who engaged with us
4. CREATE valuable forum content that attracts attention

VOTING CRITERIA (use these to decide):
- Did this agent engage with us? (commented on our posts) → Strong YES
- Is their project complementary to ours? (could integrate) → YES
- Is their project high quality? (good description, active) → YES
- Is it just a placeholder with no substance? → NO
- Are they a direct competitor copying our approach? → SKIP

COMMENTING STRATEGY:
- Acknowledge their work genuinely
- Point out a privacy consideration relevant to their project
- Suggest how Sipher could help
- End with a question to encourage dialogue

You have access to tools. Use them to gather information and take actions.
Think step by step. Explain your reasoning briefly before acting.`

// ---------------------------------------------------------------------------
// Tools Definition
// ---------------------------------------------------------------------------

function createTools(state: AgentState): Tool[] {
  return [
    {
      name: 'get_projects',
      description: 'Fetch all projects in the hackathon',
      parameters: { type: 'object', properties: {}, required: [] },
      execute: async () => {
        const data = await colosseumApi<{ projects: Project[] }>('/projects?limit=100')
        return data.projects
      },
    },
    {
      name: 'get_project_details',
      description: 'Get detailed info about a specific project',
      parameters: {
        type: 'object',
        properties: { projectId: { type: 'number', description: 'Project ID' } },
        required: ['projectId'],
      },
      execute: async (args) => {
        const projects = await colosseumApi<{ projects: Project[] }>('/projects?limit=100')
        return projects.projects.find(p => p.id === args.projectId) || null
      },
    },
    {
      name: 'get_forum_posts',
      description: 'Fetch recent forum posts',
      parameters: { type: 'object', properties: {}, required: [] },
      execute: async () => {
        const data = await colosseumApi<{ posts: ForumPost[] }>('/forum/posts?limit=100')
        return data.posts
      },
    },
    {
      name: 'get_our_posts',
      description: 'Get our forum posts and their comments (to see who engaged with us)',
      parameters: { type: 'object', properties: {}, required: [] },
      execute: async () => {
        const data = await colosseumApi<{ posts: ForumPost[] }>('/forum/me/posts')
        return data.posts
      },
    },
    {
      name: 'get_post_comments',
      description: 'Get comments on a specific post',
      parameters: {
        type: 'object',
        properties: { postId: { type: 'number', description: 'Post ID' } },
        required: ['postId'],
      },
      execute: async (args) => {
        const data = await colosseumApi<{ comments: Comment[] }>(`/forum/posts/${args.postId}/comments`)
        return data.comments
      },
    },
    {
      name: 'check_voted',
      description: 'Check if we already voted for a project (from local state)',
      parameters: {
        type: 'object',
        properties: { projectId: { type: 'number', description: 'Project ID' } },
        required: ['projectId'],
      },
      execute: async (args) => {
        const record = state.votedProjects[args.projectId as number]
        return record ? { voted: true, ...record } : { voted: false }
      },
    },
    {
      name: 'check_commented',
      description: 'Check if we already commented on a post (from local state)',
      parameters: {
        type: 'object',
        properties: { postId: { type: 'number', description: 'Post ID' } },
        required: ['postId'],
      },
      execute: async (args) => {
        const record = state.commentedPosts[args.postId as number]
        return record ? { commented: true, ...record } : { commented: false }
      },
    },
    {
      name: 'check_engaged_with_us',
      description: 'Check if an agent has engaged with our posts (from local state)',
      parameters: {
        type: 'object',
        properties: { agentId: { type: 'number', description: 'Agent ID' } },
        required: ['agentId'],
      },
      execute: async (args) => {
        const record = state.engagedAgents[args.agentId as number]
        return record ? { engaged: true, ...record } : { engaged: false }
      },
    },
    {
      name: 'vote_for_project',
      description: 'Vote for a project. Only call after deciding to vote.',
      parameters: {
        type: 'object',
        properties: {
          projectId: { type: 'number', description: 'Project ID' },
          reason: { type: 'string', description: 'Why we are voting for this project' },
        },
        required: ['projectId', 'reason'],
      },
      execute: async (args) => {
        if (DRY_RUN) {
          console.log(`  [DRY RUN] Would vote for project #${args.projectId}: ${args.reason}`)
          return { success: true, dryRun: true }
        }
        try {
          await colosseumApi(`/projects/${args.projectId}/vote`, { method: 'POST' })
          state.votedProjects[args.projectId as number] = {
            decision: true,
            reason: args.reason as string,
            date: new Date().toISOString(),
          }
          state.totalVotes++
          return { success: true }
        } catch (err) {
          const msg = String(err)
          if (msg.includes('already voted')) {
            state.votedProjects[args.projectId as number] = {
              decision: true,
              reason: 'already voted via API',
              date: new Date().toISOString(),
            }
            return { success: true, alreadyVoted: true }
          }
          throw err
        }
      },
    },
    {
      name: 'skip_voting',
      description: 'Record decision NOT to vote for a project (saves the decision so we dont reconsider)',
      parameters: {
        type: 'object',
        properties: {
          projectId: { type: 'number', description: 'Project ID' },
          reason: { type: 'string', description: 'Why we are NOT voting' },
        },
        required: ['projectId', 'reason'],
      },
      execute: async (args) => {
        state.votedProjects[args.projectId as number] = {
          decision: false,
          reason: args.reason as string,
          date: new Date().toISOString(),
        }
        console.log(`  [SKIP] Project #${args.projectId}: ${args.reason}`)
        return { recorded: true }
      },
    },
    {
      name: 'post_comment',
      description: 'Post a comment on a forum post',
      parameters: {
        type: 'object',
        properties: {
          postId: { type: 'number', description: 'Post ID' },
          body: { type: 'string', description: 'Comment content' },
        },
        required: ['postId', 'body'],
      },
      execute: async (args) => {
        if (DRY_RUN) {
          console.log(`  [DRY RUN] Would comment on post #${args.postId}`)
          console.log(`  Preview: ${(args.body as string).slice(0, 100)}...`)
          return { success: true, dryRun: true }
        }
        const data = await colosseumApi<{ comment: { id: number } }>(
          `/forum/posts/${args.postId}/comments`,
          { method: 'POST', body: JSON.stringify({ body: args.body }) },
        )
        state.commentedPosts[args.postId as number] = {
          commentId: data.comment.id,
          date: new Date().toISOString(),
        }
        state.totalComments++
        return { success: true, commentId: data.comment.id }
      },
    },
    {
      name: 'create_forum_post',
      description: 'Create a new forum post',
      parameters: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'Post title' },
          body: { type: 'string', description: 'Post content (markdown)' },
        },
        required: ['title', 'body'],
      },
      execute: async (args) => {
        if (DRY_RUN) {
          console.log(`  [DRY RUN] Would create post: "${args.title}"`)
          return { success: true, dryRun: true }
        }
        const data = await colosseumApi<{ post: { id: number } }>('/forum/posts', {
          method: 'POST',
          body: JSON.stringify({ title: args.title, body: args.body }),
        })
        state.ourPostIds.push(data.post.id)
        state.lastPostTime = Date.now()
        state.totalPosts++
        return { success: true, postId: data.post.id }
      },
    },
    {
      name: 'get_leaderboard',
      description: 'Get current vote leaderboard',
      parameters: { type: 'object', properties: {}, required: [] },
      execute: async () => {
        const data = await colosseumApi<{ projects: Project[] }>('/projects?sort=votes&limit=20')
        const sorted = data.projects.sort((a, b) => b.agentUpvotes - a.agentUpvotes)
        const us = sorted.find(p => p.id === PROJECT_ID)
        const rank = sorted.findIndex(p => p.id === PROJECT_ID) + 1
        return {
          top10: sorted.slice(0, 10).map((p, i) => ({
            rank: i + 1,
            name: p.name,
            agentVotes: p.agentUpvotes,
            humanVotes: p.humanUpvotes,
          })),
          ourRank: rank,
          ourVotes: us ? { agent: us.agentUpvotes, human: us.humanUpvotes } : null,
        }
      },
    },
    {
      name: 'done',
      description: 'Signal that the engagement cycle is complete',
      parameters: {
        type: 'object',
        properties: { summary: { type: 'string', description: 'Summary of what was done' } },
        required: ['summary'],
      },
      execute: async (args) => {
        console.log(`\n=== Agent Summary ===\n${args.summary}`)
        return { done: true }
      },
    },
  ]
}

// ---------------------------------------------------------------------------
// Agent Loop
// ---------------------------------------------------------------------------

async function runAgentCycle(state: AgentState): Promise<void> {
  const tools = createTools(state)
  const toolMap = Object.fromEntries(tools.map(t => [t.name, t]))

  const messages: Message[] = [
    { role: 'system', content: AGENT_SYSTEM_PROMPT },
    {
      role: 'user',
      content: `It's time for your engagement cycle. Today is ${new Date().toISOString()}.

Current stats:
- Total votes cast: ${state.totalVotes}
- Total comments: ${state.totalComments}
- Total posts: ${state.totalPosts}
- Projects evaluated: ${Object.keys(state.votedProjects).length}
- Engaged agents: ${Object.keys(state.engagedAgents).length}

IMPORTANT: Before evaluating any project or post, FIRST check if you've already made a decision using check_voted or check_commented. Only use LLM reasoning for NEW items.

Your tasks:
1. Get the project list and check which ones are NEW (not in our state)
2. For each NEW project, decide to vote or skip (record your decision)
3. Get forum posts and comment on 2-3 interesting NEW ones
4. Check leaderboard position
5. Call 'done' when finished

Be efficient. Batch your check_voted calls. Skip items you've decided on.`,
    },
  ]

  let turns = 0
  const maxTurns = 25
  let done = false

  while (!done && turns < maxTurns) {
    turns++
    console.log(`\n--- Agent Turn ${turns} ---`)

    const response = await callLLM(messages, tools)
    state.totalLLMCalls++
    if (response.usage) {
      state.totalTokensUsed += response.usage.prompt_tokens + response.usage.completion_tokens
    }

    // Handle content
    if (response.content) {
      console.log(`🤔 ${response.content.slice(0, 200)}${response.content.length > 200 ? '...' : ''}`)
    }

    // Handle tool calls
    if (response.toolCalls && response.toolCalls.length > 0) {
      // Add assistant message with tool calls
      messages.push({
        role: 'assistant',
        content: response.content || undefined,
        tool_calls: response.toolCalls.map(tc => ({
          id: tc.id,
          type: 'function' as const,
          function: {
            name: tc.name,
            arguments: JSON.stringify(tc.arguments),
          },
        })),
      })

      // Execute each tool and add results
      for (const toolCall of response.toolCalls) {
        console.log(`🔧 ${toolCall.name}(${JSON.stringify(toolCall.arguments).slice(0, 80)})`)

        const tool = toolMap[toolCall.name]
        if (!tool) {
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: `Error: Unknown tool ${toolCall.name}`,
          })
          continue
        }

        try {
          const result = await tool.execute(toolCall.arguments)

          if (toolCall.name === 'done') {
            done = true
          }

          const resultStr = JSON.stringify(result, null, 2)
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: resultStr.length > 3000 ? resultStr.slice(0, 3000) + '...(truncated)' : resultStr,
          })
        } catch (err) {
          console.error(`  ❌ Tool error: ${err}`)
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: `Error: ${err}`,
          })
        }
      }
    } else if (response.content) {
      // No tool calls, just content
      messages.push({ role: 'assistant', content: response.content })
    } else {
      console.log('⚠️ Empty response from LLM, nudging...')
      messages.push({
        role: 'user',
        content: 'Continue with your tasks. What would you like to do next?',
      })
    }

    // Small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 300))
  }

  if (turns >= maxTurns) {
    console.log(`\n⚠️ Max turns (${maxTurns}) reached`)
  }

  state.lastRun = new Date().toISOString()
  saveState(state)
}

// ---------------------------------------------------------------------------
// Update Engaged Agents (Pre-processing)
// ---------------------------------------------------------------------------

async function updateEngagedAgents(state: AgentState): Promise<void> {
  console.log('📊 Updating engaged agents list...')

  const ourPosts = await colosseumApi<{ posts: ForumPost[] }>('/forum/me/posts')

  for (const post of ourPosts.posts) {
    const comments = await colosseumApi<{ comments: Comment[] }>(`/forum/posts/${post.id}/comments`)

    for (const comment of comments.comments) {
      if (comment.agentId === AGENT_ID) continue // Skip our own comments

      if (!state.engagedAgents[comment.agentId]) {
        state.engagedAgents[comment.agentId] = {
          agentName: comment.agentName,
          postIds: [],
          lastSeen: comment.agentName,
        }
      }

      if (!state.engagedAgents[comment.agentId].postIds.includes(post.id)) {
        state.engagedAgents[comment.agentId].postIds.push(post.id)
      }
      state.engagedAgents[comment.agentId].lastSeen = new Date().toISOString()
    }

    await new Promise(r => setTimeout(r, 200)) // Rate limit
  }

  console.log(`  Found ${Object.keys(state.engagedAgents).length} agents who engaged with us`)
  saveState(state)
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

async function cmdRun(): Promise<void> {
  console.log('\n=== Sipher Agent — Engagement Cycle ===')
  console.log(`Model: ${LLM_MODEL}`)
  console.log(`DRY_RUN: ${DRY_RUN}`)

  const state = loadState()
  console.log(`\nPrevious state:`)
  console.log(`  Votes: ${state.totalVotes}`)
  console.log(`  Comments: ${state.totalComments}`)
  console.log(`  LLM calls: ${state.totalLLMCalls}`)
  console.log(`  Tokens used: ${state.totalTokensUsed}`)

  // Pre-process: update engaged agents list
  await updateEngagedAgents(state)

  // Run agent cycle
  await runAgentCycle(state)

  console.log(`\n=== Cycle Complete ===`)
  console.log(`  Votes: ${state.totalVotes}`)
  console.log(`  Comments: ${state.totalComments}`)
  console.log(`  LLM calls: ${state.totalLLMCalls}`)
  console.log(`  Tokens used: ${state.totalTokensUsed}`)
}

async function cmdStatus(): Promise<void> {
  const state = loadState()
  console.log('\n=== Sipher Agent Status ===')
  console.log(`Total votes: ${state.totalVotes}`)
  console.log(`Total comments: ${state.totalComments}`)
  console.log(`Total posts: ${state.totalPosts}`)
  console.log(`Total LLM calls: ${state.totalLLMCalls}`)
  console.log(`Total tokens: ${state.totalTokensUsed}`)
  console.log(`Last run: ${state.lastRun || 'never'}`)
  console.log(`\nProjects evaluated: ${Object.keys(state.votedProjects).length}`)
  console.log(`Posts commented: ${Object.keys(state.commentedPosts).length}`)
  console.log(`Engaged agents: ${Object.keys(state.engagedAgents).length}`)

  // Show engaged agents
  const engaged = Object.values(state.engagedAgents)
  if (engaged.length > 0) {
    console.log('\nAgents who engaged with us:')
    engaged.slice(0, 10).forEach(a => {
      console.log(`  - ${a.agentName} (${a.postIds.length} posts)`)
    })
    if (engaged.length > 10) {
      console.log(`  ... and ${engaged.length - 10} more`)
    }
  }
}

function ts(): string {
  return new Date().toISOString().slice(11, 19)
}

function timeUntilEnd(): string {
  const ms = HACKATHON_END.getTime() - Date.now()
  if (ms <= 0) return 'ENDED'
  const d = Math.floor(ms / 86_400_000)
  const h = Math.floor((ms % 86_400_000) / 3_600_000)
  return `${d}d ${h}h`
}

async function cmdHeartbeat(): Promise<void> {
  const intervalMin = Math.round(HEARTBEAT_INTERVAL_MS / 60_000)
  const startTime = Date.now()
  let cycleCount = 0

  console.log('\n=== Sipher Agent Heartbeat ===')
  console.log(`Interval: ${intervalMin} min`)
  console.log(`Model: ${LLM_MODEL}`)
  console.log(`Hackathon ends: ${HACKATHON_END.toISOString()} (${timeUntilEnd()} remaining)`)
  console.log(`PID: ${process.pid}`)

  let stopping = false
  const ac = new AbortController()
  const shutdown = () => {
    if (stopping) return
    stopping = true
    ac.abort()
    console.log(`\n[${ts()}] Agent stopping after ${cycleCount} cycles`)
    process.exit(0)
  }
  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)

  while (!stopping) {
    if (Date.now() >= HACKATHON_END.getTime()) {
      console.log(`\n[${ts()}] Hackathon ended. Agent stopping.`)
      break
    }

    cycleCount++
    console.log(`\n[${ts()}] === Cycle #${cycleCount} === (${timeUntilEnd()} remaining)`)

    try {
      const state = loadState()
      await updateEngagedAgents(state)
      await runAgentCycle(state)
    } catch (err) {
      console.error(`[${ts()}] Cycle error: ${err}`)
    }

    console.log(`[${ts()}] Next cycle in ${intervalMin} min...`)
    await new Promise<void>(resolve => {
      if (ac.signal.aborted) { resolve(); return }
      const timer = setTimeout(resolve, HEARTBEAT_INTERVAL_MS)
      ac.signal.addEventListener('abort', () => { clearTimeout(timer); resolve() }, { once: true })
    })
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const COMMANDS: Record<string, () => Promise<void>> = {
  run: cmdRun,
  status: cmdStatus,
  heartbeat: cmdHeartbeat,
}

async function main(): Promise<void> {
  const cmd = process.argv[2] || 'status'

  if (cmd === 'help' || cmd === '--help') {
    console.log(`
Sipher Autonomous Agent

Commands:
  run         Run one engagement cycle
  heartbeat   Continuous loop until hackathon ends
  status      Show agent state

Environment:
  OPENROUTER_API_KEY   Required
  COLOSSEUM_API_KEY    Required (or auto-read from credentials)
  DRY_RUN=1            Preview mode
  LLM_MODEL            Model to use (default: anthropic/claude-3.5-haiku)
`)
    return
  }

  const handler = COMMANDS[cmd]
  if (!handler) {
    console.error(`Unknown command: ${cmd}`)
    process.exit(1)
  }

  await handler()
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})
