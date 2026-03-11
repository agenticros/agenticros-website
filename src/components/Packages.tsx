const packages = [
  { name: '@agenticros/rosbridge-client', desc: 'Standalone TypeScript client for the rosbridge WebSocket protocol' },
  { name: '@agenticros/agenticros', desc: 'OpenClaw plugin: ROS2 tools, commands, teleop, config UI; loads optional skills at startup' },
  { name: '@agenticros/claude-code', desc: 'Claude Code CLI MCP server: ROS2 tools in the terminal (list topics, publish, camera, services, actions); register with claude mcp add' },
  { name: 'agenticros-skill-followme', desc: 'Follow Me skill: depth-based (and optional Ollama) person following; install via skillPackages or skillPaths' },
  { name: '@agenticros/openclaw-canvas', desc: 'Real-time robot dashboard (Phase 3)' },
  { name: 'agenticros_discovery', desc: 'ROS2 Python node for capability auto-discovery' },
  { name: 'agenticros_msgs', desc: 'Custom ROS2 message/service definitions' },
]

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Packages
        </h2>
        <div className="mt-6 space-y-4">
          {packages.map(({ name, desc }) => (
            <div
              key={name}
              className="flex flex-col gap-1 rounded-lg border border-[var(--border-subtle)] p-4 sm:flex-row sm:items-center sm:justify-between"
              style={{ background: 'var(--surface-card)' }}
            >
              <code className="font-mono text-sm text-coral-bright">{name}</code>
              <span className="text-sm text-text-secondary">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
