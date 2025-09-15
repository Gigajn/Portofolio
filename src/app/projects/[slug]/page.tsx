import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const p = getProjectBySlug(params.slug);
  return { title: p ? `${p.title} – Portofolio` : "Proyek – Portofolio" };
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const p = getProjectBySlug(params.slug);
  if (!p) return notFound();

  return (
    <div className="space-y-8">
      <Link href="/" className="text-slate-600 hover:text-slate-900">
        ← Kembali
      </Link>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{p.title}</h1>
        {p.period ? <p className="subtle">{p.period}</p> : null}
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </header>

      {/* Gunakan aspect ratio + <Image fill /> agar tajam di semua device */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width:1024px) 960px, 100vw"
          quality={90}
          className="object-cover"
          priority={true}   // halaman detail: prioritas tinggi untuk gambar utama
        />
      </div>

      <div className="space-y-4">
        <p className="leading-7 text-slate-700">{p.description}</p>
        {p.highlights?.length ? (
          <ul className="list-disc list-inside text-slate-700">
            {p.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {p.links && (p.links.github || p.links.demo) ? (
        <div className="flex gap-3">
          {p.links.demo && (
            <a className="btn-primary" href={p.links.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {p.links.github && (
            <a className="btn-ghost" href={p.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      ) : null}
    </div>
  );
}
