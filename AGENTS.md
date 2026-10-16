# AGENTS.md

Fresh Vite + React 19 + Tailwind CSS v4 template, plain JS. Very small codebase.

## Commands (pnpm — `pnpm-lock.yaml` present)

- `pnpm dev` — dev server (HMR)
- `pnpm build` — production build (`vite build`, no typecheck/test step)
- `pnpm preview` — serve `dist/` locally
- `pnpm lint` — `eslint .` (only lints `**/*.{js,jsx}`, ignores `dist/`)

No test, typecheck, or formatter scripts. No CI config.

## Structure

- Entry: `index.html` → `src/main.jsx` (StrictMode + `createRoot`) → `src/App.jsx`
- Components: `src/components/layout/` (e.g. `Header.jsx`)
- Assets: `src/assets/` (`hero.png`, `react.svg`, `vite.svg`); static: `public/`

## Quirks agents miss

- Tailwind v4, CSS-first: loaded via `@tailwindcss/vite` plugin in `vite.config.js` + `@import "tailwindcss"` at the top of `src/App.css` — **not** `src/index.css` (currently empty). Keep the import in `App.css` and edit styles there.
- React Compiler is on via `babel({ presets: [reactCompilerPreset()] })` in `vite.config.js` (`@rolldown/plugin-babel` + `babel-plugin-react-compiler`). Don't remove; it slows dev/build.
- Plain JS only: no TypeScript, no `tsconfig`, ESLint covers `js/jsx` only. Don't add `.ts/.tsx` without adding toolchain support.
- React 19: no need for `import React` for JSX; `useState` import in `App.jsx` is currently unused — lint (`react-hooks`, `react-refresh`) will flag issues like that.
