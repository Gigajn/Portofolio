export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <header className="max-w-2xl space-y-3">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={`${id}-title`} className="h2">
          {title}
        </h2>
        {subtitle ? <p className="subtle text-lg">{subtitle}</p> : null}
      </header>
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}
