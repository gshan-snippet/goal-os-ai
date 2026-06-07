import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/welcome/opportunities")({
  head: () => ({ meta: [{ title: "Explore Opportunities — GoalOS" }] }),
  component: () => (
    <ComingSoon
      icon={Briefcase}
      title="Explore Opportunities"
      description="Internships, scholarships, competitions, jobs, and events curated to your goal."
    />
  ),
});
