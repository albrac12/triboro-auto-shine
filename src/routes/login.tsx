import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | Tri-Boro Auto Body" },
      { name: "description", content: "Login to access your account." },
    ],
  }),
  component: Login,
});

// Example credentials
const VALID_CREDENTIALS = {
  user: "user",
  password: "password",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      username === VALID_CREDENTIALS.user &&
      password === VALID_CREDENTIALS.password
    ) {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent"></div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome!
            </h1>
            <p className="text-muted-foreground mb-8">
              You have successfully logged in.
            </p>
            <div className="bg-secondary/50 rounded-lg p-6 mb-8 border border-border">
              <p className="text-lg font-semibold text-foreground mb-2">Test</p>
              <p className="text-muted-foreground">
                This is your authenticated dashboard. Welcome to your account,{" "}
                <span className="font-semibold text-foreground">{username}</span>
                !
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 text-center">
            Login
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Try: <span className="font-mono font-semibold">user</span>
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Try: <span className="font-mono font-semibold">password</span>
              </p>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 border border-red-200">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-4 py-2.5 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 mt-6"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Demo credentials for testing:
            </p>
            <div className="mt-3 space-y-1 text-xs text-muted-foreground text-center">
              <p>
                Username: <span className="font-mono font-semibold">user</span>
              </p>
              <p>
                Password:{" "}
                <span className="font-mono font-semibold">password</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
