"use client";

import { useEffect, useRef } from "react";

import { SearchInput } from "@/components/ui";

/**
 * The hero search field. A plain GET form, so it works without JavaScript and
 * keeps the query in the URL; the search results page reads `q`.
 */
export function HeroSearch() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() !== "k" || !(event.metaKey || event.ctrlKey)) return;
      event.preventDefault();
      inputRef.current?.focus();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <form action="/search" role="search" className="w-full">
      <label htmlFor="hero-search" className="sr-only">
        Search your learning
      </label>
      <SearchInput
        id="hero-search"
        name="q"
        size="hero"
        ref={inputRef}
        placeholder="Ask anything about your learning..."
      />
    </form>
  );
}
