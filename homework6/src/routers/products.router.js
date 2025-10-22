import { Router } from "express";

import {
  getProductsController,
  addProductController,
  getProductsByIdController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", getProductsController);

productsRouter.get("/:id", getProductsByIdController);

productsRouter.post("/", addProductController);

export default productsRouter;
