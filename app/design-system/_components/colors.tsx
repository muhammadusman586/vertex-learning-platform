import { Panel, SectionTitle } from "./panel";

type Swatch = { name: string; hex: string; className: string; bordered?: boolean };

const PRIMARY: Swatch[] = [
  { name: "Primary 500", hex: "#F97316", className: "bg-primary-500" },
  { name: "Primary 400", hex: "#FB923C", className: "bg-primary-400" },
  { name: "Primary 300", hex: "#FDBA74", className: "bg-primary-300" },
  { name: "Primary 200", hex: "#FED7AA", className: "bg-primary-200" },
  { name: "Primary 100", hex: "#FFEEE5", className: "bg-primary-100" },
];

const NEUTRAL: Swatch[] = [
  { name: "Neutral 900", hex: "#0F172A", className: "bg-neutral-900" },
  { name: "Neutral 700", hex: "#334155", className: "bg-neutral-700" },
  { name: "Neutral 500", hex: "#64748B", className: "bg-neutral-500" },
  { name: "Neutral 300", hex: "#CBD5E1", className: "bg-neutral-300" },
  { name: "Neutral 200", hex: "#E2E8F0", className: "bg-neutral-200" },
  { name: "Neutral 100", hex: "#F1F5F9", className: "bg-neutral-100" },
  { name: "Neutral 50", hex: "#FAFAFC", className: "bg-neutral-50", bordered: true },
  { name: "White", hex: "#FFFFFF", className: "bg-white", bordered: true },
];

function SwatchGrid({ swatches, columns }: { swatches: Swatch[]; columns: string }) {
  return (
    <ul className={`grid gap-4 ${columns}`}>
      {swatches.map((swatch) => (
        <li key={swatch.name}>
          <div
            className={`h-16 rounded-sm ${swatch.className} ${
              swatch.bordered ? "border border-neutral-200" : ""
            }`}
          />
          <p className="mt-3 text-small text-neutral-900">{swatch.name}</p>
          <p className="text-small text-neutral-500">{swatch.hex}</p>
        </li>
      ))}
    </ul>
  );
}

export function Colors() {
  return (
    <Panel>
      <SectionTitle number="01" title="Colors" />
      <p className="mb-4 text-body font-semibold text-neutral-900">Primary</p>
      <SwatchGrid
        swatches={PRIMARY}
        columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      />
      <p className="mt-8 mb-4 text-body font-semibold text-neutral-900">Neutral</p>
      <SwatchGrid
        swatches={NEUTRAL}
        columns="grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"
      />
    </Panel>
  );
}
