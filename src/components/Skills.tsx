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

const cliCommands = [
  { cmd: 'agenticros skills', desc: 'list registered skills + cloned-but-unregistered candidates on disk' },
  { cmd: 'agenticros skills discover', desc: 'interactive picker over candidates the CLI found' },
  { cmd: 'agenticros skills add <path-or-name>', desc: 'register a clone (path) or npm package' },
  { cmd: 'agenticros skills remove <id-or-name>', desc: 'unregister a skill' },
  { cmd: 'agenticros skills sync', desc: <>refresh OpenClaw <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">contracts.tools</code> allowlist</> },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Skills
        </h2>
        <p className="mt-4 text-text-secondary">
          AgenticROS <strong>skills</strong> are optional packages that add tools and behaviors to the OpenClaw plugin (e.g. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">find_object</code>, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">follow_robot</code>). Each skill registers its own tools and reads its config from <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.&lt;skillId&gt;</code>.
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

        <h3 className="mt-12 font-display text-lg font-medium text-text-primary">
          Manage skills with the CLI
        </h3>
        <p className="mt-2 text-text-secondary">
          The <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros skills</code> command (and the <strong>Manage skills</strong> menu entry) does everything for you: it scans the usual locations for clones, edits <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">~/.openclaw/openclaw.json</code>, refreshes the plugin manifest's <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">contracts.tools</code> allowlist, and reminds you to bounce the gateway.
        </p>

        <div className="mt-4 overflow-hidden rounded-lg border border-[var(--border-subtle)]">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ background: 'var(--bg-elevated)' }}>
                <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">Command</th>
                <th className="border-b border-[var(--border-subtle)] px-4 py-3 text-left font-medium text-text-primary">What it does</th>
              </tr>
            </thead>
            <tbody>
              {cliCommands.map(({ cmd, desc }) => (
                <tr key={cmd} className="border-b border-[var(--border-subtle)] last:border-0">
                  <td className="px-4 py-3 font-mono text-sm text-coral-bright">{cmd}</td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-12 font-display text-lg font-medium text-text-primary">
          Typical first-run
        </h3>
        <p className="mt-2 text-text-secondary">
          Clone the skills you want, build them, then point the CLI at them &mdash; from anywhere on disk.
        </p>
        <pre
          className="mt-3 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{`# Clone whichever skills you want, anywhere near the repo
cd ~/Projects
git clone https://github.com/agenticros/agenticros-skill-followme
git clone https://github.com/agenticros/agenticros-skill-find

# Build them (skills compile independently of the main workspace)
cd agenticros-skill-followme && pnpm install && pnpm build && cd ..
cd agenticros-skill-find     && pnpm install && pnpm build && cd ..

# Register both — short ids resolve against the discovered clones
agenticros skills add followme
agenticros skills add find
agenticros skills sync                  # update contracts.tools
systemctl --user restart openclaw-gateway.service`}</code>
        </pre>
        <p className="mt-3 text-text-secondary">
          <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros skills</code> then shows them as registered, and <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros doctor</code> includes a skills health-check that flags any clone that hasn't been built or whose <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skillPaths</code> entry no longer exists.
        </p>

        <h3 className="mt-12 font-display text-lg font-medium text-text-primary">
          Listing output
        </h3>
        <pre
          className="mt-3 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{`╔─────────────────────╗
║  AgenticROS skills  ║
╚─────────────────────╝

› OpenClaw config: /home/you/.openclaw/openclaw.json

Registered:
  ● followme  agenticros-skill-followme
      via path  →  /home/you/Projects/agenticros-skill-followme
  ● find      agenticros-skill-find
      via path  →  /home/you/Projects/agenticros-skill-find`}</code>
        </pre>

        <details className="mt-12 rounded-xl border border-[var(--border-subtle)] p-6" style={{ background: 'var(--surface-card)' }}>
          <summary className="cursor-pointer font-display text-lg font-medium text-text-primary">
            What the CLI writes (under the hood)
          </summary>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-sm text-text-secondary">
            <li>
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">~/.openclaw/openclaw.json</code> &rarr;{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">plugins.entries.agenticros.config.skillPaths[]</code> and{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">.skillPackages[]</code> &mdash; the only place the plugin actually reads from at gateway start.
            </li>
            <li>
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">packages/agenticros/openclaw.plugin.json</code> &rarr;{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">contracts.tools</code> allowlist via{' '}
              <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">scripts/sync-skill-tools.mjs</code>. Required on OpenClaw <strong>2026+</strong>, which silently drops any tool a plugin registers but hasn't declared.
            </li>
          </ul>
          <p className="mt-4 text-sm text-text-secondary">
            Per-skill behaviour lives under{' '}
            <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.&lt;skillId&gt;</code>{' '}
            (e.g. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.followme.depthTopic</code>). The CLI doesn't auto-write these &mdash; use{' '}
            <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros config set skills.find.confidence=0.5</code>{' '}
            or edit <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">~/.openclaw/openclaw.json</code> directly. See each skill's README for its options.
          </p>
        </details>

        <p className="mt-8 text-sm text-text-muted">
          The <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> MCP adapter exposes the Find Object skill as the built-in <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_find_object</code> tool &mdash; no skill install required on that adapter. The CLI workflow above is for adding skills to the OpenClaw gateway alongside the rest of your tools.
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
