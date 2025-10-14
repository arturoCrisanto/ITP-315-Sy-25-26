# Group Activity: “Express Yourself!” — Building a Simple Express Backend

## Objective:

Students will collaborate to create a basic Express.js backend using **Express**, **Nodemon**, and **Dotenv**. Each member will create their own route that introduces themselves — making this both a coding and get-to-know-you activity

[![meme gif](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXFiOTJhY213ZHlraXBrNDVrOGZiNXF4b2x4cDlxc2tiYWFmc3lxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/111ebonMs90YLu/giphy.gif)](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXFiOTJhY213ZHlraXBrNDVrOGZiNXF4b2x4cDlxc2tiYWFmc3lxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/111ebonMs90YLu/giphy.gif)

🧩 Instructions

1. Form a group.
   Each group will work together on a shared backend project.
   (No specific roles — everyone codes!)

---

2. Project Setup

   - Create a new folder named express-yourself.

   - Open it in VS Code.

   - Initialize the project and install necessary **dependencies**
     - express
     - nodemon
     - dotenv

---

3. Build the server
   Inside `server.js:`

```javascript
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

4. Each Member Creates a Personal Route
   Every group member should create their `own route` with their `name` and `short description`.
   Example:

```javascript
app.get("/ruz", (req, res) => {
  res.send("Hi! I am Ruz — I love teaching backend development!");
});
```

- Example route names: /anna, /mark, /josh, /maria

- Each member `commits` and `pushes` their route to the `shared GitHub repo`.

---

5. Test Your Routes

Run the server:

```bash
npm run dev
```

Visit each route (e.g., `http://localhost:3000/anna`)
Make sure all group members’ routes work!

## Challenge Extension

If the group finishes early:

- Add a homepage route / that lists all members.

- Use `res.json()` instead of `res.send()` to return data in JSON format.

```bash
Set-ExecutionPolicy RemoteSigned -Scope Process
```
