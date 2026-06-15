import QRCode from "qrcode";

export function getSiteUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "http://localhost:5173";
}

export function getSymbolUrl(slug) {
  return `${getSiteUrl()}/symbols/${slug}`;
}

export async function generateQrDataUrl(url) {
  return QRCode.toDataURL(url, {
    width: 280,
    margin: 2,
    color: { dark: "#1c1917", light: "#ffffff" },
  });
}

export function downloadDataUrl(dataUrl, filename) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
