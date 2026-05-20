import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { stops } from "@/data/stops";
import { StopCard } from "@/components/StopCard";
import { useState } from "react";

export const Route = createFileRoute("/stops")({
  component: StopsPage,
  head: () => ({
    meta: [
      { title: "Punti d'interesse · Navelli e Civitaretenga" },
      { name: "description", content: "Tutti i monumenti, porte medievali, chiese e palazzi di Navelli e Civitaretenga." },
    ],
  }),
});

function StopsPage() {
  const { t } = useT();
  const [area, setArea] = useState<"all" | "Navelli" | "Civitaretenga">("all");
  const filtered = area === "all" ? stops : stops.filter((s) => s.area === area);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">{t("stops_title")}</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {(["all", "Navelli", "Civitaretenga"] as const).map((a) => (
          <button
            key={a}
            onClick={() => setArea(a)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              area === a
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/70"
            }`}
          >
            {a === "all" ? t("events_all") : a}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((s) => <StopCard key={s.id} stop={s} />)}
      </div>
    </div>
  );
}
