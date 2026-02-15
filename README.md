# Software Portfolio - Bryan Yue

Single-page editorial magazine style portfolio built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Static site, GitHub Pages ready

## Local Development

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
npm run preview
```

## Content Editing

All site content is centralized in:

- `src/data/profile.ts`

Update personal info, experience, projects, publications, skills, and image attributions there. Components render from this data file only.

## Deploy to GitHub Pages

Workflow file:

- `.github/workflows/deploy-pages.yml`

It deploys on every push to `main`.

### One-time repository setup

1. Go to repository `Settings -> Pages`.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.
3. Under `Custom domain`, set:
   - `www.bryanyue.com`

### Verify deployment

1. Push to `main`.
2. Wait for `Deploy to GitHub Pages` workflow to finish.
3. Open `https://www.bryanyue.com/`.

## Notes

- Design intentionally follows an editorial magazine art direction (grid + asymmetry, pull quotes, marginalia, captions, and typographic hierarchy).
- Unsplash photographer attribution is included in image captions and a dedicated photo credits section.
