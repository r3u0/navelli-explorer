import { Link } from "@tanstack/react-router";
import type { Stop } from "@/data/stops";
import { useT } from "@/i18n/LanguageProvider";
import { CategoryIcon, categoryKey } from "./CategoryIcon";
import { ArrowRight, MapPin } from "lucide-react";

export function StopCard({ stop }: { stop: Stop }) {
  const { t, tField } = useT();
  return (
    <Link
      to="/stop/$id"
      params={{ id: stop.id }}
      className="stone-card rounded-2xl p-5 flex flex-col h-full group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="gold-badge w-12 h-12 rounded-full grid place-items-center text-lg">
          {stop.stopNumber}
        </div>
        <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
          <CategoryIcon category={stop.category} className="w-3.5 h-3.5" />
          {t(categoryKey(stop.category))}
        </span>
      </div>
      <h3 className="font-display text-xl font-bold leading-tight mb-2">{tField(stop.name)}</h3>
      <p className="text-sm text-muted-foreground flex-1 mb-4 line-clamp-3">
        {tField(stop.shortDescription)}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> {stop.area}
        </span>
        <span className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
          {t("discover_more")} <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
