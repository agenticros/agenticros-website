export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 text-center">
      <img
        src="/agenticros.png"
        alt="AgenticROS mascot"
        className="mb-8 h-40 w-auto object-contain md:h-52"
      />
      <h1 className="font-display text-5xl font-bold tracking-tight text-text-primary md:text-7xl">
        <span className="text-coral-bright">
          AgenticROS
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-xl font-semibold uppercase tracking-wide text-coral-bright md:text-2xl">
        The agentic AI for robotics
      </p>
      <p className="mt-3 text-text-muted">
        Use <strong>multiple AI agents</strong> ({' '}
        <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>
        , <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a>, <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>, <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>, <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, etc) to control ROS2 robots!
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <img
          src="/openclaw.png"
          alt="OpenClaw"
          className="h-[250px] w-[250px] object-contain"
        />
        <img
          src="/claudecode.png"
          alt="Claude Code, Claude desktop, and Dispatch"
          className="h-[250px] w-[250px] object-contain"
        />
        <img
          src="/gemini.png"
          alt="Google Gemini"
          className="h-[250px] w-[250px] object-contain"
        />
        <img
          src="/ros.webp"
          alt="ROS"
          className="h-[250px] w-[250px] object-contain"
        />
      </div>
      <a
        href="#quick-start"
        className="mt-10 inline-flex items-center rounded-lg bg-cyan-bright px-6 py-3 font-medium text-white transition hover:bg-cyan-mid"
      >
        Get started
      </a>
    </section>
  )
}
