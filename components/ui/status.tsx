import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type StatusKind = "in-progress" | "completed" | "now-playing" | "locked";

const STATUSES = {
  "in-progress": { label: "In Progress", icon: "spinner", tone: "text-primary-500" },
  completed: { label: "Completed", icon: "check-circle", tone: "text-success" },
  "now-playing": { label: "Now Playing", icon: "play-circle", tone: "text-primary-500" },
  locked: { label: "Locked", icon: "lock", tone: "text-neutral-900" },
} as const;

export type StatusProps = {
  kind: StatusKind;
  className?: string;
};

export function Status({ kind, className }: StatusProps) {
  const status = STATUSES[kind];

  return (
    <span className={cn("inline-flex items-center gap-2 text-body text-neutral-900", className)}>
      <Icon
        name={status.icon}
        variant={kind === "now-playing" ? "filled" : "outline"}
        size={20}
        className={status.tone}
      />
      {status.label}
    </span>
  );
}
