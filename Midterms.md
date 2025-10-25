# Midterms Exam: Choose One Task

## 📝 Instructions:

You can choose **only ONE (1)** task below.

🧩 Option 1: JavaScript – Mapping, Spreading, and Destructuring
Task:

Using the mock data below, create a program that demonstrates:

1. `Mapping` – Create a new array that increases each student’s score by 10 points.

2. `Destructuring `– Destructure the student object to get name, age, and course.

3. `Spreading` – Combine two arrays of student names using the spread operator and merge two objects into one.\

```javascript
const students = [
  { name: "Ruz", age: 21, course: "IT", score: 80 },
  { name: "Mika", age: 22, course: "CS", score: 85 },
  { name: "Liam", age: 20, course: "IS", score: 90 },
];

const extraNames = ["Kaye", "Drew", "Chloe"];

const studentInfo = { id: 1, section: "BSIT-3A" };
const extraInfo = { semester: "1st", schoolYear: "2025-2026" };
```

Expected Output

```bash
Updated Scores: [90, 95, 100]

Student Info:
Name: Ruz
Age: 21
Course: IT

Combined Names: ["Ruz", "Mika", "Liam", "Kaye", "Drew", "Chloe"]
Merged Object: {id: 1, section: "BSIT-3A", semester: "1st", schoolYear: "2025-2026"}
```

---

## ⚙️ Option 2: Backend Setup – Express.js Basic Server

Task:
`Create a basic`Express.js server with environment setup and gitignore.

Requirements:

1. Use Express.js to create a server that runs on a` port` from `.env`.

2. Display **"Server is running on port [PORT]"** in the console when it starts.

3. The server should return **"Welcome to my simple backend!"** when you open it in a browser.

4. Use nodemon for development (auto-restart).

5. Add .gitignore and ignore:
   - node_modules
   - .env
6. Include:

   - server.js

   - .env

   - .gitignore

   - package.json

   - package-lock.json

---

## 📤 Submission:

Choose Option 1 or Option 2

Submit your project GitHub repository link.
