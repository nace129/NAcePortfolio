import { personal } from "@/data/content";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  AwsBadgeIcon,
} from "@/components/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[90vh] max-w-content flex-col justify-center px-6 py-24 sm:px-10"
    >
      <div className="animate-fadeUp">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-alt px-3 py-1.5 font-mono text-xs text-text-secondary">
          <AwsBadgeIcon className="h-4 w-4 text-accent" />
          AWS Certified Solutions Architect — Associate
        </div>

        <p className="font-mono text-sm text-accent sm:text-base">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text sm:text-6xl">
          {personal.name}.
        </h1>
        <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-text-secondary sm:text-2xl">
          {personal.positioning}
        </p>
        <p className="mt-6 max-w-xl text-base text-text-secondary">
          {personal.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={personal.resumeUrl}
            download
            className="flex items-center gap-2 rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            Download Resume <DownloadIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 rounded px-3 py-3 text-sm text-text-secondary transition-colors hover:text-accent"
            aria-label="Email Nidhi Shah"
          >
            <MailIcon className="h-5 w-5" />
            {personal.email}
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
