import { z } from "zod";

export const articleAddValidation = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").trim(),
  content: z.string().min(20, "Content must be at least 20 characters").trim(),
  tags: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid tag ID")).nonempty("Tags are required"),
});

export const articleUpdateValidation = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").trim().optional(),
  content: z.string().min(20, "Content must be at least 20 characters").trim().optional(),
  tags: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid tag ID")).optional(),
});