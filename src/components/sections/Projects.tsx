import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-primary-50/40 dark:bg-white/[0.02]">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've Built"
            description="A mix of workplace, internship and academic projects spanning web and mobile platforms."
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={(index % 2) * 0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03]">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                  />
                  {project.status && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-300 dark:bg-amber-500/20 dark:text-amber-200 dark:ring-amber-400/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-primary-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {(project.liveUrl || project.sourceUrl) && (
                    <div className="mt-6 flex items-center gap-4 pt-4 border-t border-primary-100 dark:border-white/10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white"
                        >
                          <FiExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white"
                        >
                          <FiGithub className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  )}

                  {project.note && (
                    <p className="mt-6 pt-4 border-t border-primary-100 dark:border-white/10 text-xs italic text-slate-500 dark:text-slate-400">
                      {project.note}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
