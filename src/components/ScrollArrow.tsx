type Props = {
  nextId: string
  label?: string
}

export default function ScrollArrow({ nextId, label }: Props) {
  return (
    <a
      href={`#${nextId}`}
      aria-label={label ?? `Scroll to next section`}
      className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-bg-elevated/70 text-text-secondary backdrop-blur-md transition hover:border-coral-bright hover:text-coral-bright focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
    >
      <svg
        className="h-5 w-5 scroll-arrow-bounce"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </a>
  )
}
