import { render, screen } from "@testing-library/react";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders the text", () => {
    render(<Badge tone="pine">Internal</Badge>);
    expect(screen.getByText("Internal")).toHaveClass("ui-badge--pine");
  });
});
