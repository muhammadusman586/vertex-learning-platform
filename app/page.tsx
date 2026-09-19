import Link from "next/link";

import { Logo } from "@/components/ui";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-8 px-6 py-16">
      <Logo size={34} />
      <div>
        <h1 className="text-display-2 text-neutral-900 sm:text-display-1">Vertex</h1>
        <p className="mt-4 text-body-lg text-neutral-500">
          A learning platform with search that takes you to the exact moment a topic is
          taught. The pages are still being built.
        </p>
      </div>
      <Link
        href="/design-system"
        className="inline-flex h-11 w-fit items-center rounded-md bg-primary-500 px-4 font-sans text-base font-medium text-white transition-colors hover:bg-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
      >
        View the design system
      </Link>
    </main>
  );
}
