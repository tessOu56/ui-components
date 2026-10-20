import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Inline message for page-level status. Warning and danger use role=alert; info and success use role=status so they don’t interrupt mid-form.",
      },
    },
  },
  args: {
    title: "Session notice",
    children: "This demo stores nothing. Refresh to start over.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = { args: { tone: "info" } };

export const Success: Story = {
  args: {
    tone: "success",
    title: "Saved",
    children: "Token values are documented under Foundations.",
  },
};

export const Warning: Story = {
  args: {
    tone: "warning",
    title: "Unsaved changes",
    children: "Leave now and the form values in this story reset.",
  },
};

export const Danger: Story = {
  args: {
    tone: "danger",
    title: "Could not sign in",
    children: "Check the email format and try again.",
  },
};
