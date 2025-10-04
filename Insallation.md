# Activity: “My First Express Server”

## 🎯 Objective

Students will:

> Create their first Node.js project

> Install Express.js

> Build and run a simple web server that displays a message in the browser

---

[![CODING](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1qcGF5dW90cTFudTZ6ajltbmVlMTZkZjlxMHR4YzM0ejNtbHdmdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ws6T5PN7wHv3cY8xy8/giphy.gif)](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1qcGF5dW90cTFudTZ6ajltbmVlMTZkZjlxMHR4YzM0ejNtbHdmdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ws6T5PN7wHv3cY8xy8/giphy.gif)

## Instructions (Step-by-Step)

1. Open Command Prompt (Windows).

2. Type the following commands:

```bash
mkdir my-first-server
cd my-first-server
```

## Step 2: Initialize a Node Project and install necessary for the server

> “We’ll create a package file that keeps track of our project details.”

```bash
npm init -y
npm install express
```

## step 3: Create the Server File

1. Create a file named server.js inside your folder.

2. Copy and paste this code:

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, this is my first Express server!");
});
```

## step 4: Run the Server

> “Now, let’s test if our server works!”

```bash
node server.js
```

If everything is correct, you’ll see:

```bash
Server is running at http://localhost:3000
```

# ABOUT ROUTE

Add another route` /about` that displays:
`"This is the About Page."`
