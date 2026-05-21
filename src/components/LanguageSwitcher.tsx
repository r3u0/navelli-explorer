import { useT } from "@/i18n/LanguageProvider";
import { LANGS, type Lang } from "@/data/translations";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const { lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  // Mappa codice lingua -> codice paese ISO per bandiere SVG (flagcdn.com)
  const countryCode = (code: string) => (code === "en" ? "gb" : code);
  const flagUrl = (code: string, size: 40 | 80 = 40) =>
    `https://flagcdn.com/w${size}/${countryCode(code)}.png`;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium hover:border-accent transition-colors"
        aria-label="Change language"
      >
        <img
          src={flagUrl(current.code)}
          alt={current.label}
          width={20}
          height={14}
          className="w-5 h-[14px] object-cover rounded-[2px] border border-border/60"
        />
        <span className="hidden sm:inline uppercase tracking-wider text-xs">{current.code}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-card shadow-lg overflow-hidden z-[1100]">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as Lang);
                setOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                l.code === lang ? "bg-secondary font-semibold" : ""
              }`}
            >
              <img
                src={flagUrl(l.code, 80)}
                alt={l.label}
                width={24}
                height={16}
                className="w-6 h-4 object-cover rounded-[2px] border border-border/60 shrink-0"
              />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
