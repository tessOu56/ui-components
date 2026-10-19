import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from "./Header";

describe("Header", () => {
  it("offers log in and create account when signed out", async () => {
    const user = userEvent.setup();
    const onLogin = jest.fn();
    render(<Header onLogin={onLogin} />);
    await user.click(screen.getByRole("button", { name: "Log in" }));
    expect(onLogin).toHaveBeenCalledTimes(1);
    expect(
      screen.getByRole("button", { name: "Create account" })
    ).toBeInTheDocument();
  });

  it("names the signed-in user and can log out", async () => {
    const user = userEvent.setup();
    const onLogout = jest.fn();
    render(<Header user={{ name: "Tess Ou" }} onLogout={onLogout} />);
    expect(screen.getByText("Tess Ou")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Log out" }));
    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it("points the brand control at main", () => {
    render(<Header title="Keel" />);
    expect(screen.getByRole("link", { name: "Keel" })).toHaveAttribute(
      "href",
      "#main"
    );
  });
});
