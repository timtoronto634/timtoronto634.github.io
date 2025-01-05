# timtoronto634.github.io

Personal portfolio website: https://timtoronto634.github.io/

## Project Overview

This repository contains the source code for my personal portfolio website. It's built as a single-page application (SPA) using modern web technologies.

### Tech Stack
- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- YAML for content management

## Repository Structure

```
.
├── src/                    # Source code directory
│   ├── components/         # React components
│   │   ├── Blogs.tsx      # Blog section component
│   │   ├── Education.tsx  # Education section component
│   │   ├── Home.tsx      # Home page component
│   │   ├── Work.tsx      # Work experience component
│   │   └── ...           # Other component files
│   ├── data/             # Content data directory
│   │   └── work.yml      # Work experience data
│   ├── assets/           # Static assets
│   └── main.tsx          # Application entry point
├── images/               # Image assets
├── public/              # Public static files
└── [Configuration Files]  # Various config files for TypeScript, ESLint, etc.
```

## Component Architecture

The application is structured around several main components:
- `Home`: Main landing page component
- `Work`: Displays work experience information
- `Skills`: Shows technical skills and competencies
- `Blogs`: Displays blog posts and articles
- `Education`: Shows educational background
- `LanguagesOthers`: Displays language proficiencies and other skills
- `ProfileLogo`: Handles profile image display

Data flow is primarily top-down, with content being sourced from YAML files in the `src/data` directory.

## Development Setup

### Prerequisites
- Node.js (Latest LTS recommended)
- pnpm (v9.12.2 or later)

### Installation
```bash
# Install dependencies
pnpm install
```

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Check code formatting
- `pnpm validate` - Run all checks (lint, format, types)
- `pnpm validate:fix` - Fix all auto-fixable issues

## Data Management

Content is managed through YAML files located in `src/data/`:
- `work.yml`: Contains work experience information
- Additional YAML files can be added for other content sections

To update content:
1. Modify the relevant YAML file in `src/data/`
2. The changes will be automatically picked up by the build process
3. Components will render the updated content

## Build and Deployment

### Build Process
The project uses Vite for building:
1. TypeScript compilation
2. YAML processing
3. Asset optimization
4. Bundle generation

### Deployment
The site is deployed to GitHub Pages automatically when changes are pushed to the main branch. The build process is handled through GitHub Actions.

### Configuration Files
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `.prettierrc.cjs` - Prettier configuration

This documentation is primarily intended to provide context for LLMs (Large Language Models) to understand the project structure and functionality.
