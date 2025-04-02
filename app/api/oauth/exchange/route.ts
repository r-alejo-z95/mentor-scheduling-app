import { prisma } from "@/app/lib/db";
import { redirectIfNotAuthenticated } from "@/app/lib/hooks";
import { nylas, nylasConfig } from "@/app/lib/nylas";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const session = await redirectIfNotAuthenticated();

  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return Response.json("No authorization code returned from Nylas", {
      status: 400,
    });
  }

  try {
    const response = await nylas.auth.exchangeCodeForToken({
      clientSecret: nylasConfig.apiKey,
      clientId: nylasConfig.clientId!,
      redirectUri: nylasConfig.redirectUri,
      code: code,
    });

    const { grantId, email } = response;

    await prisma.user.update({
      where: {
        id: session.user?.id,
      },
      data: {
        grantID: grantId,
        grantEmail: email,
      },
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }

  redirect("/dashboard");
}
