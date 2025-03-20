import { redirect } from "next/navigation";
import { auth } from "./auth";

export async function redirectIfNotAuthenticated() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/");
  }
  return session;
}

export async function redirectIfAuthenticated() {
  const session = await auth();

  if (session?.user) {
    return redirect("/");
  }
  return session;
}
