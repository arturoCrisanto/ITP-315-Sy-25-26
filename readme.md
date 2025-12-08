# Books API - Express.js Backend

A RESTful API for managing a collection of books using Express.js with MVC architecture and predefined data.

## Features

- CRUD operations for books (Create, Read, Update, Delete)
- MVC architecture (Models, Controllers, Routes)
- Predefined book data (no database required)
- Input validation and error handling
- Clean JSON responses

## Tech Stack

- **express** - Web framework
- **dotenv** - Environment variable management
- **nodemon** - Development auto-reload

## Project Structure

```
├── models/
│   ├── books.js          # Predefined book data
│   └── Book.js           # Book model schema
├── Controllers/
│   └── booksController.js # Business logic
├── routes/
│   └── bookRoutes.js      # API endpoints
├── helpers/
│   └── responseHelper.js  # Response utilities
├── config/
│   └── database.js        # Database configuration
├── server.js              # Entry point
└── .env                   # Environment variables
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```
PORT=3000
NODE_ENV=development
```

4. Start the server:

```bash
npm start
```

## API Endpoints

### Get All Books

**GET** `/api/books`

Returns all books in the collection.

### Create Book

**POST** `/api/books`

Request body:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "year_published": 2024
}
```

### Update Book

**PUT** `/api/books/:id`

Request body (all fields optional for partial update):

```json
{
  "title": "Updated Title",
  "author": "Updated Author",
  "genre": "Updated Genre",
  "year_published": 2024
}
```

### Delete Book

**DELETE** `/api/books?id={bookId}`

Deletes a book by ID using query parameter.

## Response Format

All responses follow this structure:

**Success:**

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

**Error:**

```json
{
  "success": false,
  "message": "Error description",
  "error": { ... }
}
```

## Development

The application uses predefined data from `models/books.js`. All operations are performed in-memory on the books array.

## Notes

- All book fields are required when creating a book
- Update operations support partial updates (only provided fields are updated)
- Duplicate books (same title and author) are not allowed
- IDs are auto-generated based on array length
