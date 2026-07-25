import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectsData";

export default function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
        02 · Featured Work
      </p>
      <h2 className="mb-14 font-display text-2xl font-semibold text-text sm:text-3xl">
        Projects, done properly.
      </h2>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
