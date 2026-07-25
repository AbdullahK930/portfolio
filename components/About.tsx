const SKILLS = [
  "Python",
  "JavaScript / TypeScript",
  "React / Next.js",
  "LLM / OpenAI API integration",
  "REST APIs",
  "Vega-Lite",
  "Docker",
  "Git",
]; // EDIT: adjust as your stack grows

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
            01 · About
          </p>
          <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
            I build things,
            <br /> then I ship them.
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m a software engineer who builds AI-powered products end
            to end — from system architecture down to the interface a user
            actually touches. I care about code that solves a real problem,
            not code that just runs. I move fast, communicate directly, and
            I&apos;m comfortable owning a project from idea to a working
            product in someone&apos;s hands.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
