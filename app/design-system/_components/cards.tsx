import {
  CourseCard,
  LessonCard,
  LessonVideoCard,
  ResourceCard,
} from "@/components/ui";

import { Panel, SectionTitle } from "./panel";

export function Cards() {
  return (
    <Panel>
      <SectionTitle number="12" title="Cards" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col">
          <p className="mb-3 text-body text-neutral-700">Course Card</p>
          <CourseCard
            className="flex-1"
            initial="N"
            title="Next.js for Production"
            summary="Build scalable, high-performance web applications with Next.js."
            level="Intermediate"
            duration="18h 24m"
            moduleCount={12}
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-body text-neutral-700">Lesson Card (Video)</p>
          <LessonVideoCard
            className="flex-1"
            title="Data Fetching in Server Components"
            description="Learn how to fetch data on the server using async/await and Next.js best practices."
            lessonLabel="Lesson 5.1"
            duration="12:45"
            startLabel="12:45"
            href="/design-system"
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-body text-neutral-700">Lesson Card (Lesson)</p>
          <LessonCard
            className="flex-1"
            title="Data Fetching & Caching"
            description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
            moduleLabel="Module 5"
            href="/design-system"
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-body text-neutral-700">Resource Card</p>
          <ResourceCard
            className="flex-1"
            title="Caching and Revalidation Guide"
            description="Deep dive into Next.js caching strategies."
            type="PDF"
            size="1.2 MB"
            href="/design-system"
          />
        </div>
      </div>
    </Panel>
  );
}
