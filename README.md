# Travimadox Webb — personal website

A static Astro + Tailwind site. Project content comes from `personal-website-brief.md`; it is not fetched from social profiles. Nine Markdown projects, a richer SANA case study, research, experience/education, about and contact pages. No analytics, external font requests, client framework, or contact database.

## Run locally

Use Node 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:4321. For the production preview:

```sh
npm run build
npm run preview
```

`npm run build` runs Astro’s strict type/content checks before building `dist/`. Commit `package-lock.json` for reproducible installs.

## Content and controls

- `src/data/site.ts`: contact details, skills, experience, `openToOpportunities`, and CV path. Set `openToOpportunities: false` to remove the status on both home and contact pages.
- CV: place the approved PDF at `public/media/cv.pdf`, then set `cv: '/media/cv.pdf'`. Until then the shared header and contact page show **CV pending**, with no dead download link.
- `src/content/projects/*.md`: all project content. Lower `order` comes first on the index; numeric `featured` sets homepage order. Remove `featured` to exclude a project from the homepage.
- `src/pages/{about,research,experience,contact}.astro`: page copy and layout. Teaching is included in experience/about; the optional dedicated teaching and AI-use pages are omitted pending a preference.
- Theme follows the operating-system preference until the user chooses with the header toggle. The choice is saved locally. The requested navy/cyan direction is the dark theme; a high-contrast light variant honours the brief.

### Add a project

Create `src/content/projects/my-project.md`. Routes, cards, filters and sitemap entries are generated from the collection. Example (replace the example copy with verified content):

```yaml
---
title: 'My project'
slug: my-project
dates: 'Confirmed dates, or omit this field'
summary: 'A concise, verified description.'
stack: ['Python', 'ROS 2']
tags: ['Robotics', 'Research']
order: 10
visual: robot
links: {}
---
```

Below the frontmatter, write Markdown sections for the problem, implementation, results/limits, and media. Allowed tags: `Robotics`, `ML/CV`, `Embedded`, `Research`. Allowed fallback visuals: `robot`, `scanner`, `board`, `map`. `featured: 4` adds a fourth featured card. `links` accepts optional `github`, `demo`, `paper` URLs; leave it empty until links and release permission are confirmed. Never add the SANA manuscript title, venue or link without clearance under the double-anonymous constraint.

## Replace assets

All pictures live in `src/assets/` and are listed, with alt text and captions, in `src/data/media.ts`: the portrait, the three-robots photo, the SANA field photos (`src/assets/sana/`), and openly licensed photographs from Wikimedia Commons (`src/assets/found/`, credited in the footer). The wheat-field clip is in `public/media/`.

1. **More SANA media:** add photos to `src/assets/sana/`, describe them in `field` in `src/data/media.ts`, and use them on a page with Astro's `Image` component.
2. **Project covers:** add `cover: '../../assets/filename.jpg'` and `coverAlt` to a project's frontmatter, or map the slug in `projectPicture` in `src/data/media.ts`.
3. **Videos:** put a compressed WebM in `public/media/`. A silent loop is decoration (`muted`, `aria-hidden`); a demo with speech needs `controls` and captions.
4. **Social preview:** `public/social-card.png` still shows the first design. Edit and run `node scripts/social-card.mjs` to regenerate it.

## The CV

The `/cv/` page renders `src/data/cv.md`, a public copy of the CV with the phone number, private notes and referees' names removed. Edit that file to change the page. To refresh the downloadable PDF, which adds the phone number:

```sh
npm run build && npm run preview          # in one terminal
CV_PHONE="+27 …" node scripts/cv-pdf.mjs  # writes public/media/travimadox-webb-cv.pdf
npm run build                             # copies the new PDF into dist/
```

## Deploy

The site is published to **https://travimadox.github.io** by GitHub Actions (`.github/workflows/deploy.yml`). Every push to `main` builds it with `SITE_URL=https://travimadox.github.io` and deploys `dist/` to GitHub Pages.

One-time setup:

1. Create the repository `Travimadox/Travimadox.github.io` on GitHub (the name must match exactly).
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push this project to the `main` branch:

   ```sh
   git init -b main
   git add .
   git commit -m "Personal website"
   git remote add origin https://github.com/Travimadox/Travimadox.github.io.git
   git push -u origin main
   ```

The **Actions** tab shows each build; the site is live a minute or two after it goes green. Links in the site assume it is served from the domain root, which a `username.github.io` repository (or a custom domain) provides; a project repository at a subpath would need a `base` setting and path changes.

Email is a real `mailto:` link. No form submission service is configured. The phone number appears only in the downloadable CV PDF.

## Verify

With a production preview running in another terminal:

```sh
npm test
```

The check uses installed Chrome (`CHROME_PATH` override supported) and Playwright. It verifies internal links/assets, metadata, project filtering, theme persistence, keyboard menu dismissal, no-JavaScript navigation, horizontal overflow at 320/390/768/1440 px, and WCAG A/AA checks using axe. It saves full-page screenshots in `artifacts/`. `PREVIEW_URL` overrides localhost. Page and project counts follow the content directory automatically. Automated accessibility checks complement manual visual/keyboard inspection; they do not prove complete accessibility.

Lighthouse can be run against the preview with the installed CLI:

```sh
npx lighthouse http://localhost:4321 --chrome-path=/usr/bin/google-chrome --chrome-flags="--headless --no-sandbox" --output=json --output=html --output-path=artifacts/lighthouse
```

## Visual comparison and pending items

See `HANDOFF.md` for the reference-direction comparison, validation results, and the remaining assets and confirmations. The actual reference attachment was not accessible, so an image-to-image fidelity comparison remains pending.
