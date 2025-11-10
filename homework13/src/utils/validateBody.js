import HttpException from "./HttpException.js";

const validateBody = (schema, body) => {
  const result = schema.safeParse(body);

  if (!result.success) {
    const message = result.error.errors.map(err => err.message).join(", ");
    throw HttpException(400, message);
  }

  return result.data;
};

export default validateBody;