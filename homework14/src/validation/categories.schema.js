import { z } from "zod";

export const categoryAddSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").transform(val => val.trim()),
  description: z.string().min(10, "Description must be at least 10 characters").transform(val => val.trim()),
});
