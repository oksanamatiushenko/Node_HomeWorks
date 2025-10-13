import Book from "../db/models/Book.js";

export const addBook = (payload) => Book.create(payload);
export const getBook = () => Book.findAll();
export const getBookById = (id) => Book.findByPk(id);
export const updateBook = (id, payload) =>
  Book.update(payload, { where: { id } });
export const deleteBook = (id) => Book.destroy({ where: { id } });
