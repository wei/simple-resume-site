# Contributing

Thanks for your interest in contributing!

## Development Setup

- Node.js: use the version in `.nvmrc`
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build SSG output: `npm run build`
- Preview build: `npm run preview`

## Branch, Commit, PR

- Create a feature branch from `main`: `feat/...`, `fix/...`, or `docs/...`
- Write clear, concise [conventional commits](https://www.conventionalcommits.org/). Group related changes.
- Open a PR to `main`. Include:
  - What changed and why
  - Screenshots if the UI changed
  - Any follow‑ups needed

## Code Style

- TypeScript + React functional components
- Tailwind CSS utility classes for styling
- Keep components small and typed; prefer clear prop names and types
- Avoid unnecessary abstractions; favor readability

## Formatting & Linting

- Biome is configured in `biome.json`
- Check: `npm run lint`
- Auto‑fix: `npm run lint:fix`
- Pre‑commit hooks run Biome via `lint-staged`

## Testing & Verification

- This project is a static site; verify builds succeed (`npm run build`) and manually test pages in the browser
- For UI updates, please include a screenshot or short description of the change

## Content & Assets

- Site content lives in `site-data.json`
- Replace `public/profile.jpeg` with your own profile image when customizing
- Do not include changes to these files when contributing unless necessary

## License

- By contributing, you agree your contributions will be licensed under the [MIT License](https://wei.mit-license.org/)
