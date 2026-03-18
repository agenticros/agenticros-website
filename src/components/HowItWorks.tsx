export default function HowItWorks() {
  const steps = [
    'User (messaging app or terminal)',
    <>Your AI agent (<a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> CLI via <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, or another supported agent)</>,
    'AgenticROS plugin (ROS2 tools + safety)',
    'Rosbridge_server (WebSocket)',
    'ROS2 DDS → Robots: Nav2, MoveIt2, 2D webcams, RealSense depth, sensors',
    'ROS2 Zenoh RMW → Robots: Low-latency pub/sub',
  ]

  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ How It Works
        </h2>
        <p className="mt-4 text-text-secondary">
          AgenticROS works with <strong>multiple AI agents</strong>: <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code CLI</a> (<a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>), and others. A user sends a natural language message — from chat or the terminal. Your chosen agent uses ROS2 tools registered by the AgenticROS adapter (plugin or <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a> server). The agent translates intent into ROS2 operations (topic publish, service call, action goal). The robot acts, and the agent streams feedback back.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-elevated text-sm font-medium text-cyan-bright">
                {i + 1}
              </span>
              <span className="text-text-primary">{step}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-text-muted">
          Supported hardware includes 2D webcams and 3D RealSense stereo depth cameras.
        </p>
      </div>
    </section>
  )
}
