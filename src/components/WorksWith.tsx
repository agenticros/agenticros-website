const messaging = ['WhatsApp', 'Telegram', 'Discord', 'Slack', 'SMS']
const agents = [
  { name: 'OpenClaw', href: 'https://openclaw.ai/' },
  { name: 'NemoClaw', href: 'https://www.nvidia.com/en-us/ai/nemoclaw' },
  { name: 'Claude Code', href: 'https://claude.com/product/claude-code' },
  { name: 'Claude Desktop + Dispatch', href: 'https://claude.com/download' },
  { name: 'Google Gemini', href: 'https://ai.google.dev/gemini-api/docs' },
  { name: 'MCP', href: 'https://modelcontextprotocol.io/docs/getting-started/intro' },
  { name: 'Other AI agents' },
]
const robotics = ['ROS2', 'Nav2', 'MoveIt2', 'Gazebo', 'rosbridge', 'RealSense', 'zenoh-bridge-ros2dds']

export default function WorksWith() {
  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Works With
        </h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-muted">Messaging</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {messaging.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-text-primary"
                  style={{ background: 'var(--surface-card)' }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-muted">AI agents</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {agents.map((agent) =>
                agent.href ? (
                  <a
                    key={agent.name}
                    href={agent.href}
                    className="rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-cyan-bright transition hover:underline"
                    style={{ background: 'var(--surface-card)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {agent.name}
                  </a>
                ) : (
                  <span
                    key={agent.name}
                    className="rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-text-primary"
                    style={{ background: 'var(--surface-card)' }}
                  >
                    {agent.name}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-muted">Robotics & stack</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {robotics.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-text-primary"
                  style={{ background: 'var(--surface-card)' }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
