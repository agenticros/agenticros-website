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

const fleetJson = `{
  "robots": [
    {
      "id": "warehouse-amr",
      "kind": "amr",
      "sensors": { "has_realsense": true },
      "capabilities": ["drive_base", "find_object", "follow_person", "navigate_to"]
    }
  ]
}`

const navigateToMission = `{
  "mission": {
    "name": "dock at charger",
    "steps": [
      {
        "id": "nav",
        "capability": "navigate_to",
        "inputs": { "x": 2.1, "y": 0.4, "yaw": 0 }
      }
    ]
  }
}`

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
          Agents plan in named <strong>capabilities</strong>, not raw topics. The platform validates against
          typed manifests, compiles multi-step <strong>missions</strong>, and only then dispatches to the wire —
          with safety clamps, fleet filters, and pause/resume applied first.
        </p>

        <div
          className="mt-6 rounded-xl border border-[var(--border-subtle)] p-5 font-mono text-sm text-text-muted"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <pre className="overflow-x-auto whitespace-pre text-text-primary">
            <code>{`Agent (reasoning)  →  Contract layer  →  ROS 2  →  Robot
                       ros2_list_capabilities
                       run_mission / mission_pause / mission_resume / mission_cancel
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
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">follow_person</code>,{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">navigate_to</code>,{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">detect_humans</code>,{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">start_slam</code>, plus whatever{' '}
          <a href="#skills" className="text-cyan-bright hover:underline">skills</a> you install — including{' '}
          <strong>external ROS nodes</strong> and <strong>discoverable</strong> marketplace verbs not yet installed.
          Agents reason about verbs, not raw topic names.
        </p>

        <h3 className="mt-8 font-display text-lg font-medium text-text-primary">
          2. Chain skills with <code className="font-mono text-coral-bright">run_mission</code>
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Pass a natural-language <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">goal</code>{' '}
          (<em>&quot;find a chair and drive toward it&quot;</em>) or a declarative step graph. Outputs flow into later steps via{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">{'{{stepId.outputs.field}}'}</code> templates.
          Same dialect on OpenClaw, Claude / Codex MCP, and Gemini:
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
          3. Pause, resume, cancel
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission_pause</code>{' '}
          holds before the next step;{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission_resume</code>{' '}
          continues;{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission_cancel</code>{' '}
          aborts at the next step boundary (including while paused). Useful when a human walks into the path, or when a second agent needs to inspect state first.
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          With <a href="#memory" className="text-cyan-bright hover:underline">memory</a> enabled, every step is written to{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">mission:&lt;id&gt;</code> — another agent can{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">memory_recall</code> the timeline and pick up from there.
        </p>

        <h3 className="mt-8 font-display text-lg font-medium text-text-primary">
          4. Fleet awareness that matches the wire
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Online status comes from the <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">agenticros/robot_info</code>{' '}
          heartbeat (5s staleness) — not just <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">cmd_vel</code> heuristics.
          Check fleet inventory into git as{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">~/.agenticros/fleet.json</code>{' '}
          (or <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">AGENTICROS_FLEET_PATH</code>); it wins over{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">config.robots[]</code>. Then ask{' '}
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">ros2_find_robots_for</code>{' '}
          who can run a verb <em>right now</em>:
        </p>
        <pre
          className="mt-3 overflow-x-auto rounded-lg p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{fleetJson}</code>
        </pre>
        <pre
          className="mt-3 overflow-x-auto rounded-lg p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{multiRobotMission}</code>
        </pre>

        <h3 className="mt-8 font-display text-lg font-medium text-text-primary">
          5. Keep your stack — call it by name
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Point a capability manifest at an existing action, service, or topic (
          <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs text-coral-bright">external_ros_node</code>
          ). AgenticROS dispatches through your transport; bringup stays operator-owned. The reference{' '}
          <a
            href="https://github.com/agenticros/agenticros/tree/main/examples/navigate-to"
            className="text-cyan-bright hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            navigate_to
          </a>{' '}
          skill wraps Nav2&apos;s <code className="rounded bg-bg-elevated px-1 py-0.5 font-mono text-xs">NavigateToPose</code>:
        </p>
        <pre
          className="mt-3 overflow-x-auto rounded-lg p-4 font-mono text-sm text-text-primary"
          style={{ background: 'var(--surface-inset-highlight)' }}
        >
          <code>{navigateToMission}</code>
        </pre>

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
            href="https://github.com/agenticros/agenticros/blob/main/docs/blog/seed-catalog-and-skillrefs.md"
            className="inline-flex items-center rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-bg-elevated"
            style={{ background: 'var(--surface-card)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Seed catalog &amp; skillRefs
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
