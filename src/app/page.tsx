import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Contact } from "@/components/Contact";
import { projects } from "@/data/projects";
import { personal } from "@/data/personal";
import { skills } from "@/data/skills";

export default function HomePage() {
  return (
    <div className="page-stack">
      <section id="home">
        <Hero />
      </section>

      <Section
        id="projects"
        title="Projects"
        subtitle="Selected projects covering web, mobile, and machine learning."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section
        id="about"
        title="Short Profile"
        subtitle="Digital product engineering with a propensity towards back-end and data."
      >
        {/* Card wrapper to separate from page background */}
        <div className="relative">
          {/* subtle highlight on top edge (very light) */}
          <div className="pointer-events-none absolute -inset-x-2 -top-2 h-8 bg-gradient-to-b from-brand-100/70 to-transparent rounded-t-2xl" />

          <div className="card p-6 md:p-8 xl:p-10 bg-white/90 border-slate-200/80 backdrop-blur-sm">
            <div className="space-y-6">
              <p className="subtle text-[17px] leading-7 md:leading-8">
                I design and develop software that is easy to use and reliable
                behind the scenes. My work spans product interfaces and the core
                systems underneath, APIs, databases, and data flows that keep
                information accurate.
              </p>

              <div className="flex items-start gap-3 md:gap-4">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-5 w-1 rounded-full bg-brand-500/70"
                />
                <p className="text-sm text-slate-600">
                  I focus on clear endpoints, dependable data pipelines, and
                  small improvements that make the product smoother and easier
                  to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="Let's talk about building something useful."
      >
        <Contact />
      </Section>
    </div>
  );
}
