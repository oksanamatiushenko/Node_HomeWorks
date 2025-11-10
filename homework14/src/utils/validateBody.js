const validateBody = (schema, body) => {
  const result = schema.safeParse(body);
  if (!result.success) {
    const message = result.error.errors.map(err => err.message).join(", ");
    const error = new Error(message);
    error.status = 400;
    throw error;
  }
  return result.data;
};

export default validateBody;

