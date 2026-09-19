import { cn } from "@/lib/cn";

export type BadgeTone = "video" | "lesson" | "popular";

const TONES: Record<BadgeTone, string> = {
  video: "bg-primary-100 text-primary-500",
  lesson: "bg-lesson-bg text-lesson",
  popular: "bg-primary-100 text-primary-500",
};

export type BadgeProps = {
  tone: BadgeTone;
  children: React.ReactNode;
  className?: string;
};

export function Badge({ tone, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-sm px-2 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.08em]",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
