import HttpError from "../utils/HttpError.js";

export default function checkMustChangePassword(req, res, next) {
  if (req.user.mustChangePassword) {
    return next(new HttpError(403, "Необходимо сменить пароль"));
  }
  next();
}