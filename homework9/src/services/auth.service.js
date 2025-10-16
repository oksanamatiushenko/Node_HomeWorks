import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";

import HttpError from "../utils/HttpError.js";

const { JWT_SECRET } = process.env;

export const register = async (payload) => {
  const hashPassword = await bcrypt.hash(payload.password, 10);
  return User.create({ ...payload, password: hashPassword });
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) throw new HttpError(401, "Email or password invalid");

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw new HttpError(401, "Email or password invalid");

  if (email === "admin@gmail.com" && user.role !== "admin") {
    await user.update({ role: "admin" });
  }

  if (user.mustChangePassword) {
    throw new HttpError(403, "Необходимо сменить пароль перед входом");
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24h" });
  return token;
};

export const changePassword = async (
  userId,
  { currentPassword, newPassword },
) => {
  const user = await User.findByPk(userId);
  if (!user) throw new HttpError(404, "Пользователь не найден");

  const valid = await bcrypt.compare(currentPassword, user.password);
  if (!valid) throw new HttpError(400, "Неверный текущий пароль");

  const hash = await bcrypt.hash(newPassword, 10);
  await user.update({ password: hash, mustChangePassword: false });
};

export const deleteAccount = async (userId, { currentPassword }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new HttpError(404, "Пользователь не найден");

  const valid = await bcrypt.compare(currentPassword, user.password);
  if (!valid) throw new HttpError(400, "Неверный пароль");

  await user.destroy();
};

export const changeEmail = async (userId, { currentPassword, newEmail }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new HttpError(404, "Пользователь не найден");

  const valid = await bcrypt.compare(currentPassword, user.password);
  if (!valid) throw new HttpError(400, "Неверный пароль");

  const existing = await User.findOne({ where: { email: newEmail } });
  if (existing) throw new HttpError(400, "Такой email уже существует");

  await user.update({ email: newEmail });
  await user.update({ email: newEmail, mustChangePassword: true });
};
