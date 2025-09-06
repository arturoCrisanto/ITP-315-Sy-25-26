# Javascript ES6

## Scenario

You are managing a simple student list. Use `Spread Operator`, `Destructuring`,` Mapping`, and `Arrow Functions` to solve the following tasks.

---

## Starter Code

```javascript
const sectionA = ["Anna", "Brian", "Charlie"];
const sectionB = ["Diana", "Ethan"];

const student = {
  name: "Maria",
  age: 20,
  course: "Computer Science",
};

const grades = [75, 80, 90];
```

---

## Task

### 1. Spread Operator

- Combine `sectionA` and `sectionB` into one array called `allStudents`.

- Add `"Faith"` at the end while combining.

### 2. Destructuring

- Get the `name` and `course` from the student object using destructuring.

- Rename `course` into `major`.

### 3. Mapping + Arrow Function

- Use `.map() `with an arrow function to `add 5` bonus points to each grade.

- Store the result in a new array called `updatedGrades`.

### 4. Final Output

- Name your file to `surname.js`

---

The output should be:

```bash
All Students: [Anna, Brian, Charlie, Diana, Ethan, Faith]
Student: Maria, Major: Computer Science
Updated Grades: [80, 85, 95]
```
