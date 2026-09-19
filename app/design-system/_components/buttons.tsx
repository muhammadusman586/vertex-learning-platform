import { Button, type ButtonVariant } from "@/components/ui";
import type { IconName, IconVariant } from "@/components/ui";

import { Panel, SectionTitle, SpecList } from "./panel";

type Column = {
  variant: ButtonVariant;
  heading: string;
  label: string;
  trailingIcon?: IconName;
  trailingIconVariant?: IconVariant;
};

const COLUMNS: Column[] = [
  { variant: "primary", heading: "Primary", label: "Get Started" },
  { variant: "secondary", heading: "Secondary", label: "Explore Courses" },
  {
    variant: "tertiary",
    heading: "Tertiary",
    label: "View Lesson",
    trailingIcon: "external-link",
  },
  {
    variant: "text",
    heading: "Text",
    label: "Watch Video",
    trailingIcon: "play-circle",
    trailingIconVariant: "filled",
  },
];

const ROWS = [
  { state: "Default", forceHover: false, disabled: false },
  { state: "Hover", forceHover: true, disabled: false },
  { state: "Disabled", forceHover: false, disabled: true },
];

export function Buttons() {
  return (
    <Panel className="flex flex-col gap-8">
      <div>
        <SectionTitle number="07" title="Buttons" />
        <div className="-mx-2 overflow-x-auto px-2">
          <table className="min-w-[460px] border-separate border-spacing-x-1.5 border-spacing-y-3">
            <thead>
              <tr>
                <th scope="col" className="w-12">
                  <span className="sr-only">State</span>
                </th>
                {COLUMNS.map((column) => (
                  <th
                    key={column.variant}
                    scope="col"
                    className="text-left text-body font-normal text-neutral-500"
                  >
                    {column.heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.state}>
                  <th
                    scope="row"
                    className="text-left text-body font-normal text-neutral-700"
                  >
                    {row.state}
                  </th>
                  {COLUMNS.map((column) => (
                    <td key={column.variant}>
                      <Button
                        variant={column.variant}
                        size="md"
                        trailingIcon={column.trailingIcon}
                        trailingIconVariant={column.trailingIconVariant}
                        forceHover={row.forceHover}
                        disabled={row.disabled}
                      >
                        {column.label}
                      </Button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SpecList
        title="Button Specs"
        items={[
          "Height: 44px (default)",
          "Padding: 0 16px (lg), 0 12px (md)",
          "Radius: 12px",
          "Font: Inter Medium (14–16px)",
        ]}
      />
    </Panel>
  );
}
