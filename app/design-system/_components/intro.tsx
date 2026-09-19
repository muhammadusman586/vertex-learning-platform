import { Logo } from "@/components/ui";

import { Panel } from "./panel";

export function Intro() {
  return (
    <Panel className="flex flex-col justify-between gap-10">
      <div>
        <Logo size={34} className="mb-8" />
        <h1 className="text-display-2 text-neutral-900 sm:text-display-1">
          Design System
        </h1>
        <p className="mt-5 max-w-xs text-body-lg text-neutral-500">
          A unified design language for Vertex learning platform. Clean, modern and
          focused on clarity, consistency and intuitive learning experiences.
        </p>
      </div>
      <p className="text-eyebrow text-neutral-500">
        Version 1.0 <span aria-hidden="true">•</span> May 2025
      </p>
    </Panel>
  );
}
