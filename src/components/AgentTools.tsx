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
          'Typed verb manifest — built-ins, skill-declared verbs, and external_ros_node capabilities (find_object, navigate_to, …). The planning surface for agents.',
      },
    ],
  },
  {
    heading: 'Fleet',
    tools: [
      {
        name: 'ros2_list_robots',
        description:
          'List robots from fleet.json / config — id, kind, capabilities, online status from robot_info heartbeat (5s staleness; cmd_vel fallback)',
      },
      {
        name: 'ros2_discover_robots',
        description:
          'Scan robot_info + cmd_vel namespaces and classify reachability against fleet config',
      },
      {
        name: 'ros2_find_robots_for',
        description:
          'Ranked filter by capability + kind + online — e.g. "which AMR with RealSense can follow a person right now?"',
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
        name: 'mission_pause',
        description: 'Hold an in-flight mission before the next step (reason optional)',
      },
      {
        name: 'mission_resume',
        description: 'Continue a paused mission from the next pending step',
      },
      {
        name: 'mission_cancel',
        description: 'Cancel an in-flight (or paused) mission by mission_id at the next step boundary',
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

const hiveTools: Tool[] = [
  { name: 'hive_remember', description: 'Share a note with the organization fleet (not this robot\'s local memory)' },
  { name: 'hive_recall', description: 'Search fleet notes by free-text query' },
  { name: 'hive_status', description: 'Health check: hive on/off, reachability, recipe summary' },
  { name: 'hive_set_recipe', description: 'Turn a camera-watch recipe on or off (detect, describe, health) — never actuation' },
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
            <a href="https://github.com/NousResearch/hermes-agent" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Hermes Agent</a>,{' '}
            <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a> via{' '}
            <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, or others) exposes the same tool surface. Skills add verbs to{' '}
            <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_list_capabilities</code>; agents chain them with{' '}
            <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">run_mission</code> and can{' '}
            <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission_pause</code> /{' '}
            <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission_resume</code> mid-flight.
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
            When the <a href="#memory" className="text-cyan-bright hover:underline">AI agent memory service</a> is enabled, every adapter — OpenClaw, Claude Code, Claude Desktop / Dispatch, Codex CLI, Hermes Agent, and Gemini — exposes the same four tools backed by a <strong>shared, file-backed store</strong>. A fact remembered from one adapter is immediately recallable from any other on the same host.
          </p>
          <div className="mt-6">
            <ToolTable tools={memoryTools} />
          </div>

          <h3 className="mt-10 font-display text-lg font-medium text-text-primary">
            Fleet hive (optional, off by default)
          </h3>
          <p className="mt-3 text-text-secondary">
            Memory is for <strong>this robot</strong>. When{' '}
            <a
              href="https://github.com/agenticros/agenticros/blob/main/docs/hive.md"
              className="text-cyan-bright hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              fleet hive
            </a>{' '}
            is enabled —{' '}
            <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">
              agenticros hive on
            </code>{' '}
            or <strong>Enable fleet hive</strong> on Cloud — adapters also expose tools to share notes and camera watch across the organization. These are not a third memory backend, and they stay hidden until hive is on.
          </p>
          <div className="mt-6">
            <ToolTable tools={hiveTools} />
          </div>
        </div>
        <ScrollArrow nextId="deployment" label="Continue to Deployment" />
      </section>
    </>
  )
}
