import Book from "../models/Book.js";
import { successResponse, errorResponse } from "../helpers/responseHelper.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    successResponse(res, 200, "Books retrieved successfully", books);
  } catch (error) {
    errorResponse(res, 500, "An error occurred while retrieving books", error);
  }
};

export const createBook = async (req, res) => {
  try {
    const { title, author, genre, year_published } = req.body;
    if (!title || !author || !genre || !year_published) {
      errorResponse(res, 400, "All book fields are required");
      return;
    }
    const newBook = await Book.create({
      title,
      author,
      genre,
      year_published,
    });
    successResponse(res, 201, "Book created successfully", newBook);
  } catch (error) {
    errorResponse(res, 500, "An error occurred while creating the book", error);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      errorResponse(res, 400, "Book ID is required");
      return;
    }
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      errorResponse(res, 404, "Book not found");
      return;
    }
    successResponse(res, 200, "Book deleted successfully");
  } catch (error) {
    errorResponse(res, 500, "An error occurred while deleting the book", error);
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, year_published } = req.body;
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, year_published },
      { new: true, runValidators: true }
    );
    if (!book) {
      errorResponse(res, 404, "Book not found");
      return;
    }
    successResponse(res, 200, "Book updated successfully", book);
  } catch (error) {
    errorResponse(res, 500, "An error occurred while updating the book", error);
  }
};
