import { FiAward, FiBookOpen } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { bio, certifications, education, skillCategories } from "@/data/about";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-primary-50/40 dark:bg-white/[0.02]">
      <Container>
        <AnimatedSection>
          <SectionHeading eyebrow="About Me" title="Background & Education" />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
              {bio}
            </p>

            <div className="mt-10">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-primary-950 dark:text-white">
                <FiBookOpen className="h-5 w-5 text-accent-500" />
                Education
              </h3>
              <ul className="mt-4 space-y-5">
                {education.map((entry) => (
                  <li
                    key={entry.institution}
                    className="rounded-xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-primary-900 dark:text-white">
                          {entry.institution}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                          {entry.qualification}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-accent-600 dark:text-accent-400">
                      {entry.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="font-display text-lg font-semibold text-primary-950 dark:text-white">
                Skills
              </h3>
              <div className="mt-4 space-y-5">
                {skillCategories.map((category) => (
                  <div key={category.category}>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {category.category}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-primary-950 dark:text-white">
                <FiAward className="h-5 w-5 text-accent-500" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between rounded-xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] px-5 py-4"
                  >
                    <span className="font-medium text-primary-900 dark:text-white">
                      {cert.name}
                    </span>
                    <span className="text-right text-sm text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                      {cert.date && <span className="block text-xs">{cert.date}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
