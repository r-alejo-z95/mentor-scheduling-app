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

export async function submitGoogleButton() {
  const submit = await signIn("google");

  return submit;
}
