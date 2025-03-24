import { conformZodMessage } from "@conform-to/zod";
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

export function onboardingSchemaValidation(options?: {
  isUserNameUnique: () => Promise<boolean>;
}) {
  return z.object({
    userName: z
      .string()
      .min(3)
      .max(150)
      .regex(/^[a-zA-Z0-9-]+$/, {
        message: " Only letters, numbers, and hyphens are allowed",
      })
      .pipe(
        z.string().superRefine((_, ctx) => {
          if (typeof options?.isUserNameUnique !== "function") {
            ctx.addIssue({
              code: "custom",
              message: conformZodMessage.VALIDATION_UNDEFINED,
              fatal: true,
            });
            return;
          }
          return options.isUserNameUnique().then((isUnique) => {
            if (!isUnique) {
              ctx.addIssue({
                code: "custom",
                message: "Username is already taken",
              });
            }
          });
        })
      ),
    fullName: z
      .string()
      .min(3)
      .max(150)
      .regex(/^(?:[\p{L}]+(?:\s[\p{L}]+){0,5})$/u, {
        message: " Only letters are allowed",
      }),
  });
}
