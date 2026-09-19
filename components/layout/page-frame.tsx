import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type PageFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * The Vertex page shell: the sheet fills the viewport between two hatched rails,
 * so the header and section rules always run the full width. The rails only
 * appear once there is room for them (lg and up).
 */
export function PageFrame({ children, className }: PageFrameProps) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col lg:px-[30px]">
      <div
        aria-hidden="true"
        className="hatch pointer-events-none absolute inset-0 hidden lg:block"
      />
      <div
        className={cn(
          "relative flex w-full flex-1 flex-col bg-canvas lg:border-x lg:border-rule",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * The content column: 856px wide at the reference's 1024px viewport (the sheet is
 * 964px there), growing to 1152px on wider screens.
 */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1260px] px-6 lg:px-[54px]", className)}>
      {children}
    </div>
  );
}
