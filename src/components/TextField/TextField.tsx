import {
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { cx } from "../../lib/cx";

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
};

export function TextField({
  label,
  hint,
  error,
  id,
  className,
  disabled,
  required,
  ...props
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  const describedBy =
    [hint ? hintId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div
      className={cx(
        "ui-field",
        error ? "ui-field--error" : undefined,
        disabled ? "ui-field--disabled" : undefined,
        className
      )}
    >
      <label className="ui-field__label" htmlFor={inputId}>
        {label}
        {required ? (
          <span className="ui-field__required">
            <span aria-hidden="true">*</span>
            <span className="ui-sr-only"> required</span>
          </span>
        ) : null}
      </label>
      <input
        id={inputId}
        className="ui-field__input"
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...props}
      />
      {hint ? (
        <p id={hintId} className="ui-field__hint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="ui-field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
