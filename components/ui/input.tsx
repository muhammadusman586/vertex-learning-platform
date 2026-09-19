"use client";

import type { ComponentPropsWithRef } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

const FIELD =
  "h-11 w-full rounded-md border border-neutral-200 bg-white px-4 font-sans text-sm " +
  "text-neutral-900 placeholder:text-neutral-500 outline-none transition-colors " +
  "focus:border-primary-400 disabled:cursor-not-allowed disabled:text-neutral-300";

export type TextInputProps = ComponentPropsWithRef<"input">;

export function TextInput({ className, type = "text", ...props }: TextInputProps) {
  return <input type={type} className={cn(FIELD, className)} {...props} />;
}

/** `md` is the system default; `hero` is the oversized field a page opens with. */
export type SearchInputSize = "md" | "hero";

export type SearchInputProps = {
  /** Shows the keyboard hint on the right of the field. */
  shortcutHint?: string;
  size?: SearchInputSize;
  className?: string;
} & Omit<ComponentPropsWithRef<"input">, "size">;

const HERO_FIELD =
  "h-14 rounded-lg border-rule pl-14 pr-4 text-base shadow-sm " +
  "sm:h-16 sm:pl-16 sm:text-lg lg:h-20 lg:rounded-lg lg:pl-17 lg:pr-24 lg:text-xl";

export function SearchInput({
  shortcutHint = "⌘ K",
  size = "md",
  className,
  placeholder = "Search anything...",
  ...props
}: SearchInputProps) {
  const isHero = size === "hero";

  return (
    <div className={cn("relative", className)}>
      <Icon
        name="search"
        size={isHero ? 24 : 20}
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 text-neutral-900",
          isHero ? "left-5 lg:left-6" : "left-4",
        )}
      />
      <input
        type="search"
        placeholder={placeholder}
        className={cn(FIELD, isHero ? HERO_FIELD : cn("pl-12", shortcutHint && "pr-20"))}
        {...props}
      />
      {shortcutHint ? (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 font-sans",
            isHero
              ? "right-5 hidden rounded-sm border border-rule bg-canvas px-3 py-2 text-base text-neutral-700 lg:block"
              : "right-3 rounded-xs bg-neutral-100 px-2 py-1 text-small text-neutral-500",
          )}
        >
          {shortcutHint}
        </span>
      ) : null}
    </div>
  );
}
