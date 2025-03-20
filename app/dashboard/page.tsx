import { redirectIfNotAuthenticated } from "../lib/hooks";

export default async function DashboardPage() {
  await redirectIfNotAuthenticated();

  return (
    <div>
      <h1>THIS IS THE DASHBOARD PAGE</h1>
    </div>
  );
}
