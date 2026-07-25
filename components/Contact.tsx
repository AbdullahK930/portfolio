const LINKS = [
  { label: "Email", value: "shakoorabdullah93@gmail.com", href: "mailto:shakoorabdullah93@gmail.com" },
  { label: "GitHub", value: "github.com/AbdullahK930", href: "https://github.com/AbdullahK930" },
  { label: "LinkedIn", value: "linkedin.com/in/abdullah-shakoor", href: "https://www.linkedin.com/in/abdullah-shakoor-00a815275/" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24">
      <div className="rounded-xl border border-line bg-surface p-10 text-center sm:p-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
          03 · Contact
        </p>
        <h2 className="font-display text-2xl font-semibold text-text sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted sm:text-base">
          Open to freelance projects, collaborations, and full-time roles.
          Reach out directly — I read everything myself.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-amber/50 hover:text-amber"
            >
              {link.value}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-12 flex flex-col items-center gap-2 text-center font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Abdullah Shakoor</span>
        <span>Built with Next.js, deployed on Vercel.</span>
      </footer>
    </section>
  );
}
