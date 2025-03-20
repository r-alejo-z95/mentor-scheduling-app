import { Navbar } from "../components/Navbar";
import { redirectIfNotAuthenticated } from "../lib/hooks";

export default async function DashboardPage() {
  const session = await redirectIfNotAuthenticated();

  return <div>dashboard</div>;
}
