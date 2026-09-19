import type { ReactNode } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

/**
 * `compact` is the system card (mark beside the title).
 * `stacked` is the catalog card: cover on top, serif title, meta row below a divider.
 */
export type CourseCardVariant = "compact" | "stacked";

export type CourseCardProps = {
  title: string;
  summary: string;
  level: string;
  duration: string;
  moduleCount: number;
  /** Single-letter mark shown in the course tile when no cover is set. */
  initial: string;
  variant?: CourseCardVariant;
  /** Course cover, e.g. a brand mark. Replaces the initial tile when given. */
  cover?: ReactNode;
  /** Makes the whole card a link to the course. */
  href?: string;
  className?: string;
};

function Meta({
  level,
  duration,
  moduleCount,
  compact = false,
  className,
}: Pick<CourseCardProps, "level" | "duration" | "moduleCount"> & {
  /** Tightens the row so all three facts stay on one line in a narrow card. */
  compact?: boolean;
  className?: string;
}) {
  const iconSize = compact ? 12 : 14;

  return (
    <dl
      className={cn(
        "flex flex-wrap items-center gap-y-2 text-neutral-500",
        compact ? "gap-x-1.5 text-[11px] leading-4" : "gap-x-2.5 text-small",
        className,
      )}
    >
      <div className={cn("flex items-center whitespace-nowrap", compact ? "gap-1" : "gap-1.5")}>
        <Icon name="chart" variant="filled" size={iconSize} />
        <dt className="sr-only">Level</dt>
        <dd>{level}</dd>
      </div>
      <div className={cn("flex items-center whitespace-nowrap", compact ? "gap-1" : "gap-1.5")}>
        <Icon name="clock" size={iconSize} />
        <dt className="sr-only">Duration</dt>
        <dd>{duration}</dd>
      </div>
      <div className={cn("flex items-center whitespace-nowrap", compact ? "gap-1" : "gap-1.5")}>
        <Icon name="folder" size={iconSize} />
        <dt className="sr-only">Modules</dt>
        <dd>{moduleCount} modules</dd>
      </div>
    </dl>
  );
}

export function CourseCard({
  title,
  summary,
  level,
  duration,
  moduleCount,
  initial,
  variant = "compact",
  cover,
  href,
  className,
}: CourseCardProps) {
  if (variant === "stacked") {
    const heading = (
      <h3 className="font-display text-xl leading-7 font-bold text-neutral-900">
        {href ? (
          <Link
            href={href}
            className="rounded-xs outline-none after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
    );

    return (
      <Card
        className={cn(
          "relative flex h-full flex-col px-5 py-6 transition-shadow",
          href && "hover:shadow-md",
          className,
        )}
      >
        <div className="flex h-18 items-center">
          {cover ?? (
            <span
              aria-hidden="true"
              className="flex size-18 items-center justify-center rounded-lg bg-neutral-900 font-sans text-3xl font-semibold text-white"
            >
              {initial}
            </span>
          )}
        </div>
        <div className="mt-7">{heading}</div>
        <p className="mt-4 text-[15px] leading-6 text-neutral-500">{summary}</p>
        <div className="mt-auto border-t border-rule pt-6">
          <Meta level={level} duration={duration} moduleCount={moduleCount} compact />
        </div>
      </Card>
    );
  }

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
      <Meta
        level={level}
        duration={duration}
        moduleCount={moduleCount}
        className="mt-auto"
      />
    </Card>
  );
}
