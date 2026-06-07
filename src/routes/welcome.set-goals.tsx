import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Target, Clock, BookOpen, Users, Heart, Wallet, UserCheck, Compass, ArrowRight, Check,
} from "lucide-react";

export const Route = createFileRoute("/welcome/set-goals")({
  head: () => ({ meta: [{ title: "Set Goals — GoalOS" }] }),
  component: SetGoals,
});

const PROBLEMS = [
  { id: "eligibility", icon: Target, label: "Eligibility gap" },
  { id: "time", icon: Clock, label: "Time management" },
  { id: "resources", icon: BookOpen, label: "Resource confusion" },
  { id: "mentorship", icon: Users, label: "Lack of guidance / mentorship" },
  { id: "motivation", icon: Heart, label: "Low confidence / motivation" },
  { id: "financial", icon: Wallet, label: "Financial barriers" },
  { id: "peer", icon: UserCheck, label: "Peer pressure / external influence" },
  { id: "awareness", icon: Compass, label: "Career awareness gap" },
];

function SetGoals() {
  const [goal, setGoal] = useState("");
  const [year, setYear] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const toggle = (id: string) =>
    setProblems((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-2xl rounded-3xl glass-panel p-12 text-center shadow-elegant"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
          <Check className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="text-3xl font-bold">Goal captured</h2>
        <p className="mt-3 text-muted-foreground">
          GoalOS is analyzing <span className="text-foreground font-medium">“{goal}”</span> for {year}.
          Your AI roadmap will appear in <span className="text-foreground">Complete Roadmap</span>.
        </p>
        <button
          onClick={() => { setDone(false); setGoal(""); setYear(""); setProblems([]); }}
          className="mt-8 rounded-xl glass-panel px-6 py-3 font-medium transition hover:bg-accent"
        >
          Add another goal
        </button>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Module · Set Goals</div>
        <h1 className="mt-2 text-4xl font-bold">What do you want to achieve?</h1>
        <p className="mt-2 text-muted-foreground">
          Be specific. GoalOS turns your intent into a roadmap.
        </p>
      </motion.div>

      <div className="mt-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-2xl glass-panel p-6">
          <label className="block text-sm font-medium text-muted-foreground">Your goal</label>
          <input
            value={goal} onChange={(e) => setGoal(e.target.value)}
            placeholder='e.g. "Become a data scientist" or "Get a Google internship"'
            className="mt-2 w-full bg-transparent text-xl outline-none placeholder:text-muted-foreground/60"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="rounded-2xl glass-panel p-6">
          <label className="block text-sm font-medium text-muted-foreground">Target year</label>
          <select
            value={year} onChange={(e) => setYear(e.target.value)}
            className="mt-2 w-full rounded-xl bg-input/40 border border-glass-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Select target year</option>
            {[2026, 2027, 2028, 2029, 2030].map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-lg font-semibold">Which problems are in your way?</h3>
          <p className="text-sm text-muted-foreground">Select all that apply — we’ll tailor your roadmap.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {PROBLEMS.map((p) => {
              const active = problems.includes(p.id);
              return (
                <motion.button
                  key={p.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggle(p.id)}
                  className={`relative flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                    active
                      ? "border-transparent bg-gradient-primary text-primary-foreground shadow-glow"
                      : "border-glass-border glass-panel hover:border-primary/50 hover:-translate-y-0.5"
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${active ? "bg-background/20" : "bg-accent"}`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{p.label}</span>
                  {active && <Check className="ml-auto h-4 w-4" />}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <button
          onClick={() => setDone(true)}
          disabled={!goal || !year}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.01] disabled:opacity-40 disabled:hover:scale-100"
        >
          Next <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
