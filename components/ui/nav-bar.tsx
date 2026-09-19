import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";

export type NavItem = { label: string; href: string };

/** `sm` is the system default; `md` is the site header's larger scale. */
export type NavBarSize = "sm" | "md";

export type NavBarProps = {
  items?: NavItem[];
  /** href of the item to mark as current. */
  activeHref?: string;
  size?: NavBarSize;
  className?: string;
};

const SIZES: Record<
  NavBarSize,
  { logo: number; label: string; gap: string; itemGap: string }
> = {
  sm: { logo: 26, label: "text-sm", gap: "gap-x-8", itemGap: "gap-x-8" },
  md: { logo: 30, label: "text-base", gap: "gap-x-14", itemGap: "gap-x-11" },
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Courses", href: "/courses" },
  { label: "My Learning", href: "/my-learning" },
];

export function NavBar({
  items = DEFAULT_ITEMS,
  activeHref = "/courses",
  size = "sm",
  className,
}: NavBarProps) {
  const scale = SIZES[size];

  return (
    <nav
      aria-label="Main"
      className={cn("flex flex-wrap items-center gap-y-3", scale.gap, className)}
    >
      <Link
        href="/"
        className="rounded-xs outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
      >
        <Logo size={scale.logo} />
      </Link>
      <ul className={cn("flex flex-wrap items-center gap-y-2", scale.itemGap)}>
        {items.map((item) => {
          const isActive = item.href === activeHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-xs font-sans font-medium transition-colors outline-none",
                  scale.label,
                  "focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
                  isActive
                    ? "text-primary-500"
                    : "text-neutral-900 hover:text-primary-500",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
