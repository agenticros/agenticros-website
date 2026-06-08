import ScrollArrow from './ScrollArrow'

const ros2Tools = [
  { name: 'ros2_publish', description: 'Publish messages to any ROS2 topic' },
  { name: 'ros2_subscribe_once', description: 'Read the latest message from a topic' },
  { name: 'ros2_service_call', description: 'Call a ROS2 service' },
  { name: 'ros2_action_goal', description: 'Send action goals with feedback' },
  { name: 'ros2_param_get/set', description: 'Get/set ROS2 node parameters' },
  { name: 'ros2_list_topics', description: 'Discover available topics' },
  { name: 'ros2_camera_snapshot', description: 'Capture a camera frame' },
  { name: 'ros2_depth_distance', description: 'Sample depth at the center of a depth image (RealSense and similar)' },
  { name: 'ros2_find_object', description: 'Rotate the robot in place and stop when YOLOv8 detects a target object — returns the bounding box, confidence, and horizontal offset from image center' },
]

const memoryTools = [
  { name: 'memory_remember', description: 'Store a fact (content, tags, namespace) in cross-adapter long-term memory' },
  { name: 'memory_recall', description: 'Search memories by free-text query — returns ranked matches across adapters' },
  { name: 'memory_forget', description: 'Delete a memory by id, query, or namespace' },
  { name: 'memory_status', description: 'Health check: enabled, backend, namespace, record count, last write timestamp' },
]

export default function AgentTools() {
  return (
    <>
      {/* Panel 1: ROS2 Tools */}
      <section
        id="agent-tools"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Agent Tools &mdash; ROS2
          </h2>
          <p className="mt-4 text-text-secondary">
            Any supported AI agent (<a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a> / <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>, <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a> via <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, or others) has access to these ROS2 tools. Camera tools support 2D webcams and RealSense stereo depth cameras.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border border-[var(--border-subtle)]">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: 'var(--bg-elevated)' }}>
                  <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">Tool</th>
                  <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">Description</th>
                </tr>
              </thead>
              <tbody>
                {ros2Tools.map(({ name, description }) => (
                  <tr key={name} className="border-b border-[var(--border-subtle)] last:border-0">
                    <td className="px-4 py-3 font-mono text-sm text-coral-bright">{name}</td>
                    <td className="px-4 py-3 text-sm text-text-secondary">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ScrollArrow nextId="agent-tools-memory" label="See memory tools" />
      </section>

      {/* Panel 2: Memory Tools */}
      <section
        id="agent-tools-memory"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Agent Tools &mdash; Memory (optional)
          </h2>
          <p className="mt-4 text-text-secondary">
            When the <a href="#memory" className="text-cyan-bright hover:underline">AI agent memory service</a> is enabled, every adapter — OpenClaw, Claude Code, Claude Desktop / Dispatch, and Gemini — exposes the same four tools backed by a <strong>shared, file-backed store</strong>. A fact remembered from one adapter is immediately recallable from any other on the same host.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border border-[var(--border-subtle)]">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: 'var(--bg-elevated)' }}>
                  <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">Tool</th>
                  <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">Description</th>
                </tr>
              </thead>
              <tbody>
                {memoryTools.map(({ name, description }) => (
                  <tr key={name} className="border-b border-[var(--border-subtle)] last:border-0">
                    <td className="px-4 py-3 font-mono text-sm text-coral-bright">{name}</td>
                    <td className="px-4 py-3 text-sm text-text-secondary">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ScrollArrow nextId="deployment" label="Continue to Deployment" />
      </section>
    </>
  )
}
