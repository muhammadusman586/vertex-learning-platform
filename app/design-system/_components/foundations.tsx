import { Panel, SectionTitle } from "./panel";

const SPACING = [
  { px: 4, rem: "0.25rem" },
  { px: 8, rem: "0.5rem" },
  { px: 12, rem: "0.75rem" },
  { px: 16, rem: "1rem" },
  { px: 24, rem: "1.5rem" },
  { px: 32, rem: "2rem" },
  { px: 40, rem: "2.5rem" },
  { px: 48, rem: "3rem" },
  { px: 64, rem: "4rem" },
];

const RADIUS = [
  { label: "4px", name: "xs", className: "rounded-xs" },
  { label: "8px", name: "sm", className: "rounded-sm" },
  { label: "12px", name: "md", className: "rounded-md" },
  { label: "16px", name: "lg", className: "rounded-lg" },
  { label: "24px", name: "xl", className: "rounded-xl" },
  { label: "Full", name: "circle", className: "rounded-full" },
];

const SHADOWS = [
  { name: "Sm", value: "0 1px 2px 0 rgba(15, 23, 42, 0.05)", className: "shadow-sm" },
  { name: "Md", value: "0 4px 12px -2px rgba(15, 23, 42, 0.08)", className: "shadow-md" },
  { name: "Lg", value: "0 12px 24px -4px rgba(15, 23, 42, 0.10)", className: "shadow-lg" },
  { name: "Xl", value: "0 20px 40px -8px rgba(15, 23, 42, 0.12)", className: "shadow-xl" },
];

export function Spacing() {
  return (
    <Panel>
      <SectionTitle number="04" title="Spacing System" />
      <p className="mb-8 text-body font-semibold text-neutral-900">Base unit: 4px</p>
      <ul className="flex flex-wrap items-end gap-6">
        {SPACING.map((step) => (
          <li key={step.px} className="text-center">
            <div
              className="mx-auto rounded-xs bg-primary-200"
              style={{ width: step.px, height: step.px }}
            />
            <p className="mt-4 text-small text-neutral-900">{step.px}</p>
            <p className="text-small text-neutral-500">({step.rem})</p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function RadiusAndShadows() {
  return (
    <Panel>
      <SectionTitle number="05" title="Radius & Shadows" />
      <p className="mb-5 text-body font-semibold text-neutral-900">Radius</p>
      <ul className="flex flex-wrap gap-5">
        {RADIUS.map((radius) => (
          <li key={radius.name} className="text-center">
            <div
              className={`size-14 border border-neutral-200 bg-white ${radius.className}`}
            />
            <p className="mt-3 text-small text-neutral-900">{radius.label}</p>
            <p className="text-small text-neutral-500">({radius.name})</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 mb-5 text-body font-semibold text-neutral-900">Shadows</p>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {SHADOWS.map((shadow) => (
          <li
            key={shadow.name}
            className={`rounded-md border border-neutral-200 bg-white p-4 ${shadow.className}`}
          >
            <p className="text-body font-semibold text-neutral-900">{shadow.name}</p>
            <p className="mt-2 text-small text-neutral-500">{shadow.value}</p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
