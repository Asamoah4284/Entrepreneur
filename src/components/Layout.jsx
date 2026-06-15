import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass-header">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="font-display text-lg font-bold text-brand-earth dark:text-brand-gold"
          >
            Culture is my Brand
          </Link>
          <Link
            to="/qr"
            className="rounded-full border border-brand-gold/50 px-3 py-1 text-sm text-brand-rust transition hover:bg-brand-gold/10 dark:text-brand-gold"
          >
            QR Codes
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="pattern-border border-t border-brand-gold/20 py-6 text-center text-sm text-stone-500 dark:text-stone-400">
        <p className="font-display text-brand-earth dark:text-brand-gold">
          Culture is my Brand
        </p>
        <p className="mt-1">Ghanaian Adinkra · Wear your heritage</p>
      </footer>
    </div>
  );
}
