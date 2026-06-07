import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { TopNav } from "@/components/TopNav";

export const Route = createFileRoute("/subscription")({
  head: () => ({
    meta: [
      { title: "Plans & Pricing — GoalOS" },
      { name: "description", content: "Choose a GoalOS plan: Free Trial, 1 Month, 6 Months, or 1 Year. Pick what fits your journey." },
    ],
  }),
  component: SubscriptionPage,
});

const PLANS = [
  {
    name: "Free Trial",
    price: "₹0",
    period: "7 days",
    features: ["1 active goal", "Basic roadmap", "Limited resources", "Community read-only"],
    cta: "Start Free",
  },
  {
    name: "1 Month",
    price: "₹299",
    period: "/month",
    features: ["3 active goals", "Full AI roadmap", "Curated resources", "All opportunities", "Community access"],
    cta: "Get Monthly",
  },
  {
    name: "6 Months",
    price: "₹1,299",
    period: "/6 months",
    badge: "Most Popular",
    features: ["Unlimited goals", "Adaptive AI guidance", "AI Toolkit included", "Priority opportunities", "Peer matching", "Save 28%"],
    cta: "Get 6 Months",
    highlight: true,
  },
  {
    name: "1 Year",
    price: "₹2,199",
    period: "/year",
    features: ["Everything in 6 months", "Annual goal reviews", "Mentor sessions (2)", "Early features access", "Save 38%"],
    cta: "Get Annual",
  },
];

function SubscriptionPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <section className="px-6 pt-20 pb-32">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Pricing
            </div>
            <h1 className="mt-4 text-balance text-5xl font-bold md:text-6xl">
              Pick a plan that <span className="text-gradient">moves with you</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Start free. Upgrade when you’re ready. Cancel anytime.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl p-7 transition hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass-panel hover:shadow-elegant"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground border border-glass-border">
                    {p.badge}
                  </div>
                )}
                <div className="text-sm font-medium opacity-80">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="opacity-70 text-sm">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`mt-8 block w-full rounded-xl px-4 py-3 text-center font-semibold transition ${
                    p.highlight
                      ? "bg-background text-foreground hover:scale-105"
                      : "bg-gradient-primary text-primary-foreground hover:scale-105"
                  }`}
                >
                  {p.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
