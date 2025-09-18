import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function ProjectsPreview() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Highlighted Projects</h2>
        <a href="/projects" className="text-sm underline">
          View all →
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
