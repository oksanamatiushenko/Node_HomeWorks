import {
  getBook,
  addBook,
  getBookById,
  updateBook,
  deleteBook
} from "../services/books.service.js";

export const getBookController = async (req, res) => {
  const books = await getBook();
  res.json(books);
};

export const getBookByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getBookById(id);
  res.json(result);
};

export const addBookController = async (req, res) => {
  const newBook = await addBook(req.body);
  res.status(201).json(newBook);
};

export const updateBookController = async (req, res) => {
  try {
    const updatedBook = await updateBook(req.params.id, req.body);

    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: "Книга не найдена" });
    }
  } catch (err) {
    res.status(500).json({ message: "Ошибка при обновлении книги", error: err });
  }
};

export const deleteBookController = async (req, res) => {
  try {
    const deleted = await deleteBook(req.params.id);

    if (deleted) {
      res.json({ message: "Книга удалена" });
    } else {
      res.status(404).json({ message: "Книга не найдена" });
    }
  } catch (err) {
    res.status(500).json({ message: "Ошибка при удалении книги", error: err });
  }
};