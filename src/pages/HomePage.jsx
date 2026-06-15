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
           Fawora(Take and Wear It)
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
            Each T-shirt carries an Adinkra symbol with a story. Scan the QR
            code on your shirt to discover its meaning, origin, and cultural
            significance.
          </p>
        
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
