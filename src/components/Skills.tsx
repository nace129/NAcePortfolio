import { skills } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading number="03" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-border bg-bg-alt p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
