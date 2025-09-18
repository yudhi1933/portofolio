import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
      <div className="relative aspect-[16/10]">
        <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-gray-400">{project.description}</p>
        <div className="flex gap-2 pt-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-gray-700 bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
              {t}
            </span>
          ))}
        </div>
        {project.demo && (
          <Link href={project.demo} className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300">
            Live Demo →
          </Link>
        )}
        <Link href={project.repo} className="ml-3 inline-block text-sm text-blue-400 hover:text-blue-300">
          GitHub →
        </Link>
      </div>
    </article>
  );
}
