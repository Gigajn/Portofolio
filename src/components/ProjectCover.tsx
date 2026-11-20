import Image from "next/image";
import type { Project } from "@/data/projects";

/** Gambar proyek, atau sampul otomatis bila proyek belum punya gambar. */
export function ProjectCover({
  project,
  sizes,
  priority = false,
  className = "",
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Tampilan proyek ${project.title}`}
        fill
        sizes={sizes}
        quality={80}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-500 p-6 text-center text-white ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <span className="relative text-2xl font-extrabold tracking-tight md:text-3xl">
        {project.title.split(" – ")[0]}
      </span>
      <span className="relative font-mono text-xs uppercase tracking-widest text-brand-100">
        {project.tech.slice(0, 3).join(" · ")}
      </span>
    </div>
  );
}
