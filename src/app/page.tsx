import { CheckCircle2, GraduationCap, Briefcase } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Contact } from "@/components/Contact";
import { personal } from "@/data/personal";
import { skillGroups } from "@/data/skills";

export default function HomePage() {
  return (
    <div className="page-stack">
      <Hero />

      <Section id="tentang" eyebrow="Tentang Saya" title="Profil singkat">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="card space-y-5 p-6 md:p-8">
            {personal.about.map((p) => (
              <p key={p} className="text-[17px] leading-8 text-slate-700">
                {p}
              </p>
            ))}
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="mb-4 font-bold text-slate-900">Cara saya bekerja</h3>
            <ul className="space-y-3">
              {personal.values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="keahlian"
        eyebrow="Keahlian"
        title="Teknologi yang saya gunakan"
        subtitle="Dikelompokkan berdasarkan bidang, sesuai proyek yang pernah saya kerjakan."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="card p-6">
              <h3 className="font-bold text-slate-900">{g.title}</h3>
              <p className="subtle mt-1 text-sm">{g.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="badge px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="proyek"
        eyebrow="Portofolio"
        title="Proyek pilihan"
        subtitle="Dari AI dan machine learning hingga aplikasi web dan Augmented Reality. Klik kartu untuk melihat detail, source code, atau demo."
      >
        <ProjectGrid />
      </Section>

      <Section id="pendidikan" eyebrow="Latar Belakang" title={personal.experience.length ? "Pendidikan & Pengalaman" : "Pendidikan"}>
        <ol className="space-y-5">
          {personal.experience.map((e) => (
            <li key={`${e.title}-${e.org}`} className="card flex gap-5 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Briefcase size={22} />
              </span>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">{e.title}</h3>
                <p className="subtle">
                  {e.org}
                  {e.period ? ` · ${e.period}` : ""}
                </p>
                {e.points.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
          {personal.education.map((e) => (
            <li key={e.institution} className="card flex gap-5 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <GraduationCap size={22} />
              </span>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">{e.institution}</h3>
                <p className="subtle">
                  {e.program}
                  {e.period ? ` · ${e.period}` : ""}
                </p>
                {e.notes.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                    {e.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="kontak" eyebrow="Kontak" title="Tertarik bekerja sama?">
        <Contact />
      </Section>
    </div>
  );
}
