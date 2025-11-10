import { z } from "zod";

export const addMagazineValidation = z.object({
  title: z.string().trim(),
  issueNumber: z.number(),
  publisher: z.string().trim(),
});

export const updateMagazineValidation = z.object({
  title: z.string().trim().optional(),
  issueNumber: z.number().optional(),
  publisher: z.string().trim().optional(),
});