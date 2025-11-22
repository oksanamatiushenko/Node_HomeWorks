import Book from "../db/models/Book.js";

export const addBook = (payload) => Book.create(payload);
export const getBook = () => Book.findAll();
export const getBookById = (id) => Book.findByPk(id);
export const updateBook = async (id, payload) => {
  const book = await getBookById(id);
  if (!book) {
    return null;
  }
  return book.update(payload);

};
export const deleteBook = (id) => Book.destroy({ where: { id } });
