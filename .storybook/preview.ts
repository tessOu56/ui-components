import type { Preview } from "@storybook/react";
// Docs theme is the same token-aligned theme used in the manager.

import "./preview.css";
import { uiKitTheme } from "./theme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: uiKitTheme,
      toc: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f3eee4" },
        { name: "surface", value: "#fffbf3" },
        { name: "ink", value: "#1c1914" },
      ],
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          "Actions",
          "Forms",
          "Feedback",
          "Layout",
        ],
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
