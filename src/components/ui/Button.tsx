import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from "./buttonStyles";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

/**
 * Real `<button>` element styled identically to `ButtonLink`.
 * Use this for form submits, modal triggers, and any non-navigation action.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      type={type}
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
    >
      {children}
    </button>
  );
}
