import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

export function ComingSoon({
  icon: Icon = Sparkles, title, description,
}: { icon?: LucideIcon; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="mx-auto mt-10 max-w-2xl rounded-3xl glass-panel p-14 text-center shadow-elegant"
    >
      <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
        <Icon className="h-9 w-9 text-primary-foreground" />
        <span className="absolute -right-2 -top-2 rounded-full bg-background px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary border border-glass-border">
          Soon
        </span>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-3 text-muted-foreground">{description}</p>
      <div className="mt-8 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm text-muted-foreground">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        We’re actively building this module.
      </div>
    </motion.div>
  );
}
