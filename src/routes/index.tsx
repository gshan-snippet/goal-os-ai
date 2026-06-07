import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Map, Compass, Sparkles, Users, Target, Zap, BookOpen, Briefcase,
} from "lucide-react";
import { TopNav } from "@/components/TopNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GoalOS — Your AI-Powered Goal Operating System for Students" },
      { name: "description", content: "Define goals, generate AI roadmaps, discover opportunities, and connect with peers. The goal-centric OS for degree students." },
      { property: "og:title", content: "GoalOS — AI Goal Operating System for Students" },
      { property: "og:description", content: "Goal-centric AI. Personalized roadmaps, curated resources, opportunities, and community." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-accent-glow/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Goal-centric AI for the next generation of students
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-5xl font-bold tracking-tight md:text-7xl"
        >
          Your AI-Powered <br />
          <span className="text-gradient">Goal Operating System</span> <br />
          for Students
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
        >
          Not course-centric. Not job-centric. Fully goal-centric. Define what you want,
          and GoalOS builds the roadmap, surfaces the opportunities, and adapts as you grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
          >
            Start for Free
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            to="/subscription"
            className="rounded-xl glass-panel px-7 py-3.5 font-semibold transition hover:bg-accent"
          >
            View Plans
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 mx-auto max-w-4xl"
        >
          <div className="glass-panel rounded-3xl p-2 shadow-elegant">
            <div className="rounded-2xl bg-card/60 p-8 md:p-12">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { icon: Target, label: "Define a goal", desc: "“Become a data scientist”" },
                  { icon: Map, label: "Get a roadmap", desc: "12-step adaptive plan" },
                  { icon: Zap, label: "Take action", desc: "Curated weekly focus" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="rounded-xl border border-glass-border bg-background/40 p-5 text-left"
                  >
                    <s.icon className="mb-3 h-5 w-5 text-primary" />
                    <div className="text-sm font-medium">{s.label}</div>
                    <div className="text-xs text-muted-foreground">{s.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: Map, title: "Personalized Roadmaps", desc: "AI breaks your goal into clear, sequenced steps tailored to your year, branch, and time." },
  { icon: Briefcase, title: "Real Opportunities", desc: "Internships, scholarships, competitions, jobs, and events — curated to your goal." },
  { icon: Compass, title: "Continuous AI Guidance", desc: "GoalOS adapts as you progress, nudging next steps and removing blockers." },
  { icon: Users, title: "Community Matching", desc: "Connect with peers chasing similar goals. Learn faster, together." },
  { icon: BookOpen, title: "Structured Resources", desc: "No content overload. Just the right resource at the right step." },
  { icon: Sparkles, title: "AI Toolkit", desc: "Built-in tools for execution: resume, prep, project ideas, mock interviews." },
];

function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The system"
          title="An operating system built around your goals"
          subtitle="Everything you need to move from “I want to” to “I’m doing it.”"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass-panel p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Tell GoalOS your goal", desc: "Type it in plain language. We capture context, timeline, and the obstacles in your way." },
    { n: "02", title: "Get your adaptive roadmap", desc: "A step-by-step plan generated for your degree, branch, year, and interests." },
    { n: "03", title: "Execute with curated resources", desc: "The right reading, course, or tool — surfaced only when you need it." },
    { n: "04", title: "Grow with opportunities & peers", desc: "Discover internships and scholarships, and find peers chasing the same outcome." },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="How it works" title="Goals in. Momentum out." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl glass-panel p-7"
            >
              <div className="text-gradient mb-3 text-3xl font-bold">{s.n}</div>
              <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl rounded-3xl glass-panel p-12 text-center shadow-elegant relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-20 blur-3xl" />
        <h2 className="text-balance text-4xl font-bold md:text-5xl">
          Start running your goals like an <span className="text-gradient">operating system</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Free to start. No credit card. Personalized in under 60 seconds.
        </p>
        <Link
          to="/signup"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
        >
          Start for Free <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full glass-panel px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-balance text-4xl font-bold md:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glass-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GoalOS. Built for ambitious students.
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/subscription" className="hover:text-foreground">Pricing</Link>
          <Link to="/login" className="hover:text-foreground">Login</Link>
          <Link to="/signup" className="hover:text-foreground">Sign up</Link>
        </div>
      </div>
    </footer>
  );
}
