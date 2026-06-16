import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass-header">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5" aria-label="FAWORA home">
            <img
              src="/fawora-mark.png"
              alt=""
              className="h-10 w-10 object-contain"
            />
            <img
              src="/fawora-wordmark.png"
              alt="FAWORA"
              className="hidden h-4 w-auto object-contain sm:block"
            />
          </Link>
          <Link
            to="/qr"
            className="rounded-full border border-brand-gold/50 px-3.5 py-1.5 text-sm font-medium text-brand-rust transition hover:bg-brand-gold/10"
          >
            QR Codes
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="pattern-border border-t border-brand-gold/20 py-8 text-center text-sm text-stone-500">
        <img
          src="/fawora-logo.png"
          alt="FAWORA — Pick it. Wear it. Made in Ghana"
          className="mx-auto h-28 w-auto object-contain"
        />
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
          Ghanaian Adinkra · Wear your heritage
        </p>
      </footer>
    </div>
  );
}
