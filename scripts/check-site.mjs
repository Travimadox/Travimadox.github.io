import assert from 'node:assert/strict';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const origin = process.env.PREVIEW_URL || 'http://localhost:4321';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const context = await browser.newContext({ colorScheme: 'dark', reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await mkdir('artifacts', { recursive: true });

try {
  const files = await readdir('dist', { recursive: true });
  const htmlFiles = files.filter(f => f.endsWith('.html'));
  const projectCount = (await readdir('src/content/projects')).filter(f=>f.endsWith('.md')).length;
  assert.equal(htmlFiles.length, projectCount + 8, 'Expected home, index, project details, five pages and 404');
  for (const file of htmlFiles) {
    const html = await readFile(resolve('dist', file), 'utf8');
    assert.match(html, /<title>Travimadox Webb/);
    assert.match(html, /name="description"/);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One h1: ${file}`);
    for (const [, href] of html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
      if (/^(https?:|mailto:|data:)/.test(href)) continue;
      const target = href.startsWith('/') ? href.slice(1) : `${dirname(file)}/${href}`;
      const normalized = target.replace(/^\.\//, '');
      assert(files.includes(normalized) || files.includes(`${normalized.replace(/\/$/, '')}/index.html`) || normalized === '', `Broken asset or link in ${file}: ${href}`);
    }
  }
  for (const [width,height,name] of [[1440,1000,'desktop'],[390,844,'mobile'],[320,700,'small-mobile'],[768,1024,'tablet']]) {
    await page.setViewportSize({width,height});
    await page.goto(origin, {waitUntil:'networkidle'});
    assert(await page.locator('h1').textContent().then(t=>t.includes('Travimadox')));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), `${name} horizontal overflow`);
    if (name === 'desktop' || name === 'mobile') {
      await page.screenshot({path:`artifacts/home-${name}.png`,fullPage:true});
      await page.screenshot({path:`artifacts/home-${name}-viewport.png`});
    }
    const audit = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert.deepEqual(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],`${name} accessibility`);
  }
  await page.setViewportSize({width:390,height:844});
  await page.getByText('Menu', {exact:false}).first().click();
  assert(await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible());
  await page.keyboard.press('Escape');
  assert(!(await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible()));
  await page.goto(`${origin}/projects/`);
  for (const tag of ['Robotics','ML/CV','Embedded','Research','All']) {
    await page.getByRole('button',{name:tag,exact:true}).click();
    const cards = page.locator('.project-card:visible');
    assert(await cards.count()>0);
    if(tag!=='All') for(const tags of await cards.evaluateAll(nodes=>nodes.map(n=>n.dataset.tags))) assert(tags.split('|').includes(tag));
    else assert.equal(await cards.count(),projectCount);
  }
  for(const path of ['/projects/sana/','/projects/agricultural-scanner/','/experience/','/research/','/about/','/contact/','/cv/']) {
    await page.goto(origin+path);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), `${path} overflow`);
    const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert.deepEqual(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],`${path} accessibility`);
    if(path==='/projects/sana/') await page.screenshot({path:'artifacts/sana-mobile.png',fullPage:true});
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(origin);
  await page.getByRole('button',{name:'Switch colour theme'}).click();
  assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
  await page.setViewportSize({width:1440,height:1000});
  await page.screenshot({path:'artifacts/home-light.png',fullPage:true});
  const lightAudit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  assert.deepEqual(lightAudit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],'Light theme accessibility');
  assert.deepEqual(errors,[],'Browser runtime errors');
  const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const staticPage=await noJS.newPage();
  await staticPage.goto(origin);
  await staticPage.locator('.mobile-menu summary').click();
  await staticPage.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Work'}).click();
  assert.equal(await staticPage.locator('.project-card').count(),projectCount,'Projects and navigation work without JS');
  await noJS.close();
  console.log('Passed: built links on every page, four viewport sizes, filters, keyboard menu, theme persistence, axe checks, no-JS navigation, no browser errors.');
} finally { await browser.close(); }
