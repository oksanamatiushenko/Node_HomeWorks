import { Router } from "express";
import {
  registerController,
  loginController,
  changePasswordController,
  deleteAccountController,
  changeEmailController,
} from "../controllers/auth.controller.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import checkMustChangePassword from "../middlewares/checkMustChangePassword.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/change-password", authMiddleware, changePasswordController);
authRouter.post(
  "/change-email",
  authMiddleware,
  checkMustChangePassword,
  changeEmailController,
);
authRouter.post("/delete-account", authMiddleware, deleteAccountController);
authRouter.get(
  "/admin",
  authMiddleware,
  checkRoleMiddleware("admin"),
  (req, res) => {
    res.json({ message: `Привет, ${req.user.username}! Ты администратор.` });
  },
);

export default authRouter;
