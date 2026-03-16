import { z } from "zod";

export const signupSchema = z
  .object({
    fullName: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
    universityEmail: z
      .string()
      .min(1, "University email is required")
      .email("Invalid university email")
      .endsWith(".edu", "Must be a .edu email"),
    personalEmail: z.string().min(1, "Personal email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    },
  );

export type SignupFormData = z.infer<typeof signupSchema>;
