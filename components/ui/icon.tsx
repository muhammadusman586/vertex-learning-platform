import type { SVGProps } from "react";

import { cn } from "@/lib/cn";

/**
 * Icons are authored on a 24x24 grid with a 2px stroke and rounded caps/joins,
 * per the Icon Specs in the design system reference.
 */
export type IconName =
  | "bell"
  | "search"
  | "play-circle"
  | "document"
  | "bookmark"
  | "chart"
  | "clock"
  | "user"
  | "chevron-right"
  | "chevron-left"
  | "chevron-down"
  | "external-link"
  | "lock"
  | "check-circle"
  | "spinner"
  | "folder"
  | "eye"
  | "grid"
  | "target"
  | "accessibility";

export type IconVariant = "outline" | "filled";

/** The nine glyphs the reference shows in both outline and filled styles. */
export const CORE_ICONS = [
  "bell",
  "search",
  "play-circle",
  "document",
  "bookmark",
  "chart",
  "clock",
  "user",
  "chevron-right",
] as const satisfies readonly IconName[];

type Glyph = {
  outline: React.ReactNode;
  filled?: React.ReactNode;
};

const GLYPHS: Record<IconName, Glyph> = {
  bell: {
    outline: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7Z" />
        <path d="M13.7 19a2 2 0 0 1-3.4 0" />
      </>
    ),
    filled: (
      <>
        <path
          d="M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7Z"
          fill="currentColor"
        />
        <path d="M13.7 19a2 2 0 0 1-3.4 0" />
      </>
    ),
  },
  search: {
    outline: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    filled: (
      <>
        <circle cx="11" cy="11" r="7" fill="currentColor" />
        <path d="m20 20-3.5-3.5" strokeWidth="2.5" />
      </>
    ),
  },
  "play-circle": {
    outline: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5v7l6-3.5-6-3.5Z" strokeLinejoin="round" />
      </>
    ),
    filled: (
      <>
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="var(--color-white)" stroke="none" />
      </>
    ),
  },
  document: {
    outline: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </>
    ),
    filled: (
      <>
        <path
          d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
          fill="currentColor"
        />
        <path d="M9 13h6" stroke="var(--color-white)" />
        <path d="M9 17h4" stroke="var(--color-white)" />
      </>
    ),
  },
  bookmark: {
    outline: <path d="M6 4h12v17l-6-4.5L6 21V4Z" strokeLinejoin="round" />,
    filled: (
      <path d="M6 4h12v17l-6-4.5L6 21V4Z" fill="currentColor" strokeLinejoin="round" />
    ),
  },
  chart: {
    outline: (
      <>
        <path d="M5 20v-5" />
        <path d="M12 20V9" />
        <path d="M19 20V4" />
      </>
    ),
    filled: (
      <>
        <path d="M5 20v-5" strokeWidth="3.5" />
        <path d="M12 20V9" strokeWidth="3.5" />
        <path d="M19 20V4" strokeWidth="3.5" />
      </>
    ),
  },
  clock: {
    outline: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    filled: (
      <>
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path d="M12 7v5l3.5 2" stroke="var(--color-white)" />
      </>
    ),
  },
  user: {
    outline: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    filled: (
      <>
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" fill="currentColor" strokeLinejoin="round" />
      </>
    ),
  },
  "chevron-right": {
    outline: <path d="m9 5 7 7-7 7" />,
    filled: <path d="m9 5 7 7-7 7" strokeWidth="3" />,
  },
  "chevron-left": { outline: <path d="m15 5-7 7 7 7" /> },
  "chevron-down": { outline: <path d="m6 9 6 6 6-6" /> },
  "external-link": {
    outline: (
      <>
        <path d="M14 4h6v6" />
        <path d="M20 4 11 13" />
        <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
  },
  lock: {
    outline: (
      <>
        <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
  "check-circle": {
    outline: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  },
  spinner: {
    outline: <path d="M12 3a9 9 0 1 0 9 9" />,
  },
  folder: {
    outline: (
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    ),
  },
  eye: {
    outline: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  grid: {
    outline: (
      <>
        <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5" />
        <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5" />
        <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5" />
        <rect x="13" y="13" width="7.5" height="7.5" rx="1.5" />
      </>
    ),
  },
  target: {
    outline: (
      <>
        <circle cx="11" cy="13" r="8" />
        <circle cx="11" cy="13" r="4" />
        <path d="m13 11 7-7" />
      </>
    ),
  },
  accessibility: {
    outline: (
      <>
        <circle cx="12" cy="4.5" r="1.8" />
        <path d="M4.5 8.5h15" />
        <path d="M12 8.5V15" />
        <path d="m8.5 21 3.5-6 3.5 6" />
      </>
    ),
  },
};

export type IconProps = {
  name: IconName;
  variant?: IconVariant;
  size?: number;
} & Omit<SVGProps<SVGSVGElement>, "name">;

export function Icon({
  name,
  variant = "outline",
  size = 24,
  className,
  ...props
}: IconProps) {
  const glyph = GLYPHS[name];
  const content = variant === "filled" ? (glyph.filled ?? glyph.outline) : glyph.outline;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
      {...props}
    >
      {content}
    </svg>
  );
}
