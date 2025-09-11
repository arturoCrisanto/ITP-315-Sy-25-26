# Step-by-Step Guide to Git in VS Code

## (Using git push, git branch, and git checkout)

1. Open VS Code and Your Project

- Launch Visual Studio Code.

- Open the folder that contains your project (`File → Open Folder`).

2. Initialize Git (if not yet initialized)

- Open the Terminal in VS Code (`Ctrl + ~`).

- Run this command:

```bash
git init
```

👉 This will make the folder a Git repository.

- (Optional) Connect to a remote GitHub repository:

```bash
git remote add origin https://github.com/your-username/your-repo.git
```

3. Check the Current Branch

- Run:

```bash
git branch
```

👉 You will see your current branch (usually `main` or `master`).

4. Create a New Branch

- Run:

```bash
git branch feature-branch
```

👉 This creates a new branch called `feature-branch`.

5. Switch Between Branches

- To switch to your new branch:

```bash
git checkout feature-branch
```

👉 Now you are working inside `feature-branch`.

Verify it by running:

```bash
git branch
```

The active branch will have a `*` next to it.

6. Make Changes and Commit

- Edit any file in VS Code.

- Stage changes:

```bash
git add .
```

- Commit changes:

```bash
git commit -m "Added a new Feature"
```

7. Push Branch to Remote Repository

- Run:

```bash
git push origin feature-branch
```

👉 This uploads your new branch to GitHub.

8. Go Back to Main Branch

- Switch back to `main`:

```bash
git checkout main
```

- Pull latest updates from remote (good practice):

```bash
git pull origin main
```

9. Merge (Optional for Lesson)

- If you want to merge your branch into main:

```bash
git merge feature-branch
```
