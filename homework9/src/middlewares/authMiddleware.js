import jwt from "jsonwebtoken";
import User from "../db/models/User.js";
import HttpError from "../utils/HttpError.js";

const { JWT_SECRET } = process.env;

export default async function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header) throw new HttpError(401, "Отсутствует токен");

    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findByPk(decoded.id);
    if (!user) throw new HttpError(401, "Пользователь не найден");

    req.user = user;

    next();
  } catch (err) {
    if (err instanceof HttpError) return next(err);
    return next(new HttpError(401, "Неверный или истёкший токен"));
  }
}
