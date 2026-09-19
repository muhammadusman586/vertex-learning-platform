import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type CourseCardProps = {
  title: string;
  summary: string;
  level: string;
  duration: string;
  moduleCount: number;
  /** Single-letter mark shown in the course tile when no cover image is set. */
  initial: string;
  className?: string;
};

export function CourseCard({
  title,
  summary,
  level,
  duration,
  moduleCount,
  initial,
  className,
}: CourseCardProps) {
  return (
    <Card className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-md bg-neutral-900 font-sans text-xl font-semibold text-white"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <h3 className="text-heading-3 text-neutral-900">{title}</h3>
          <p className="mt-1 text-body text-neutral-500">{summary}</p>
        </div>
      </div>
      <dl className="mt-auto flex flex-wrap items-center gap-x-2.5 gap-y-2 text-small text-neutral-500">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <Icon name="chart" variant="filled" size={14} />
          <dt className="sr-only">Level</dt>
          <dd>{level}</dd>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <Icon name="clock" size={14} />
          <dt className="sr-only">Duration</dt>
          <dd>{duration}</dd>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <Icon name="folder" size={14} />
          <dt className="sr-only">Modules</dt>
          <dd>{moduleCount} modules</dd>
        </div>
      </dl>
    </Card>
  );
}
