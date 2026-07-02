import type { Project } from "@/data/content";
import { GithubIcon, ExternalLinkIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-6 rounded-lg border border-border bg-bg-alt p-6 sm:p-8 md:grid-cols-12 md:items-start">
      <div className="md:col-span-12">
        <p className="font-mono text-xs text-accent">Featured Project</p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-text sm:text-2xl">{project.name}</h3>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} GitHub repository`}
              className="text-text-secondary transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.name} live demo`}
                className="text-text-secondary transition-colors hover:text-accent"
              >
                <ExternalLinkIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-base font-medium text-text-secondary">{project.pitch}</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-secondary">
              Problem
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-secondary">
              Approach
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {project.approach}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm font-medium text-accent">{project.outcome}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-bg px-3 py-1 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline mt-5 inline-flex items-center gap-2 font-mono text-sm text-text transition-colors hover:text-accent"
        >
          View on GitHub
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
