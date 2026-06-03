export default function QuickStart() {
  return (
    <section id="quick-start" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
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
            <h3 className="text-lg font-medium text-text-primary">2. Run the demo stack (ROS2 + rosbridge + Gazebo) unless you already have a ROS2 environment</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary" style={{ background: 'var(--surface-inset-highlight)' }}>
              <code>{`cd docker
docker compose up`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary">3. Connect your AI agent to ROS</h3>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-text-secondary">
              <li>
                <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>: <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">openclaw plugins install -l ./extensions/openclaw-plugin</code>.
              </li>
              <li>
                <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>: same plugin in a sandbox — see the main repo for setup.
              </li>
              <li>
                <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>: configure your Gemini agent to call the same AgenticROS tools.
              </li>
              <li>
                <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> CLI: register the <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a> server with <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">claude mcp add</code>.
              </li>
              <li>
                <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a> &amp; <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a> (iOS/Android, paired to your machine): add the same MCP server to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">~/Library/Application Support/Claude/claude_desktop_config.json</code> (absolute path to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-coral-bright">dist/index.js</code>), then fully quit and restart Claude. Details: <a href="https://github.com/agenticros/agenticros/blob/main/packages/agenticros-claude-code/README.md" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude adapter README</a>.
              </li>
              <li>
                Other agents: see the repo docs for your platform.
              </li>
            </ul>
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
