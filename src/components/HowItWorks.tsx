import { useEffect, useState } from 'react'
import ScrollArrow from './ScrollArrow'

export default function HowItWorks() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const steps = [
    'User (messaging app or terminal)',
    <>Your AI agent (<a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://developers.openai.com/codex/cli/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Codex CLI</a>, <a href="https://github.com/NousResearch/hermes-agent" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Hermes Agent</a>, <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a> / <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>, <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a> via <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a>, or another supported agent)</>,
    'AgenticROS plugin (ROS2 tools + safety)',
    'Rosbridge_server (WebSocket)',
    'ROS2 DDS → Robots: Nav2, MoveIt2, 2D webcams, RealSense depth, sensors',
    'ROS2 Zenoh RMW → Robots: Low-latency pub/sub',
  ]

  useEffect(() => {
    if (!lightboxOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxOpen])

  return (
    <section
      id="how-it-works"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
        <div>
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ How It Works
          </h2>
          <p className="mt-4 text-text-secondary">
            AgenticROS works with <strong>multiple AI agents</strong>: <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://developers.openai.com/codex/cli/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Codex CLI</a>, <a href="https://github.com/NousResearch/hermes-agent" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Hermes Agent</a>, <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude desktop</a> &amp; <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a> (same <a href="https://modelcontextprotocol.io/docs/getting-started/intro" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">MCP</a> server), <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>, and others. A user sends a natural language message from chat, the Claude app, Codex, or the terminal. Your chosen agent uses ROS2 tools registered by the AgenticROS adapter, translates intent into ROS2 operations, and streams robot feedback back.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-elevated text-sm font-medium text-cyan-bright">
                  {i + 1}
                </span>
                <span className="text-text-primary">{step}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Supported hardware includes 2D webcams and 3D RealSense stereo depth cameras.
          </p>
        </div>
        <figure className="overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-bg-elevated/40 p-3 shadow-2xl shadow-cyan-bright/10">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group block w-full cursor-zoom-in rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
            aria-label="View how it works diagram fullscreen"
          >
            <img
              src="/works.png"
              alt="Diagram showing how users connect AI agents through AgenticROS to ROS2 robots and simulation"
              className="h-auto w-full rounded object-contain transition-opacity group-hover:opacity-90"
            />
          </button>
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            Natural language in. ROS2 actions and robot feedback out.
          </figcaption>
        </figure>
      </div>
      <ScrollArrow nextId="hero-video" label="Watch the demo" />

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="How it works diagram"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 text-text-muted transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
            aria-label="Close fullscreen diagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src="/works.png"
            alt="Diagram showing how users connect AI agents through AgenticROS to ROS2 robots and simulation"
            className="max-h-full max-w-full cursor-zoom-out object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
