import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return { title: "Proyek tidak ditemukan" };
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: p.title, description: p.summary, images: [{ url: p.image }] },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const meta = [
    { label: "Kategori", value: p.category },
    { label: "Peran", value: p.role },
    { label: "Periode", value: p.period },
  ].filter((m) => m.value);

  return (
    <article className="mx-auto max-w-4xl space-y-10">
      <Link href="/#proyek" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-700">
        <ArrowLeft size={16} /> Kembali ke daftar proyek
      </Link>

      <header className="space-y-4">
        <span className="badge-brand">{p.category}</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">{p.title}</h1>
        <p className="max-w-2xl text-lg text-slate-600">{p.summary}</p>
      </header>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={p.image}
          alt={`Tampilan proyek ${p.title}`}
          fill
          sizes="(min-width:1024px) 896px, 100vw"
          quality={90}
          className="object-cover"
          priority
        />
      </div>

      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Tentang proyek</h2>
            <p className="leading-8 text-slate-700">{p.description}</p>
          </section>

          {p.highlights?.length ? (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">Poin utama</h2>
              <ul className="space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="card h-fit space-y-5 p-6">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{m.label}</p>
              <p className="font-medium text-slate-800">{m.value}</p>
            </div>
          ))}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Teknologi</p>
            <ul className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <li key={t} className="badge">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {p.links?.demo || p.links?.github ? (
            <div className="flex flex-col gap-2 pt-1">
              {p.links.demo ? (
                <a className="btn-primary" href={p.links.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Lihat Demo
                </a>
              ) : null}
              {p.links.github ? (
                <a className="btn-ghost" href={p.links.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> Source Code
                </a>
              ) : null}
            </div>
          ) : null}
        </aside>
      </div>

      <nav className="border-t border-slate-200 pt-8" aria-label="Proyek berikutnya">
        <Link href={`/projects/${next.slug}`} className="card card-hover group flex items-center justify-between gap-4 p-5">
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Proyek berikutnya</span>
            <span className="font-bold text-slate-900">{next.title}</span>
          </span>
          <ArrowRight size={20} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-600" />
        </Link>
      </nav>
    </article>
  );
}
