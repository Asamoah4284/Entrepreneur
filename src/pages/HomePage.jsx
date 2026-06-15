import Layout from "../components/Layout";
import SymbolCard from "../components/SymbolCard";
import { symbols } from "../data/symbols";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
            Ghanaian Heritage
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-earth dark:text-stone-50 sm:text-5xl">
            Culture is my Brand
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
            Each T-shirt carries an Adinkra symbol with a story. Scan the QR
            code on your shirt to discover its meaning, origin, and cultural
            significance.
          </p>
          <Link
            to="/qr"
            className="mt-6 inline-block rounded-full bg-brand-earth px-8 py-3 text-sm font-medium text-brand-cream transition hover:bg-brand-rust dark:bg-brand-gold dark:text-brand-earth"
          >
            Download QR codes for printing
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-brand-earth dark:text-brand-gold">
            Our Symbols
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {symbols.map((symbol) => (
              <SymbolCard key={symbol.slug} symbol={symbol} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
