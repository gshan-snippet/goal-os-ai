import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/welcome/community")({
  head: () => ({ meta: [{ title: "Community — GoalOS" }] }),
  component: () => (
    <ComingSoon
      icon={Users}
      title="Community"
      description="Find peers chasing similar goals. Learn faster, together."
    />
  ),
});
