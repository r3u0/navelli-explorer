import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { hospitality, localProducts, type HospType } from "@/data/hospitality";
import { useState } from "react";
import { Phone, Globe, MapPin, Info } from "lucide-react";

export const Route = createFileRoute("/hospitality")({
  component: HospitalityPage,
  head: () => ({
    meta: [
      { title: "Dove dormire e mangiare a Navelli" },
      { name: "description", content: "B&B, agriturismi, ristoranti e bar tra Navelli e Civitaretenga. Tutte le strutture per il tuo soggiorno." },
    ],
  }),
});

function HospitalityPage() {
  const { t, tField } = useT();
  const [tab, setTab] = useState<HospType>("sleep");
  const items = hospitality.filter((h) => h.type === tab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">{t("hosp_title")}</h1>

      <div className="stone-card rounded-2xl p-5 mb-8 flex gap-3 items-start border-l-4" style={{ borderLeftColor: "var(--accent)" }}>
        <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <p className="text-sm">{t("hosp_banner")}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {(["sleep", "eat", "drink"] as const).map((tabId) => (
          <button
            key={tabId}
            onClick={() => setTab(tabId)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              tab === tabId ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"
            }`}
          >
            {t(`hosp_${tabId}` as never)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((h) => {
          const mapsUrl =
            h.googleMapsLink ||
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${h.name} ${h.address}`,
            )}`;
          return (
            <article key={h.id} className="stone-card rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent font-bold">{h.subtype}</p>
                  <h2 className="font-display text-xl font-bold mt-1">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {h.name}
                    </a>
                  </h2>
                </div>
                <span className="text-xs font-bold text-primary">{h.priceRange}</span>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-1.5 text-xs text-muted-foreground mb-3 hover:text-primary transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" /> {h.address}
              </a>
              <p className="text-sm flex-1 mb-4">{tField(h.description)}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {h.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {h.phone && (
                  <a href={`tel:${h.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-semibold">
                    <Phone className="w-3.5 h-3.5" /> {t("call")}
                  </a>
                )}
                {h.website && (
                  <a href={h.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-full font-semibold hover:border-primary">
                    <Globe className="w-3.5 h-3.5" /> {t("website")}
                  </a>
                )}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-full font-semibold hover:border-primary"
                >
                  <MapPin className="w-3.5 h-3.5" /> {t("directions")}
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Local products */}
      <section className="mt-16">
        <h2 className="font-display text-3xl font-bold mb-6">{t("hosp_products")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {localProducts.map((p) => (
            <article key={p.id} className="stone-card rounded-2xl p-5">
              <div className="text-3xl mb-2">{p.emoji}</div>
              <h3 className="font-display font-bold mb-1.5">{tField(p.name)}</h3>
              <p className="text-xs text-muted-foreground">{tField(p.description)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
