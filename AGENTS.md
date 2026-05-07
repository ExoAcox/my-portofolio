# Project: Personal Portfolio Site

## Stack
- React 19 + TypeScript + Vite + Tailwind CSS v4 (Vite plugin, not traditional config)
- Motion for animations
- Vercel Analytics

## Commands
- `pnpm dev` — dev server (binds to host)
- `pnpm build` — runs `tsc -b` then `vite build`
- `pnpm lint` — ESLint (flat config)
- `pnpm test` — Vitest

## Path Aliases
- `@components` → `src/components`
- `@constants` → `src/constants`

## Testing
- Vitest with jsdom + `@testing-library/jest-dom`
- Tests co-located: `src/components/__tests__/*.test.tsx`
- Test setup uses both `vitest.setup.ts` (Vite config) and `src/setupTests.ts` (vitest.config.ts)
- Run a single test: `pnpm test <name>`

## Styling
- Tailwind CSS v4: `@import "tailwindcss"` in CSS, not `tailwind.config.js`
- Dark mode: `data-theme="dark"` attribute, accessed via `@custom-variant dark`
- Inter font loaded from Google Fonts
- Debug screens: `body` gets `debug-screens` class in dev mode

## TypeScript
- Project references: `tsconfig.app.json` and `tsconfig.node.json`
- Build requires `tsc -b` (project references)