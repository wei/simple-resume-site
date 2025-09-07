# simple-resume-site

[![CI](https://img.shields.io/github/actions/workflow/status/wei/simple-resume/ci.yml?branch=main&label=CI)](https://github.com/wei/simple-resume/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/wei/simple-resume/deploy.yml?branch=main&label=Deploy)](https://github.com/wei/simple-resume/actions/workflows/deploy.yml)
[![Code Style: Biome](https://img.shields.io/badge/code%20style-biome-70a3f3)](https://biomejs.dev)
[![Node 24](https://img.shields.io/badge/node-24.x-339933?logo=node.js&logoColor=white)](.nvmrc)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://wei.mit-license.org/)

A fast, responsive, SEO-friendly single‑page resume website template powered by React, TypeScript, Tailwind CSS, Vite, and Static Site Generation.

## Demo

- Live demo: https://wei.github.io/simple-resume-site
- Screenshot: ![screenshot](https://github.com/user-attachments/assets/4bcf0596-3e41-4552-967f-c43c0bbc0a79)

## Features

- React + TypeScript responsive single‑page web app
- Content is driven by a single JSON file for easy customization
- Static Site Generation (SSG) for fast first paint and SEO
- GitHub Actions for CI and GitHub Pages deployment
- Formatter & linter with pre‑commit hooks

## Getting Started

1. Make a new repo from [this template](https://github.com/new?template_name=simple-resume&template_owner=wei)
3. Content: edit `site-data.json`
4. Profile image: replace `public/profile.jpeg` with your own profile image (200×200 recommended)

### Generate `site-data.json` from LinkedIn using AI

1. LinkedIn Profile → More → Save as PDF
2. Download [site-data.json](./site-data.json)
3. Upload both files to your favorite AI and ask it to generate a `site-data.json` file tailored to you!

## Deployment

### GitHub Pages
1) Ensure the repository has Pages enabled under Settings → Pages, with source “GitHub Actions”.
2) The included workflow `.github/workflows/deploy.yml` builds and deploys on pushes to `main`.
3) Push to `main`. The site will publish to the Pages URL shown in the workflow output.
4) Optionally, set up a custom domain under Settings → Pages.

### Other static site hosting
- Vercel, Netlify, Cloudflare Pages: configure a project that runs `npm run build` and serves the `dist/` directory.

## Project Structure

- `index.html`: main html file
- `src/`: react components and app entry
- `public/`: static assets like profile image
- `site-data.json`: all content for the site
- `dist/`: generated site output (not committed)

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: build static site with SSG
- `npm run preview`: preview built output
- `npm run lint`: check formatting/lint with Biome
- `npm run lint:fix`: auto‑format and fix with Biome

## Contribution

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](https://wei.mit-license.org/)
