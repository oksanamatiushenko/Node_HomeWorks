import { Router } from "express";
import { addProductController, getProductsController } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/products", addProductController);
productsRouter.get("/products", getProductsController);

export default productsRouter;
