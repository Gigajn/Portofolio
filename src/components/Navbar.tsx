"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { personal } from "@/data/personal";

const links = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#keahlian", label: "Keahlian" },
  { href: "/#proyek", label: "Proyek" },
  { href: "/#pendidikan", label: "Pendidikan" },
  { href: "/#kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled || open
          ? "border-slate-200 bg-white/85 shadow-sm backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-xs text-white">
            {personal.initials}
          </span>
          <span>{personal.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          {personal.cvUrl ? (
            <a href={personal.cvUrl} className="btn-primary ml-2 px-4 py-2 text-sm" download>
              <Download size={16} /> Unduh CV
            </a>
          ) : null}
        </nav>

        <button
          className="rounded-lg border border-slate-200 bg-white p-2 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-slate-200 md:hidden" aria-label="Navigasi utama">
          <div className="container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            {personal.cvUrl ? (
              <a href={personal.cvUrl} className="btn-primary mt-2" download>
                <Download size={16} /> Unduh CV
              </a>
            ) : null}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
