import { z } from "zod"; 

export const tagAddValidation = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  articles: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid article ID")).optional(),
});