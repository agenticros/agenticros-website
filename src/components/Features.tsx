import ScrollArrow from './ScrollArrow'

const features = [
  {
    title: 'One-command install',
    description: (
      <>
        <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs text-coral-bright">npx agenticros</code> on any machine with Node &ge; 20. Interactive menu walks you through workspace + plugin + API key, then launches a real robot or a simulator. No <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs">git clone</code>, no dependency hunting, idempotent reruns.
      </>
    ),
  },
  {
    title: 'Multiple AI agents',
    description: (
      <>
        Use <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> (terminal <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>), <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a> &amp; <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a> (iOS, paired to Mac — same MCP server), <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>, or other supported agents. One ROS2 core, your choice of adapter — switch or combine as you like.
      </>
    ),
  },
  {
    title: 'Real robots & simulation',
    description: (
      <>
        Drive a real ROS 2 robot, or boot a built-in <strong>Gazebo</strong> simulator &mdash; a 2-wheel <strong>AMR</strong> (RGBD + lidar + IMU) or a 6-DOF <strong>arm</strong> manipulator. Topic names match the real-robot plugin so the same skill code, MCP calls, and chat commands work in both. <a href="#simulation" className="text-cyan-bright hover:underline">Learn more →</a>
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
        Optional skill packages add tools and behaviors (e.g. <a href="https://skills.agenticros.com/chrismatthieu/find" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Find Object</a>, <a href="https://skills.agenticros.com/chrismatthieu/followme" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Follow Me</a>). Browse the <a href="https://skills.agenticros.com" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Skills Marketplace</a>, scaffold with <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">npx agenticros create-skill</code>, publish with <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">npx agenticros publish</code>, or install with <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">agenticros skills install &lt;owner/skill&gt;</code>.
      </>
    ),
  },
  {
    title: 'Cross-adapter memory',
    description: (
      <>
        Optional, off-by-default semantic memory service. When enabled, OpenClaw, Claude Code / Desktop / Dispatch, and Gemini all share a single file-backed store (local JSON or <a href="https://github.com/mem0ai/mem0" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">mem0</a>). Remember a fact from one agent, recall it from any other.
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
    <section
      id="features"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ What It Does
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-subtle)] p-5"
              style={{ background: 'var(--surface-card)' }}
            >
              <h3 className="font-display font-medium text-text-primary">{title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <ScrollArrow nextId="agent-tools" label="Continue to Agent Tools" />
    </section>
  )
}
