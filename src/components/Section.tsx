export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={id ? `${id}-title` : undefined}>
      <header className="section-header">
        <h2 id={id ? `${id}-title` : undefined} className="h2">{title}</h2>
        {subtitle ? <p className="subtle max-w-2xl">{subtitle}</p> : null}
        <div className="separator" />
      </header>

      <div className="section-body">
        {children}
      </div>
    </section>
  );
}
