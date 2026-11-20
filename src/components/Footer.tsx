import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/70">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personal.name}. Dibuat dengan Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          <a href={personal.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${personal.email}`} className="icon-btn" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
