import ScrollArrow from './ScrollArrow'

export default function QuickStart() {
  return (
    <>
      {/* Panel 1: Intro + install */}
      <section
        id="quick-start"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              ⟩ Quick Start
            </h2>
            <a
              href="https://github.com/agenticros/agenticros"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
          <p className="mt-4 text-text-secondary">
            You only need one command. The <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">agenticros</code> CLI handles everything else &mdash; the ROS 2 workspace, the MCP server build, the OpenClaw plugin, and your robot config.
          </p>
          <p className="mt-2 text-text-muted">
            Prerequisites: <strong>Node.js 20+</strong>. ROS 2 Humble or Jazzy if you plan to drive a real robot or run simulation (the CLI sources <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">/opt/ros/&lt;distro&gt;/setup.bash</code> and runs <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">colcon build</code> for you).
          </p>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-text-primary">1. Install &amp; launch (one command)</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary" style={{ background: 'var(--surface-inset-highlight)' }}>
              <code>{`npx agenticros`}</code>
            </pre>
            <p className="mt-2 text-sm text-text-muted">
              Runs the published <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono">agenticros</code> npm package on any machine with Node &ge; 20. No <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono">git clone</code>, no <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono">pnpm install</code>.
            </p>
          </div>
        </div>
        <ScrollArrow nextId="quick-start-menu" label="See the interactive menu" />
      </section>

      {/* Panel 2: Interactive menu */}
      <section
        id="quick-start-menu"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Quick Start &mdash; Interactive Menu
          </h2>
          <h3 className="mt-6 text-lg font-medium text-text-primary">
            2. Pick what you want from the interactive menu
          </h3>
          <pre
            className="mt-2 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
            style={{ background: 'var(--surface-inset-highlight)' }}
          >
            <code>{`╔──────────────────────────────────────────────────╗
║  AgenticROS - agentic AI for ROS-powered robots  ║
╚──────────────────────────────────────────────────╝

? What would you like to do?
  Launch with real robot
❯ Launch with simulation
  First-time setup (workspace + OpenClaw plugin + API key)
  Manage skills (2 registered, 0 available, 0 broken)
  Stop everything
  Doctor (health check)
  Configure (API keys, namespace, transport)
  Tail logs`}</code>
          </pre>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-text-secondary">
            <li><strong>First-time setup</strong> &mdash; one wizard for workspace deps, ROS 2 build, OpenClaw plugin, API key, and a final health check. Idempotent &mdash; rerun any time.</li>
            <li><strong>Launch with real robot</strong> &mdash; brings up RealSense + motors + the MCP server.</li>
            <li><strong>Launch with simulation</strong> &mdash; choose between a 2-wheel <strong>AMR</strong> in Gazebo + RViz or a 6-DOF <strong>arm</strong> manipulator (UR5e-shaped, per-joint position control).</li>
            <li><strong>Manage skills</strong> &mdash; discover, register, and remove AgenticROS <a href="#skills" className="text-cyan-bright hover:underline">skills</a> (Find Object, Follow Me, your own).</li>
            <li><strong>Stop everything</strong> &mdash; cleanly tears down whatever the CLI spawned (pidfiles + logs under <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">/tmp/agenticros-*</code>).</li>
          </ul>
        </div>
        <ScrollArrow nextId="quick-start-cli" label="See direct commands" />
      </section>

      {/* Panel 3: CLI commands + connect AI agent + hacking */}
      <section
        id="quick-start-cli"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Quick Start &mdash; Direct Commands
          </h2>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-text-primary">3. Or skip the menu &mdash; every option has a direct command</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary" style={{ background: 'var(--surface-inset-highlight)' }}>
              <code>{`npx agenticros init             # one-time workspace + plugin + API key
agenticros up real              # real robot stack
agenticros up sim-amr           # simulated AMR (Gazebo + RViz)
agenticros up sim-arm           # simulated 6-DOF arm
agenticros mode <real|sim>      # swap the active config profile
agenticros skills               # list / discover / add / remove skills
agenticros doctor               # coloured health check (includes skills)
agenticros down                 # stop everything we started`}</code>
            </pre>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-text-primary">4. Connect your AI agent</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Once a stack is up, point any supported agent at the same robot or sim &mdash; same tools, same memory, your choice of platform:{' '}
              <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>,{' '}
              <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>,{' '}
              <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>,{' '}
              <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a> /{' '}
              <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>, or{' '}
              <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>. See the{' '}
              <a href="https://github.com/agenticros/agenticros/blob/main/packages/agenticros-claude-code/README.md" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude adapter README</a>{' '}and{' '}
              <a href="https://github.com/agenticros/agenticros/blob/main/packages/agenticros-cli/README.md" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">agenticros-cli README</a>{' '}for details.
            </p>
          </div>

          <div
            className="mt-8 rounded-xl border border-[var(--border-subtle)] p-5"
            style={{ background: 'var(--surface-card)' }}
          >
            <h3 className="font-display text-lg font-medium text-text-primary">Hacking on the packages?</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Clone and use the local checkout &mdash; the CLI auto-detects a workspace and uses live sources instead of the bundled snapshot.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary" style={{ background: 'var(--surface-inset-highlight)' }}>
              <code>{`git clone https://github.com/agenticros/agenticros && cd agenticros
pnpm install && pnpm build
./agenticros                    # repo-local CLI shim, same menu as \`npx agenticros\``}</code>
            </pre>
          </div>
        </div>
        <ScrollArrow nextId="features" label="Continue to Features" />
      </section>
    </>
  )
}
