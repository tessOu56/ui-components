import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "../../lib/cx";

export type AlertTone = "info" | "success" | "warning" | "danger";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  tone?: AlertTone;
  title?: ReactNode;
  children: ReactNode;
};

export function Alert({
  tone = "info",
  title,
  className,
  children,
  role,
  ...props
}: AlertProps) {
  const defaultRole = tone === "danger" || tone === "warning" ? "alert" : "status";

  return (
    <div
      className={cx("ui-alert", `ui-alert--${tone}`, className)}
      role={role ?? defaultRole}
      {...props}
    >
      {title ? <p className="ui-alert__title">{title}</p> : null}
      <div className="ui-alert__body">{children}</div>
    </div>
  );
}
