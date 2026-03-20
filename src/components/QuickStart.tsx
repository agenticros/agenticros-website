export default function QuickStart() {
  return (
    <section id="quick-start" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Quick Start
        </h2>
        <p className="mt-4 text-text-secondary">
          Prerequisites: Node.js 20+, pnpm 9+, Docker (for simulation).
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-text-primary">1. Clone and build</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary" style={{ background: 'var(--surface-inset-highlight)' }}>
              <code>{`git clone https://github.com/agenticros/agenticros.git
cd agenticros
pnpm install
pnpm build`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary">2. Run the demo stack (ROS2 + rosbridge + Gazebo)</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary" style={{ background: 'var(--surface-inset-highlight)' }}>
              <code>{`cd docker
docker compose up`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary">3. Connect your AI agent</h3>
            <p className="mt-2 text-text-secondary">
              <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>: <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">openclaw plugins install -l ./extensions/openclaw-plugin</code>.{' '}
              <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>: same plugin in a sandbox — see the main repo for setup.{' '}
              <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>: configure your Gemini agent to call the same AgenticROS tools.{' '}
              <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> CLI: register the <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a> server with <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">claude mcp add</code>.{' '}
              <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude desktop</a> &amp; <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a> (iOS, paired to your Mac): add the same MCP server to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">~/Library/Application Support/Claude/claude_desktop_config.json</code> (absolute path to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">dist/index.js</code>), then fully quit and restart Claude. Details: <a href="https://github.com/agenticros/agenticros/blob/main/packages/agenticros-claude-code/README.md" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude adapter README</a>. Other agents: see the repo docs for your platform.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary">4. Configure the plugin</h3>
            <p className="mt-2 text-text-secondary">
              Set rosbridge URL to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">ws://localhost:9090</code> (default). Start your AI agent and use your messaging channel — the plugin talks to the simulation over WebSocket.
            </p>
          </div>
        </div>

        <p className="mt-8 text-text-muted">
          Running on your own robot? Use the onboarding wizard:{' '}
          <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm">./scripts/onboard_robot.sh</code>
          {' '}or see the <a href="https://github.com/agenticros/agenticros/blob/main/docs/robot-setup.md" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Robot Setup Guide</a>.
        </p>
      </div>
    </section>
  )
}
