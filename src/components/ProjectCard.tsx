import Link from "next/link";
import { ArrowUpRight, ExternalLink, FolderDown, Github } from "lucide-react";
import { ProjectCover } from "@/components/ProjectCover";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover group relative flex flex-col overflow-hidden">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
        <ProjectCover
          project={project}
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="badge-brand absolute left-3 top-3 bg-white/95 shadow-sm">
          {project.category}
        </span>
        {project.status ? (
          <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900 shadow-sm">
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="flex items-start justify-between gap-3 text-lg font-bold leading-snug text-slate-900">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </Link>
          <ArrowUpRight
            size={20}
            className="mt-0.5 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
            aria-hidden
          />
        </h3>

        <p className="flex-1 text-sm leading-6 text-slate-600">{project.summary}</p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Teknologi">
          {project.tech.map((t) => (
            <li key={t} className="badge">
              {t}
            </li>
          ))}
        </ul>

        {project.links?.github || project.links?.demo || project.links?.drive ? (
          <div className="relative z-10 flex flex-wrap gap-4 border-t border-slate-100 pt-3 text-sm font-semibold">
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-900">
                <ExternalLink size={15} /> Live Demo
              </a>
            ) : null}
            {project.links.github ? (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900">
                <Github size={15} /> Source Code
              </a>
            ) : null}
            {project.links.drive ? (
              <a href={project.links.drive} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900">
                <FolderDown size={15} /> Google Drive
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
