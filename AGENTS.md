# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript application code; entry point is `src/main.tsx`.
- `src/components/` holds UI sections (Home, Work, Education, etc.).
- `src/data/` stores content in YAML files (e.g., `general_info.yml`, `projects.yml`).
- `src/assets/`, `public/`, and `images/` contain static assets.
- `docs/` is the GitHub Pages build output (generated from `dist/`).

## Build, Test, and Development Commands
- `pnpm dev` starts the Vite dev server.
- `pnpm build` builds production assets, then copies `dist/` to `docs/` for Pages.
- `pnpm preview` serves the production build locally.
- `pnpm lint` runs ESLint on `src/`.
- `pnpm format` checks Prettier formatting.
- `pnpm types:check` runs TypeScript checks without emitting files.
- `pnpm validate` runs lint, format, and type checks together.

## Coding Style & Naming Conventions
- TypeScript + React with JSX; prefer functional components.
- Formatting uses Prettier (`printWidth: 100`, single quotes including JSX). Indentation follows Prettier defaults.
- Linting via ESLint (`eslint.config.mjs`) with XO/MUI rules.
- File naming: PascalCase for components (`Home.tsx`), lowercase with underscores for YAML data (`work_experience.yml`).

## Testing Guidelines
- No automated test framework is currently configured. If adding tests, document the runner and naming (e.g., `*.test.tsx`) in this file.
- For changes, run `pnpm validate` and manually verify the UI in `pnpm dev` or `pnpm preview`.

## Commit & Pull Request Guidelines
- Commit messages generally follow a Conventional Commit style (e.g., `feat: add mise configuration`). Keep them short and imperative.
- PRs should include a brief summary and, for UI changes, before/after screenshots or GIFs.
- Link relevant issues if they exist; note any manual test steps performed.

## Configuration Notes
- Key config files: `vite.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc.cjs`.
- Content updates typically go through YAML in `src/data/`; components render these files at runtime.
