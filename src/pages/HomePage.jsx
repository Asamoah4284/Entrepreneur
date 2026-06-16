import Layout from "../components/Layout";
import SymbolCard from "../components/SymbolCard";
import { symbols } from "../data/symbols";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="text-center">
          <h1 className="sr-only">FAWORA — Pick it. Wear it.</h1>
          <img
            src="/fawora-logo.png"
            alt="FAWORA — Pick it. Wear it. Made in Ghana"
            className="mx-auto w-full max-w-xs animate-float sm:max-w-sm"
          />
          <p className="mx-auto -mt-2 max-w-xl text-base leading-relaxed text-stone-600">
            Each T-shirt carries an Adinkra symbol with a story. Scan the QR
            code on your shirt to discover its meaning, origin, and cultural
            significance.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-brand-earth">
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
