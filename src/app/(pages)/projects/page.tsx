import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
