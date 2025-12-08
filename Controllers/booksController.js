import books from "../models/books.js";
import { successResponse, errorResponse } from "../helpers/responseHelper.js";

export const getAllBooks = (req, res) => {
  successResponse(res, 200, "Books retrieved successfully", books);
};

export const createBook = (req, res) => {
  const { title, author, genre, year_published } = req.body;
  if (!title || !author || !genre || !year_published) {
    errorResponse(res, 400, "All book fields are required");
    return;
  }
  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    year_published,
  };
  books.push(newBook);
  successResponse(res, 201, "Book created successfully", newBook);
};

export const deleteBook = (req, res) => {
  const { id } = req.query;
  if (!id) {
    errorResponse(res, 400, "Book ID is required");
    return;
  }
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));
  if (bookIndex === -1) {
    errorResponse(res, 404, "Book not found");
    return;
  }
  books.splice(bookIndex, 1);
  successResponse(res, 200, "Book deleted successfully");
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, genre, year_published } = req.body;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));
  if (bookIndex === -1) {
    errorResponse(res, 404, "Book not found");
    return;
  }
  books[bookIndex] = {
    ...books[bookIndex],
    title: title || books[bookIndex].title,
    author: author || books[bookIndex].author,
    genre: genre || books[bookIndex].genre,
    year_published: year_published || books[bookIndex].year_published,
  };

  successResponse(res, 200, "Book updated successfully", books[bookIndex]);
};
