"use client";

import { useEffect, useRef, useState } from "react";

// Each line: the command typed, then the response printed after.
// EDIT: change these to introduce yourself the way you want.
const LINES: { command: string; response: string[] }[] = [
  { command: "whoami", response: ["Abdullah Shakoor — Software Engineer"] },
  {
    command: "cat focus.txt",
    response: ["AI-powered products \u00b7 full-stack apps"],
  },
  {
    command: "ls projects/",
    response: ["chart-gpt/", "(more shipping soon)"],
  },
  { command: "status", response: ["Available for freelance & full-time work"] },
];

const TYPE_SPEED_MS = 35;
const LINE_PAUSE_MS = 550;

export default function TerminalWindow() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [done, setDone] = useState(false);

  // --- Tilt-on-hover effect ---
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    // Respect users who've asked for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: y * -8 }); // max ~8deg of rotation, keeps it subtle
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }

    const current = LINES[lineIndex].command;

    if (!showResponse && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(t);
    }

    if (!showResponse && charIndex === current.length) {
      const t = setTimeout(() => setShowResponse(true), LINE_PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (showResponse) {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        setShowResponse(false);
      }, LINE_PAUSE_MS + 400);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex, showResponse]);

  return (
    <div style={{ perspective: "900px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="w-full rounded-lg border border-line bg-surface-2 shadow-2xl shadow-black/40"
      >
        {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">bash — 80x24</span>
      </div>

      {/* body */}
      <div className="min-h-[240px] p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {LINES.slice(0, lineIndex).map((l, i) => (
          <div key={i} className="mb-3">
            <div>
              <span className="text-teal">➜</span>{" "}
              <span className="text-muted">~/portfolio</span>{" "}
              <span className="text-text">{l.command}</span>
            </div>
            {l.response.map((r, j) => (
              <div key={j} className="text-amber">
                {r}
              </div>
            ))}
          </div>
        ))}

        {lineIndex < LINES.length && (
          <div>
            <span className="text-teal">➜</span>{" "}
            <span className="text-muted">~/portfolio</span>{" "}
            <span className="text-text">
              {LINES[lineIndex].command.slice(0, charIndex)}
            </span>
            {!showResponse && <span className="animate-blink text-amber">▌</span>}
            {showResponse &&
              LINES[lineIndex].response.map((r, j) => (
                <div key={j} className="mt-0.5 text-amber">
                  {r}
                </div>
              ))}
          </div>
        )}

        {done && (
          <div className="mt-3">
            <span className="text-teal">➜</span>{" "}
            <span className="text-muted">~/portfolio</span>{" "}
            <span className="animate-blink text-amber">▌</span>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
