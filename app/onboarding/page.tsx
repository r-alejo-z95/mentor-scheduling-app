"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { OnboardingAction } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "../lib/zodSchemas";
import { SubmitButton } from "../components/SubmitButtons";
import Link from "next/link";
import { redirectIfNotAuthenticated } from "../lib/hooks";
import { useEffect, useState } from "react";

export default function OnboardingRoute() {
  // Check auth, protected page
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuthentication() {
      const isAuthenticated = await redirectIfNotAuthenticated();
      if (!isAuthenticated) {
        return;
      }
      setIsLoading(false);
    }
    checkAuthentication();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 lg:gap-7 bg-background">
        <h1 className="text-5xl lg:text-7xl text-orange-400 text-center">
          You need to login to view this page
        </h1>
        <p className="text-3xl lg:text-5xl text-center">
          Redirecting to home screen...
        </p>
      </div>
    );
  }

  const [lastResult, action] = useActionState(OnboardingAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
      <Card className="min-w-[200px] md:min-w-[300px] lg:min-w-[500px] p-6 shadow-lg rounded-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to{" "}
            <Link href="/" className="hover:bg-muted hover:rounded-2xl">
              Mentor<span className="text-orange-400">Link</span>
            </Link>
          </CardTitle>
          <CardDescription className="text-center">
            Please fill out your information to set up your profile
          </CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <CardContent className="flex flex-col gap-y-5">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue}
                key={fields.fullName.key}
                placeholder="John Doe"
              />
              <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
            </div>
            <div className="grid gap-y-2">
              <Label>Username</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground cursor-default">
                  MentorLink.com/
                </span>
                <Input
                  name={fields.userName.name}
                  defaultValue={fields.userName.initialValue}
                  key={fields.userName.key}
                  placeholder="your-username"
                  className="rounded-l-none"
                />
              </div>
              <p className="text-red-500 text-sm">{fields.userName.errors}</p>
            </div>
          </CardContent>
          <CardFooter className="w-full mt-6">
            <SubmitButton text="Submit" className="w-full"></SubmitButton>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
