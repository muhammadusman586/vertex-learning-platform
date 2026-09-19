"use client";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

const ITEM =
  "inline-flex size-9 items-center justify-center rounded-sm font-sans text-sm transition-colors " +
  "outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:text-neutral-300";

/** Builds the 1 … n window the reference shows: first pages, an ellipsis, then the last page. */
function buildPages(page: number, totalPages: number): Array<number | "ellipsis"> {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  // Keep three numbers visible at either end, as the reference shows (1 2 3 ... 8).
  const window = new Set<number>([1, totalPages, page, page - 1, page + 1]);
  if (page <= 2) window.add(3);
  if (page >= totalPages - 1) window.add(totalPages - 2);
  const sorted = [...window].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);

  const result: Array<number | "ellipsis"> = [];
  let previous = 0;
  for (const value of sorted) {
    if (previous && value - previous > 1) result.push("ellipsis");
    result.push(value);
    previous = value;
  }
  return result;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = buildPages(page, totalPages);

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange?.(page - 1)}
        className={cn(ITEM, "text-neutral-700 hover:text-primary-500")}
      >
        <Icon name="chevron-left" size={18} />
      </button>
      {pages.map((entry, index) =>
        entry === "ellipsis" ? (
          <span
            key={`ellipsis-${index}`}
            aria-hidden="true"
            className="inline-flex size-9 items-center justify-center text-sm text-neutral-500"
          >
            …
          </span>
        ) : (
          <button
            key={entry}
            type="button"
            aria-label={`Page ${entry}`}
            aria-current={entry === page ? "page" : undefined}
            onClick={() => onPageChange?.(entry)}
            className={cn(
              ITEM,
              entry === page
                ? "border border-primary-500 text-primary-500"
                : "text-neutral-700 hover:text-primary-500",
            )}
          >
            {entry}
          </button>
        ),
      )}
      <button
        type="button"
        aria-label="Next page"
        disabled={page >= totalPages}
        onClick={() => onPageChange?.(page + 1)}
        className={cn(ITEM, "text-neutral-700 hover:text-primary-500")}
      >
        <Icon name="chevron-right" size={18} />
      </button>
    </nav>
  );
}
