import { cn } from "@/lib/cn";

export type ProgressBarProps = {
  /** 0-100. Values outside the range are clamped. */
  value: number;
  showLabel?: boolean;
  label?: string;
  className?: string;
};

export function ProgressBar({
  value,
  showLabel = true,
  label = "complete",
  className,
}: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, Math.round(value)));

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress: ${percent}% ${label}`}
        className="h-2 flex-1 overflow-hidden rounded-full bg-primary-100"
      >
        <div
          className="h-full rounded-full bg-primary-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel ? (
        <p className="shrink-0 text-body">
          <span className="font-semibold text-neutral-900">{percent}%</span>{" "}
          <span className="text-neutral-500">{label}</span>
        </p>
      ) : null}
    </div>
  );
}
