# MongoDB Connection Setup

Your backend is now connected to MongoDB! Here's what was configured:

## Files Created/Modified:

1. **config/database.js** - Database connection configuration
2. **models/Book.js** - Mongoose schema for books
3. **server.js** - Added MongoDB connection
4. **Controllers/booksController.js** - Updated to use MongoDB operations
5. **.env** - Environment variables

## Environment Variables (.env):

```
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/booksdb
```

## Setup Options:

### Option 1: Local MongoDB

If you want to use MongoDB locally:

1. Install MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Your connection string is already set: `mongodb://localhost:27017/booksdb`

### Option 2: MongoDB Atlas (Cloud - Recommended)

For a cloud database:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Update `.env` with your connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/booksdb?retryWrites=true&w=majority
   ```

## Testing Your Setup:

Start your server:

```bash
npm run dev
```

You should see:

- "MongoDB Connected: ..."
- "Server is running on port 3000"

## API Endpoints (now using MongoDB):

- `GET /api/books` - Get all books
- `POST /api/books` - Create a book
- `PUT /api/books/:id` - Update a book (use MongoDB \_id)
- `DELETE /api/books/:id` - Delete a book (use MongoDB \_id)

**Note:** IDs are now MongoDB ObjectIds (e.g., `507f1f77bcf86cd799439011`) instead of sequential numbers.
