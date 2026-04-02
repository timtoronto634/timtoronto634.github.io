---
name: commit-staged
description: Commit currently staged changes with a conventional commit message
allowed-tools: Bash(git *)
---

Commit the currently staged changes following these steps:

1. Check the current branch name. If on `main` or `master`, create a new branch with a descriptive name based on the staged changes (e.g., `feat/add-login-page`) and switch to it before committing
2. Run `git status` to see staged changes
3. Run `git diff --cached` to review what will be committed
4. Run `git log --oneline -5` to see recent commit message style
5. If there are no staged changes, inform the user and stop
6. Draft a concise commit message following Conventional Commits style (e.g., `feat:`, `fix:`, `docs:`, `build:`, `chore:`)
7. Create the commit using a HEREDOC for the message, appending:
   `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
8. Run `git status` to confirm the commit succeeded
