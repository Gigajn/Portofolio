import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { personal } from "@/data/personal";

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: personal.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: personal.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: personal.github.replace(/^https?:\/\/(www\.)?/, ""),
      href: personal.github,
      icon: Github,
    },
    ...(personal.whatsapp
      ? [
          {
            label: "WhatsApp",
            value: `+${personal.whatsapp}`,
            href: `https://wa.me/${personal.whatsapp}`,
            icon: MessageCircle,
          },
        ]
      : []),
  ];

  return (
    <div className="card overflow-hidden">
      <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Mari terhubung</h3>
          <p className="subtle leading-7">
            Saya terbuka untuk peluang magang, pekerjaan, maupun kolaborasi proyek. Silakan hubungi
            saya melalui salah satu kanal di samping, saya akan membalas secepatnya.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a className="btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={18} /> Kirim Email
            </a>
            {personal.cvUrl ? (
              <a className="btn-ghost" href={personal.cvUrl} download>
                <Download size={18} /> Unduh CV
              </a>
            ) : null}
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex h-full items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-brand-300 hover:bg-brand-50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 shadow-sm">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-medium text-slate-800">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
