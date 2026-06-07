import { createFileRoute } from "@tanstack/react-router";
import { Compass } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/welcome/guidance")({
  head: () => ({ meta: [{ title: "Guidance & Tips — GoalOS" }] }),
  component: () => (
    <ComingSoon
      icon={Compass}
      title="Guidance & Tips"
      description="Continuous nudges, weekly focus, and habit prompts to keep you moving toward your goal."
    />
  ),
});
