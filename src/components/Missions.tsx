import ScrollArrow from './ScrollArrow'

const findApproachMission = `{
  "mission": {
    "name": "find chair and approach",
    "steps": [
      { "id": "find", "capability": "find_object", "inputs": { "target": "chair" } },
      {
        "id": "approach",
        "capability": "drive_base",
        "inputs": {
          "linear_x": 0.2,
          "angular_z": "{{find.outputs.horizontal_offset}}"
        }
      }
    ]
  }
}`

const fleetRobotsAdd = `agenticros robots add warehouse-amr \\
  --kind=amr --sensors=has_realsense,!has_arm \\
  --capabilities=drive_base,take_snapshot,find_object,follow_person`

const multiRobotMission = `{
  "mission": {
    "name": "AMR scouts, arm acts",
    "robot_id": "warehouse-amr",
    "steps": [
      { "id": "find", "capability": "find_object", "inputs": { "target": "box" } },
      {
        "id": "halt-arm",
        "capability": "drive_base",
        "inputs": { "robot_id": "lab-arm", "linear_x": 0 }
      }
    ]
  }
}`

export default function Missions() {
  return (
    <section
      id="missions"
      className="panel relative flex flex-col justify-center border-t border-[var(--border-subtle)] px-6 py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ⟩ Missions &amp; Orchestration
        </h2>
        <p className="mt-4 text-text-secondary">
          AgenticROS puts a <strong>contract layer</strong> between agent reasoning and ROS 2 execution.
          Agents plan in intentions; the platform validates against typed <strong>capabilities</strong>,
          compiles multi-step <strong>missions</strong>, and only then dispatches to the wire — with
          safety clamps and fleet filters applied first.
        </p>

        <div
          className="mt-6 rounded-xl border border-[var(--border-subtle)] p-5 font-mono text-sm text-text-muted"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <pre className="overflow-x-auto whitespace-pre text-text-primary">
            <code>{`Agent (reasoning)  →  Contract layer  →  ROS 2  →  Robot
                       ros2_list_capabilities
                       run_mission / mission_cancel
                       ros2_find_robots_for`}</code>
          </pre>
        </div>

        <h3 className="mt-10 font-display text-lg font-medium text-text-primary">
          1. Capabilities — robots advertise verbs
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-mono text-xs text-coral-bright">ros2_list_capabilities</code>{' '}
          returns the planning surface: <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">drive_base</code>,{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">find_object</code>,{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">follow_person</code>, plus whatever{' '}
          <a href="#skills" className="text-cyan-bright hover:underline">skills</a> you install. Agents reason about verbs, not raw topic names.
        </p>

        <h3 className="mt-8 font-display text-lg font-medium text-text-primary">
          2. Chain skills with <code className="font-mono text-coral-bright">run_mission</code>
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Pass a natural-language <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">goal</code>{' '}
          (<em>&quot;find a chair and drive toward it&quot;</em>) or a declarative step graph. Outputs flow into later steps via{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">{'{{stepId.outputs.field}}'}</code> templates:
        </p>
        <pre
          className="mt-3 overflow-x-auto rounded-lg p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{findApproachMission}</code>
        </pre>
        <p className="mt-3 text-sm text-text-secondary">
          The local planner compiles common goals deterministically — no extra LLM required. Unrecognised goals return the capability list so the agent can self-correct.
        </p>

        <h3 className="mt-8 font-display text-lg font-medium text-text-primary">
          3. Fleet-aware routing
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Register robots with{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">agenticros robots add</code>.
          Use <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_find_robots_for</code>{' '}
          to pick *who can run a verb right now*, then pin a mission with <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">robot_id</code> or mix robots per step:
        </p>
        <pre
          className="mt-3 overflow-x-auto rounded-lg p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{fleetRobotsAdd}</code>
        </pre>
        <pre
          className="mt-3 overflow-x-auto rounded-lg p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{multiRobotMission}</code>
        </pre>

        <h3 className="mt-8 font-display text-lg font-medium text-text-primary">
          4. Cancel + cross-agent handoff
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission_cancel</code>{' '}
          stops at the next step boundary. With{' '}
          <a href="#memory" className="text-cyan-bright hover:underline">memory</a> enabled, every step is written to{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission:&lt;id&gt;</code> — a second agent can{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">memory_recall</code> the timeline and resume.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/agenticros/agenticros/blob/main/docs/missions.md"
            className="inline-flex items-center rounded-lg bg-cyan-bright px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full missions guide →
          </a>
          <a
            href="https://github.com/agenticros/agenticros/blob/main/examples/find-and-approach/README.md"
            className="inline-flex items-center rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-bg-elevated"
            style={{ background: 'var(--surface-card)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find &amp; approach example
          </a>
        </div>
      </div>
      <ScrollArrow nextId="agent-tools" label="Continue to Agent Tools" />
    </section>
  )
}
