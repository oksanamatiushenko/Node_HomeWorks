import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(1, "username is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 chars"),
});
