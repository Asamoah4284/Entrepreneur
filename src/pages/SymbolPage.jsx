import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import SymbolDetail from "../components/SymbolDetail";
import { getSymbolBySlug } from "../data/symbols";

export default function SymbolPage() {
  const { slug } = useParams();
  const symbol = getSymbolBySlug(slug);

  if (!symbol) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="font-display text-2xl font-bold text-brand-earth dark:text-stone-100">
            Symbol not found
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            We could not find a symbol matching &ldquo;{slug}&rdquo;.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block text-brand-rust dark:text-brand-gold"
          >
            ← Back to home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-8">
        <SymbolDetail symbol={symbol} />
      </div>
    </Layout>
  );
}
