import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Guidelines } from "../../docs/Guidelines";
import { Button } from "./Button";

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Primary actions for forms and toolbars. One primary button per view; use secondary or ghost for supporting actions.",
      },
    },
  },
  args: {
    children: "Save changes",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancel" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Skip" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Delete project" },
};

export const Sizes: Story = {
  render: () => (
    <div className="ui-guidelines__row">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, children: "Publishing" },
};

export const Loading: Story = {
  args: { loading: true, children: "Saving" },
};

export const Usage: Story = {
  render: () => (
    <Guidelines
      do={<Button>Save changes</Button>}
      doNote="One primary action per view. Label with a verb the user understands."
      dont={
        <div className="ui-guidelines__row">
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      }
      dontNote="Don't pair two primaries. Cancel should be secondary or ghost."
    />
  ),
  parameters: { controls: { disable: true } },
};
