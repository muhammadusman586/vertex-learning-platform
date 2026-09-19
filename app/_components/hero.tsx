import Link from "next/link";

import { HeroSearch } from "@/app/_components/hero-search";
import { PageContainer } from "@/components/layout/page-frame";
import { buttonClassName, Icon } from "@/components/ui";

export function Hero() {
  return (
    <section className="border-b border-rule">
      <PageContainer className="flex flex-col items-center pt-12 pb-14 text-center lg:pt-17 lg:pb-14">
        <p className="text-eyebrow rounded-md border border-rule bg-white/60 px-5 py-3 text-primary-600">
          Intelligent Learning
        </p>
        <h1 className="text-display-hero mt-9 max-w-155 text-neutral-900">
          Search your learning{" "}
          {/* The reference breaks the headline after "learning" on wide screens. */}
          <br className="hidden lg:inline" />
          in plain English.
        </h1>
        <p className="mt-7 max-w-120 text-base leading-7 text-neutral-700 lg:text-xl lg:leading-[30px]">
          Vertex understands what you want to learn and finds the exact lessons across
          all your courses.
        </p>
        <Link
          href="/courses"
          className={buttonClassName({
            size: "xl",
            className: "mt-10 h-13 w-full text-base sm:w-auto lg:h-15 lg:text-lg",
          })}
        >
          Explore Courses
          <Icon name="arrow-right" size={20} />
        </Link>
        <div className="mt-11 w-full">
          <HeroSearch />
        </div>
      </PageContainer>
    </section>
  );
}
