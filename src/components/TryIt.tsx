const examples = [
  '"Move forward 1 meter" — publishes velocity to /cmd_vel',
  '"Follow Me" — skill to follow a person (depth + optional VLM)',
  '"Navigate to the kitchen" — sends a Nav2 goal',
  '"What do you see?" — captures a camera frame',
  '"Check the battery" — reads /battery_state',
  '/estop — emergency stop (bypasses AI)',
]

export default function TryIt() {
  return (
    <section id="try-it" className="scroll-mt-20 border-t border-[var(--border-subtle)] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Try It
        </h2>
        <p className="mt-4 text-text-secondary">
          Send a message to your robot (via <a href="https://openclaw.ai/" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">OpenClaw</a>, <a href="https://www.nvidia.com/en-us/ai/nemoclaw" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">NemoClaw</a>, <a href="https://claude.com/product/claude-code" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a>, <a href="https://ai.google.dev/gemini-api/docs" className="text-cyan-bright hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>, or any supported agent):
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {examples.map((example) => (
            <span
              key={example}
              className="rounded-lg border border-[var(--border-subtle)] px-4 py-2 font-mono text-sm text-text-primary"
              style={{ background: 'var(--surface-card)' }}
            >
              {example}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
