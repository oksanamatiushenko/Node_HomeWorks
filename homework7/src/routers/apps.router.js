import { Router } from "express";
import {
  getAppByIdController,
  getAppController,
  addAppController,
} from "../controllers/app.controller.js";

const appsRouter = Router();

appsRouter.get("/", getAppController);
appsRouter.get("/:id", getAppByIdController);
appsRouter.post("/", addAppController);

export default appsRouter;
