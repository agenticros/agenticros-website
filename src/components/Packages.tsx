import ScrollArrow from './ScrollArrow'

const packages = [
  { name: 'agenticros', desc: <>The unified <strong>CLI</strong>. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">npx agenticros</code> on any Node &ge; 20 host: interactive menu, real-robot launcher, simulator launcher, doctor, log tail, config editor. Bundles a snapshot of the workspace so it works without a checkout.</> },
  { name: '@agenticros/rosbridge-client', desc: 'Standalone TypeScript client for the rosbridge WebSocket protocol' },
  { name: '@agenticros/agenticros', desc: 'OpenClaw plugin: ROS2 tools, commands, teleop, config UI; loads optional skills at startup' },
  { name: '@agenticros/claude-code', desc: <><a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a> server for <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> (terminal), <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude desktop</a>, and <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a> (iOS): ROS2 tools (topics, publish, camera, services, actions). Configure via <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">claude mcp add</code> or <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">claude_desktop_config.json</code> — see adapter README.</> },
  { name: '@agenticros/gemini', desc: <>Standalone <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Gemini</a> CLI: Google Gemini function calling against the same ROS 2 tools (no MCP). Set <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">GEMINI_API_KEY</code> and chat with the robot.</> },
  { name: 'agenticros-skill-find', desc: <>Find Object skill: YOLOv8 visual search — rotate in place and stop when a target (any of 80 COCO classes) is detected. Ships as both an OpenClaw skill and the Claude Code MCP <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">ros2_find_object</code> tool from one piece of code.</> },
  { name: 'agenticros-skill-followme', desc: 'Follow Me skill: depth-based (and optional Ollama) person following; install via skillPackages or skillPaths' },
  { name: '@agenticros/openclaw-canvas', desc: 'Real-time robot dashboard (Phase 3)' },
  { name: 'agenticros_sim', desc: <>ROS 2 package: Gazebo Harmonic simulation assets &mdash; 2-wheel <strong>AMR</strong>, 6-DOF <strong>arm</strong>, indoor world, RViz configs, and <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">ros_gz_bridge</code> YAMLs that match real-robot topic names.</> },
  { name: 'agenticros_discovery', desc: 'ROS2 Python node for capability auto-discovery' },
  { name: 'agenticros_msgs', desc: 'Custom ROS2 message/service definitions' },
]

export default function Packages() {
  return (
    <section
      id="packages"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Packages
        </h2>
        <div className="mt-6 space-y-3">
          {packages.map(({ name, desc }) => (
            <div
              key={name}
              className="flex flex-col gap-1 rounded-lg border border-[var(--border-subtle)] p-3 sm:flex-row sm:items-center sm:justify-between"
              style={{ background: 'var(--surface-card)' }}
            >
              <code className="font-mono text-sm text-coral-bright">{name}</code>
              <span className="text-sm text-text-secondary sm:ml-4 sm:text-right">{desc}</span>
            </div>
          ))}
        </div>
      </div>
      <ScrollArrow nextId="works-with" label="Continue to Works With" />
    </section>
  )
}
