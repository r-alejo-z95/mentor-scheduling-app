import { z } from "zod";

export const onboardingSchema = z.object({
  fullName: z
    .string()
    .min(3)
    .max(150)
    .regex(/^(?:[\p{L}]+(?:\s[\p{L}]+){0,5})$/u, {
      message: " Only letters are allowed",
    }),
  userName: z
    .string()
    .min(3)
    .max(150)
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: " Only letters, numbers, and hyphens are allowed",
    }),
});
