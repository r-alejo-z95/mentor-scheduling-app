import { Navbar } from "./components/Navbar";
import { redirectIfAuthenticated } from "./lib/hooks";

export default async function Home() {
  const session = await redirectIfAuthenticated();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
    </div>
  );
}
