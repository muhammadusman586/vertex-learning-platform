import { Badge, ProgressBar, Status, type StatusKind } from "@/components/ui";

import { Panel, SectionTitle } from "./panel";

const BADGES = [
  { label: "Video", tone: "video" as const, text: "Video" },
  { label: "Lesson", tone: "lesson" as const, text: "Lesson" },
  { label: "Popular", tone: "popular" as const, text: "Popular" },
];

const STATUSES: StatusKind[] = ["in-progress", "completed", "now-playing", "locked"];

export function Badges() {
  return (
    <Panel>
      <SectionTitle number="09" title="Badges / Tags" />
      <ul className="flex flex-wrap gap-10">
        {BADGES.map((badge) => (
          <li key={badge.label}>
            <p className="mb-3 text-body text-neutral-700">{badge.label}</p>
            <Badge tone={badge.tone}>{badge.text}</Badge>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function Indicators() {
  return (
    <Panel>
      <SectionTitle number="10" title="Status / Indicators" />
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-4">
        {STATUSES.map((kind) => (
          <li key={kind}>
            <Status kind={kind} />
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function Progress() {
  return (
    <Panel>
      <SectionTitle number="11" title="Progress Bar" />
      <ProgressBar value={35} />
    </Panel>
  );
}
