import { z } from "zod";

const forgotSchema = z.object({
  email: z.string().email("Please enter a valid university email"),
});

type ForgotFormData = z.infer<typeof forgotSchema>;

export { forgotSchema, type ForgotFormData };
