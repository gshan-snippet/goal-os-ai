import { createFileRoute } from "@tanstack/react-router";
import { Map } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/welcome/roadmap")({
  head: () => ({ meta: [{ title: "Complete Roadmap — GoalOS" }] }),
  component: () => (
    <ComingSoon
      icon={Map}
      title="Complete Roadmap"
      description="A step-by-step adaptive plan tailored to your degree, year, branch, and timeline."
    />
  ),
});
