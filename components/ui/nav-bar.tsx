import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";

export type NavItem = { label: string; href: string };

export type NavBarProps = {
  items?: NavItem[];
  /** href of the item to mark as current. */
  activeHref?: string;
  className?: string;
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Courses", href: "/courses" },
  { label: "My Learning", href: "/my-learning" },
];

export function NavBar({
  items = DEFAULT_ITEMS,
  activeHref = "/courses",
  className,
}: NavBarProps) {
  return (
    <nav
      aria-label="Main"
      className={cn("flex flex-wrap items-center gap-x-8 gap-y-3", className)}
    >
      <Link
        href="/"
        className="rounded-xs outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
      >
        <Logo size={26} />
      </Link>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
        {items.map((item) => {
          const isActive = item.href === activeHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-xs font-sans text-sm font-medium transition-colors outline-none",
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
