import ScrollArrow from './ScrollArrow'

const packages = [
  { name: '@agenticros/core', desc: 'Shared transport, Zod config, mission runner (pause/resume), dynamic mission bindings, fleet.json + robot_info heartbeat, external_ros_node dispatch, and memory backends — no platform dependencies' },
  { name: '@agenticros/ros-camera', desc: 'Shared camera snapshot encoding for sensor_msgs/Image and CompressedImage' },
  { name: 'agenticros', desc: <>The unified <strong>CLI</strong>. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">npx agenticros</code> on any Node &ge; 20 host: interactive menu, real-robot launcher, simulator launcher, fleet management, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">mcp setup</code> / <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">mcp doctor</code> for MCP clients, doctor, log tail, config editor. Bundles a snapshot of the workspace so it works without a checkout.</> },
  { name: '@agenticros/rosbridge-client', desc: 'Standalone TypeScript client for the rosbridge WebSocket protocol' },
  { name: '@agenticros/agenticros', desc: 'OpenClaw plugin: ROS2 tools, missions, fleet tools, commands, teleop, config UI; loads optional skills at startup' },
  { name: '@agenticros/claude-code', desc: <><a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a> server for <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude desktop</a>, <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>, <a href="https://developers.openai.com/codex/cli/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Codex CLI</a>, <a href="https://github.com/NousResearch/hermes-agent" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Hermes Agent</a>, and any MCP client. One command registers all hosts: <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros mcp setup</code> (or per-client <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">codex</code> / <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">hermes</code> / <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">claude setup</code>) — see <a href="https://github.com/agenticros/agenticros/blob/main/docs/mcp-setup.md" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP setup guide</a>.</> },
  { name: '@agenticros/gemini', desc: <>Standalone <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Gemini</a> CLI: Google Gemini function calling against the same ROS 2 tools, including find-object and follow-me for mission parity (no MCP). Set <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">GEMINI_API_KEY</code> and chat with the robot.</> },
  { name: '@agenticros/find', desc: <>Find Object skill: YOLOv8 visual search — rotate in place and stop when a target (any of 80 COCO classes) is detected. Install: <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros skills install @agenticros/find</code> (<a href="https://skills.agenticros.com/chrismatthieu/find" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">marketplace</a>).</> },
  { name: '@agenticros/followme', desc: <>Follow Me skill: depth-based (and optional Ollama) person following. Install: <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros skills install @agenticros/followme</code> (<a href="https://skills.agenticros.com/chrismatthieu/followme" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">marketplace</a>).</> },
  { name: '@agenticros/navigate-to', desc: <>Marketplace seed: Nav2 <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">navigate_to</code> (<a href="https://github.com/agenticros/agenticros-skill-navigate-to" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>).</> },
  { name: '@agenticros/detect-humans', desc: <>Marketplace seed: <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">detect_humans</code> vision topic subscribe (<a href="https://github.com/agenticros/agenticros-skill-detect-humans" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>).</> },
  { name: '@agenticros/start-slam', desc: <>Marketplace seed: RTAB-Map <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">start_slam</code> / stop / save / <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">load_map</code> (<a href="https://github.com/agenticros/agenticros-skill-start-slam" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>).</> },
  { name: '@agenticros/follow-me-ros', desc: <>Marketplace seed: on-robot follow_me services (<a href="https://github.com/agenticros/agenticros-skill-follow-me-ros" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>).</> },
  { name: '@agenticros/navigate-through-poses', desc: <>Marketplace seed: Nav2 <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">navigate_through_poses</code> (<a href="https://github.com/agenticros/agenticros-skill-navigate-through-poses" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>).</> },
  { name: '@agenticros/moveit-pick', desc: <>Marketplace seed: MoveIt <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">pick_object</code> (<a href="https://github.com/agenticros/agenticros-skill-moveit-pick" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>).</> },
  { name: '@agenticros/dock-to-charger', desc: <>Marketplace seed: OpenNav <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">dock_to_charger</code> (<a href="https://github.com/agenticros/agenticros-skill-dock-to-charger" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>).</> },
  { name: '@agenticros/openclaw-canvas', desc: 'Real-time robot dashboard (Phase 3)' },
  { name: 'agenticros_sim', desc: <>ROS 2 package: Gazebo Harmonic simulation assets &mdash; 2-wheel <strong>AMR</strong> (+ optional Nav2 via <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">sim_amr_nav2</code>), 6-DOF <strong>arm</strong>, indoor world, RViz configs, and <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">ros_gz_bridge</code> YAMLs that match real-robot topic names.</> },
  { name: 'agenticros_bringup', desc: 'ROS 2 launch files: TurtleBot3 Gazebo, rosbridge, RViz, and namespaced cmd_vel relay for real-robot demos' },
  { name: 'agenticros_follow_me', desc: 'ROS 2 node: person tracking with RealSense + MediaPipe (or mock mode) and Follow Me services' },
  { name: 'agenticros_discovery', desc: 'ROS2 Python node for capability auto-discovery — publishes manifest and robot_info heartbeat' },
  { name: 'agenticros_msgs', desc: 'Custom ROS2 message/service definitions (CapabilityManifest, RobotInfo, Follow Me services)' },
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
      <ScrollArrow nextId="cloud" label="Continue to Cloud" />
    </section>
  )
}
