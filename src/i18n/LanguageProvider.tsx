import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type Lang, type Multilang, translations, type TKey } from "@/data/translations";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
  tField: (m: Multilang) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "navelli_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && ["it", "en", "fr", "de", "es"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  };

  const t = (key: TKey) => translations[key]?.[lang] ?? translations[key]?.it ?? String(key);
  const tField = (m: Multilang) => m?.[lang] ?? m?.it ?? "";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tField }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
