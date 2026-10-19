import { useState, type FormEvent } from "react";

import { Alert } from "../Alert/Alert";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { TextField } from "../TextField/TextField";

type User = { name: string };

export function Workspace() {
  const [user, setUser] = useState<User>();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setError("Enter a work email to continue.");
      return;
    }
    setError(undefined);
    setUser({ name: email.split("@")[0] || "Tess" });
  }

  return (
    <div className="ui-workspace">
      <Header
        title="Keel"
        user={user}
        onLogin={() => setUser({ name: "Tess Ou" })}
        onLogout={() => {
          setUser(undefined);
          setEmail("");
        }}
        onCreateAccount={() => setUser({ name: "Tess Ou" })}
      />
      <main id="main" className="ui-workspace__main">
        {user ? (
          <section className="ui-workspace__panel" aria-labelledby="workspace-heading">
            <div className="ui-workspace__kicker">
              <Badge tone="pine">Internal</Badge>
              <span>Lab notebook</span>
            </div>
            <h1 id="workspace-heading">Welcome back, {user.name}.</h1>
            <p className="ui-workspace__lede">
              Session is active. Review tokens, then open a component from the
              sidebar — this page is a composition, not a product.
            </p>
            <Alert tone="success" title="Signed in">
              Keyboard users can log out from the header. Focus rings stay
              visible on every control.
            </Alert>
          </section>
        ) : (
          <section className="ui-workspace__panel" aria-labelledby="workspace-heading">
            <div className="ui-workspace__kicker">
              <Badge tone="info">Demo</Badge>
              <span>ui-kit composition</span>
            </div>
            <h1 id="workspace-heading">Sign in to the notebook</h1>
            <p className="ui-workspace__lede">
              A small layout using Header, TextField, Button, Badge, and Alert
              on the same token set. Use the header to skip the form.
            </p>
            <Alert tone="info" title="Local demo">
              Nothing is sent anywhere. Submit a work email, or use Log in in
              the header.
            </Alert>
            <form className="ui-workspace__form" onSubmit={handleSubmit}>
              <TextField
                label="Work email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="tess@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError(undefined);
                }}
                hint="Used only to derive a display name in this story."
                error={error}
                required
              />
              <div className="ui-workspace__actions">
                <Button type="submit">Continue</Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setUser({ name: "Tess Ou" })}
                >
                  Log in
                </Button>
              </div>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
