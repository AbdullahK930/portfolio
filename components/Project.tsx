"use client";

import { useRef, useState } from "react";

// Pulled from the ChartGPT FYP report. Still check the "Live demo / Source"
// links below — those are yours to fill in.

const STACK = [
  "Web frontend (HTML/JS)",
  "Python backend API",
  "Cloud LLM API",
  "Vega-Lite",
  "Docker",
]; // EDIT: adjust to your exact stack if this isn't 1:1

export default function Project() {
  // --- Tilt-on-hover effect for the screenshot box ---
  const shotRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const box = shotRef.current;
    if (!box) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = box.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: y * -6 }); // small, screenshots shouldn't swing wildly
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section id="work" className="mx-auto max-w-content px-6 py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
        02 · Featured Work
      </p>
      <h2 className="mb-14 font-display text-2xl font-semibold text-text sm:text-3xl">
        One project, done properly.
      </h2>

      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        {/* EDIT: swap for a real screenshot or short screen recording GIF of Chart GPT */}
        <div style={{ perspective: "900px" }} className="border-b border-line">
          <div
            ref={shotRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
              transformStyle: "preserve-3d",
            }}
            className="relative aspect-[16/8] bg-surface-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/chartgpt-landing.png"
              alt="ChartGPT landing page"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid items-start gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
              Chart GPT
            </h3>
            <p className="mt-2 text-sm text-muted sm:text-base">
              A web app that turns plain-English questions about a CSV file
              into interactive charts — no formulas, no chart-picker menus,
              no code.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  Turning raw data into the right chart takes technical
                  knowledge most people don&apos;t have: choosing a chart
                  type, mapping the right columns to X/Y axes, and applying
                  the right aggregation. Tools like Excel and Tableau need UI
                  training; Python/R libraries need real coding skill; and
                  older &quot;natural language&quot; charting tools only work
                  with exact keyword matches, breaking on anything vague
                  like &quot;how are we performing this year?&quot;
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  Approach
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  A user uploads a CSV and types a question in a chat
                  interface. The backend sends only the data&apos;s{" "}
                  <em>schema</em> (column names + types) plus the question to
                  a cloud LLM — never the raw data itself, which keeps user
                  data private. The model runs a 9-step reasoning pipeline
                  (intent → column selection → filters → aggregation → chart
                  type → axis mapping → sorting → validation → JSON
                  generation) and returns a Vega-Lite chart spec, which
                  renders client-side as an interactive chart with hover,
                  zoom, and pan. Because conversation history is kept, users
                  can iterate — &quot;now make it a line chart&quot; — without
                  starting over.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  Challenges
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  LLMs hallucinate — the real risk here was the model
                  inventing a column that doesn&apos;t exist or misreading a
                  data type. We handled this with a constrained reasoning
                  prompt framework plus a runtime validation layer
                  (&quot;RegexGuard&quot;) that catches type mismatches — e.g.
                  applying a numeric filter to a text column — before a
                  broken chart ever reaches the user. We also had to design
                  around cloud API latency, keeping the full round trip
                  (schema packaging → LLM reasoning → chart render) under
                  ~2.5 seconds.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  Result
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  Usability testing with non-technical users scored 86.5 on
                  the System Usability Scale (&quot;Excellent&quot;). Across
                  98 functional and non-functional test cases, 96% passed on
                  the first run. The system supports exporting charts as
                  PNG, SVG, or the underlying JSON spec, plus shareable
                  read-only links.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  My Contribution
                </p>
                {/* EDIT: you said you built this solo — good to be ready to
                    explain briefly why the official report lists teammates
                    if it comes up (common in group FYPs), but this line
                    should describe what YOU actually built, in first person. */}
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  Built end-to-end as my Final Year Project — architecture,
                  backend API gateway, the 9-step reasoning pipeline, and the
                  frontend.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-teal"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {/* EDIT: replace REPO_NAME with your actual ChartGPT repo,
                  e.g. https://github.com/AbdullahK930/chartgpt */}
              <a
                href="https://github.com/AbdullahK930"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-amber px-5 py-2.5 text-center font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Source code ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT: delete this block once you have a 2nd project, or keep as a placeholder */}
      <div className="mt-6 rounded-xl border border-dashed border-line p-8 text-center">
        <p className="font-mono text-sm text-muted">
          + next project goes here
        </p>
      </div>
    </section>
  );
}
