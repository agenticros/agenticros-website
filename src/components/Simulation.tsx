import ScrollArrow from './ScrollArrow'

const robots = [
  {
    id: 'AMR',
    name: '2-wheel AMR',
    summary:
      'Diff-drive autonomous mobile robot with a front-facing depth camera (RGBD), 360° lidar, and IMU. Drops into a 12 × 12 m indoor world with obstacles and a person target for follow-me demos.',
    specs: [
      { label: 'Drive', value: 'Differential, 0.36 m wheelbase' },
      { label: 'Front camera', value: 'D435-like RGBD, 640×480 @ 30 Hz, 87° HFOV' },
      { label: 'LIDAR', value: '360 samples @ 12 Hz, 12 m range' },
      { label: 'IMU', value: '100 Hz with mild gaussian noise' },
      { label: 'Topics', value: '/cmd_vel, /odom, /scan, /imu/data, /camera/* — same names as a real RealSense robot' },
    ],
    command: 'agenticros up sim-amr',
  },
  {
    id: 'ARM',
    name: '6-DOF arm manipulator',
    summary:
      'UR5e-shaped 6-DOF arm with per-joint position control. Drive every joint from a Float64 topic — same interface from the CLI, an MCP ros2_publish, or any other ROS 2 client.',
    specs: [
      { label: 'Joints', value: '6 (shoulder pan/lift, elbow, wrist 1/2/3)' },
      { label: 'Control', value: 'Per-joint position (PD controller in Gazebo)' },
      { label: 'Command topics', value: '/arm/<joint>/cmd_pos as std_msgs/Float64 (radians)' },
      { label: 'Feedback', value: '/joint_states, /tf, /tf_static, /clock' },
      { label: 'Visualization', value: 'RViz RobotModel + TF (--rviz flag)' },
    ],
    command: 'agenticros up sim-arm',
  },
]

export default function Simulation() {
  return (
    <>
      {/* Panel 1: Robots */}
      <section
        id="simulation"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Built-in Simulation
          </h2>
          <p className="mt-4 text-text-secondary">
            AgenticROS ships <strong>Gazebo Harmonic</strong> simulation assets out of the box &mdash; an
            indoor world, a 2-wheel <strong>AMR</strong>, a 6-DOF <strong>arm manipulator</strong>, and a{' '}
            <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">
              ros_gz_bridge
            </code>{' '}
            config that exposes everything on the <em>same topic names</em> the real-robot plugin already uses. Code
            you write against sim runs unchanged on a real RealSense + diff-drive base.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {robots.map(({ id, name, summary, specs, command }) => (
              <div
                key={id}
                className="rounded-xl border border-[var(--border-subtle)] p-5"
                style={{ background: 'var(--surface-card)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="rounded bg-cyan-bright/20 px-2 py-0.5 font-mono text-xs font-medium text-cyan-bright">
                    {id}
                  </span>
                  <h3 className="font-display font-medium text-text-primary">{name}</h3>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{summary}</p>
                <dl className="mt-3 space-y-1.5 text-sm">
                  {specs.map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                      <dt className="font-medium text-text-primary sm:w-32 sm:shrink-0">{label}</dt>
                      <dd className="text-text-secondary">{value}</dd>
                    </div>
                  ))}
                </dl>
                <pre
                  className="mt-3 overflow-x-auto rounded-lg p-3 font-mono text-sm text-text-primary"
                  style={{ background: 'var(--surface-inset-highlight)' }}
                >
                  <code>{command}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
        <ScrollArrow nextId="simulation-why" label="Why simulation matters" />
      </section>

      {/* Panel 2: Why simulation matters */}
      <section
        id="simulation-why"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Why Simulation Matters Here
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-text-secondary">
            <li>
              <strong>Topic parity.</strong>{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">/cmd_vel</code>,{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">/camera/camera/color/image_raw</code>,{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">/camera/camera/depth/image_rect_raw</code>,{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">/scan</code>,{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">/imu/data</code>{' '}
              all match the real robot. Skills, MCP tools, and OpenClaw chats need <em>zero</em> changes between sim and real.
            </li>
            <li>
              <strong>Try the agents without hardware.</strong> Walk a Claude Desktop, Codex, or Gemini conversation through{' '}
              <em>"navigate to the door"</em> or <em>"wave the elbow"</em> on a laptop, before you touch a real motor.
            </li>
            <li>
              <strong>Headless-friendly.</strong> Pass{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">gui:=false</code> to the launch file
              (or run with no display attached) and the AMR's depth, lidar, IMU, and joint state all keep streaming &mdash;
              perfect for Jetson-class boards or CI.
            </li>
            <li>
              <strong>One bridge, two robots.</strong> The{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">agenticros_sim</code> ROS 2 package
              ships both robots, both bridges, and both RViz configs &mdash; pick AMR or arm at launch time.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/agenticros/agenticros/blob/main/ros2_ws/src/agenticros_sim/README.md"
              className="inline-flex items-center rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simulation README
            </a>
            <a
              href="https://github.com/agenticros/agenticros/blob/main/packages/agenticros-cli/README.md"
              className="inline-flex items-center rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-bg-elevated"
              style={{ background: 'var(--surface-card)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              agenticros CLI reference
            </a>
          </div>
        </div>
        <ScrollArrow nextId="try-it" label="Continue to Try It" />
      </section>
    </>
  )
}
