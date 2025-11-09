import { z } from "zod";

export const categoryAddSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
});

export const categoryUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});
