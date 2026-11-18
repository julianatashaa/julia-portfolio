import { FiAward, FiBookOpen } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { bio, certifications, education, skillCategories } from "@/data/about";

// Shared styles so the Education and Certifications groups stay identical.
const groupHeading =
  "flex items-center gap-2 font-display text-lg font-semibold text-primary-950 dark:text-white";
const cardList = "mt-4 space-y-4";
const card =
  "rounded-xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5";
const cardTitle = "font-semibold text-primary-900 dark:text-white";
const cardMeta = "mt-1 text-xs font-medium text-slate-500 dark:text-slate-400";

/*
 * Grid cells are in mobile order (About → Skills → Education → Certifications).
 * On lg screens they form two rows, so the Education and Certifications
 * headings start at the same height.
 */
export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-primary-50/40 dark:bg-white/[0.02]">
      <Container>
        <AnimatedSection>
          <SectionHeading eyebrow="About Me" title="Background & Education" />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="max-w-[65ch] space-y-4 text-base leading-[1.7] text-slate-600 dark:text-slate-300">
              {bio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph.map((segment, j) =>
                    typeof segment === "string" ? (
                      segment
                    ) : (
                      <strong key={j} className="font-semibold text-primary-950 dark:text-white">
                        {segment.highlight}
                      </strong>
                    )
                  )}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className={groupHeading}>Skills</h3>
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
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h3 className={groupHeading}>
              <FiBookOpen className="h-5 w-5 text-accent-500" />
              Education
            </h3>
            <ul className={cardList}>
              {education.map((entry) => (
                <li key={entry.institution} className={card}>
                  <p className={cardTitle}>{entry.institution}</p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                    {entry.qualification}
                  </p>
                  <p className={cardMeta}>{entry.period}</p>
                  <p className="mt-2 text-sm font-medium text-accent-600 dark:text-accent-400">
                    {entry.detail}
                  </p>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className={groupHeading}>
              <FiAward className="h-5 w-5 text-accent-500" />
              Certifications
            </h3>
            <ul className={cardList}>
              {certifications.map((cert) => (
                <li key={cert.name} className={card}>
                  <p className={cardTitle}>{cert.name}</p>
                  <p className={cardMeta}>
                    {cert.issuer}
                    {cert.date && <> · {cert.date}</>}
                  </p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
