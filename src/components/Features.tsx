const features = [
  {
    title: 'Multiple AI agents',
    description: (
      <>
        Use <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> CLI with <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a> (terminal), or other supported agents. One ROS2 core, your choice of adapter — switch or combine as you like.
      </>
    ),
  },
  {
    title: 'Natural language from chat apps',
    description: 'Send commands from WhatsApp, Telegram, Discord, or Slack. Your AI agent translates intent into ROS2 operations.',
  },
  {
    title: 'ROS2 tools',
    description: 'Publish and subscribe to topics, call services, send action goals, get/set parameters, list topics, capture camera snapshots, and TeleOp!',
  },
  {
    title: 'Safety',
    description: 'Safety validator (velocity limits, workspace bounds). /estop command bypasses AI entirely for emergency stop.',
  },
  {
    title: 'Skills plugin architecture',
    description: (
      <>
        Optional skill packages add tools and behaviors (e.g. Follow Me). <a href="https://github.com/agenticros/agenticros-skills" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Discover curated skills</a> and add your own via pull request. Install via skillPackages or skillPaths, configure per skill — see the contract in the repo docs.
      </>
    ),
  },
  {
    title: '2D & 3D vision',
    description: 'Works with 2D webcams and 3D RealSense stereo depth cameras for perception, follow-me, and teleop.',
  },
  {
    title: 'Deployment flexibility',
    description: 'Same machine, local network (WebSocket), cloud/remote (WebRTC), or Zenoh. One plugin, multiple transport modes.',
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ What It Does
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-subtle)] p-6"
              style={{ background: 'var(--surface-card)' }}
            >
              <h3 className="font-display font-medium text-text-primary">{title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
