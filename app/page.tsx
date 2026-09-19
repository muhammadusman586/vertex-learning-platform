import { BarBand } from "@/app/_components/bar-band";
import { CourseSection } from "@/app/_components/course-section";
import { Hero } from "@/app/_components/hero";
import { UpdateStrip } from "@/app/_components/update-strip";
import { PageFrame } from "@/components/layout/page-frame";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <PageFrame className="flex flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <CourseSection />
        <div className="mt-auto">
          <UpdateStrip />
          <BarBand />
        </div>
      </main>
    </PageFrame>
  );
}
