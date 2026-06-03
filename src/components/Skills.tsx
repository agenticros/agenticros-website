const referenceSkills = [
  {
    title: 'Find Object',
    pkg: 'agenticros-skill-find',
    href: 'https://github.com/agenticros/agenticros-skill-find',
    description: (
      <>
        One-shot visual search. Rotate the robot in place and stop the moment{' '}
        <strong>YOLOv8</strong> sees the target — any of 80 COCO classes plus a
        small alias table (so <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">phone</code>,{' '}
        <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">tv</code>,{' '}
        <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">sofa</code>{' '}
        just work). Returns the bounding box, confidence, and the horizontal offset
        from image center — the bridge to follow-up <em>approach</em> and{' '}
        <em>track</em> skills. Ships as both a Claude Code MCP tool
        (<code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_find_object</code>)
        and an OpenClaw skill plugin, from one piece of detection code.
      </>
    ),
  },
  {
    title: 'Follow Me',
    pkg: 'agenticros-skill-followme',
    href: 'https://github.com/agenticros/agenticros-skill-followme',
    description: (
      <>
        Depth-based person following with optional Ollama / VLM, turn-to-follow,
        and search-when-lost behaviors. The reference implementation of the
        skill contract — a good template for any closed-loop perception skill.
      </>
    ),
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Skills
        </h2>
        <p className="mt-4 text-text-secondary">
          The AgenticROS plugin loads <strong>optional skill packages</strong> at startup. Each skill registers its own tools (e.g. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">find_object</code>, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">follow_me_see</code>) and reads config from <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.&lt;skillId&gt;</code>. Install skills by adding them to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skillPackages</code> (npm names) or <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skillPaths</code> (local directories) in the plugin config, then restart the gateway.
        </p>
        <p className="mt-3 text-text-secondary">
          A <a href="https://github.com/agenticros/agenticros-skills" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">curated list of AgenticROS skills</a> helps robotics developers discover available skills and add new ones via pull request. Use either reference skill below as a template to build and share your own.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {referenceSkills.map(({ title, pkg, href, description }) => (
            <div
              key={pkg}
              className="rounded-xl border border-[var(--border-subtle)] p-6"
              style={{ background: 'var(--surface-card)' }}
            >
              <h3 className="font-display font-medium text-text-primary">{title}</h3>
              <a
                href={href}
                className="mt-1 inline-block font-mono text-xs text-coral-bright hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {pkg}
              </a>
              <p className="mt-3 text-sm text-text-secondary">{description}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 font-display text-lg font-medium text-text-primary">Enable it</h3>
        <p className="mt-2 text-text-secondary">
          Each skill is opt-in. Enable one by adding it to the AgenticROS plugin config under <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>'s <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">plugins.entries.agenticros.config</code> (e.g. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">~/.openclaw/openclaw.json</code>, or via the config UI at <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">/agenticros/config</code>) — by <strong>npm package name</strong> or by <strong>local directory</strong>:
        </p>

        <ol className="mt-4 list-decimal space-y-4 pl-6 text-text-secondary">
          <li>
            <strong className="text-text-primary">Reference the skill.</strong> Either add it to <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skillPackages</code> (after <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">pnpm add</code> in the gateway), or point <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skillPaths</code> at a built skill directory. Then set its options under <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.&lt;skillId&gt;</code>:
            <pre
              className="mt-3 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
              style={{ background: 'var(--surface-inset-highlight)' }}
            >
              <code>{`{
  "skillPackages": ["agenticros-skill-find"],
  "skills": {
    "find": {
      "defaultAngularSpeed": 0.3,
      "defaultTimeoutSeconds": 30,
      "defaultMinConfidence": 0.5
    }
  }
}`}</code>
            </pre>
          </li>
          <li>
            <strong className="text-text-primary">Sync the tool allowlist.</strong> OpenClaw 2026+ enforces <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">contracts.tools</code> in <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">openclaw.plugin.json</code> as a strict allowlist. From the AgenticROS repo root, register the new skill's tools:
            <pre
              className="mt-3 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
              style={{ background: 'var(--surface-inset-highlight)' }}
            >
              <code>{`pnpm sync-skill-tools`}</code>
            </pre>
          </li>
          <li>
            <strong className="text-text-primary">Refresh and restart the gateway.</strong>
            <pre
              className="mt-3 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
              style={{ background: 'var(--surface-inset-highlight)' }}
            >
              <code>{`openclaw plugins registry --refresh`}</code>
            </pre>
            Look for <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">AgenticROS: loaded skills: find</code> in the gateway log and no <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">plugin must declare contracts.tools for: …</code> errors. Tools like <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">find_object</code> (or <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">follow_robot</code> for Follow Me) now show up to every connected agent.
          </li>
        </ol>

        <p className="mt-4 text-sm text-text-muted">
          The <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> MCP adapter exposes the Find Object skill as the built-in <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_find_object</code> tool — no skill install required on that adapter. The OpenClaw "Enable it" steps above are for adding skills to the gateway alongside the rest of your tools.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/agenticros/agenticros-skills"
            className="inline-flex items-center rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover skills (agenticros-skills)
          </a>
          <a
            href="https://github.com/agenticros/agenticros/blob/main/docs/skills.md"
            className="inline-flex items-center rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-bg-elevated"
            style={{ background: 'var(--surface-card)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Skills contract &amp; guide
          </a>
        </div>
      </div>
    </section>
  )
}
