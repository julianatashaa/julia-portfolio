import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-primary-950 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{description}</p>
      )}
    </div>
  );
}
