import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-frame";
import { CourseCard, Icon } from "@/components/ui";
import { getFeaturedCourses } from "@/lib/courses";

export async function CourseSection() {
  const courses = await getFeaturedCourses();

  return (
    <section className="pt-14 pb-16">
      <PageContainer>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-[26px] leading-8.5 font-bold text-neutral-900">
            All Courses
          </h2>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-xs font-sans text-base font-medium text-primary-600 transition-colors outline-none hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            View all courses
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.slug} className="flex">
              <CourseCard
                variant="stacked"
                href={`/courses/${course.slug}`}
                title={course.title}
                summary={course.summary}
                level={course.level}
                duration={course.duration}
                moduleCount={course.moduleCount}
                initial={course.title.charAt(0)}
                cover={
                  <Image
                    src={course.cover.src}
                    alt={course.cover.alt}
                    width={course.cover.width}
                    height={course.cover.height}
                  />
                }
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
