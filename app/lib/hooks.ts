"use server";

import { redirect } from "next/navigation";
import { auth, signIn } from "./auth";
import { prisma } from "./db";

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

export async function onboardingAction(formData: FormData) {
  const session = await redirectIfNotAuthenticated();

  const data = await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      userName: "string",
      name: "string",
    },
  });
}
