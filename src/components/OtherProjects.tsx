import { otherProjects } from "@/data/content";
import { GithubIcon } from "@/components/icons";

export function OtherProjects() {
  return (
    <div className="mt-16">
      <h3 className="font-mono text-sm uppercase tracking-widest text-text-secondary">
        Other Noteworthy Projects
      </h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {otherProjects.map((project) => (
          <li key={project.name}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-start gap-3 rounded-lg border border-border bg-bg-alt p-5 transition-colors hover:border-accent"
            >
              <GithubIcon className="mt-1 h-5 w-5 shrink-0 text-text-secondary" />
              <span>
                <span className="block font-semibold text-text">{project.name}</span>
                <span className="mt-1 block text-sm text-text-secondary">
                  {project.pitch}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
