import ScrollArrow from './ScrollArrow'

const paths = [
  {
    title: 'Try simulation',
    badge: 'Easiest',
    prereq: 'Node.js 20+ only — no hardware required.',
    command: 'agenticros up sim-amr',
    description: 'Boot a Gazebo AMR or 6-DOF arm with the same topic names as a real robot. Chat with any supported agent against the sim in minutes.',
    cta: { label: 'See simulation specs', href: '#simulation' },
  },
  {
    title: 'Real robot',
    badge: 'Hardware',
    prereq: 'Node.js 20+, ROS 2 Humble or Jazzy, RealSense + a mobile base (or your own stack).',
    command: 'agenticros init && agenticros up real',
    description: 'The init wizard builds the workspace, installs the OpenClaw plugin, and runs a health check. Then launch the real-robot stack.',
    cta: {
      label: 'Robot setup guide',
      href: 'https://github.com/agenticros/agenticros/blob/main/docs/robot-setup.md',
      external: true,
    },
  },
  {
    title: 'Remote agent',
    badge: 'Engineers',
    prereq: 'Agent on a laptop or cloud; robot on the network with rosbridge, Zenoh, or WebRTC.',
    command: 'agenticros config set transport.mode rosbridge',
    description: 'Pick a deployment mode — same machine (local DDS), LAN (rosbridge), cloud (WebRTC), or Zenoh RMW. One config file, four transports.',
    cta: { label: 'Deployment modes', href: '#deployment' },
    cta2: {
      label: 'Architecture doc',
      href: 'https://github.com/agenticros/agenticros/blob/main/docs/architecture.md',
      external: true,
    },
  },
]

export default function ChoosePath() {
  return (
    <section
      id="choose-path"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Choose Your Path
        </h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Ran <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">npx agenticros</code>?
          Pick the path that matches your setup — you can switch later with{' '}
          <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-sm text-coral-bright">agenticros mode</code>.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {paths.map(({ title, badge, prereq, command, description, cta, cta2 }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-[var(--border-subtle)] p-5"
              style={{ background: 'var(--surface-card)' }}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-text-primary">{title}</h3>
                <span className="rounded-full border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-text-muted">
                  {badge}
                </span>
              </div>
              <p className="mt-2 text-xs text-text-muted">{prereq}</p>
              <pre
                className="mt-3 overflow-x-auto rounded-lg p-3 font-mono text-xs text-text-primary"
                style={{ background: 'var(--surface-inset-highlight)' }}
              >
                <code>{command}</code>
              </pre>
              <p className="mt-3 flex-1 text-sm text-text-secondary">{description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={cta.href}
                  className="text-sm text-cyan-bright hover:underline"
                  {...('external' in cta && cta.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {cta.label} →
                </a>
                {cta2 && (
                  <a
                    href={cta2.href}
                    className="text-sm text-cyan-bright hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cta2.label} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollArrow nextId="features" label="Continue to Features" />
    </section>
  )
}
