import { useEffect, useState } from "react";
import {
  downloadDataUrl,
  generateQrDataUrl,
  getSymbolUrl,
} from "../lib/qr";

export default function QrDownloadCard({ symbol }) {
  const targetUrl = getSymbolUrl(symbol.slug);
  const [dataUrl, setDataUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [prevUrl, setPrevUrl] = useState(targetUrl);

  if (targetUrl !== prevUrl) {
    setPrevUrl(targetUrl);
    setLoading(true);
    setDataUrl("");
  }

  useEffect(() => {
    let cancelled = false;
    generateQrDataUrl(targetUrl)
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [targetUrl]);

  function handleDownload() {
    if (!dataUrl) return;
    downloadDataUrl(dataUrl, `qr-${symbol.slug}.png`);
  }

  return (
    <div className="flex flex-col items-center rounded-2xl border border-brand-gold/25 bg-white p-5 dark:border-stone-700 dark:bg-stone-900">
      <h3 className="text-center font-display text-base font-bold text-brand-earth dark:text-stone-100">
        {symbol.name}
      </h3>
      <p className="mt-1 text-center text-xs text-stone-500 dark:text-stone-400">
        {symbol.subtitle}
      </p>

      <div className="mt-4 flex h-[200px] w-[200px] items-center justify-center rounded-lg bg-white p-2 shadow-inner">
        {loading ? (
          <span className="text-sm text-stone-400">Generating…</span>
        ) : (
          <img
            src={dataUrl}
            alt={`QR code for ${symbol.name}`}
            className="h-full w-full object-contain"
          />
        )}
      </div>

      <p className="mt-3 break-all text-center text-[10px] text-stone-400">
        {targetUrl}
      </p>

      <button
        type="button"
        onClick={handleDownload}
        disabled={loading || !dataUrl}
        className="mt-4 w-full rounded-full bg-brand-earth px-4 py-2 text-sm font-medium text-brand-cream transition hover:bg-brand-rust disabled:opacity-50 dark:bg-brand-gold dark:text-brand-earth dark:hover:bg-brand-gold/80"
      >
        Download PNG
      </button>
    </div>
  );
}
