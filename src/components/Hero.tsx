import Image from "next/image";
import { ArrowRight, Download, GraduationCap, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { personal } from "@/data/personal";
import { projects, projectCategories } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export function Hero() {
  const totalSkills = skillGroups.reduce((n, g) => n + g.items.length, 0);
  const stats = [
    { value: projects.length, label: "Proyek" },
    { value: projectCategories.length, label: "Bidang" },
    { value: `${totalSkills}+`, label: "Teknologi" },
  ];
  const edu = personal.education[0];

  return (
    <section id="beranda" className="grid items-center gap-12 pt-6 md:pt-14 lg:grid-cols-[1.35fr_1fr]">
      <div className="space-y-7">
        {personal.openTo ? (
          <span className="badge-brand">
            <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden />
            {personal.openTo}
          </span>
        ) : null}

        <div className="space-y-4">
          <p className="text-lg font-medium text-slate-600">Halo, saya</p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {personal.name}
          </h1>
          <p className="text-xl font-semibold text-brand-700 md:text-2xl">{personal.headline}</p>
        </div>

        <p className="max-w-xl text-lg leading-8 text-slate-600">{personal.summary}</p>

        <div className="flex flex-wrap gap-3">
          <a href="#proyek" className="btn-primary">
            Lihat Proyek <ArrowRight size={18} />
          </a>
          {personal.cvUrl ? (
            <a href={personal.cvUrl} className="btn-ghost" download>
              <Download size={18} /> Unduh CV
            </a>
          ) : (
            <a href="#kontak" className="btn-ghost">
              <Mail size={18} /> Hubungi Saya
            </a>
          )}
        </div>

        <div className="flex items-center gap-3">
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

      {/* Kartu profil ringkas */}
      <aside className="card overflow-hidden" aria-label="Profil singkat">
        <div className="relative h-28 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400" />
        <div className="-mt-14 space-y-6 px-6 pb-6">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl border-4 border-white bg-brand-100 shadow-md">
            {personal.photo ? (
              <Image src={personal.photo} alt={`Foto ${personal.name}`} fill sizes="112px" className="object-cover" priority />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-3xl font-extrabold text-brand-700">
                {personal.initials}
              </span>
            )}
          </div>

          <div>
            <p className="text-lg font-bold text-slate-900">{personal.name}</p>
            <p className="subtle">{personal.role}</p>
          </div>

          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-brand-600" />
              <span>
                {edu.program}, {edu.institution}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-600" />
              <span>{personal.location}</span>
            </li>
          </ul>

          <dl className="grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 text-center">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-slate-900">{s.value}</dd>
                <dd className="text-xs font-medium text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </section>
  );
}
