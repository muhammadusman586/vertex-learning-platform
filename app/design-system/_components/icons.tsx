import { CORE_ICONS, Icon } from "@/components/ui";

import { GroupLabel, Panel, SectionTitle, SpecList } from "./panel";

function IconRow({ variant }: { variant: "outline" | "filled" }) {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-x-2 gap-y-5">
      {CORE_ICONS.map((name) => (
        <li key={name}>
          <Icon name={name} variant={variant} size={24} className="text-neutral-900" />
          <span className="sr-only">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function Icons() {
  return (
    <Panel className="flex flex-col gap-8">
      <div>
        <SectionTitle number="06" title="Icons" />
        <GroupLabel>Outline Style</GroupLabel>
        <IconRow variant="outline" />
        <div className="mt-8">
          <GroupLabel>Filled Style</GroupLabel>
          <IconRow variant="filled" />
        </div>
      </div>
      <SpecList
        title="Icon Specs"
        items={[
          "24x24px grid",
          "2px stroke width (outline)",
          "Rounded line caps",
          "Consistent optical balance",
        ]}
      />
    </Panel>
  );
}
