import type { ButtonHTMLAttributes } from "react";

import { Icon, type IconName, type IconVariant } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "md" | "lg";

const BASE =
  "inline-flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md " +
  "font-sans font-medium " +
  "transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-400 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:cursor-not-allowed";

const SIZES: Record<ButtonSize, string> = {
  lg: "px-4 text-base",
  md: "px-3 text-sm",
};

/**
 * `hover:` styles are paired with a `data-[state=hover]` twin so the design-system
 * showcase can render the hover row statically, exactly as the reference shows it.
 */
const VARIANTS: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-primary-500 text-white",
    "hover:bg-primary-600 data-[state=hover]:bg-primary-600",
    "disabled:bg-primary-100 disabled:text-primary-300 disabled:hover:bg-primary-100",
  ),
  secondary: cn(
    "border border-primary-500 bg-transparent text-primary-500",
    "hover:bg-primary-100 data-[state=hover]:bg-primary-100",
    "disabled:border-primary-200 disabled:text-primary-300 disabled:hover:bg-transparent",
  ),
  tertiary: cn(
    "border border-neutral-200 bg-white text-neutral-900",
    "hover:border-neutral-300 data-[state=hover]:border-neutral-300",
    "disabled:border-neutral-200 disabled:text-neutral-300 disabled:hover:border-neutral-200",
  ),
  text: cn(
    "bg-transparent text-primary-500",
    "hover:text-primary-600 data-[state=hover]:text-primary-600",
    "disabled:text-primary-300 disabled:hover:text-primary-300",
    "px-0",
  ),
};

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing icon, e.g. external-link on tertiary or play-circle on text buttons. */
  trailingIcon?: IconName;
  trailingIconVariant?: IconVariant;
  /** Renders the hover styling without a pointer. Showcase only. */
  forceHover?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "lg",
  trailingIcon,
  trailingIconVariant = "outline",
  forceHover = false,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-state={forceHover ? "hover" : undefined}
      className={cn(BASE, SIZES[size], VARIANTS[variant], className)}
      {...props}
    >
      {children}
      {trailingIcon ? (
        <Icon name={trailingIcon} variant={trailingIconVariant} size={16} />
      ) : null}
    </button>
  );
}
