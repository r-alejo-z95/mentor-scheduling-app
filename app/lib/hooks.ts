"use server";

import { redirect } from "next/navigation";
import { auth, signIn } from "./auth";

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
    return redirect("/dashboard");
  }
  return session;
}

export async function submitGoogleButton() {
  await signIn("google");

  return;
}
