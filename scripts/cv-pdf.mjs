// Prints the /cv/ page to public/media/travimadox-webb-cv.pdf.
// The phone number goes in the PDF only, never in the site: pass it as CV_PHONE.
//   npm run build && npm run preview   (in another terminal)
//   CV_PHONE="+27 …" node scripts/cv-pdf.mjs && npm run build
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const origin = process.env.PREVIEW_URL || 'http://localhost:4321';
const phone = process.env.CV_PHONE || '';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const page = await browser.newPage({ colorScheme: 'light', reducedMotion: 'reduce' });
await page.addInitScript(() => { document.documentElement.dataset.theme = 'light'; });
await page.goto(`${origin}/cv/`, { waitUntil: 'networkidle' });
if (phone) await page.evaluate(number => {
  const email = [...document.querySelectorAll('.cv-prose li')].find(li => li.textContent?.startsWith('Email'));
  if (email) email.insertAdjacentHTML('afterend', `<li>Phone: ${number}</li>`);
}, phone);
await page.emulateMedia({ media: 'print' });
await mkdir('public/media', { recursive: true });
await page.pdf({ path: 'public/media/travimadox-webb-cv.pdf', format: 'A4', printBackground: true, margin: { top: '16mm', bottom: '16mm', left: '16mm', right: '16mm' } });
await browser.close();
console.log(`Wrote public/media/travimadox-webb-cv.pdf${phone ? ' (with phone)' : ''}`);
