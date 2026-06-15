import { Link } from "react-router-dom";

export default function SymbolCard({ symbol }) {
  return (
    <Link
      to={`/symbols/${symbol.slug}`}
      className="group block rounded-2xl border border-brand-gold/20 bg-white/70 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-gold/50 dark:border-stone-800 dark:bg-stone-900/70 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Subtle glow highlight on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="flex gap-4 items-start relative z-10">
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full dark:bg-brand-gold/5">
            {symbol.twiName ? "Adinkra" : "Heritage"}
          </span>
          <h2 className="mt-2.5 font-display text-xl font-bold tracking-tight text-brand-earth group-hover:text-brand-rust dark:text-stone-100 dark:group-hover:text-brand-gold transition duration-200">
            {symbol.name}
          </h2>
          <p className="mt-1 text-xs font-semibold text-stone-500 dark:text-stone-400">
            {symbol.subtitle}
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {symbol.meaning}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-rust dark:text-brand-gold group-hover:translate-x-1 transition-transform duration-200">
            Learn more <span className="text-[10px]">→</span>
          </span>
        </div>

        {/* Thumbnail container */}
        <div className="w-20 h-20 shrink-0 rounded-xl bg-brand-cream/50 dark:bg-stone-900/60 border border-brand-gold/10 flex items-center justify-center p-2 relative overflow-hidden group-hover:border-brand-gold/30 transition duration-300">
          {symbol.image ? (
            <img
              src={symbol.image}
              alt={symbol.name}
              className="w-16 h-16 object-contain group-hover:scale-110 group-hover:rotate-3 transition duration-500 drop-shadow-[0_2px_8px_rgba(201,162,39,0.2)]"
            />
          ) : (
            <span className="text-stone-400 dark:text-stone-600 font-display text-2xl">?</span>
          )}
        </div>
      </div>
    </Link>
  );
}
