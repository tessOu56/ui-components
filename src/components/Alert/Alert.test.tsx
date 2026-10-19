import { render, screen } from "@testing-library/react";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("uses status for informational copy", () => {
    render(
      <Alert tone="info" title="Local demo">
        Nothing is sent anywhere.
      </Alert>
    );
    expect(screen.getByRole("status")).toHaveTextContent("Local demo");
  });

  it("uses alert for danger", () => {
    render(
      <Alert tone="danger" title="Could not sign in">
        Check the email format.
      </Alert>
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Could not sign in");
  });
});
