import ScrollArrow from './ScrollArrow'

export default function Teleop() {
  return (
    <section
      id="teleop"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Teleop &amp; Config UI
        </h2>
        <p className="mt-4 text-text-secondary">
          The OpenClaw plugin ships a browser-based teleop page and a config form — no extra install. Handy for manual driving while you tune your stack or demo the robot to friends.
        </p>
        <figure className="mt-8 overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-bg-elevated/40 p-3 shadow-2xl shadow-cyan-bright/10">
          <img
            src="/teleop.jpg"
            alt="AgenticROS Teleop in the browser: live camera feed, speed slider, camera topic selector, and directional drive buttons with Connected status"
            className="h-auto w-full rounded object-contain"
            loading="lazy"
          />
          <figcaption className="mt-3 text-center text-sm text-text-muted">
            Live camera, speed slider, and on-screen drive controls — plus WASD and Bluetooth gamepads.
          </figcaption>
        </figure>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div
            className="rounded-xl border border-[var(--border-subtle)] p-5"
            style={{ background: 'var(--surface-card)' }}
          >
            <h3 className="font-display font-medium text-text-primary">Teleop</h3>
            <pre
              className="mt-3 overflow-x-auto rounded-lg p-3 font-mono text-xs text-coral-bright"
              style={{ background: 'var(--surface-inset-highlight)' }}
            >
              <code>http://127.0.0.1:18789/plugins/agenticros/teleop/</code>
            </pre>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-secondary">
              <li>Live camera feed (multiple sources)</li>
              <li>On-screen buttons, WASD, Bluetooth gamepads</li>
              <li>Safety-clamped twist publishes to cmd_vel</li>
            </ul>
          </div>
          <div
            className="rounded-xl border border-[var(--border-subtle)] p-5"
            style={{ background: 'var(--surface-card)' }}
          >
            <h3 className="font-display font-medium text-text-primary">Config UI</h3>
            <pre
              className="mt-3 overflow-x-auto rounded-lg p-3 font-mono text-xs text-coral-bright"
              style={{ background: 'var(--surface-inset-highlight)' }}
            >
              <code>http://127.0.0.1:18789/plugins/agenticros/config</code>
            </pre>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-secondary">
              <li>Transport mode, robot namespace, camera topic</li>
              <li>Safety limits, teleop defaults</li>
              <li>Memory enable/disable without editing JSON</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-text-muted">
          Full HTTP API, proxy auth, and troubleshooting:{' '}
          <a
            href="https://github.com/agenticros/agenticros/blob/main/docs/teleop.md"
            className="text-cyan-bright hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs/teleop.md
          </a>
        </p>
      </div>
      <ScrollArrow nextId="skills" label="Continue to Skills" />
    </section>
  )
}
