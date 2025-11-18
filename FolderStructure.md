# Activity: Express.js Backend with Mock Data

## Objective:

Create a **backend API** using **Express.js**, organized with **controllers**, **models**, and **routes**, using predefined mock data. Configure `dotenv`, `nodemon`, and a proper `.gitignore.` Submit via `GitHub`.

```bash
project-name/
│── controllers/        # Handles API logic
│
│── models/             # Contains mock data
│
│── routes/             # Maps endpoints to controllers
│
│── node_modules/       # Installed dependencies (auto-generated)
│
│── .env                # Environment variables
│
│── .gitignore          # Ignore node_modules and .env
│
│── package.json        # Project metadata and scripts
│
└── server.js           # Main entry point for the Express server

```

## Predefined Mock Data (Code)

Place this inside `models/userModel.js`:

```javascript
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
  { id: 5, name: "Eva", email: "eva@example.com" },
  { id: 6, name: "Frank", email: "frank@example.com" },
  { id: 7, name: "Grace", email: "grace@example.com" },
  { id: 8, name: "Henry", email: "henry@example.com" },
  { id: 9, name: "Irene", email: "irene@example.com" },
  { id: 10, name: "Jack", email: "jack@example.com" },
  { id: 11, name: "Karen", email: "karen@example.com" },
  { id: 12, name: "Liam", email: "liam@example.com" },
  { id: 13, name: "Mia", email: "mia@example.com" },
  { id: 14, name: "Noah", email: "noah@example.com" },
  { id: 15, name: "Olivia", email: "olivia@example.com" },
  { id: 16, name: "Paul", email: "paul@example.com" },
  { id: 17, name: "Quinn", email: "quinn@example.com" },
  { id: 18, name: "Rachel", email: "rachel@example.com" },
  { id: 19, name: "Sam", email: "sam@example.com" },
  { id: 20, name: "Tina", email: "tina@example.com" },
];

export const = users;
```

---

# Instructions

- Organize your project following the **folder structure** above.

- Use the provided **mock data** in your models folder.

- Configure `dotenv` for environment variables (e.g., PORT).

- Include a `.gitignore` to exclude node_modules/ and .env.

- Use `nodemon` for development.

- Push your project to GitHub and submit the repository link.

# Bonus:

create a Route and a Controller for selecting a single user
Example route:

```bash
https://localhost:3000/api/users/1
```

Expected outcome

```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```

# If you encounter any Error for `npm`
```bash
Set-ExecutionPolicy RemoteSigned -Scope Process
```

![good luck](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWtrZDltcG4yOGwxb3g0dGh3MHRxa3hndWc2dThhaWxoNnZmbjFuYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gfZ9ClheLUDQKIJmEH/giphy.gif)
