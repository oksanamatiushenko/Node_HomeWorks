import {
  register,
  login,
  changePassword,
  deleteAccount,
  changeEmail,
} from "../services/auth.service.js";

import validateBody from "../utils/validateBody.js";

import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
  changeEmailSchema,
} from "../schemas/auth.schemas.js";

export const registerController = async (req, res) => {
  validateBody(registerSchema, req.body);
  const result = await register(req.body);

  res.status(201).json({
    message: "Register successfully",
    user: {
      id: result.id,
      username: result.username,
      email: result.email,
    },
  });
};

export const loginController = async (req, res) => {
  validateBody(loginSchema, req.body);
  const token = await login(req.body);

  res.json({ token });
};

export const changePasswordController = async (req, res) => {
  validateBody(changePasswordSchema, req.body);
  await changePassword(req.user.id, req.body);
  res.json({ message: "Пароль успешно изменён" });
};

export const deleteAccountController = async (req, res) => {
  await deleteAccount(req.user.id, req.body);
  res.json({ message: "Аккаунт удалён" });
};

export const changeEmailController = async (req, res) => {
  validateBody(changeEmailSchema, req.body);
  await changeEmail(req.user.id, req.body);
  res.json({ message: "Email успешно изменён" });
};
