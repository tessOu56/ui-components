import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import { Workspace } from "./Workspace";

const meta = {
  title: "Layout/Workspace",
  component: Workspace,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Composition of Header, TextField, Button, Badge, and Alert on one token surface. Use the viewport toolbar to check the stacked header.",
      },
    },
  },
} satisfies Meta<typeof Workspace>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {};

export const SignedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /^log in$/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    await expect(
      canvas.getByRole("button", { name: /log out/i })
    ).toBeInTheDocument();
  },
};
