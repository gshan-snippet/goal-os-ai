import { Link, useRouterState } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { useUser } from "@/lib/auth-store";

export function TopNav() {
  const user = useUser();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Hide on dashboard (welcome) — that has its own nav
  if (pathname.startsWith("/welcome")) return null;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-panel border-b border-glass-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Goal<span className="text-gradient">OS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <NavLink to="/" label="Home" />
            <NavLink to="/subscription" label="Subscription" />
            {!user && <NavLink to="/login" label="Login" />}
            {!user && <NavLink to="/signup" label="Signup" />}
            {user && <NavLink to="/welcome/set-goals" label="Dashboard" />}
          </nav>

          <Link
            to={user ? "/welcome/set-goals" : "/signup"}
            className="rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
          >
            {user ? "Open App" : "Start for Free"}
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
      activeProps={{ className: "text-foreground bg-accent" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}
