import { useState } from "react";
import { Link } from "react-router-dom";

export default function SymbolDetail({ symbol }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const sections = [
    {
      title: "Meaning",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      content: symbol.meaning
    },
    {
      title: "Origin",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: symbol.origin
    },
    {
      title: "History",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: symbol.history
    },
    {
      title: "Cultural Significance",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      content: symbol.culturalSignificance
    }
  ];

  const handlePronounce = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    
    // Attempt standard SpeechSynthesis for pronunciation fallback
    if ("speechSynthesis" in window) {
      const textToSpeak = symbol.twiName || symbol.name;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      // Try to get a pleasant voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith("en")) || voices[0];
      if (englishVoice) utterance.voice = englishVoice;
      utterance.rate = 0.85; // slightly slower for clarity
      window.speechSynthesis.speak(utterance);
    }
    
    setTimeout(() => {
      setIsPlaying(false);
    }, 1500);
  };

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Left Column - Large Floating Symbol Card */}
      <div className="md:col-span-5 lg:col-span-5 sticky top-24">
        <div className="group relative overflow-hidden rounded-3xl p-8 flex flex-col items-center glass-card border border-brand-gold/30 dark:border-brand-gold/15">
          {/* Subtle Golden Glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-gold/20 dark:bg-brand-gold/10 filter blur-3xl animate-pulse-glow z-0 pointer-events-none"></div>

          {/* Adinkra Pattern background accents */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>

          {/* Interactive Symbol Image */}
          <div className="relative w-48 h-48 flex items-center justify-center bg-brand-cream/40 dark:bg-stone-900/60 rounded-2xl border border-brand-gold/10 z-10 shadow-inner group-hover:border-brand-gold/30 duration-300">
            {symbol.image ? (
              <img
                src={symbol.image}
                alt={symbol.name}
                className="w-40 h-40 object-contain p-2 animate-float drop-shadow-[0_4px_20px_rgba(201,162,39,0.25)] group-hover:scale-108 transition-all duration-500"
              />
            ) : (
              <div className="text-stone-400 dark:text-stone-600 font-display text-4xl">?</div>
            )}
          </div>

          {/* Symbol Headers */}
          <div className="mt-6 text-center z-10 w-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:bg-brand-gold/5">
              {symbol.twiName ? "Adinkra Symbol" : "Heritage Brand"}
            </span>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-earth dark:text-stone-100">
              {symbol.name}
            </h1>
            {symbol.twiName && (
              <div className="mt-2 flex flex-col items-center">
                <button
                  onClick={handlePronounce}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 hover:border-brand-gold/60 bg-stone-100/50 dark:bg-stone-900/50 hover:bg-brand-gold/5 text-xs text-stone-500 dark:text-stone-400 hover:text-brand-earth dark:hover:text-brand-gold transition duration-200"
                  title="Listen Pronunciation"
                >
                  <span className="italic font-medium text-brand-rust dark:text-brand-gold font-sans">
                    &ldquo;{symbol.twiName}&rdquo;
                  </span>
                  <div className="flex items-center gap-0.5 h-3 w-4">
                    {isPlaying ? (
                      <>
                        <span className="w-0.5 h-2.5 bg-brand-gold rounded animate-pulse"></span>
                        <span className="w-0.5 h-3 bg-brand-gold rounded animate-pulse delay-75"></span>
                        <span className="w-0.5 h-1.5 bg-brand-gold rounded animate-pulse delay-150"></span>
                      </>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            )}
            
            <p className="mt-4 text-sm font-semibold tracking-wide text-brand-rust dark:text-brand-gold border-t border-brand-gold/15 pt-4">
              {symbol.subtitle}
            </p>
          </div>
        </div>

        {/* Action Buttons inside sticky col */}
        <div className="mt-6 flex gap-3 w-full">
          <Link
            to="/"
            className="flex-1 rounded-2xl border border-brand-gold/30 hover:border-brand-gold bg-white/40 dark:bg-stone-900/40 px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-brand-earth hover:text-brand-rust dark:text-stone-300 dark:hover:text-brand-gold transition duration-200 backdrop-blur-sm"
          >
            ← All Symbols
          </Link>
          <Link
            to="/qr"
            className="flex-1 rounded-2xl bg-brand-earth dark:bg-brand-gold hover:bg-brand-rust dark:hover:bg-brand-gold/80 px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-brand-cream dark:text-brand-earth transition duration-200 shadow-md hover:shadow-lg"
          >
            Download QR
          </Link>
        </div>
      </div>

      {/* Right Column - Cultural Narratives Grid */}
      <div className="md:col-span-7 lg:col-span-7 space-y-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="glass-panel rounded-2xl p-6 group relative overflow-hidden hover:border-brand-gold/30"
          >
            {/* Glowing left strip on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"></div>

            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-brand-gold/10 text-brand-rust dark:text-brand-gold group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </span>
              <h2 className="font-display text-xl font-bold tracking-tight text-brand-earth dark:text-brand-gold">
                {section.title}
              </h2>
            </div>
            <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300 text-sm md:text-base tracking-wide font-sans">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
