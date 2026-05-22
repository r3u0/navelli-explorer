import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useT } from "@/i18n/LanguageProvider";
import heroImg from "@/assets/navelli-hero.jpg";
import saffronImg from "@/assets/saffron.jpg";
import saffron1 from "@/assets/saffron1.jpg";
import { traditions } from "@/data/traditions";
import type { Multilang } from "@/data/translations";
import { Map, MapPin, ArrowRight, Sparkles, ChevronDown, ExternalLink, Building2, Compass } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Navelli — L'Oro Rosso d'Abruzzo" },
      { name: "description", content: "Borgo medievale d'Abruzzo, tra i più belli d'Italia, patria dello zafferano DOP. Vivi il tour digitale di Navelli e Civitaretenga." },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" }
    ],
  }),
});

function HomePage() {
  const { t } = useT();
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Vista panoramica di Navelli al tramonto con i campi di zafferano in fiore"
          className="absolute inset-0 w-full h-full object-cover object-[20%_center] md:object-center"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 pt-32 w-full">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t("footer_borghi")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white max-w-4xl leading-[1.05] drop-shadow-2xl">
            {t("home_tagline")}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl">
            {t("home_subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/tour"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-xl"
            >
              {t("home_cta_tour")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/map"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/40 px-6 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Map className="w-4 h-4" /> {t("home_cta_map")}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="font-display text-2xl sm:text-3xl leading-relaxed text-foreground/90 italic">
          {t("home_intro")}
        </p>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { titleKey: "home_highlight_history", descKey: "home_highlight_history_desc", moreKey: "home_highlight_history_more", emoji: "🏛️" },
            { titleKey: "home_highlight_saffron", descKey: "home_highlight_saffron_desc", moreKey: "home_highlight_saffron_more", emoji: "🌺" },
            { titleKey: "home_highlight_borgo", descKey: "home_highlight_borgo_desc", moreKey: "home_highlight_borgo_more", emoji: "🏰" },
          ].map((h) => {
            const isOpen = expanded === h.titleKey;
            return (
              <button
                key={h.titleKey}
                type="button"
                onClick={() => setExpanded(isOpen ? null : h.titleKey)}
                aria-expanded={isOpen}
                className="stone-card rounded-2xl p-7 text-left w-full cursor-pointer transition-all hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="text-4xl mb-3">{h.emoji}</div>
                <h3 className="font-display text-xl font-bold mb-2">{t(h.titleKey as never)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(h.descKey as never)}</p>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-foreground/80 text-sm leading-relaxed border-t border-border pt-4">
                      {t(h.moreKey as never)}
                    </p>
                  </div>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  {isOpen ? t("home_highlight_readless") : t("home_highlight_readmore")}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Food & Traditions Slideshow */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <FoodTraditionsSlideshow />
      </section>


      {/* Quick access */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: "/stops", icon: MapPin, key: "nav_stops" },
            { to: "/map", icon: Map, key: "nav_map" },
            { to: "/events", icon: Sparkles, key: "nav_events" },
            { to: "/hospitality", icon: MapPin, key: "nav_hospitality" },
          ].map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="stone-card rounded-xl p-5 flex items-center gap-3 group"
            >
              <q.icon className="w-5 h-5 text-primary" />
              <span className="font-semibold flex-1">{t(q.key as never)}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

      {/* Official links */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-bold">
            {t("links_title")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">{t("links_title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">{t("links_intro")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <a
            href="https://comune.navelli.aq.it/home"
            target="_blank"
            rel="noreferrer"
            className="stone-card rounded-2xl p-6 flex items-start gap-4 group hover:shadow-lg transition-shadow"
          >
            <span className="grid place-items-center w-12 h-12 rounded-full bg-primary/15 text-primary shrink-0">
              <Building2 className="w-6 h-6" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-widest text-accent font-bold">
                comune.navelli.aq.it
              </p>
              <h3 className="font-display text-xl font-bold mt-1">{t("links_municipality")}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t("links_municipality_desc")}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all">
                {t("links_visit")} <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          <a
            href="https://visitnavelli.it/it_it/"
            target="_blank"
            rel="noreferrer"
            className="stone-card rounded-2xl p-6 flex items-start gap-4 group hover:shadow-lg transition-shadow"
          >
            <span className="grid place-items-center w-12 h-12 rounded-full bg-accent/20 text-accent-foreground shrink-0">
              <Compass className="w-6 h-6" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-widest text-accent font-bold">
                visitnavelli.it
              </p>
              <h3 className="font-display text-xl font-bold mt-1">{t("links_proloco")}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t("links_proloco_desc")}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all">
                {t("links_visit")} <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

function FoodTraditionsSlideshow() {
  const { t, tField } = useT();

  const images = useMemo<string[]>(() => {
    // 1. Prende le foto da traditions (se ce ne sono)
    const fromTraditions = traditions.flatMap((tr) => tr.images ?? []);
    
    // 2. Unisce le foto di traditions, la foto di default e le tue nuove foto in asset (da importare a inizio file prima)
    const all = [...fromTraditions, saffronImg, saffron1];
    
    return all.length > 0 ? all : [saffronImg];
  }, []);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images.length]);

  const title = tField({
    it: "Cibo, usanze e tradizioni",
    en: "Food, customs and traditions",
    fr: "Cuisine, coutumes et traditions",
    de: "Essen, Bräuche und Traditionen",
    es: "Comida, costumbres y tradiciones",
  } as Multilang);

  const desc = tField({
    it: "Dallo zafferano DOP ai piatti della cucina contadina, fino alle feste che animano il borgo: scopri i sapori autentici e le usanze che da secoli raccontano l'anima di Navelli.",
    en: "From DOP saffron to traditional country dishes, and the festivals that bring the village to life: discover the authentic flavours and customs that have told Navelli's story for centuries.",
    fr: "Du safran DOP aux plats de la cuisine paysanne, jusqu'aux fêtes qui animent le village : découvrez les saveurs authentiques et les coutumes qui racontent l'âme de Navelli depuis des siècles.",
    de: "Vom DOP-Safran über die Gerichte der Bauernküche bis zu den Festen, die das Dorf beleben: Entdecken Sie die authentischen Aromen und Bräuche, die seit Jahrhunderten die Seele von Navelli erzählen.",
    es: "Del azafrán DOP a los platos de la cocina campesina, hasta las fiestas que animan el pueblo: descubre los sabores auténticos y las costumbres que cuentan desde hace siglos el alma de Navelli.",
  } as Multilang);

  const cta = tField({
    it: "Scopri di più",
    en: "Discover more",
    fr: "En savoir plus",
    de: "Mehr erfahren",
    es: "Saber más",
  } as Multilang);

  return (
    <div className="relative stone-card rounded-3xl overflow-hidden min-h-[280px] md:min-h-[340px] grid md:grid-cols-2">
      {/* Left: rotating photos */}
      <div className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-secondary min-h-[240px]">
        {images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={title}
            loading="lazy"
            aria-hidden={i !== idx}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: fixed text + CTA */}
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <span className="text-xs uppercase tracking-widest text-accent font-bold">
          {t("nav_food")}
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold mt-2 mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground mb-6">{desc}</p>
        <Link
          to="/food"
          className="inline-flex items-center gap-2 self-start bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-md"
        >
          {cta} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
