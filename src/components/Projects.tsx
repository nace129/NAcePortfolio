import { projects } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { OtherProjects } from "@/components/OtherProjects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading number="04" title="Projects" />
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <OtherProjects />
    </section>
  );
}
