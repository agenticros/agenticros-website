import ScrollArrow from './ScrollArrow'

const codeBlock =
  'mt-2 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary'
const codeStyle = { background: 'var(--surface-inset-highlight)' as const }
const mono =
  'rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright'

export default function RobotHardware() {
  return (
    <>
      <section
        id="robot-hardware"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Robot hardware (CLI)
          </h2>
          <p className="mt-4 text-text-secondary">
            On the robot, use the{' '}
            <a
              href="https://www.npmjs.com/package/agenticros"
              className="text-cyan-bright hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              agenticros
            </a>{' '}
            npm CLI to install deps, register with{' '}
            <a
              href="https://cloud.agenticros.com"
              className="text-cyan-bright hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AgenticROS Cloud
            </a>
            , connect over P2P, and start motors / cameras.
          </p>

          <h3 className="mt-10 text-lg font-medium text-text-primary">
            1. Init + Cloud API token
          </h3>
          <p className="mt-2 text-sm text-text-muted">
            <code className={mono}>init</code> installs workspace deps (required
            for connect/motors). The token is your{' '}
            <strong>API key from AgenticROS Cloud</strong> (API docs page after
            sign-in at cloud.agenticros.com).
          </p>
          <pre className={codeBlock} style={codeStyle}>
            <code>{`npm install -g agenticros
agenticros init
agenticros set --token=<API_TOKEN_FROM_CLOUD>
agenticros id          # add this UUID to your cloud fleet
agenticros connect     # wss://cloud.agenticros.com`}</code>
          </pre>

          <h3 className="mt-10 text-lg font-medium text-text-primary">
            2. Connect / disconnect
          </h3>
          <pre className={codeBlock} style={codeStyle}>
            <code>{`agenticros connect              # default cloud.agenticros.com
agenticros connect -s <host>    # edge hub or legacy host
agenticros disconnect
agenticros status               # shows comms / motors / cameras`}</code>
          </pre>
          <p className="mt-2 text-sm text-text-muted">
            Connect logs: <code className={mono}>/tmp/agenticros-comms.log</code>
          </p>
        </div>
        <ScrollArrow nextId="robot-hardware-motors" label="Motors backends" />
      </section>

      <section
        id="robot-hardware-motors"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Motors (Raspberry Pi, Firmata, Jetson)
          </h2>
          <p className="mt-4 text-text-secondary">
            Publishes nothing — subscribes to{' '}
            <code className={mono}>/cmd_vel</code> (or the portal-namespaced
            topic) and drives a differential base.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] text-text-muted">
                  <th className="py-2 pr-4 font-medium">Backend</th>
                  <th className="py-2 pr-4 font-medium">Flag</th>
                  <th className="py-2 font-medium">Use when</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-3 pr-4 font-mono text-coral-bright">rpi</td>
                  <td className="py-3 pr-4">
                    <code className={mono}>-b rpi</code>
                  </td>
                  <td className="py-3">
                    Raspberry Pi Zero–5 (default when portal compute = Raspberry
                    Pi). Pins L1,L2,R1,R2 default <code className={mono}>27,22,17,18</code>
                  </td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-3 pr-4 font-mono text-coral-bright">firmata</td>
                  <td className="py-3 pr-4">
                    <code className={mono}>-b firmata</code>
                  </td>
                  <td className="py-3">
                    Arduino / ESP over USB — Radxa, LattePanda, Jetson+Arduino,
                    NUC (default for non-Pi). Device{' '}
                    <code className={mono}>-d /dev/ttyACM0</code>; pins default{' '}
                    <code className={mono}>3,4,5,7,8,9</code>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-coral-bright">jetson</td>
                  <td className="py-3 pr-4">
                    <code className={mono}>-b jetson</code>
                  </td>
                  <td className="py-3">
                    Experimental native Jetson GPIO (JETGPIO). Opt-in only —
                    never auto-selected. BOARD pins default{' '}
                    <code className={mono}>16,18,22,26</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <pre className={`mt-8 ${codeBlock}`} style={codeStyle}>
            <code>{`# Raspberry Pi GPIO
agenticros start motors -b rpi -p 27,22,17,18

# Arduino Firmata (add user to dialout, then reboot once)
sudo usermod -aG dialout $USER
agenticros start motors -b firmata -d /dev/ttyACM0 -p 3,4,5,7,8,9

# Jetson native GPIO (requires system JETGPIO; often needs sudo)
agenticros start motors -b jetson -p 16,18,22,26

agenticros stop motors`}</code>
          </pre>
          <p className="mt-3 text-sm text-text-muted">
            Also: <code className={mono}>-e</code> encoder pins (Firmata),{' '}
            <code className={mono}>agenticros motors start</code> alias word
            order. <code className={mono}>up real</code> starts motors
            automatically unless <code className={mono}>--no-motors</code>.
          </p>
        </div>
        <ScrollArrow nextId="robot-hardware-cameras" label="Cameras" />
      </section>

      <section
        id="robot-hardware-cameras"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Cameras (2D + RealSense)
          </h2>

          <h3 className="mt-8 text-lg font-medium text-text-primary">
            RealSense (depth + RGB ROS node)
          </h3>
          <p className="mt-2 text-sm text-text-muted">
            Launches <code className={mono}>realsense2_camera</code> with
            recovery-mode preflight. Install{' '}
            <code className={mono}>ros-$ROS_DISTRO-realsense2-camera</code>.
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Default launch uses <strong>teleop profiles</strong> (RGB{' '}
            <code className={mono}>320x180@6</code>, depth{' '}
            <code className={mono}>424x240@6</code>) for responsive WebRTC —
            same as the legacy robotics CLI. Use{' '}
            <code className={mono}>--full</code> for stock high-res{' '}
            <code className={mono}>rs_launch.py</code> defaults.
          </p>
          <pre className={codeBlock} style={codeStyle}>
            <code>{`agenticros stop realsense              # if an old high-res node is running
agenticros start realsense             # teleop profile (WebRTC-friendly)
agenticros start realsense -p          # + pointcloud
agenticros start realsense --full      # stock high-res defaults
agenticros start realsense --model=D421
# logs: /tmp/agenticros-camera.log`}</code>
          </pre>

          <h3 className="mt-10 text-lg font-medium text-text-primary">
            2D V4L camera → <code className={mono}>/camera2d</code>
          </h3>
          <p className="mt-2 text-sm text-text-muted">
            USB / CSI cameras via V4L. RealSense RGB as a plain 2D device is often{' '}
            <code className={mono}>/dev/video4</code>.
          </p>
          <pre className={codeBlock} style={codeStyle}>
            <code>{`agenticros start camera                      # /dev/video0
agenticros start camera -d /dev/video0 -r 320x240 -f 15
agenticros start camera -d /dev/video4       # RealSense RGB node
agenticros stop camera`}</code>
          </pre>

          <p className="mt-8 text-text-secondary">
            Full reference:{' '}
            <a
              href="https://www.npmjs.com/package/agenticros"
              className="text-cyan-bright hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              npmjs.com/package/agenticros
            </a>{' '}
            and the interactive menu under{' '}
            <strong>Robot hardware</strong>.
          </p>
        </div>
        <ScrollArrow nextId="features" label="Features" />
      </section>
    </>
  )
}
