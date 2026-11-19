import { chromium } from 'playwright';
const browser = await chromium.launch({executablePath:process.env.CHROME_PATH || '/usr/bin/google-chrome',args:['--no-sandbox']});
try {
  const page = await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
  await page.setContent(`<html><body style="margin:0;background:#080f1b;color:#edf3f7;font-family:Arial,sans-serif;padding:70px;box-sizing:border-box;width:1200px;height:630px;border-bottom:8px solid #78dfe3"><div style="color:#78dfe3;letter-spacing:3px;font:16px monospace">ROBOTICS / PERCEPTION / EMBEDDED SYSTEMS</div><h1 style="font-size:84px;letter-spacing:-5px;line-height:1.05;margin:48px 0 25px">Travimadox Webb<span style="color:#78dfe3">.</span></h1><p style="font-size:38px;line-height:1.25;color:#78dfe3;max-width:800px;margin:0">I build robots that understand<br>their environment.</p><p style="color:#9aaabd;font:18px monospace;margin-top:55px">MSc (Eng) candidate · University of Cape Town</p></body></html>`);
  await page.screenshot({path:'public/social-card.png'});
} finally { await browser.close(); }
