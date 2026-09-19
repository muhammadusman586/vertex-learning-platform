import { SearchInput, Select } from "@/components/ui";

import { GroupLabel, Panel, SectionTitle, SpecList } from "./panel";

const SORT_OPTIONS = [
  { value: "relevant", label: "Most Relevant" },
  { value: "recent", label: "Most Recent" },
  { value: "popular", label: "Most Popular" },
];

export function Inputs() {
  return (
    <Panel className="flex flex-col gap-8">
      <div>
        <SectionTitle number="08" title="Inputs" />
        <GroupLabel>Search / Text Input</GroupLabel>
        <SearchInput aria-label="Search anything" />
        <div className="mt-6">
          <GroupLabel>Select</GroupLabel>
          <Select options={SORT_OPTIONS} aria-label="Sort results" defaultValue="relevant" />
        </div>
      </div>
      <SpecList
        title="Field Specs"
        items={[
          "Height: 44px",
          "Radius: 12px",
          "Border: 1px solid #E2E8F0",
          "Padding: 0 16px",
          "Focus: Border color #FB923C",
        ]}
      />
    </Panel>
  );
}
