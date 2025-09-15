import { personal } from "@/data/personal";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="card p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2 space-y-2">
        <h3 className="text-xl font-semibold">Let’s collaborate</h3>
        <p className="subtle">
          Interested in working together or have a question? Feel free to send me an email.
        </p>
      </div>
      <div className="flex md:justify-end">
        <a
          className="btn-primary"
          href={`mailto:${personal.email}`}
          aria-label="Send email"
        >
          <Mail size={18} className="-ml-1" /> Send Email
        </a>
      </div>
    </div>
  );
}
