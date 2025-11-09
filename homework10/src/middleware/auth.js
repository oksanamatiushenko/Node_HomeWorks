import jwt from "jsonwebtoken";
import HttpError from "../utils/HttpError.js";
import User from "../db/models/User.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const authorization = req.get("Authorization");
  if (!authorization) return next(HttpError(401, "Authorization header missing"));
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" || !token) return next(HttpError(401, "Invalid auth header"));

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(payload.id);
    if (!user) return next(HttpError(401, "User not found"));
    req.user = { id: user.id, role: user.role, email: user.email };
    next();
  } catch (e) {
    next(HttpError(401, e.message));
  }
};

export const authorizeRole = (role) => (req, _res, next) =>
  (!req.user || req.user.role !== role)
    ? next(HttpError(403, "Forbidden"))
    : next();

export default authenticate;