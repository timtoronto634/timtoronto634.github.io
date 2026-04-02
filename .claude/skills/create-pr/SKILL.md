---
name: create-pr
description: Create a GitHub pull request from the current branch with a summary and test plan
allowed-tools: Bash(git *, gh *)
---

Create a pull request from the current branch.

1. Run `git status` to check for uncommitted changes — if any exist, stage and commit them to the current branch before proceeding
2. Check the current branch name. If on `main` or `master`, warn the user that direct commits to master are not allowed. If there are commits ahead of origin/master, create a new branch with a descriptive name based on the committed changes (e.g., `feat/add-login-page`), switch to it, and reset master back to origin/master. If there are no commits ahead, stop.
3. Run `git log master..HEAD --oneline` to see all commits on this branch
4. Run `git diff master...HEAD --stat` to see changed files
5. Check if the branch has been pushed with `git rev-parse --abbrev-ref @{upstream}` — if not, push with `git push -u origin HEAD`
6. Draft a PR title (under 70 characters) and body based on all commits in the branch
7. Create the PR using:

```
gh pr create --title "<title>" --body "$(cat <<'EOF'
## Summary
<1-3 bullet points summarizing changes>

## Test plan
<checklist of testing steps>

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

8. Return the PR URL to the user
