import validateBody from "../utils/validateBody.js";
import { registerSchema } from "../schemas/registerSchema.js";
import { loginSchema } from "../schemas/loginSchema.js";
import {
  register,
  login,
  updateEmail,
  deleteAccount,
  updateRole,
  refreshToken,
} from "../services/auth.service.js";

export const registerController = async (req, res) => {
  const data = validateBody(registerSchema, req.body);
  await register(data);
  res.status(201).json({ message: "Register successfully" });
};

export const loginController = async (req, res) => {
  const data = validateBody(loginSchema, req.body);
  const result = await login(data);
  res.json(result);
};

export const updateEmailController = async (req, res) => {
  const { newEmail, currentPassword } = req.body;
  const result = await updateEmail(req.user.id, newEmail, currentPassword);
  res.json(result);
};

export const deleteAccountController = async (req, res) => {
  const { currentPassword } = req.body;
  const result = await deleteAccount(req.user.id, currentPassword);
  res.json(result);
};

export const updateRoleController = async (req, res) => {
  const { userId, role } = req.body;
  const result = await updateRole(userId, role);
  res.json(result);
};

export const refreshTokenController = async (req, res) => {
  const result = await refreshToken(req.user);
  res.json(result);
};