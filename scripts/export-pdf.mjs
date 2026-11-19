// Export the CHEQ Journey dashboard to PDF with every section revealed.
// usage: npm run pdf   (serves the built site first: npm run share)
import puppeteer from 'puppeteer-core'

const [url = 'http://localhost:5173/', out = 'CHEQ-Journey-Performance-Review.pdf', shot] = process.argv.slice(2)
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true })
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 })
// Reduced motion: counters jump straight to their final values, reveals skip the fade.
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
await page.goto(url, { waitUntil: 'networkidle0' })
await page.evaluate(() => document.fonts.ready)

// Scroll the whole page so every IntersectionObserver fires once.
await page.evaluate(async () => {
  const step = 400
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 60))
  }
  window.scrollTo(0, 0)
})
await new Promise((r) => setTimeout(r, 2500))

// Keep the on-screen look, but make it behave like a document.
await page.emulateMediaType('screen')
await page.addStyleTag({
  content: `
    .site-header { display: none !important; }
    .reveal { opacity: 1 !important; transform: none !important; }
    .card, .kpi-card, .initiative-card, .sop-card, figure, tr { break-inside: avoid; page-break-inside: avoid; }
    .highlight-card, .card { break-inside: avoid !important; page-break-inside: avoid !important; }
    /* Hero + Operational Summary share page 1; every later section starts a new page */
    main > section:nth-of-type(n+3) { break-before: page; page-break-before: always; }
    .reveal { display: block; }
    .section-header, h2, h3 { break-after: avoid; page-break-after: avoid; }
    html { scroll-behavior: auto !important; }
    *, *::before, *::after { animation: none !important; transition: none !important; }
  `,
})
await new Promise((r) => setTimeout(r, 500))

if (shot) await page.screenshot({ path: shot, fullPage: true })

await page.pdf({
  path: out,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  scale: 0.62,
})
await browser.close()
console.log('wrote', out)
