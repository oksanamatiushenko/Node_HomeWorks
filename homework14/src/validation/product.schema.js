import { z } from "zod";

export const productAddSchema = z.object({
  name: z.string().min(1, "Name is required").transform(val => val.trim()),
  description: z.string().min(10, "Description must be at least 10 characters").transform(val => val.trim()),
  price: z.number().min(1, "Price is required"),
  category: z.string().min(1, "Category is required").transform(val => val.trim()),
});

