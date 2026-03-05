export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Skills
        </h2>
        <p className="mt-4 text-text-secondary">
          The AgenticROS plugin loads <strong>optional skill packages</strong> at startup. Each skill registers its own tools (e.g. follow_robot, follow_me_see) and reads config from <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.&lt;skillId&gt;</code>. You install skills by adding them to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skillPackages</code> (npm names) or <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skillPaths</code> (local directories) in the plugin config, then restarting the gateway.
        </p>
        <p className="mt-3 text-text-secondary">
          The <strong>Follow Me</strong> skill (<code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros-skill-followme</code>) is the reference implementation: depth-based person following with optional Ollama/VLM, turn-to-follow and search-when-lost. Use it as a template to build and share your own skills.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/agenticros/agenticros/blob/main/docs/skills.md"
            className="inline-flex items-center rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-bg-elevated"
            style={{ background: 'var(--surface-card)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Skills contract &amp; guide
          </a>
          <a
            href="https://github.com/agenticros/agenticros-skill-followme"
            className="inline-flex items-center rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
            target="_blank"
            rel="noopener noreferrer"
          >
            agenticros-skill-followme
          </a>
        </div>
      </div>
    </section>
  )
}
