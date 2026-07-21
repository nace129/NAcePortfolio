import { about, certifications } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { AwsBadgeIcon, ShieldCheckIcon, ExternalLinkIcon } from "@/components/icons";

const badgeIcons = {
  aws: AwsBadgeIcon,
  ceh: ShieldCheckIcon,
};

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
          <div className="mt-4 space-y-3">
            {certifications.map((cert) => {
              const BadgeIcon = badgeIcons[cert.badge];
              return (
                <a
                  key={cert.name}
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 rounded-md border border-border bg-bg px-3 py-3 transition-colors hover:border-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <BadgeIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-text">
                      {cert.name}
                    </span>
                    <span className="block text-xs text-text-secondary">
                      {cert.issuer} &middot; {cert.credentialLabel}
                    </span>
                  </span>
                  <ExternalLinkIcon className="h-4 w-4 shrink-0 text-text-secondary transition-colors group-hover:text-accent" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
