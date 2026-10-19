import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "../../lib/cx";

export type BadgeTone =
  | "neutral"
  | "pine"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  children: ReactNode;
};

export function Badge({
  tone = "neutral",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx("ui-badge", `ui-badge--${tone}`, className)}
      {...props}
    >
      {children}
    </span>
  );
}
