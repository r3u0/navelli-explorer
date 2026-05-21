import { Link } from "@tanstack/react-router";
import { type Stop, FALLBACK_IMAGE } from "@/data/stops";
import { useT } from "@/i18n/LanguageProvider";
import { CategoryIcon, categoryKey } from "./CategoryIcon";
import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";

export function StopCard({ stop }: { stop: Stop }) {
  const { t, tField } = useT();
  const [src, setSrc] = useState<string>(stop.images?.[0] ?? FALLBACK_IMAGE);

  return (
    <Link
      to="/stop/$id"
      params={{ id: stop.id }}
      className="stone-card rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={src}
          onError={() => src !== FALLBACK_IMAGE && setSrc(FALLBACK_IMAGE)}
          alt={tField(stop.name)}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 gold-badge w-11 h-11 rounded-full grid place-items-center text-base shadow-md">
          {stop.stopNumber}
        </div>
        <span className="absolute top-3 right-3 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-background/85 backdrop-blur text-foreground/80">
          <CategoryIcon category={stop.category} className="w-3.5 h-3.5" />
          {t(categoryKey(stop.category))}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
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
      </div>
    </Link>
  );
}
