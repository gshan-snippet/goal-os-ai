import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardNav } from "@/components/DashboardNav";

export const Route = createFileRoute("/welcome")({
  head: () => ({ meta: [{ title: "GoalOS Dashboard" }] }),
  component: WelcomeLayout,
});

function WelcomeLayout() {
  return (
    <div className="min-h-screen">
      <DashboardNav />
      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
