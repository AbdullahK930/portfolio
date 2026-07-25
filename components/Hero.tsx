import TerminalWindow from "./TerminalWindow";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-36 sm:pt-44">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fadeUp">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-teal">
            Available for work
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
            I build software that
            <br />
            actually ships.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Software engineer focused on AI-powered products and
            full-stack applications — from system design to a working
            interface in the user&apos;s hands.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-md bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-6 py-3 font-mono text-sm text-text transition-colors hover:border-amber/50"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="animate-fadeUp [animation-delay:150ms]">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
