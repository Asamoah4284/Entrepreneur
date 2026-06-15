import { useState } from "react";
import Layout from "../components/Layout";
import QrDownloadCard from "../components/QrDownloadCard";
import { symbols } from "../data/symbols";
import {
  downloadDataUrl,
  generateQrDataUrl,
  getSiteUrl,
  getSymbolUrl,
} from "../lib/qr";

export default function QrPage() {
  const [downloadingAll, setDownloadingAll] = useState(false);
  const siteUrl = getSiteUrl();

  async function handleDownloadAll() {
    setDownloadingAll(true);
    try {
      for (const symbol of symbols) {
        const url = getSymbolUrl(symbol.slug);
        const dataUrl = await generateQrDataUrl(url);
        downloadDataUrl(dataUrl, `qr-${symbol.slug}.png`);
        await new Promise((r) => setTimeout(r, 300));
      }
    } finally {
      setDownloadingAll(false);
    }
  }

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-brand-earth dark:text-stone-50">
            QR Codes for Printing
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            Download one QR code per T-shirt design. Each code links to that
            symbol&apos;s info page when scanned.
          </p>
          <p className="mt-2 text-xs text-stone-500">
            Site URL: <span className="font-mono text-brand-rust dark:text-brand-gold">{siteUrl}</span>
          </p>
          <button
            type="button"
            onClick={handleDownloadAll}
            disabled={downloadingAll}
            className="mt-6 rounded-full border-2 border-brand-gold px-6 py-2 text-sm font-medium text-brand-earth transition hover:bg-brand-gold/10 disabled:opacity-50 dark:text-brand-gold"
          >
            {downloadingAll ? "Downloading…" : "Download all 9 PNGs"}
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {symbols.map((symbol) => (
            <QrDownloadCard key={symbol.slug} symbol={symbol} />
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-brand-gold/20 bg-white p-5 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-display text-lg font-semibold text-brand-earth dark:text-brand-gold">
            Print tips
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-stone-600 dark:text-stone-400">
            <li>Print at least 2cm × 2cm for reliable scanning</li>
            <li>Use high contrast — black QR on white background</li>
            <li>Leave a white margin (quiet zone) around the code</li>
            <li>
              After deploying, set <code className="text-xs">VITE_SITE_URL</code>{" "}
              to your live URL and redeploy before printing
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
