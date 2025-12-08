import books from "../models/books.js";
import { successResponse, errorResponse } from "../helpers/responseHelper.js";

export const getAllBooks = (req, res) => {
  successResponse(res, 200, "Books retrieved successfully", books);
};

export const createBook = (req, res) => {
  //gamit inen is para pag fetch an data ha body
  const { title, author, genre, year_published } = req.body;
  // inen pag check kon an fields is mayda tanan
  if (!title || !author || !genre || !year_published) {
    errorResponse(res, 400, "All book fields are required");
    return;
  }

  // pag check kon an book is existing na
  if (books.some((book) => book.title === title && book.author === author)) {
    errorResponse(res, 409, "Book already exists");
    return;
  }
  // pag create na hin new book
  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    year_published,
  };

  // pag add na hin new book ha array
  books.push(newBook);
  successResponse(res, 201, "Book created successfully", newBook);
};

export const deleteBook = (req, res) => {
  // adi gamit kay gamit it query parameter para pag delete hin book
  const { id } = req.query;

  // validation la kon may sulod it id
  if (!id) {
    errorResponse(res, 400, "Book ID is required");
    return;
  }

  // pag check kon an book is existing na
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));

  // pag check kon an book is existing ha books array
  if (bookIndex === -1) {
    errorResponse(res, 404, "Book not found");
    return;
  }

  // pag delete na hin book ha array
  //splice() method is used to remove the book from the array
  books.splice(bookIndex, 1);
  successResponse(res, 200, "Book deleted successfully");
};

export const updateBook = (req, res) => {
  //gamit inen is para pag fetch an id ha url parameters
  const { id } = req.params;
  // adi liwat pag fetch an data ha body
  const { title, author, genre, year_published } = req.body;

  // validation la kon may sulod it id
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));

  // pag check kon an book is existing ha books array
  if (bookIndex === -1) {
    errorResponse(res, 404, "Book not found");
    return;
  }

  // pag update na hin book ha array
  books[bookIndex] = {
    ...books[bookIndex],
    title: title || books[bookIndex].title,
    author: author || books[bookIndex].author,
    genre: genre || books[bookIndex].genre,
    year_published: year_published || books[bookIndex].year_published,
  };
  // pag return na hin success response
  successResponse(res, 200, "Book updated successfully", books[bookIndex]);
};
