import HttpError from "../utils/HttpError.js";

export default function checkRoleMiddleware(role) {
  return (req, res, next) => {
    if (!req.user) return next(new HttpError(401, "Не авторизован"));
    if (req.user.role !== role) return next(new HttpError(403, "Доступ запрещён"));
    next();
  };
}
