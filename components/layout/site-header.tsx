import { PageContainer } from "@/components/layout/page-frame";
import { Icon, NavBar, type NavItem } from "@/components/ui";

export type SiteHeaderProps = {
  items?: NavItem[];
  /** href of the nav item to mark as current. Empty marks none, as on the home page. */
  activeHref?: string;
};

export function SiteHeader({ items, activeHref = "" }: SiteHeaderProps) {
  return (
    <header className="border-b border-rule">
      <PageContainer className="flex min-h-24 items-center justify-between gap-4 py-4">
        <NavBar items={items} activeHref={activeHref} size="md" />
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-xs text-neutral-900 transition-colors outline-none hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <Icon name="bell" size={24} />
          </button>
          {/* Placeholder until Clerk supplies the signed-in user. */}
          <button
            type="button"
            aria-label="Account"
            className="flex size-12 items-center justify-center rounded-full border border-rule bg-neutral-100 text-neutral-500 transition-colors outline-none hover:text-neutral-700 focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <Icon name="user" variant="filled" size={26} />
          </button>
        </div>
      </PageContainer>
    </header>
  );
}
