import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { events, type EventCategory } from "@/data/events";
import { useMemo, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Eventi e sagre · Navelli" },
      { name: "description", content: "Calendario di sagre, feste religiose, eventi culturali e fioritura dello zafferano a Navelli." },
    ],
  }),
});

const catEmoji: Record<EventCategory, string> = {
  sagra: "🍝", religious: "⛪", cultural: "🎭", music: "🎵", nature: "🌺",
};

function EventsPage() {
  const { t, tField, lang } = useT();
  const [filter, setFilter] = useState<EventCategory | "all">("all");

  const filtered = useMemo(() => {
    const f = filter === "all" ? events : events.filter((e) => e.category === filter);
    return [...f].sort((a, b) => a.date.localeCompare(b.date));
  }, [filter]);

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = filtered.filter((e) => (e.endDate || e.date) >= today);
  const past = filtered.filter((e) => (e.endDate || e.date) < today);

  const fmtDate = (d: string, end?: string) => {
    const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    const a = new Date(d).toLocaleDateString(lang, opts);
    if (!end) return a;
    const b = new Date(end).toLocaleDateString(lang, opts);
    return `${a} → ${b}`;
  };

  const cats: (EventCategory | "all")[] = ["all", "sagra", "religious", "cultural", "music", "nature"];
  const catLabel = (c: EventCategory | "all") => {
    if (c === "all") return t("events_all");
    if (c === "nature") return t("cat_nature_ev");
    return t(`cat_${c}` as never);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">{t("events_title")}</h1>
      <p className="text-muted-foreground mb-8">{t("events_subtitle")}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              filter === c ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"
            }`}
          >
            {c !== "all" && catEmoji[c as EventCategory]} {catLabel(c)}
          </button>
        ))}
      </div>

      {upcoming.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4">{t("events_upcoming")}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {upcoming.map((e) => <EventCard key={e.id} e={e} fmt={fmtDate} />)}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold mb-4 text-muted-foreground">{t("events_past")}</h2>
          <div className="grid md:grid-cols-2 gap-5 opacity-60">
            {past.map((e) => <EventCard key={e.id} e={e} fmt={fmtDate} />)}
          </div>
        </section>
      )}
    </div>
  );

  function EventCard({ e, fmt }: { e: typeof events[number]; fmt: (d: string, end?: string) => string }) {
    return (
      <article className="stone-card rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <span className="text-3xl">{catEmoji[e.category]}</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground font-semibold">
            {catLabel(e.category)}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold mb-2">{tField(e.name)}</h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-1">
          <Calendar className="w-4 h-4" /> {fmt(e.date, e.endDate)}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" /> {e.location}
        </p>
        <p className="text-sm">{tField(e.description)}</p>
      </article>
    );
  }
}
