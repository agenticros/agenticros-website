export default function Header() {
  const navLinks = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#quick-start', label: 'Quick Start' },
    { href: '#features', label: 'Features' },
    { href: '#agent-tools', label: 'Agent Tools' },
    { href: '#deployment', label: 'Deployment' },
    { href: '#simulation', label: 'Simulation' },
    { href: '#try-it', label: 'Try It' },
    { href: '#skills', label: 'Skills' },
    { href: '#memory', label: 'Memory' },
    { href: '#packages', label: 'Packages' },
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
        <div className="flex shrink-0 items-center gap-3">
          <details className="group relative xl:hidden">
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
          <a
            href="https://skills.agenticros.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-cyan-bright px-3 py-2 text-sm font-medium text-white transition hover:bg-cyan-mid"
            aria-label="Sign in to AgenticROS Skills with GitHub"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span className="hidden sm:inline">Sign in</span>
          </a>
        </div>
      </div>
    </header>
  )
}
