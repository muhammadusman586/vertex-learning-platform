import { cn } from "@/lib/cn";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Shared shell for every card in the system: white, hairline border, radius lg, shadow sm. */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-white p-5 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
