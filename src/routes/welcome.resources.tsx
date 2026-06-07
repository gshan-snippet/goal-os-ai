import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/welcome/resources")({
  head: () => ({ meta: [{ title: "Structured Resources — GoalOS" }] }),
  component: () => (
    <ComingSoon
      icon={BookOpen}
      title="Structured Resources"
      description="Curated reading, courses, and tools — the right resource at the right step, never overload."
    />
  ),
});
