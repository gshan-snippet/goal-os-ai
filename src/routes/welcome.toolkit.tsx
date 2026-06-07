import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/welcome/toolkit")({
  head: () => ({ meta: [{ title: "AI Toolkit — GoalOS" }] }),
  component: () => (
    <ComingSoon
      icon={Wrench}
      title="AI Toolkit"
      description="Built-in AI tools for execution: resume, projects, prep plans, and mock interviews."
    />
  ),
});
