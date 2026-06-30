import ScrollArrow from './ScrollArrow'

type Tool = { name: string; description: string }

const toolGroups: { heading: string; tools: Tool[] }[] = [
  {
    heading: 'Inspection',
    tools: [
      { name: 'ros2_list_topics', description: 'List topics and message types on the wire' },
      {
        name: 'ros2_list_capabilities',
        description:
          'Typed verb manifest — built-in capabilities plus skill-declared verbs (find_object, follow_person, …). The planning surface for agents.',
      },
    ],
  },
  {
    heading: 'Fleet',
    tools: [
      {
        name: 'ros2_list_robots',
        description: 'List configured robots — id, name, kind, capabilities, online status',
      },
      {
        name: 'ros2_discover_robots',
        description: 'Scan for /<ns>/cmd_vel namespaces and classify reachability against config',
      },
      {
        name: 'ros2_find_robots_for',
        description:
          'Ranked filter by capability + kind + online — e.g. "which robot can follow a person right now?"',
      },
    ],
  },
  {
    heading: 'Missions',
    tools: [
      {
        name: 'run_mission',
        description:
          'Execute a multi-step mission or compile a natural-language goal into one. Chain capabilities via {{stepId.outputs.field}} template refs; returns a mission_id',
      },
      {
        name: 'mission_cancel',
        description: 'Cancel an in-flight mission by mission_id at the next step boundary',
      },
    ],
  },
  {
    heading: 'Direct ROS',
    tools: [
      { name: 'ros2_publish', description: 'Publish to any topic (e.g. cmd_vel) — safety-clamped' },
      { name: 'ros2_subscribe_once', description: 'Read the next message from a topic' },
      { name: 'ros2_service_call', description: 'Call a ROS2 service' },
      { name: 'ros2_action_goal', description: 'Send action goals with feedback' },
      { name: 'ros2_param_get/set', description: 'Get/set ROS2 node parameters' },
      { name: 'ros2_camera_snapshot', description: 'Capture one camera frame (2D webcam or RealSense)' },
      {
        name: 'ros2_depth_distance',
        description: 'Sample depth in meters at the center of a depth image',
      },
      {
        name: 'ros2_find_object',
        description:
          'MCP-only shortcut: rotate until YOLOv8 detects a target. On OpenClaw, install the Find Object skill and use the find_object capability via run_mission instead.',
      },
    ],
  },
]

const memoryTools: Tool[] = [
  { name: 'memory_remember', description: 'Store a fact (content, tags, namespace) in cross-adapter long-term memory' },
  { name: 'memory_recall', description: 'Search memories by free-text query — returns ranked matches across adapters' },
  { name: 'memory_forget', description: 'Delete a memory by id, query, or namespace' },
  { name: 'memory_status', description: 'Health check: enabled, backend, namespace, record count, last write timestamp' },
]

function ToolTable({ tools }: { tools: Tool[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border-subtle)]">
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ background: 'var(--bg-elevated)' }}>
            <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">
              Tool
            </th>
            <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {tools.map(({ name, description }) => (
            <tr key={name} className="border-b border-[var(--border-subtle)] last:border-0">
              <td className="px-4 py-3 font-mono text-sm text-coral-bright">{name}</td>
              <td className="px-4 py-3 text-sm text-text-secondary">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AgentTools() {
  return (
    <>
      <section
        id="agent-tools"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Agent Tools
          </h2>
          <p className="mt-4 text-text-secondary">
            Any supported AI agent (
            <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>,{' '}
            <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>,{' '}
            <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>,{' '}
            <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a> /{' '}
            <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>,{' '}
            <a href="https://developers.openai.com/codex/cli/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Codex CLI</a>,{' '}
            <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a> via{' '}
            <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, or others) exposes the same tool surface. Skills add verbs to{' '}
            <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_list_capabilities</code>; agents chain them with{' '}
            <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">run_mission</code> — no per-skill MCP tool required on OpenClaw.
          </p>
          <div className="mt-8 space-y-8">
            {toolGroups.map(({ heading, tools }) => (
              <div key={heading}>
                <h3 className="font-display text-lg font-medium text-text-primary">{heading}</h3>
                <div className="mt-3">
                  <ToolTable tools={tools} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollArrow nextId="agent-tools-memory" label="See memory tools" />
      </section>

      <section
        id="agent-tools-memory"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Agent Tools &mdash; Memory (optional)
          </h2>
          <p className="mt-4 text-text-secondary">
            When the <a href="#memory" className="text-cyan-bright hover:underline">AI agent memory service</a> is enabled, every adapter — OpenClaw, Claude Code, Claude Desktop / Dispatch, Codex CLI, and Gemini — exposes the same four tools backed by a <strong>shared, file-backed store</strong>. A fact remembered from one adapter is immediately recallable from any other on the same host.
          </p>
          <div className="mt-6">
            <ToolTable tools={memoryTools} />
          </div>
        </div>
        <ScrollArrow nextId="deployment" label="Continue to Deployment" />
      </section>
    </>
  )
}
