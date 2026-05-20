import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { getStop, stops, distanceMeters, FALLBACK_IMAGE } from "@/data/stops";
import { LeafletMap } from "@/components/LeafletMap";
import { CategoryIcon, categoryKey } from "@/components/CategoryIcon";
import { ArrowLeft, ArrowRight, ChevronRight, Map, MapPin, Share2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/stop/$id")({
  component: StopPage,
  notFoundComponent: () => (
    <div className="max-w-md mx-auto p-12 text-center">
      <h1 className="text-3xl font-display font-bold">Tappa non trovata</h1>
      <Link to="/stops" className="mt-4 inline-block text-primary font-semibold">← Torna alle tappe</Link>
    </div>
  ),
  loader: ({ params }) => {
    const stop = getStop(params.id);
    if (!stop) throw notFound();
    return { stop };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.stop;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.name.it} · Navelli` },
        { name: "description", content: s.shortDescription.it },
        { property: "og:title", content: `${s.name.it} · Navelli` },
        { property: "og:description", content: s.shortDescription.it },
        { property: "og:image", content: s.images[0] },
      ],
    };
  },
});

function StopPage() {
  const { stop } = Route.useLoaderData();
  const { t, tField } = useT();
  const [copied, setCopied] = useState(false);

  const prev = stop.prevStopId ? getStop(stop.prevStopId) : null;
  const next = stop.nextStopId ? getStop(stop.nextStopId) : null;

  const distTo = (other: typeof prev) =>
    other ? Math.round(distanceMeters(stop.coordinates, other.coordinates)) : 0;
  const formatDist = (m: number) => {
    if (!m) return "";
    if (m < 1000) return `${m} m`;
    return `${(m / 1000).toFixed(1)} km`;
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = `${tField(stop.name)} · Navelli`;
    if (typeof navigator !== "undefined" && (navigator as Navigator).share) {
      try {
        await (navigator as Navigator).share({ title, url });
        return;
      } catch { /* user cancelled */ }
    }
    if (typeof navigator !== "undefined") {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
        <Link to="/" className="hover:text-primary">{t("nav_home")}</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/tour" className="hover:text-primary">{t("nav_tour")}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-semibold truncate">{tField(stop.name)}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="gold-badge w-16 h-16 rounded-full grid place-items-center text-2xl shrink-0">
            {stop.stopNumber}
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-bold flex items-center gap-2">
              <CategoryIcon category={stop.category} className="w-3.5 h-3.5" />
              {t(categoryKey(stop.category))} · {stop.area}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold mt-1">{tField(stop.name)}</h1>
          </div>
        </div>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/70 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          <Share2 className="w-4 h-4" />
          {copied ? t("link_copied") : t("share")}
        </button>
      </div>

      {/* Image gallery */}
      {stop.images.length > 0 && (
        <div className="mb-8 flex md:grid md:grid-cols-2 gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {stop.images.map((src: string, i: number) => (
            <img
              key={i}
              src={src}
              alt={`${tField(stop.name)} ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }}
              className="rounded-2xl object-cover w-[85%] md:w-full h-64 md:h-80 shrink-0 snap-center border border-border"
            />
          ))}
        </div>
      )}

      {/* Description */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl font-bold mb-3">{t("about")}</h2>
          <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
            {tField(stop.fullDescription)}
          </p>
        </div>
        <div>
          <div className="stone-card rounded-2xl p-5 text-sm">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-2">Info</p>
            <p className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              {stop.coordinates.lat.toFixed(4)}°N, {stop.coordinates.lng.toFixed(4)}°E
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${stop.coordinates.lat},${stop.coordinates.lng}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              {t("directions")} →
            </a>
          </div>
        </div>
      </div>

      {/* Mini map */}
      <div className="mb-10">
        <LeafletMap stops={stops} focusStopId={stop.id} height="40vh" zoom={17} showUserLocation />
      </div>

      {/* Prev / Next */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {prev ? (
          <Link
            to="/stop/$id"
            params={{ id: prev.id }}
            className="stone-card rounded-2xl p-5 flex items-center gap-4 group"
          >
            <ArrowLeft className="w-5 h-5 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{t("prev_stop")}</p>
              <p className="font-display font-bold truncate">{tField(prev.name)}</p>
              <p className="text-xs text-muted-foreground">{formatDist(distTo(prev))} · {t("walking_distance")}</p>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            to="/stop/$id"
            params={{ id: next.id }}
            className="stone-card rounded-2xl p-5 flex items-center gap-4 group sm:text-right"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{t("next_stop")}</p>
              <p className="font-display font-bold truncate">{tField(next.name)}</p>
              <p className="text-xs text-muted-foreground">{formatDist(distTo(next))} · {t("walking_distance")}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary shrink-0" />
          </Link>
        ) : <div />}
      </div>

      <Link
        to="/map"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold hover:bg-primary/90"
      >
        <Map className="w-4 h-4" /> {t("view_full_route")}
      </Link>
    </div>
  );
}
