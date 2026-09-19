import { cn } from "@/lib/cn";

/** White panel that every numbered section of the showcase sits inside. */
export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "min-w-0 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** The numbered orange eyebrow + letter-spaced title heading each section. */
export function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-6 flex items-center gap-4">
      <span className="text-eyebrow text-primary-500">{number}</span>
      <span className="text-eyebrow text-neutral-900">{title}</span>
    </h2>
  );
}

/** Small grey label above a group of examples. */
export function GroupLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-body text-neutral-700">{children}</p>;
}

/** Bulleted spec list used by the Icons, Buttons and Inputs sections. */
export function SpecList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-body font-semibold text-neutral-900">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-body text-neutral-700">
            <span aria-hidden="true" className="text-neutral-300">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
