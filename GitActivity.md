# Group Activity: GitHub Collaboration with Branching

## 🎯 Objective

Each group (4 members) will create a repository, collaborate, and practice branching, checkout, pushing, and merging using GitHub and VS Code.

---

## 📌 Instructions

### Step 1: Form Groups

- Divide the class into groups of 4 students each.

- Assign roles inside each group:

  1. **Repo** Owner → Creates the `repository` and adds collaborators.

  2. **Feature Developer 1** → Works on `feature A`.

  3. **Feature Developer 2** → Works on `feature B`.

  4. **Reviewer / Merger** → Reviews code and `merges pull requests`.

---

### Step 2: Create Repository

1. Repo Owner creates a new repository on GitHub (name it `group-project`).

2. Add the other 3 members as collaborators.

---

### Step 3: Clone Repository

Each member opens VS Code and runs:

```bash
git clone https://github.com/owner-username/group-project.git
cd group-project
```

---

### Step 4: Branching Work

- Each member creates and switches to their own branch:
  - Feature Developer 1:
  ```bash
    git branch feature-A
  ```
  - Feature Developer 2:
  ```
  git branch feature-B
  ```
  - Reviewer can create a branch `review-branch`.

---

### Step 5: Make Changes

- Each student edits different files (to avoid conflicts).
  Example:

  - `feature-A` branch → creates `about.md`

  - `feature-B` branch → creates `contact.md`

  - Reviewer → prepares `readme.md` with project details

---

Step 6: Commit and Push

Each student:

```bash
git add .
git commit -m "Added my feature"
git push origin branch-name
```

---

### Step 7: Pull Requests & Review

1. Each developer opens GitHub and creates a Pull Request (PR) to merge their branch into `main`.

2. The Reviewer checks the PRs and approves them.

---

### Step 8: Merge into Main

- Reviewer (or Repo Owner) merges the branches into `main`.

---

### Step 9: Sync Local Repos

All members update their local repo:

```bash
git checkout main
git pull origin main
```

---

✅ Deliverables

- A working GitHub repository with:

  - At least 3 branches merged into `main`.

  - A complete `README.md` describing the project.

  - Contributions from all 4 members.
