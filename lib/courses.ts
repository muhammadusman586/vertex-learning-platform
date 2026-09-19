/**
 * Placeholder course data for the catalog surfaces.
 *
 * The shape mirrors the projection the Sanity course documents will be read with
 * (title, slug, summary, level, duration, moduleCount, cover), so wiring the real
 * dataset later is a change to this file only. Pages must keep reading courses
 * through `getFeaturedCourses()` rather than importing the array.
 */

export type CourseCover = {
  src: string;
  /** Empty when the title already carries the meaning. */
  alt: string;
  width: number;
  height: number;
};

export type Course = {
  slug: string;
  title: string;
  summary: string;
  level: string;
  /** Total runtime, pre-formatted for display. */
  duration: string;
  moduleCount: number;
  cover: CourseCover;
};

const COURSES: Course[] = [
  {
    slug: "nextjs-for-production",
    title: "Next.js for Production",
    summary: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    moduleCount: 12,
    cover: { src: "/brands/nextjs.svg", alt: "", width: 72, height: 72 },
  },
  {
    slug: "docker-essentials",
    title: "Docker Essentials",
    summary: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    moduleCount: 8,
    cover: { src: "/brands/docker.svg", alt: "", width: 72, height: 60 },
  },
  {
    slug: "typescript-deep-dive",
    title: "TypeScript Deep Dive",
    summary: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    moduleCount: 10,
    cover: { src: "/brands/typescript.svg", alt: "", width: 72, height: 72 },
  },
];

export async function getFeaturedCourses(): Promise<Course[]> {
  return COURSES;
}
