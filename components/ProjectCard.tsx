"use client";

import { useRef, useState } from "react";

export type ProjectSection = { label: string; body: string };

export type ProjectData = {
  title: string;
  tagline: string;
  screenshot: string;
  screenshotAlt: string;
  sections: ProjectSection[]; // Problem / Approach / Challenges / Result / My Contribution
  stack: string[];
  liveUrl?: string; // omit if there's no live demo
  repoUrl?: string; // omit if there's no public repo link
};

export default function ProjectCard({ project }: { project: ProjectData }) {
  const shotRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const box = shotRef.current;
    if (!box) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = box.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: y * -6 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
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
            src={project.screenshot}
            alt={project.screenshotAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="grid items-start gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {project.tagline}
          </p>

          <div className="mt-8 space-y-6">
            {project.sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-teal"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-amber px-5 py-2.5 text-center font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Try it live ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line px-5 py-2.5 text-center font-mono text-sm text-text transition-colors hover:border-teal/50"
              >
                Source code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
