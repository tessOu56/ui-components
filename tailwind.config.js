/** @type {import('tailwindcss').Config} */
/**
 * Token bridge for hosts on Tailwind 3 (JS config).
 * Storybook on this repo uses Tailwind 4 `@theme` in `.storybook/preview.css`.
 * Values resolve through `--ui-*` from `src/styles/tokens.css`.
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--ui-color-canvas)",
        surface: "var(--ui-color-surface)",
        ink: {
          DEFAULT: "var(--ui-color-ink)",
          muted: "var(--ui-color-ink-muted)",
        },
        line: "var(--ui-color-line)",
        pine: "var(--ui-color-pine)",
        copper: "var(--ui-color-copper)",
        danger: "var(--ui-color-danger)",
        success: "var(--ui-color-success)",
        warning: "var(--ui-color-warning)",
        info: "var(--ui-color-info)",
      },
      fontFamily: {
        sans: "var(--ui-font-sans)",
        mono: "var(--ui-font-mono)",
      },
      borderRadius: {
        sm: "var(--ui-radius-sm)",
        md: "var(--ui-radius-md)",
        lg: "var(--ui-radius-lg)",
      },
      transitionDuration: {
        fast: "var(--ui-duration-fast)",
        med: "var(--ui-duration-med)",
      },
      transitionTimingFunction: {
        out: "var(--ui-ease-out)",
      },
    },
  },
};
