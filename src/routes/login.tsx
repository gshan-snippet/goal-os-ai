import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import { setUser } from "@/lib/auth-store";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — GoalOS" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <TopNav />
      <section className="flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl glass-panel p-8 shadow-elegant"
        >
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Log in to continue your goal journey.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!username.trim()) return;
              setUser({ username: username.trim() });
              navigate({ to: "/welcome/set-goals" });
            }}
            className="space-y-4"
          >
            <Field label="Email or Username">
              <input
                value={username}
                onChange={(e) => setU(e.target.value)}
                required
                className="w-full rounded-xl bg-input/40 border border-glass-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Password">
              <input
                type="password"
                value={password}
                onChange={(e) => setP(e.target.value)}
                required
                className="w-full rounded-xl bg-input/40 border border-glass-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="••••••••"
              />
            </Field>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-primary px-4 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
