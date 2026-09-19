import { Breadcrumbs, Icon, NavBar, Pagination } from "@/components/ui";
import type { IconName } from "@/components/ui";

import { Panel, SectionTitle } from "./panel";

const CRUMBS = [
  { label: "All Courses", href: "/courses" },
  { label: "Next.js for Production", href: "/courses/nextjs-for-production" },
  { label: "Data Fetching & Caching" },
];

const PRINCIPLES: Array<{ icon: IconName; title: string; description: string }> = [
  {
    icon: "eye",
    title: "Clarity First",
    description: "Every element should communicate clearly.",
  },
  {
    icon: "grid",
    title: "Consistency",
    description: "Use components and patterns consistently across the platform.",
  },
  {
    icon: "target",
    title: "Focus & Calm",
    description: "Remove noise and help learners focus on what matters.",
  },
  {
    icon: "accessibility",
    title: "Accessible",
    description: "Design with accessibility and inclusivity in mind.",
  },
];

export function Navigation() {
  return (
    <Panel>
      <SectionTitle number="13" title="Navigation" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,0.8fr)] lg:gap-10">
        <div>
          <NavBar />
        </div>
        <div>
          <p className="mb-4 text-body text-neutral-700">Breadcrumbs</p>
          <Breadcrumbs items={CRUMBS} />
        </div>
        <div>
          <p className="mb-4 text-body text-neutral-700">Pagination</p>
          <Pagination page={1} totalPages={8} />
        </div>
      </div>
    </Panel>
  );
}

export function Principles() {
  return (
    <Panel>
      <SectionTitle number="14" title="Principles" />
      <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {PRINCIPLES.map((principle) => (
          <li key={principle.title} className="flex items-start gap-4">
            <Icon name={principle.icon} size={28} className="mt-0.5 text-neutral-900" />
            <div>
              <p className="text-body font-semibold text-neutral-900">
                {principle.title}
              </p>
              <p className="mt-1 text-body text-neutral-500">{principle.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
