import ScrollArrow from './ScrollArrow'

export default function Telepresence() {
  return (
    <section
      id="telepresence"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Telepresence
        </h2>
        <p className="mt-4 text-text-secondary">
          From{' '}
          <a
            href="https://cloud.agenticros.com"
            className="text-cyan-bright hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            AgenticROS Cloud
          </a>
          , share your camera and microphone onto the robot&apos;s Eyes display.
          People next to the robot see and hear you, and the tablet microphone
          comes back so the conversation is two-way. Video covers the animated
          face. Turn it off and the eyes are already blinking underneath.
          Voice-only leaves the eyes up and shows &quot;On a call.&quot;
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div
            className="rounded-xl border border-[var(--border-subtle)] p-5"
            style={{ background: 'var(--surface-card)' }}
          >
            <h3 className="font-display font-medium text-text-primary">On the robot</h3>
            <pre
              className="mt-3 overflow-x-auto rounded-lg p-3 font-mono text-xs text-coral-bright"
              style={{ background: 'var(--surface-inset-highlight)' }}
            >
              <code>agenticros up real --eyes{'\n'}agenticros connect</code>
            </pre>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-secondary">
              <li>Eyes stay on the tablet until you share video</li>
              <li>Chromium kiosk plays your voice and captures the mic</li>
              <li>R2D2 chirps pause for the length of the call</li>
            </ul>
          </div>
          <div
            className="rounded-xl border border-[var(--border-subtle)] p-5"
            style={{ background: 'var(--surface-card)' }}
          >
            <h3 className="font-display font-medium text-text-primary">On the control page</h3>
            <p className="mt-3 text-sm text-text-secondary">
              Video and Mic sit under the robot camera. Joystick, WASD, and the
              robot&apos;s own camera stay on the existing teleop session.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-secondary">
              <li>Video fills the tablet with your camera</li>
              <li>Mic sends your voice to the tablet speakers</li>
              <li>You hear the robot while either button is on</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-text-muted">
          Needs CLI 0.7.34 or newer, and Eyes running on the robot.{' '}
          <a
            href="https://github.com/agenticros/agenticros/blob/main/docs/eyes.md"
            className="text-cyan-bright hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs/eyes.md
          </a>
        </p>
      </div>
      <ScrollArrow nextId="memory" label="Continue to Memory" />
    </section>
  )
}
