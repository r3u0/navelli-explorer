import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { stops } from "@/data/stops";
import { hospitality } from "@/data/hospitality";
import { LeafletMap } from "@/components/LeafletMap";
import { StopCard } from "@/components/StopCard";
import { Clock, Footprints, Car, Play } from "lucide-react";

export const Route = createFileRoute("/tour")({
  component: TourPage,
  head: () => ({
    meta: [
      { title: "Tour guidato di Navelli — 16 tappe tra borgo, altopiano e zafferano" },
      { name: "description", content: "Percorso guidato di 16 tappe tra Navelli, Santa Maria in Cerulis e Civitaretenga: porte medievali, chiese, palazzi e i campi di zafferano DOP." },
    ],
  }),
});

function TourPage() {
  const { t } = useT();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">
          {t("nav_tour")}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">{t("tour_title")}</h1>
        <p className="text-muted-foreground text-lg">{t("tour_subtitle")}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {t("tour_duration")}</span>
          <span className="flex items-center gap-1.5"><Footprints className="w-4 h-4 text-primary" /> 16 {t("nav_stops").toLowerCase()}</span>
        </div>
      </div>

      <div className="mb-6 flex gap-3 rounded-2xl border-l-4 border-accent bg-accent/10 p-4">
        <Car className="w-6 h-6 text-accent shrink-0 mt-0.5" />
        <div>
          <p className="font-display font-bold text-base mb-1">{t("car_required_title")}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{t("car_required_desc")}</p>
        </div>
      </div>

      <div className="h-[42vh] md:h-[55vh]">
        <LeafletMap stops={stops} showRoute showUserLocation bars={hospitality.filter((h) => h.type === "drink" && (h.id === "grottino-borgo" || h.id === "sotto-castagno"))} height="100%" />
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stops.map((s) => <StopCard key={s.id} stop={s} />)}
      </div>

      {stops[0] && (
        <Link
          to="/stop/$id"
          params={{ id: stops[0].id }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-full font-semibold shadow-2xl hover:bg-primary/90 transition-colors"
          aria-label={t("start_now")}
        >
          <Play className="w-4 h-4 fill-current" />
          {t("start_now")}
        </Link>
      )}
    </div>
  );
}
