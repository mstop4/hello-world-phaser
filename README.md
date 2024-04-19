# Phaser Vite TypeScript Template

This is a Phaser 3 project template that uses Vite for bundling, with Typescript support and a pre-commit hook that automatically lints and formats changes before every commit.

# Stack

**Requires Node v18.18.0 or higher**

- Phaser 3 - game framework
- Typescript - language
- Vite - frontend bundler and tooling
- ESLint - linter
- Prettier - code formatter
- lint-staged - script runner on staged files
- Husky - pre-commit hook script runner

# Getting Started

```
npm i
npm run dev
```

# Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Launch a development web server |
| `npm run build` | Create a production build in the `dist` folder |
| `npm run lint` | Lints the entire project |
| `npm run ts-check` | Type-checks .ts files | 
| `npm run prettier-check` | Checks to see if there are any formatting issues that would be corrected by Prettier |
| `npm run prepare` | Runs Husky prepare script. Should be done automatically when running `npm install` |
