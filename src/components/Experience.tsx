import { experience } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading number="02" title="Experience" />
      <ol className="relative space-y-10 border-l border-border pl-8">
        {experience.map((item) => (
          <li key={`${item.org}-${item.period}`} className="relative">
            <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
            <p className="font-mono text-xs text-accent">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-text">
              {item.role} <span className="text-text-secondary">· {item.org}</span>
            </h3>
            <ul className="mt-3 space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                  <span className="mt-1 shrink-0 text-accent">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
