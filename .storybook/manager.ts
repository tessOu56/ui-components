import { addons } from "storybook/internal/manager-api";

import { uiKitTheme } from "./theme";

addons.setConfig({
  theme: uiKitTheme,
});
