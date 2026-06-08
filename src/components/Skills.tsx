import ScrollArrow from './ScrollArrow'

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
    <>
      {/* Panel 1: Overview + reference skills */}
      <section
        id="skills"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Skills
          </h2>
          <p className="mt-4 text-text-secondary">
            AgenticROS <strong>skills</strong> are optional packages that add tools and behaviors to the OpenClaw plugin (e.g. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">find_object</code>, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">follow_robot</code>). Each skill registers its own tools and reads its config from <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.&lt;skillId&gt;</code>.
          </p>
          <p className="mt-3 text-text-secondary">
            A <a href="https://github.com/agenticros/agenticros-skills" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">curated list of AgenticROS skills</a> helps robotics developers discover available skills and add new ones via pull request. Use either reference skill below as a template to build and share your own.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {referenceSkills.map(({ title, pkg, href, description }) => (
              <div
                key={pkg}
                className="rounded-xl border border-[var(--border-subtle)] p-5"
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
        </div>
        <ScrollArrow nextId="skills-manage" label="Manage skills" />
      </section>

      {/* Panel 2: Manage skills with the CLI */}
      <section
        id="skills-manage"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Manage Skills with the CLI
          </h2>
          <p className="mt-4 text-text-secondary">
            The <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros skills</code> command (and the <strong>Manage skills</strong> menu entry) does everything for you: it scans the usual locations for clones, edits <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">~/.openclaw/openclaw.json</code>, refreshes the plugin manifest's <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">contracts.tools</code> allowlist, and reminds you to bounce the gateway.
          </p>

          <div className="mt-6 overflow-hidden rounded-lg border border-[var(--border-subtle)]">
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

          <p className="mt-6 text-sm text-text-muted">
            The <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> MCP adapter exposes the Find Object skill as the built-in <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_find_object</code> tool &mdash; no skill install required on that adapter.
          </p>
        </div>
        <ScrollArrow nextId="skills-runbook" label="Skills runbook" />
      </section>

      {/* Panel 3: Typical first-run + listing output */}
      <section
        id="skills-runbook"
        className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            ⟩ Skills &mdash; Typical First-Run
          </h2>
          <p className="mt-4 text-text-secondary">
            Clone the skills you want, build them, then point the CLI at them &mdash; from anywhere on disk.
          </p>
          <pre
            className="mt-4 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
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

          <div className="mt-6 flex flex-wrap gap-3">
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
        <ScrollArrow nextId="memory" label="Continue to Memory" />
      </section>
    </>
  )
}
