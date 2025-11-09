import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../db/models/User.js";
import HttpError from "../utils/HttpError.js";

const { JWT_SECRET } = process.env;

const signToken = (id, role) =>
  jwt.sign({ id, role }, JWT_SECRET, { expiresIn: "24h" });

export const register = async ({ username, email, password }) => {
  const exists = await User.findOne({ where: { email } });
  if (exists) throw HttpError(409, "Email already registered");
  const passwordHash = await bcrypt.hash(password, 10);
  const usersCount = await User.count();
  const role = usersCount === 0 ? "admin" : "user";

  await User.create({ username, email, password: passwordHash, role });
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw HttpError(401, "Email or password is wrong");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw HttpError(401, "Email or password is wrong");

  const token = signToken(user.id, user.role);
  return { token, user: { id: user.id, email: user.email, role: user.role } };
};

export const updateEmail = async (userId, newEmail, currentPassword) => {
  if (!newEmail) throw HttpError(400, "newEmail is required");
  if (!currentPassword) throw HttpError(400, "currentPassword is required");

  const user = await User.findByPk(userId);
  if (!user) throw HttpError(404, "User not found");

  const ok = await bcrypt.compare(currentPassword, user.password);
  if (!ok) throw HttpError(401, "Invalid password");

  const exists = await User.findOne({ where: { email: newEmail } });
  if (exists) throw HttpError(409, "Email already in use");

  user.email = newEmail;
  await user.save();

  return { message: "Email updated", email: user.email };
};

export const deleteAccount = async (userId, currentPassword) => {
  const user = await User.findByPk(userId);
  if (!user) throw HttpError(404, "User not found");

  const ok = await bcrypt.compare(currentPassword, user.password);
  if (!ok) throw HttpError(401, "Invalid password");

  await user.destroy();
  return { message: "Account deleted" };
};

export const updateRole = async (userId, role) => {
  if (!userId || !role) throw HttpError(400, "userId and role are required");
  const user = await User.findByPk(userId);
  if (!user) throw HttpError(404, "User not found");
  user.role = role;
  await user.save();
  return { message: "Role updated", user: { id: user.id, role: user.role } };
};

export const refreshToken = async (currentUser) => {
  const { id, role } = currentUser;
  const token = signToken(id, role);
  return { token };
};
