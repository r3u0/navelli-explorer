import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { stops } from "@/data/stops";
import { hospitality } from "@/data/hospitality";
import { LeafletMap } from "@/components/LeafletMap";
import { useState } from "react";
import { Layers, Car } from "lucide-react";

export const Route = createFileRoute("/map")({
  component: MapPage,
  head: () => ({
    meta: [
      { title: "Mappa interattiva · Navelli" },
      { name: "description", content: "Mappa interattiva del borgo di Navelli con tutte le tappe del tour e le strutture ricettive." },
    ],
  }),
});

function MapPage() {
  const { t } = useT();
  const [showHosp, setShowHosp] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold">{t("map_title")}</h1>
          <p className="text-muted-foreground mt-1">{t("tour_subtitle")}</p>
        </div>
        <button
          onClick={() => setShowHosp((s) => !s)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            showHosp
              ? "bg-primary text-primary-foreground"
              : "bg-secondary hover:bg-secondary/70"
          }`}
        >
          <Layers className="w-4 h-4" /> {t("map_show_hospitality")}
        </button>
      </div>

      <div className="mb-5 flex gap-3 rounded-2xl border-l-4 border-accent bg-accent/10 p-4">
        <Car className="w-6 h-6 text-accent shrink-0 mt-0.5" />
        <div>
          <p className="font-display font-bold text-base mb-1">{t("car_required_title")}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{t("car_required_desc")}</p>
        </div>
      </div>


      <LeafletMap
        stops={stops}
        showRoute
        showUserLocation
        bars={hospitality.filter((h) => h.type === "drink" && (h.id === "grottino-borgo" || h.id === "sotto-castagno"))}
        hospitality={showHosp ? hospitality.filter((h) => h.type !== "drink") : undefined}
        height="78vh"
      />

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><span className="numbered-marker" style={{ width: 22, height: 22, fontSize: 12 }}>1</span> Tappa</span>
        {showHosp && <>
          <span className="flex items-center gap-2"><span className="hospitality-marker sleep" style={{ width: 20, height: 20, fontSize: 10 }}>🛏</span> Dormire</span>
          <span className="flex items-center gap-2"><span className="hospitality-marker eat" style={{ width: 20, height: 20, fontSize: 10 }}>🍽</span> Mangiare</span>
        </>}
      </div>
    </div>
  );
}
