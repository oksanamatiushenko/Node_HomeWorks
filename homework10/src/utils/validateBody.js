import HttpError from "./HttpError.js";

export default function validateBody(schema, body) {
  const result = schema.safeParse(body);
  if (!result.success) {
    const msg = result.error.issues?.[0]?.message || "Validation error";
    throw HttpError(400, msg);
  }
  return result.data;
}