# Javascript ES6

## Scenario

You are managing a simple student list. Use `Spread Operator`, `Destructuring`,` Mapping`, and `Arrow Functions` to solve the following tasks.

---

## Starter Code

```javascript
const sectionA = ["Anna", "Brian", "Charlie"];
const sectionB = ["Diana", "Ethan"];

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: {
    name: "Alex",
    age: 30,
  },
};

const grades = [75, 80, 90];
```

---

## Task

### 1. Spread Operator

- Combine `sectionA` and `sectionB` into one array called `allStudents`.

- Add `"Faith"` at the end while combining.

### 2. Destructuring

- Use object destructuring to extract `brand` and `model`.

- Use nested destructuring to get the owner’s `name` and `age`.

### 3. Mapping + Arrow Function

- Use `.map() `with an arrow function to `add 5` bonus points to each grade.

- Store the result in a new array called `updatedGrades`.

### 4. Final Output

- Name your file to `surname.js`

---

The output should be:

```bash
All Students: [Anna, Brian, Charlie, Diana, Ethan, Faith]
Car: Toyota Corolla (2020)
Owner: Alex, Age: 30
Updated Grades: [80, 85, 95]
```

```bash
Set-ExecutionPolicy RemoteSigned -Scope Process
```
