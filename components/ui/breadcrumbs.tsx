import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-3">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-xs text-body text-neutral-500 transition-colors outline-none",
                    "hover:text-primary-500",
                    "focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="text-body text-neutral-900"
                >
                  {item.label}
                </span>
              )}
              {isLast ? null : (
                <Icon name="chevron-right" size={14} className="text-neutral-300" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
