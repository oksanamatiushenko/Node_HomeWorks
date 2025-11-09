import { Router } from "express";
import authenticate, { authorizeRole } from "../middleware/auth.js";
import {
  registerController,
  loginController,
  updateEmailController,
  deleteAccountController,
  updateRoleController,
  refreshTokenController,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/update-email", authenticate, updateEmailController);
authRouter.post("/refresh-token", authenticate, refreshTokenController);

authRouter.patch("/update-role", authenticate, authorizeRole("admin"), updateRoleController);
authRouter.delete("/delete-account", authenticate, deleteAccountController);


export default authRouter;
