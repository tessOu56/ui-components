import type { ReactNode } from "react";

import { cx } from "../../lib/cx";
import { Button } from "../Button/Button";

export type HeaderUser = {
  name: string;
};

export type HeaderProps = {
  title?: ReactNode;
  user?: HeaderUser;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  className?: string;
};

function Mark() {
  return (
    <svg
      className="ui-header__mark"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="var(--ui-color-pine)" />
      <path
        d="M8 18.5V9.5L14 6.5L20 9.5V18.5L14 21.5L8 18.5Z"
        fill="none"
        stroke="var(--ui-color-on-pine)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5L14 12.5L20 9.5M14 12.5V21.5"
        fill="none"
        stroke="var(--ui-color-on-pine)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({
  title = "Keel",
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  className,
}: HeaderProps) {
  return (
    <header className={cx("ui-header", className)}>
      <div className="ui-header__inner">
        <a className="ui-header__brand" href="#main">
          <Mark />
          <span className="ui-header__title">{title}</span>
        </a>
        <div className="ui-header__actions">
          {user ? (
            <>
              <p className="ui-header__welcome">
                Signed in as <strong>{user.name}</strong>
              </p>
              <Button size="sm" variant="secondary" onClick={onLogout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="ghost" onClick={onLogin}>
                Log in
              </Button>
              <Button size="sm" variant="primary" onClick={onCreateAccount}>
                Create account
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
