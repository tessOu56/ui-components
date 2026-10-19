import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextField } from "./TextField";

describe("TextField", () => {
  it("associates the visible label with the input", async () => {
    const user = userEvent.setup();
    render(<TextField label="Work email" hint="Used in the header." />);
    const input = screen.getByRole("textbox", { name: "Work email" });
    await user.type(input, "tess@example.com");
    expect(input).toHaveValue("tess@example.com");
    expect(input).toHaveAccessibleDescription("Used in the header.");
  });

  it("announces errors and marks the input invalid", () => {
    render(
      <TextField
        label="Work email"
        error="Enter a work email to continue."
        defaultValue="nope"
      />
    );
    const input = screen.getByRole("textbox", { name: "Work email" });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Enter a work email to continue."
    );
  });

  it("includes required in the accessible name", () => {
    render(<TextField label="Display name" required />);
    expect(
      screen.getByRole("textbox", { name: /display name required/i })
    ).toBeRequired();
  });
});
