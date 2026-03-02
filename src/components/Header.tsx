export default function Header() {
  const navLinks = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#quick-start', label: 'Quick Start' },
    { href: '#features', label: 'Features' },
    { href: '#agent-tools', label: 'Agent Tools' },
    { href: '#deployment', label: 'Deployment' },
    { href: '#try-it', label: 'Try It' },
    { href: '#packages', label: 'Packages' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-bg-deep/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/agenticros.png" alt="AgenticROS" className="h-8 w-8" />
          <span className="font-display text-xl font-semibold text-coral-bright">AgenticROS</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-text-secondary transition hover:text-text-primary"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
