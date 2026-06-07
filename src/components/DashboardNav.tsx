import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, LogOut } from "lucide-react";
import { setUser, useUser } from "@/lib/auth-store";
import { useNavigate } from "@tanstack/react-router";

const TABS = [
  { to: "/welcome/set-goals", label: "Set Goals" },
  { to: "/welcome/goal-insights", label: "Goal Insights" },
  { to: "/welcome/roadmap", label: "Complete Roadmap" },
  { to: "/welcome/guidance", label: "Guidance & Tips" },
  { to: "/welcome/resources", label: "Structured Resources" },
  { to: "/welcome/toolkit", label: "AI Toolkit" },
  { to: "/welcome/opportunities", label: "Explore Opportunities" },
  { to: "/welcome/community", label: "Community" },
];

export function DashboardNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const user = useUser();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-glass-border">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden text-lg font-semibold tracking-tight md:inline">
            Goal<span className="text-gradient">OS</span>
          </span>
        </Link>

        <nav className="flex flex-1 items-center gap-1 overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => {
            const active = pathname === tab.to;
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className="relative shrink-0 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {active && (
                  <motion.div
                    layoutId="dash-active"
                    className="absolute inset-0 rounded-lg bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className={`relative ${active ? "text-foreground" : ""}`}>
                  {tab.label}
                </span>
                {active && (
                  <motion.div
                    layoutId="dash-underline"
                    className="absolute -bottom-3 left-2 right-2 h-0.5 rounded-full bg-gradient-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {user && (
            <span className="hidden text-sm text-muted-foreground lg:inline">
              Hi, <span className="text-foreground font-medium">{user.username}</span>
            </span>
          )}
          <button
            onClick={() => { setUser(null); navigate({ to: "/" }); }}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
            aria-label="Log out"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
