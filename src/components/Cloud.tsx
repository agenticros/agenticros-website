import ScrollArrow from './ScrollArrow'

const features = [
  {
    title: 'Worldwide P2P Teleop',
    summary: (
      <>
        Drive robots from anywhere over secure peer-to-peer links — live camera,
        on-screen controls, and joysticks / gamepads. WebRTC with STUN/TURN
        keeps robots reachable behind NAT without opening inbound ports.
      </>
    ),
  },
  {
    title: 'Fleet Management',
    summary: (
      <>
        Register robots, track presence, and orchestrate multi-robot fleets from
        one dashboard. Namespace ROS 2 topics per robot. On Teams and
        Enterprise, create an organization, invite teammates by GitHub username,
        and share teleop, APIs, and dashboards across the fleet.
      </>
    ),
  },
  {
    title: 'ROS 2 Motor Controllers',
    summary: (
      <>
        Native GPIO motor-controller support for Raspberry Pi (Zero through 5),
        Radxa &amp; LattePanda, Intel NUC, NVIDIA Jetson, and Arduino / ESP32
        stacks — plus out-of-the-box control for any ROS 2 hardware that speaks{' '}
        <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">
          cmd_vel
        </code>
        .
      </>
    ),
  },
  {
    title: 'SDKs & REST APIs',
    summary: (
      <>
        Ship against Node.js and Python RDKs, or call REST endpoints for twist,
        speak, camera snapshots, bash, and presence. Same cloud surface whether
        you&apos;re prototyping or wiring production ops.
      </>
    ),
  },
  {
    title: 'Developer & AI tooling',
    summary: (
      <>
        No-code / low-code Blockly flows, VS Code / Cursor extension, Copilot
        Gen-AI helpers, and CLI workflows (
        <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">
          agenticros login
        </code>
        ,{' '}
        <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">
          register
        </code>
        ,{' '}
        <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">
          connect
        </code>
        , start motors, start camera / RealSense) so agents and humans share one
        remote control plane.
      </>
    ),
  },
  {
    title: 'Global P2P platform',
    summary: (
      <>
        Connect, code, and control ROS robots remotely with peer-to-peer
        connectivity — Linux, Windows, and Mac clients, edge or cloud compute,
        and secure tokens for each robot in your fleet.
      </>
    ),
  },
]

export default function Cloud() {
  return (
    <section
      id="cloud"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ AgenticROS Cloud
        </h2>
        <p className="mt-4 text-text-secondary">
          The Control Plane for Physical AI and your AgenticROS robots.{' '}
          <a
            href="https://cloud.agenticros.com"
            className="text-cyan-bright hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            AgenticROS Cloud
          </a>{' '}
          is a P2P developer &amp; operations platform for ROS 2 — worldwide
          teleop, SDKs, REST APIs, and AI tooling. A simple no-code / low-code
          path when you need robots online beyond the local lab. Teams and
          Enterprise share one organization so every member can see and control
          the same robots. Teams can <strong>Enable fleet hive</strong> on the
          org page to share notes and camera watch across the fleet; self-host
          with{' '}
          <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">
            agenticros hive on
          </code>
          .
        </p>

        <figure className="mt-8 overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-bg-elevated/40 shadow-2xl shadow-cyan-bright/10">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/ibW2FAhDnj4?rel=0"
              title="AgenticROS Cloud demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </figure>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map(({ title, summary }) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-subtle)] p-5"
              style={{ background: 'var(--surface-card)' }}
            >
              <h3 className="font-display font-medium text-text-primary">{title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{summary}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://cloud.agenticros.com"
            className="inline-flex items-center rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open AgenticROS Cloud
          </a>
          <a
            href="https://cloud.agenticros.com/pricing"
            className="text-sm text-cyan-bright hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloud pricing →
          </a>
        </div>
      </div>
      <ScrollArrow nextId="works-with" label="Continue to Works With" />
    </section>
  )
}
