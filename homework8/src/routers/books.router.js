import { Router } from "express";
import {
  getBookByIdController,
  getBookController,
  addBookController,
  updateBookController,
  deleteBookController,
} from "../controllers/book.controller.js";

const booksRouter = Router();

booksRouter.get("/books", getBookController);
booksRouter.get("/books/:id", getBookByIdController);
booksRouter.post("/books", addBookController);
booksRouter.put("/books/:id", updateBookController);
booksRouter.delete("/books/:id", deleteBookController);

export default booksRouter;
