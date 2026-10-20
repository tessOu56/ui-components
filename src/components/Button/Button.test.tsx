import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button", () => {
  it("renders the label and defaults to type=button", () => {
    render(<Button>Save changes</Button>);
    const button = screen.getByRole("button", { name: "Save changes" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("ui-button--primary");
  });

  it("exposes variant, size, and disabled", () => {
    render(
      <Button variant="secondary" size="sm" disabled>
        Cancel
      </Button>
    );
    const button = screen.getByRole("button", { name: "Cancel" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("ui-button--secondary", "ui-button--sm");
  });

  it("sets aria-busy and disables while loading", () => {
    render(<Button loading>Saving</Button>);
    const button = screen.getByRole("button", { name: "Saving" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("is keyboard activatable", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Continue</Button>);
    const button = screen.getByRole("button", { name: "Continue" });
    button.focus();
    expect(button).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
