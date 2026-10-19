import type { Meta, StoryObj } from "@storybook/react";

import { Guidelines } from "../../docs/Guidelines";
import { TextField } from "./TextField";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Labeled text input with optional hint and error. The label is always visible and associated with the control — placeholders are examples, not labels.",
      },
    },
  },
  args: {
    label: "Work email",
    placeholder: "tess@example.com",
    hint: "We’ll only use this to address you in the demo.",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithError: Story = {
  args: {
    error: "Enter a work email to continue.",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "tess@example.com" },
};

export const Usage: Story = {
  render: () => (
    <Guidelines
      do={
        <TextField
          label="Display name"
          hint="Shown in the header after you sign in."
        />
      }
      doNote="Keep the label visible. Put extra help in the hint, errors in the error slot."
      dont={<TextField label="" placeholder="Display name" />}
      dontNote="Don't use placeholder as the only label — it disappears on input and fails contrast."
    />
  ),
  parameters: { controls: { disable: true } },
};
