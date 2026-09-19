import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type LessonVideoCardProps = {
  title: string;
  description: string;
  /** Derived label such as "Lesson 5.1". */
  lessonLabel: string;
  /** Formatted clip length, e.g. "12:45". */
  duration: string;
  /** Formatted start time the match resolves to, e.g. "12:45". */
  startLabel: string;
  href: string;
  className?: string;
};

export function LessonVideoCard({
  title,
  description,
  lessonLabel,
  duration,
  startLabel,
  href,
  className,
}: LessonVideoCardProps) {
  return (
    <Card className={cn("flex flex-col gap-3", className)}>
      <Badge tone="video">Video</Badge>
      <h3 className="text-heading-3 text-neutral-900">{title}</h3>
      <p className="text-body text-neutral-500">{description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-body text-neutral-500">
          {lessonLabel} <span aria-hidden="true">·</span> {duration}
        </p>
        <Link
          href={href}
          className={cn(
            "inline-flex items-center gap-2 rounded-xs font-sans text-sm font-medium text-primary-500",
            "transition-colors hover:text-primary-600 outline-none",
            "focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
          )}
        >
          <Icon name="play-circle" variant="filled" size={18} />
          Watch from {startLabel}
        </Link>
      </div>
    </Card>
  );
}
