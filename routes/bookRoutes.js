import express from "express";
import {
  getAllBooks,
  createBook,
  deleteBook,
  updateBook,
} from "../Controllers/booksController.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.delete("/books", deleteBook);
router.put("/books/:id", updateBook);

export default router;
