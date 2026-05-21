import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { stops } from "@/data/stops";
import { hospitality } from "@/data/hospitality";
import { services, SERVICE_META, type ServiceType } from "@/data/services";
import { LeafletMap } from "@/components/LeafletMap";


export const Route = createFileRoute("/map")({
  component: MapPage,
  head: () => ({
    meta: [
      { title: "Mappa interattiva · Navelli" },
      { name: "description", content: "Mappa interattiva del borgo di Navelli con tutte le tappe del tour, strutture ricettive, bar e servizi essenziali." },
    ],
  }),
});

function MapPage() {
  const { t } = useT();

  // Strutture ricettive (sleep / eat) sulla mappa.
  // I bar sono ora caricati separatamente da services.ts (type: "bar").
  const allOther = hospitality.filter((h) => h.type !== "drink");

  const serviceTypes: ServiceType[] = [
    "municipio",
    "guardia-medica",
    "carabinieri",
    "posta",
    "farmacia",
    "negozio",
    "alimentari",
    "bar",
    "campo-sportivo",
    "proloco",
    "casetta-libri",
    "biblioteca",
    "asilo-nido",
    "casa-verde",
    "murales",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="font-display text-4xl md:text-5xl font-bold">{t("map_title")}</h1>
        <p className="text-muted-foreground mt-1">{t("tour_subtitle")}</p>
      </div>


      <div className="h-[55vh] md:h-[78vh]">
        <LeafletMap
          stops={stops}
          showUserLocation
          hospitality={allOther}
          services={services}
          height="100%"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><span className="numbered-marker" style={{ width: 22, height: 22, fontSize: 12 }}>1</span> Tappa</span>
        <span className="flex items-center gap-2"><span className="hospitality-marker sleep" style={{ width: 22, height: 22, fontSize: 12 }}>🛏</span> Dormire</span>
        <span className="flex items-center gap-2"><span className="hospitality-marker eat" style={{ width: 22, height: 22, fontSize: 12 }}>🍽</span> Mangiare</span>
        {serviceTypes.map((st) => (
          <span key={st} className="flex items-center gap-2">
            <span
              className="service-marker"
              style={{ width: 22, height: 22, fontSize: 12, background: SERVICE_META[st].color }}
            >
              {SERVICE_META[st].emoji}
            </span>
            {SERVICE_META[st].label}
          </span>
        ))}
      </div>
    </div>
  );
}
