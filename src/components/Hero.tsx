import ScrollArrow from './ScrollArrow'

export default function Hero() {
  return (
    <section
      id="hero"
      className="panel relative flex flex-col items-center justify-center px-6 py-8 text-center"
    >
      <div className="flex w-full max-w-[21rem] flex-col items-center md:max-w-[30rem]">
        <img
          src="/agenticros-logo-only-removebg-preview.png"
          alt=""
          aria-hidden="true"
          className="w-36 object-contain md:w-44"
        />
        <div className="mt-2 h-11 w-full overflow-hidden md:h-12">
          <img
            src="/agenticros-text-removebg-preview.png"
            alt="AgenticROS"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <p className="mt-2 max-w-2xl text-xl font-semibold uppercase tracking-wide text-coral-bright md:text-2xl">
        The agentic AI for robotics
      </p>
      <p className="mt-3 max-w-3xl text-text-muted">
        Use <strong>multiple AI agents</strong> ({' '}
        <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>
        , <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a>, <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>, <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>, <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, etc) to control <strong>real ROS 2 robots</strong> or <strong>simulated AMRs and arms</strong> &mdash; all from a single command.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <img src="/openclaw.png" alt="OpenClaw" className="h-16 w-16 object-contain md:h-20 md:w-20" />
        <img src="/claudecode.png" alt="Claude Code, Claude desktop, and Dispatch" className="h-16 w-16 object-contain md:h-20 md:w-20" />
        <img src="/gemini.png" alt="Google Gemini" className="h-16 w-16 object-contain md:h-20 md:w-20" />
        <img src="/ros.webp" alt="ROS" className="h-16 w-16 object-contain md:h-20 md:w-20" />
      </div>
      <div className="mt-3 w-full max-w-2xl">
        <div
          className="rounded-xl border border-[var(--border-subtle)] p-3 text-left"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
            One command. Real robot or simulator.
          </p>
          <pre className="mt-2 overflow-x-auto font-mono text-base text-text-primary">
            <code>
              <span className="text-text-muted">$ </span>
              <span className="text-coral-bright">npx</span> agenticros
            </code>
          </pre>
          <p className="mt-2 text-xs text-text-muted">
            Node &ge; 20. Launches the interactive menu &mdash; pick <em>real robot</em>,{' '}
            <em>sim AMR</em>, or <em>sim 6-DOF arm</em>. No <code className="font-mono">git clone</code> required.
          </p>
        </div>
      </div>
      <a
        href="#quick-start"
        className="mt-3 inline-flex items-center rounded-lg bg-cyan-bright px-6 py-3 font-medium text-white transition hover:bg-cyan-mid"
      >
        Get started
      </a>
      <ScrollArrow nextId="how-it-works" label="See how AgenticROS works" />
    </section>
  )
}
