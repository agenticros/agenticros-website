const modes = [
  {
    id: 'A',
    name: 'Same Machine',
    summary: 'Your AI agent runs on the robot\'s computer. Plugin talks to ROS2 via local DDS — no network transport.',
    bestFor: 'Single-robot setups, embedded deployments, edge devices.',
  },
  {
    id: 'B',
    name: 'Local Network',
    summary: (
      <>
        Your AI agent (e.g. <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, or <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> CLI) on a separate machine (laptop, server). Adapter connects to rosbridge_server on the robot via WebSocket over LAN.
      </>
    ),
    bestFor: 'Development, testing, multi-robot labs.',
  },
  {
    id: 'C',
    name: 'Cloud / Remote',
    summary: 'AI agent on a cloud server; robot behind NAT. WebRTC with STUN/TURN for NAT traversal. AgenticROS Agent Node on robot.',
    bestFor: 'Production, remote operations, fleet management.',
  },
  {
    id: 'D',
    name: 'Zenoh',
    summary: 'Robot uses ROS 2 with Zenoh RMW. Plugin connects via zenoh-ts (WebSocket to Zenoh router). No rosbridge required.',
    bestFor: 'Robots already on Zenoh, low-latency pub/sub.',
  },
]

export default function DeploymentModes() {
  return (
    <section id="deployment" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Deployment Modes
        </h2>
        <p className="mt-4 text-text-secondary">
          AgenticROS supports four deployment modes depending on where your AI agent (<a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> CLI, or another) runs relative to the robot.
        </p>
        <div className="mt-8 space-y-6">
          {modes.map(({ id, name, summary, bestFor }) => (
            <div
              key={id}
              className="rounded-xl border border-[var(--border-subtle)] p-6"
              style={{ background: 'var(--surface-card)' }}
            >
              <div className="flex items-center gap-2">
                <span className="rounded bg-cyan-bright/20 px-2 py-0.5 font-mono text-sm font-medium text-cyan-bright">
                  Mode {id}
                </span>
                <h3 className="font-display font-medium text-text-primary">{name}</h3>
              </div>
              <p className="mt-3 text-sm text-text-secondary">{summary}</p>
              <p className="mt-2 text-xs text-text-muted">
                <strong>Best for:</strong> {bestFor}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-text-muted">
          <a href="https://github.com/agenticros/agenticros/blob/main/docs/architecture.md" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">
            Full architecture and diagrams →
          </a>
        </p>
      </div>
    </section>
  )
}
