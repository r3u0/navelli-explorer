import { Church, DoorOpen, Building2, Trees, Landmark, ScrollText, Palette, Columns3 } from "lucide-react";
import type { StopCategory } from "@/data/stops";

// Per aggiungere una nuova categoria: aggiungi qui l'icona (lucide-react)
// e in `categoryKey` la chiave di traduzione corrispondente (`cat_<nome>`).
export function CategoryIcon({ category, className = "w-5 h-5" }: { category: StopCategory; className?: string }) {
  const Icon = {
    gate: DoorOpen,
    church: Church,
    palace: Building2,
    nature: Trees,
    monument: Landmark,
    historic: ScrollText,
    arte: Palette,
    piazza: Columns3,
  }[category];
  return <Icon className={className} />;
}

export function categoryKey(c: StopCategory) {
  return ({
    gate: "cat_gate",
    church: "cat_church",
    palace: "cat_palace",
    nature: "cat_nature",
    monument: "cat_monument",
    historic: "cat_historic",
    arte: "cat_arte",
    piazza: "cat_piazza",
  } as const)[c];
}
