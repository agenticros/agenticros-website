const backends = [
  {
    name: 'Local',
    tag: 'zero deps',
    summary: (
      <>
        No new dependencies. Keyword + recency search backed by{' '}
        <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs text-coral-bright">
          ~/.agenticros/memory.json
        </code>
        . The fastest way to try it — just flip the flag and go.
      </>
    ),
  },
  {
    name: 'mem0',
    tag: 'semantic',
    summary: (
      <>
        Add <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs text-coral-bright">mem0ai</code> and an
        embedder (Ollama auto-detected at <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs text-coral-bright">localhost:11434</code>,
        otherwise <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs text-coral-bright">OPENAI_API_KEY</code>) for fuzzy
        recall on conversational text. Data lives in <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs text-coral-bright">~/.mem0/vector_store.db</code> (SQLite + vectors), shared across every process on the host.
      </>
    ),
  },
]

export default function Memory() {
  return (
    <section id="memory" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ AI Agent Memory
        </h2>
        <p className="mt-4 text-text-secondary">
          AgenticROS ships an <strong>optional</strong>, <strong>off-by-default</strong> cross-adapter semantic memory service. When enabled, <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, the <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> MCP server, <a href="https://claude.com/download" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Desktop</a> / <a href="https://claude.com/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Dispatch</a>, and the <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Gemini</a> CLI all expose the same four tools — <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">memory_remember</code>, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">memory_recall</code>, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">memory_forget</code>, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">memory_status</code> — backed by a <strong>shared, file-backed store</strong>.
        </p>
        <p className="mt-3 text-text-secondary">
          The default namespace is the robot namespace, so every adapter talking to the same robot sees the same memories across processes, sessions, and restarts. Remember a fact from Claude Desktop and recall it immediately from OpenClaw — no sidecar service, no extra config.
        </p>

        <h3 className="mt-10 font-display text-lg font-medium text-text-primary">When it's useful</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
          <li>You use <strong>multiple AI agents</strong> with the same robot (e.g. OpenClaw on desktop + Claude Code on your phone via Dispatch). Each agent sees what the others learned.</li>
          <li>You want <strong>facts to persist across sessions</strong> (preferences, room layouts, names, routines) without re-explaining them every conversation.</li>
          <li>You want the robot to <strong>build environment knowledge</strong> over time — "the rug in the hallway is fragile", "the cat gets startled by fast turns".</li>
        </ul>

        <h3 className="mt-10 font-display text-lg font-medium text-text-primary">Backends</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {backends.map(({ name, tag, summary }) => (
            <div
              key={name}
              className="rounded-xl border border-[var(--border-subtle)] p-6"
              style={{ background: 'var(--surface-card)' }}
            >
              <div className="flex items-center gap-2">
                <h4 className="font-display font-medium text-text-primary">{name}</h4>
                <span className="rounded bg-cyan-bright/20 px-2 py-0.5 font-mono text-xs font-medium text-cyan-bright">
                  {tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-text-secondary">{summary}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 font-display text-lg font-medium text-text-primary">Enable it</h3>
        <p className="mt-2 text-text-secondary">
          Edit <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">~/.agenticros/config.json</code> (or use the OpenClaw config UI at <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">/agenticros/config</code>):
        </p>
        <pre
          className="mt-3 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{`{
  "memory": {
    "enabled": true,
    "backend": "local"
  }
}`}</code>
        </pre>
        <p className="mt-3 text-text-secondary">
          That's it. The four memory tools light up automatically in every adapter that talks to the same robot namespace.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/agenticros/agenticros/blob/main/docs/memory.md"
            className="inline-flex items-center rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Memory docs
          </a>
          <a
            href="https://github.com/mem0ai/mem0"
            className="inline-flex items-center rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-bg-elevated"
            style={{ background: 'var(--surface-card)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            mem0 backend
          </a>
        </div>
      </div>
    </section>
  )
}
