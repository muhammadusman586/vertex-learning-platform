import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { PageContainer } from "@/components/layout/page-frame";
import { Button, Icon, NavBar, type NavItem } from "@/components/ui";

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
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="tertiary" size="md">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="md">Sign up</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "size-12",
                  userButtonTrigger:
                    "rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                },
              }}
            />
          </Show>
        </div>
      </PageContainer>
    </header>
  );
}
