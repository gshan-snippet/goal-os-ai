import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import { setUser } from "@/lib/auth-store";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — GoalOS" }] }),
  component: SignupPage,
});

const INTERESTS = [
  "AI / ML", "Web Dev", "Data Science", "Product", "Design",
  "Cybersecurity", "Cloud / DevOps", "Finance", "Research", "Entrepreneurship",
  "Mobile Dev", "Robotics", "Marketing", "Content Creation", "Open Source",
];

type Form = {
  username: string; password: string; age: string;
  degreeYear: string; degreeType: string; branch: string;
  state: string; city: string; interests: string[];
};

function SignupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Form>({
    username: "", password: "", age: "",
    degreeYear: "", degreeType: "", branch: "",
    state: "", city: "", interests: [],
  });

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  const toggleInterest = (t: string) => {
    setForm((f) => {
      const has = f.interests.includes(t);
      if (has) return { ...f, interests: f.interests.filter((x) => x !== t) };
      if (f.interests.length >= 5) return f;
      return { ...f, interests: [...f.interests, t] };
    });
  };

  const canNext =
    step === 1 ? form.username && form.password && form.age :
    step === 2 ? form.degreeYear && form.degreeType && form.branch :
    form.state && form.city && form.interests.length >= 3;

  const next = () => {
    if (step < 3) return setStep(step + 1);
    setUser({ username: form.username });
    try { localStorage.setItem("goalos_profile", JSON.stringify(form)); } catch {}
    navigate({ to: "/welcome/set-goals" });
  };

  return (
    <div className="min-h-screen">
      <TopNav />
      <section className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Create your GoalOS</h1>
            <p className="text-sm text-muted-foreground mt-1">Three quick steps to personalize everything.</p>
          </div>

          {/* progress */}
          <div className="mb-8 flex items-center gap-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1">
                <div className={`h-1.5 rounded-full transition ${s <= step ? "bg-gradient-primary" : "bg-muted"}`} />
                <div className={`mt-2 text-xs ${s === step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  Step {s}/3
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl glass-panel p-8 shadow-elegant">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Quick account setup</h2>
                    <Input label="Username" value={form.username} onChange={(v) => set("username", v)} placeholder="yourhandle" />
                    <Input label="Password" type="password" value={form.password} onChange={(v) => set("password", v)} placeholder="••••••••" />
                    <Input label="Age" type="number" value={form.age} onChange={(v) => set("age", v)} placeholder="20" />
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Academic context</h2>
                    <Select label="Degree Year" value={form.degreeYear} onChange={(v) => set("degreeYear", v)}
                      options={["1st year", "2nd year", "3rd year", "4th year", "5th year", "Postgrad"]} />
                    <Select label="Degree Type" value={form.degreeType} onChange={(v) => set("degreeType", v)}
                      options={["B.Tech", "B.Sc", "B.Com", "BBA", "BA", "M.Tech", "MBA", "M.Sc", "Other"]} />
                    <Input label="Branch / Major" value={form.branch} onChange={(v) => set("branch", v)} placeholder="Computer Science" />
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold">Location & interests</h2>
                    <div className="grid grid-cols-2 gap-3">
                      <Input label="State" value={form.state} onChange={(v) => set("state", v)} placeholder="Karnataka" />
                      <Input label="City" value={form.city} onChange={(v) => set("city", v)} placeholder="Bengaluru" />
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-muted-foreground">
                        Pick 3–5 interests · {form.interests.length}/5
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {INTERESTS.map((t) => {
                          const active = form.interests.includes(t);
                          return (
                            <button
                              type="button"
                              key={t}
                              onClick={() => toggleInterest(t)}
                              className={`group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition ${
                                active
                                  ? "border-transparent bg-gradient-primary text-primary-foreground shadow-glow"
                                  : "border-glass-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-primary/50"
                              }`}
                            >
                              {active && <Check className="h-3.5 w-3.5" />}
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={next}
              disabled={!canNext}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
            >
              {step === 3 ? "Finish & Enter GoalOS" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-input/40 border border-glass-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}

function Select({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-input/40 border border-glass-border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
