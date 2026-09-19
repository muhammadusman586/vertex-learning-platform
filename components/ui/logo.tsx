import { cn } from "@/lib/cn";

export type LogoProps = {
  /** Height of the mark in pixels. The wordmark scales alongside it. */
  size?: number;
  showWordmark?: boolean;
  className?: string;
};

export function Logo({ size = 28, showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        <path
          d="M4 5h24L16 28 4 5Z"
          stroke="var(--color-primary-500)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M9.5 9.5h13L16 21.5 9.5 9.5Z" fill="var(--color-primary-500)" />
      </svg>
      {showWordmark ? (
        <span
          className="font-sans font-semibold text-neutral-900"
          style={{ fontSize: size * 0.72, lineHeight: 1 }}
        >
          Vertex
        </span>
      ) : (
        <span className="sr-only">Vertex</span>
      )}
    </span>
  );
}
