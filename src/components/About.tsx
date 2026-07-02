import { about, certifications } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading number="01" title="About" />
      <div className="grid gap-10 md:grid-cols-3">
        <p className="text-base leading-relaxed text-text-secondary md:col-span-2">
          {about}
        </p>
        <div className="rounded-lg border border-border bg-bg-alt p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Certifications
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2">
                <span className="text-accent">▹</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
