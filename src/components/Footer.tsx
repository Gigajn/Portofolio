import { personal } from "@/data/personal";
import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="container py-10">
        <div className="card p-6 flex items-center justify-center">
          <div className="flex items-center gap-4">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="h-11 w-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-brand-700 hover:bg-slate-100 flex items-center justify-center transition shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            )}

            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="h-11 w-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-brand-700 hover:bg-slate-100 flex items-center justify-center transition shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}

            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                title="Email"
                className="h-11 w-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-brand-700 hover:bg-slate-100 flex items-center justify-center transition shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
