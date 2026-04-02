---
name: merge-pr
description: Merge a GitHub pull request by number using squash merge
argument-hint: "[pr-number]"
allowed-tools: Bash(gh *, git *)
---

Merge a GitHub pull request.

1. If `$ARGUMENTS` is provided, use it as the PR number. Otherwise, run `gh pr view --json number` to get the PR for the current branch.
2. Run `gh pr view <number> --json title,state,mergeable` to verify the PR is open and mergeable
3. If the PR is not mergeable, inform the user and stop
4. Merge using `gh pr merge <number> --squash`
5. Run `git checkout master && git pull --prune` to update local master and clean up stale remote-tracking branches
6. Report the result to the user
