import { Router } from "express";
import {
  getProductsController,
  getProductByIdController,
  addProductController,
  deleteProductByIdController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", getProductsController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.post("/", addProductController);
productsRouter.delete("/:id", deleteProductByIdController);

export default productsRouter;
