import { personal } from "@/data/content";
import { GithubIcon, LinkedInIcon, MailIcon, DownloadIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-mono text-sm text-accent">05. What&apos;s Next?</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          I&apos;m open to full-time roles and collaborations in Applied AI and
          full-stack engineering. Reach out — I&apos;d love to hear from you.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="mt-8 rounded border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Say Hello
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6 border-t border-border pt-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-text-secondary">
          Designed &amp; built by {personal.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Nidhi Shah"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={personal.resumeUrl}
            download
            aria-label="Download resume"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <DownloadIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
