## Backend Development Semi-Finals Instructions (Express.js)

For this exam, you must build a backend application using Express.js, following an MVC structure (Models, Controllers, Routes).
Install and use the following packages:

- express

- dotenv

- nodemon

You Must use the Predifined Data Given in the Models

- `user.js`
- `cars.js`

## Required Endpoints

Your backend must include the following` GET` routes:

- **GET /user**s → return all users

- **GET /cars** → return all cars

- **GET /all** → return all users and all cars in a single JSON response

## Exam Guidelines

- Use a clear folder structure: `models/`, `controllers/`, `routes/`.

- Models must export the predefined static data exactly as listed.

- Controllers must handle data retrieval.

- Routes must call their corresponding controllers.

- **nodemon** must be used to run the server.

- **dotenv** must manage your PORT.

- Responses must be in **JSON** format.

