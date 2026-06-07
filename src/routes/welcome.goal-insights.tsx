import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/welcome/goal-insights")({
  head: () => ({ meta: [{ title: "Goal Insights — GoalOS" }] }),
  component: () => (
    <ComingSoon
      icon={Lightbulb}
      title="Goal Insights"
      description="AI is analyzing your goal — viability, prerequisites, market signal, and recommended sequencing."
    />
  ),
});
