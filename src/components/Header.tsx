export default function Header() {
  const navLinks = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#quick-start', label: 'Quick Start' },
    { href: '#features', label: 'Features' },
    { href: '#missions', label: 'Missions' },
    { href: '#agent-tools', label: 'Agent Tools' },
    { href: '#deployment', label: 'Deployment' },
    { href: '#simulation', label: 'Simulation' },
    { href: '#try-it', label: 'Try It' },
    { href: '#skills', label: 'Skills' },
    { href: '#memory', label: 'Memory' },
    { href: '#packages', label: 'Packages' },
    { href: '#cloud', label: 'Cloud' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-bg-deep/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="flex h-10 w-52 shrink-0 items-center gap-2" aria-label="AgenticROS home">
          <img
            src="/agenticros-a.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-10 object-cover object-center"
          />
          <img
            src="/agenticros-text-only-white.png"
            alt="AgenticROS"
            className="h-5 min-w-0 flex-1 object-contain object-left"
          />
        </a>
        <nav className="hidden items-center gap-4 xl:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap text-sm text-text-secondary transition hover:text-text-primary"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3 xl:hidden">
          <details className="group relative">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-[var(--border-subtle)] text-text-secondary transition hover:border-cyan-bright hover:text-cyan-bright focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation</span>
              <span className="relative block h-3.5 w-5 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-5 before:bg-current before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-5 after:bg-current after:content-['']">
                <span className="absolute left-0 top-1.5 h-0.5 w-5 bg-current" />
              </span>
            </summary>
            <nav className="absolute right-0 mt-3 grid w-56 gap-1 rounded-lg border border-[var(--border-subtle)] bg-bg-elevated p-2 shadow-2xl shadow-black/40">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-md px-3 py-2 text-sm text-text-secondary transition hover:bg-white/5 hover:text-text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
