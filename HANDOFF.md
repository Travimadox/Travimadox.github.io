# Delivery notes

## Redesign, 31 October 2026

The visual system was replaced (the sections below describe the first build). The site now uses Barlow Condensed and Barlow, and flat colour fields: the Husky's yellow and black, crop green, sky cyan and soil orange. Red is kept for actions. The homepage opens with the name set across a white/yellow seam. Below it: a steerable toy of SANA's egocentric BEV map (`src/components/BevMap.astro`), the "vase vs plant" prompt finding, a shelf of project spines, the toolkit, the record, research direction, and the email set as display type. Eyebrow labels, monospace, hairlines, gradients and the SVG concept illustrations are gone. Openly licensed photographs and one clip from Wikimedia Commons stand in for project media; they are listed with their credits in `src/data/media.ts` and in the site footer. Replace them as real project media arrives. The About page now shows the supplied portrait (`src/assets/portrait.jpg`). The site now follows the "Website Master" CV (31 October 2026): a `/cv/` page built from `src/data/cv.md` with a downloadable PDF (see README), the new email address, the SATNAC 2026 paper, SANA's field results and public code, and the project's own farm photographs in `src/assets/sana/`. `public/social-card.png` still shows the old navy design.

## Composition

The reference image itself was not available among the supplied workspace files. The implementation follows the user’s written description; it does not claim a pixel-exact match.

| Requested direction | Implemented homepage |
| --- | --- |
| Deep navy, cyan signals, fine borders, sans headings and mono labels | Shared visual system throughout; restrained green/amber only in technical illustrations |
| Compact desktop navigation | Wordmark, five destinations, pending CV, theme control |
| Large name and statement at left | Name, exact requested statement, engineering disciplines, UCT context, actions and configurable availability |
| Robot and point-cloud scene in the centre | Native SVG concept illustration, sensor annotations and SANA detail link |
| Field camera and semantic BEV panels at right | Separate labelled illustrations; no copied metrics, telemetry or live-feed claims |
| Featured cards beneath | SANA, scanner, then STM32 embedded teaching reference |
| Mobile adaptation | Copy, robot visual, supporting panels, then single-column projects; native keyboard-accessible menu |

Deliberate changes: illustrations stand in for absent authentic media, CV and unconfirmed project links remain inactive, SANA’s indoor evaluation and ongoing outdoor transfer are distinguished, and no manuscript is identified. Light mode follows system preference and is manually selectable. Motion is limited to short hover transitions, disabled for reduced-motion users.

## Still needed from Travimadox

- The original dark robotics reference image, to assess visual fidelity directly.
- Latest CV PDF and an approved headshot.
- Husky field photos/video, a real semantic BEV export, system architecture figure and row-navigation demo; scanner photos/renders/reconstructions; hornbill scale media. Other projects identify their missing figures/results in their detail pages.
- Confirmation of which repositories and teaching/employer materials are public and may be linked. The personal GitHub and LinkedIn profiles use the brief’s supplied URLs.
- Real domain and hosting choice, plus any deployment credentials through the hosting provider.
- Confirmation before releasing any SANA publication metadata or additional quantitative findings. Current metrics come only from the brief, with their context preserved.
- Whether a separate Teaching page and the optional “How I use AI” section are wanted. Teaching already appears in experience/about.
- Any additional awards, talks or scholarships to include, and optional refinements to the requested cyan colour direction.

## Verification

Verified locally on 26 September 2026:

- Production build: **16 static pages**, zero Astro errors, warnings or hints.
- Browser checks: internal links/assets, metadata, all project filters, persisted theme switching, mobile menu + Escape key, navigation without JavaScript, and no browser runtime errors passed.
- Responsive checks: **320, 390, 768 and 1440 px** with no horizontal overflow. Desktop/mobile homepage, light theme and mobile SANA captures were visually inspected. The 320 px name overflow and light-theme SVG spacing were corrected.
- Automated axe WCAG A/AA scans passed for the homepage across all four widths, light theme, and the key detail/content pages. This is automated evidence, not a claim of a full accessibility certification.
- Dependency installation/audit after updating Astro: **0 reported vulnerabilities**.
- Lighthouse mobile run on the local production preview: **100 performance / 100 accessibility / 100 best practices / 100 SEO**, with zero measured layout shift. These are local lab results; deployed results should be rechecked after real media and hosting are added. The saved report includes the run settings and measurements.

### Review artifacts

- [Desktop first viewport](artifacts/home-desktop-viewport.png)
- [Full desktop homepage](artifacts/home-desktop.png)
- [Mobile first viewport](artifacts/home-mobile-viewport.png)
- [Full mobile homepage](artifacts/home-mobile.png)
- [Light theme](artifacts/home-light.png)
- [SANA on mobile](artifacts/sana-mobile.png)
- [Lighthouse report](artifacts/lighthouse.report.html)

The local preview runs at http://localhost:4321. Restart with `npm run preview` after `npm run build`. Hosting deployment has not been performed; see `README.md` for deployment and the required `SITE_URL` setting.
