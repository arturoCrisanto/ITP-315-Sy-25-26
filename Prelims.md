# Prelims Exam

Instructions:

1. Create a single JavaScript program that demonstrates the use of the following concepts:

   - Spread Operator (...)

   - Destructuring Assignment

   - Array Mapping (.map())

2. Use the given mockup data below (do not change it).

3. Save your file as: Exam_Lastname.js

4. Run and test your program before submitting.

---

## Mockup Data (Use This in Your Program):

```bash
const scores = [72, 88, 95, 64, 80];
```

---

## Problem Requirements:

1. Use the spread operator to copy the `scores` array into a new array named `newScores` and add one more score: 90.

2. Use destructuring assignment to extract the first two scores from the `newScores` array and store them in variables. Print them.

3. Use the map() function to create a new array named `gradeRemarks` that converts each score into:

   - `"Pass"` if the score is >= 75

   - `"Fail"` if the score is < 75

4. Print the following results:

   - Original scores

   - New scores (with the added one)

   - The first two scores from destructuring

   - The grade remarks

## Expected Output

```bash
Original Scores: [72, 88, 95, 64, 80]
New Scores: [72, 88, 95, 64, 80, 90]
First two scores: 72, 88
Grade Remarks: ["Fail", "Pass", "Pass", "Fail", "Pass", "Pass"]
```
