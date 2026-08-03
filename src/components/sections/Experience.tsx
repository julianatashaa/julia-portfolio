import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've Worked"
            description="Hands-on experience delivering production features as part of a professional development team."
          />
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {experience.map((entry, index) => (
            <AnimatedSection key={entry.company} delay={index * 0.1}>
              <div className="rounded-2xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-white/5 ring-1 ring-primary-100 dark:ring-white/10">
                      <FiBriefcase className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-primary-950 dark:text-white">
                        {entry.role}
                      </h3>
                      <p className="mt-0.5 font-medium text-accent-600 dark:text-accent-400">
                        {entry.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-slate-500 dark:text-slate-400 sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar className="h-4 w-4" />
                      {entry.duration}
                    </span>
                    {entry.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <FiMapPin className="h-4 w-4" />
                        {entry.location}
                      </span>
                    )}
                  </div>
                </div>

                {entry.technologies && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                )}

                <ul className="mt-6 space-y-3">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
