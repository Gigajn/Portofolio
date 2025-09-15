import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover group">

        {/* Wrapper harus relative + punya aspect ratio agar <Image fill /> bisa menghitung ukuran */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}                 // contoh: "/assets/stok-frigate.jpg"
            alt={project.title}
            fill                                 // gunakan fill + parent relative
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            quality={85}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={false}                     // biarkan lazy untuk kartu (hemat bandwidth)
          />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-brand-50/80 via-transparent to-transparent" />
        </div>


      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight">

              {project.title}
         
          </h3>

          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-brand-700"
              title="Demo"
            >
              <ExternalLink size={18} />
            </a>
          ) : null}
        </div>

        <p className="text-sm text-slate-600 line-clamp-3 min-h-[3.75rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
          {project.tech.length > 4 ? (
            <span className="badge">+{project.tech.length - 4}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
