import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type ResourceCardProps = {
  title: string;
  description: string;
  /** Resource type label, e.g. "PDF". */
  type: string;
  /** Human-readable size, e.g. "1.2 MB". */
  size: string;
  href: string;
  className?: string;
};

export function ResourceCard({
  title,
  description,
  type,
  size,
  href,
  className,
}: ResourceCardProps) {
  return (
    <Card className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-start gap-3">
        <Icon name="document" size={24} className="mt-0.5 text-neutral-900" />
        <div className="min-w-0">
          <h3 className="text-heading-3 text-neutral-900">{title}</h3>
          <p className="mt-1 text-body text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3">
        <p className="text-body text-neutral-500">
          {type} <span aria-hidden="true">·</span> {size}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${title}`}
          className={cn(
            "rounded-xs text-primary-500 transition-colors hover:text-primary-600 outline-none",
            "focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
          )}
        >
          <Icon name="external-link" size={20} />
        </a>
      </div>
    </Card>
  );
}
