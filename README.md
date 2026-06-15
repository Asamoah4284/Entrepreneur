# Culture is my Brand — T-Shirt QR System

A React app for your entrepreneurship project. Buyers scan a QR code printed on their T-shirt to learn about the Ghanaian Adinkra symbol on that shirt.

## What's included

- **9 symbol info pages** — `/symbols/sankofa`, `/symbols/gye-nyame`, etc.
- **QR download page** — `/qr` to download print-ready PNG files (one per T-shirt)
- **Brand home page** — `/` with links to all symbols

## Tech stack

- React (Vite) — **JavaScript only, no TypeScript**
- React Router
- Tailwind CSS
- `qrcode` for PNG generation

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Copy `.env.example` to `.env` and set `VITE_SITE_URL` if needed (defaults to localhost during dev).

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel auto-detects Vite:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy and copy your live URL (e.g. `https://culture-is-my-brand.vercel.app`).
5. In Vercel → **Settings → Environment Variables**, add:
   ```
   VITE_SITE_URL=https://your-live-url.vercel.app
   ```
   (No trailing slash.)
6. **Redeploy** so QR codes use the production URL.

`vercel.json` is included so direct links like `/symbols/sankofa` work when scanned or refreshed.

## Hand off QR codes to your team

1. Visit `https://your-live-url.vercel.app/qr`
2. Download each PNG (`qr-sankofa.png`, `qr-gye-nyame.png`, etc.) or use **Download all 9 PNGs**
3. Send each file to the teammate designing that specific T-shirt
4. They print the QR on the shirt (tag, sleeve, or back — your choice)

### Print tips

- Minimum **2cm × 2cm** for reliable phone scanning
- **Black on white** — high contrast
- Leave a **white margin** around the QR (quiet zone)
- Test-scan every design before mass printing

## Symbol slugs

| T-shirt symbol | URL slug |
|----------------|----------|
| Abe Dua | `abe-dua` |
| Agyin Dawuro | `agyin-dawuro` |
| Culture is my Brand | `culture-is-my-brand` |
| Fawohodie | `fawohodie` |
| Funtunfunefu Denkyemfunefu | `funtunfunefu-denkyemfunefu` |
| Gye Nyame | `gye-nyame` |
| Nea onnim no sua a, ohu | `nea-onnim-no-sua-a-ohu` |
| Obatan Awaamu | `obatan-awaamu` |
| Sankofa | `sankofa` |

## Project structure

```
src/
├── pages/          HomePage, SymbolPage, QrPage
├── components/     Layout, SymbolCard, SymbolDetail, QrDownloadCard
├── data/symbols.js All symbol content
└── lib/qr.js       QR generation helpers
```
