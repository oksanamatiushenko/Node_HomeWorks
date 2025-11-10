import { z } from "zod";

export const addPublisherValidation = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  location: z.string().trim(),
});

export const updatePublisherValidation = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim().optional(),
  location: z.string().trim().optional(),
});