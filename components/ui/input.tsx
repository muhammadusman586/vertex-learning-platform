"use client";

import type { InputHTMLAttributes } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

const FIELD =
  "h-11 w-full rounded-md border border-neutral-200 bg-white px-4 font-sans text-sm " +
  "text-neutral-900 placeholder:text-neutral-500 outline-none transition-colors " +
  "focus:border-primary-400 disabled:cursor-not-allowed disabled:text-neutral-300";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ className, type = "text", ...props }: TextInputProps) {
  return <input type={type} className={cn(FIELD, className)} {...props} />;
}

export type SearchInputProps = {
  /** Shows the keyboard hint on the right of the field. */
  shortcutHint?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({
  shortcutHint = "⌘ K",
  className,
  placeholder = "Search anything...",
  ...props
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Icon
        name="search"
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-900"
      />
      <input
        type="search"
        placeholder={placeholder}
        className={cn(FIELD, "pl-12", shortcutHint && "pr-20")}
        {...props}
      />
      {shortcutHint ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-xs bg-neutral-100 px-2 py-1 text-small text-neutral-500"
        >
          {shortcutHint}
        </span>
      ) : null}
    </div>
  );
}
