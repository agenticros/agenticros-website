import ScrollArrow from './ScrollArrow'

const referenceSkills = [
  {
    title: 'Find Object',
    marketplaceRef: 'chrismatthieu/find',
    pkg: 'agenticros-skill-find',
    marketplaceHref: 'https://skills.agenticros.com/chrismatthieu/find',
    githubHref: 'https://github.com/agenticros/agenticros-skill-find',
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
    marketplaceRef: 'chrismatthieu/followme',
    pkg: 'agenticros-skill-followme',
    marketplaceHref: 'https://skills.agenticros.com/chrismatthieu/followme',
    githubHref: 'https://github.com/agenticros/agenticros-skill-followme',
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
  { cmd: 'agenticros create-skill <slug> [--template hello|robot|camera|depth]', desc: 'scaffold a new skill package in the current directory' },
  { cmd: 'agenticros skills dev [--invoke <tool>]', desc: 'load the skill locally without restarting OpenClaw' },
  { cmd: 'agenticros publish [--graduate]', desc: 'validate, push to GitHub, and submit to skills.agenticros.com' },
  { cmd: 'agenticros skills search <q>', desc: <>search the <a href="https://skills.agenticros.com" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">marketplace</a> by keyword (e.g. <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">follow</code>)</> },
  { cmd: 'agenticros skills install <owner/skill>', desc: 'clone the GitHub repo, build it, register it with OpenClaw, and sync the tools allowlist — one step' },
  { cmd: 'agenticros skills', desc: 'list registered skills + cloned-but-unregistered candidates on disk' },
  { cmd: 'agenticros skills discover', desc: 'interactive picker over local clones the CLI found' },
  { cmd: 'agenticros skills add <path-or-name>', desc: 'register a local clone (path) or npm package without the marketplace' },
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
            AgenticROS <strong>skills</strong> are optional packages that add tools and behaviors to the OpenClaw plugin (e.g. <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">find_object</code>, <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">follow_person</code>). Each skill registers its own tools and reads its config from <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">config.skills.&lt;skillId&gt;</code>.
          </p>
          <p className="mt-3 text-text-secondary">
            <strong>Create</strong> with <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">npx agenticros create-skill</code>, <strong>publish</strong> with <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">npx agenticros publish</code>, and <strong>install</strong> from the <a href="https://skills.agenticros.com" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">AgenticROS Skills Marketplace</a> using namespaced refs like <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">owner/skill-id</code>.
          </p>
          <div className="mt-4">
            <a
              href="https://skills.agenticros.com"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Skills Marketplace →
            </a>
          </div>

          <p className="mt-6 text-xs uppercase tracking-wider text-text-muted">
            Featured on the marketplace
          </p>
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            {referenceSkills.map(({ title, marketplaceRef, pkg, marketplaceHref, githubHref, description }) => (
              <div
                key={pkg}
                className="flex flex-col gap-3 rounded-xl border border-[var(--border-subtle)] p-5"
                style={{ background: 'var(--surface-card)' }}
              >
                <div>
                  <a
                    href={marketplaceHref}
                    className="font-display font-medium text-text-primary transition hover:text-coral-bright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <a
                      href={marketplaceHref}
                      className="text-cyan-bright hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on marketplace
                    </a>
                    <span className="text-text-muted">·</span>
                    <a
                      href={githubHref}
                      className="font-mono text-coral-bright hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pkg}
                    </a>
                  </div>
                </div>
                <p className="text-sm text-text-secondary">{description}</p>
                <code
                  className="mt-auto block overflow-x-auto rounded-md px-3 py-2 font-mono text-xs text-text-primary"
                  style={{ background: 'var(--surface-inset-highlight)' }}
                >
                  <span className="select-none text-coral-bright">$</span>{' '}
                  npx agenticros skills install {marketplaceRef}
                </code>
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
            Scaffold with <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">create-skill</code>, test with <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">skills dev</code>, and publish with <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">publish</code>. To install a community skill, use <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros skills install &lt;owner/skill&gt;</code> — the CLI hits the <a href="https://skills.agenticros.com" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">marketplace API</a>, clones the GitHub repo, runs <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">pnpm install && pnpm build</code>, edits <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">~/.openclaw/openclaw.json</code>, refreshes the plugin manifest's <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">contracts.tools</code> allowlist, and reminds you to bounce the gateway.
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
            ⟩ Skills &mdash; Create, Publish &amp; Install
          </h2>
          <p className="mt-4 text-text-secondary">
            Build your own skill or install from the <a href="https://skills.agenticros.com" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Skills Marketplace</a>.
          </p>
          <pre
            className="mt-4 overflow-x-auto rounded-lg bg-bg-elevated p-4 font-mono text-sm text-text-primary"
            style={{ background: 'var(--surface-inset-highlight)' }}
          >
            <code>{`# Create and publish your own skill
npx agenticros create-skill my-skill --template robot
cd agenticros-skill-my-skill && npm install && npm run dev
npx agenticros publish

# Or install from the marketplace (owner/skill-id)
npx agenticros skills search follow
npx agenticros skills install chrismatthieu/followme
npx agenticros skills install chrismatthieu/find

# Restart the gateway to load new skills
systemctl --user restart openclaw-gateway.service`}</code>
          </pre>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://skills.agenticros.com"
              className="inline-flex items-center rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Skills Marketplace
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
