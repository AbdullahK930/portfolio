export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        {/* EDIT: your name / handle */}
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-text">
          Abdullah Shakoor
        </a>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-wider text-muted sm:flex">
          <a href="#about" className="transition-colors hover:text-text">
            About
          </a>
          <a href="#work" className="transition-colors hover:text-text">
            Work
          </a>
          <a href="#contact" className="transition-colors hover:text-text">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-amber/40 px-3 py-1.5 font-mono text-xs text-amber transition-colors hover:bg-amber/10"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
