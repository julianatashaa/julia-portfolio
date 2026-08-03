import { FiUsers } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { leadership } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Leadership & Involvement"
            title="Beyond the Classroom"
            description="Organizing and facilitating community and student initiatives alongside my studies."
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {leadership.map((entry, index) => (
            <AnimatedSection key={entry.role} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-primary-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 dark:bg-white/5 ring-1 ring-accent-100 dark:ring-white/10">
                  <FiUsers className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-primary-950 dark:text-white">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                  {entry.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {entry.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
