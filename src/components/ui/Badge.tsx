import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary-50 dark:bg-white/5 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-200 ring-1 ring-inset ring-primary-200 dark:ring-white/10",
        className
      )}
    >
      {children}
    </span>
  );
}
