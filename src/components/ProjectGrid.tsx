"use client";

import { useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

type Filter = "Semua" | ProjectCategory;

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const filters: Filter[] = ["Semua", ...projectCategories];
  const shown = filter === "Semua" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori proyek">
        {filters.map((f) => {
          const count = f === "Semua" ? projects.length : projects.filter((p) => p.category === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                active
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-brand-400 hover:bg-brand-50"
              }`}
            >
              {f} <span className={active ? "text-brand-100" : "text-slate-400"}>({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
