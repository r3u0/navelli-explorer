import { Church, DoorOpen, Building2, Trees, Landmark, ScrollText } from "lucide-react";
import type { StopCategory } from "@/data/stops";

export function CategoryIcon({ category, className = "w-5 h-5" }: { category: StopCategory; className?: string }) {
  const Icon = {
    gate: DoorOpen,
    church: Church,
    palace: Building2,
    nature: Trees,
    monument: Landmark,
    historic: ScrollText,
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
  } as const)[c];
}
