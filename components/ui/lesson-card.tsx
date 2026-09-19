import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type LessonCardProps = {
  title: string;
  description: string;
  /** Derived label such as "Module 5". */
  moduleLabel: string;
  href: string;
  className?: string;
};

export function LessonCard({
  title,
  description,
  moduleLabel,
  href,
  className,
}: LessonCardProps) {
  return (
    <Card className={cn("flex flex-col gap-3", className)}>
      <Badge tone="lesson">Lesson</Badge>
      <h3 className="text-heading-3 text-neutral-900">{title}</h3>
      <p className="text-body text-neutral-500">{description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-body text-neutral-500">{moduleLabel}</p>
        <Link
          href={href}
          className={cn(
            "inline-flex items-center gap-2 rounded-xs font-sans text-sm font-medium text-primary-500",
            "transition-colors hover:text-primary-600 outline-none",
            "focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
          )}
        >
          View lesson
          <Icon name="external-link" size={16} />
        </Link>
      </div>
    </Card>
  );
}
