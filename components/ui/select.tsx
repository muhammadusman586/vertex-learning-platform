"use client";

import type { SelectHTMLAttributes } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type SelectOption = { value: string; label: string };

export type SelectProps = {
  options: SelectOption[];
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ options, className, ...props }: SelectProps) {
  return (
    <div className={cn("relative", className)}>
      <select
        className={cn(
          "h-11 w-full appearance-none rounded-md border border-neutral-200 bg-white pl-4 pr-11",
          "font-sans text-sm text-neutral-900 outline-none transition-colors",
          "focus:border-primary-400 disabled:cursor-not-allowed disabled:text-neutral-300",
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon
        name="chevron-down"
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-700"
      />
    </div>
  );
}
