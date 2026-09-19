import type { Metadata } from "next";

import { Buttons } from "./_components/buttons";
import { Cards } from "./_components/cards";
import { Colors } from "./_components/colors";
import { RadiusAndShadows, Spacing } from "./_components/foundations";
import { Icons } from "./_components/icons";
import { Badges, Indicators, Progress } from "./_components/indicators";
import { Inputs } from "./_components/inputs";
import { Intro } from "./_components/intro";
import { Navigation, Principles } from "./_components/navigation";
import { Typography, TypeScale } from "./_components/typography";

export const metadata: Metadata = {
  title: "Design System | Vertex",
  description:
    "A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.",
};

export default function DesignSystemPage() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12">
      <div className="grid min-w-0 gap-6">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <Intro />
          <Colors />
        </div>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Typography />
          <TypeScale />
        </div>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <Spacing />
          <RadiusAndShadows />
        </div>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,27fr)_minmax(0,48fr)_minmax(0,25fr)]">
          <Icons />
          <Buttons />
          <Inputs />
        </div>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,28fr)_minmax(0,40fr)_minmax(0,32fr)]">
          <Badges />
          <Indicators />
          <Progress />
        </div>
        <Cards />
        <Navigation />
        <Principles />
      </div>
    </main>
  );
}
