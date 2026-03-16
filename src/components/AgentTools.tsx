const tools = [
  { name: 'ros2_publish', description: 'Publish messages to any ROS2 topic' },
  { name: 'ros2_subscribe_once', description: 'Read the latest message from a topic' },
  { name: 'ros2_service_call', description: 'Call a ROS2 service' },
  { name: 'ros2_action_goal', description: 'Send action goals with feedback' },
  { name: 'ros2_param_get/set', description: 'Get/set ROS2 node parameters' },
  { name: 'ros2_list_topics', description: 'Discover available topics' },
  { name: 'ros2_camera_snapshot', description: 'Capture a camera frame' },
]

export default function AgentTools() {
  return (
    <section id="agent-tools" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Agent Tools
        </h2>
        <p className="mt-4 text-text-secondary">
          Any supported AI agent (<a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> CLI via <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, or others) has access to these ROS2 tools. Camera tools support 2D webcams and RealSense stereo depth cameras.
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
              {tools.map(({ name, description }) => (
                <tr key={name} className="border-b border-[var(--border-subtle)] last:border-0">
                  <td className="px-4 py-3 font-mono text-sm text-coral-bright">{name}</td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
