import { Router } from "express";
import {
  getCategoriesController,
  addCategoryController,
} from "../controllers/categories.controller.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategoriesController);
categoriesRouter.post("/categories", addCategoryController);

export default categoriesRouter;