import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { Car, Train, Plane } from "lucide-react";

export const Route = createFileRoute("/getting-here")({
  component: GettingHerePage,
  head: () => ({
    meta: [
      { title: "Come arrivare a Navelli" },
      { name: "description", content: "Come raggiungere Navelli in auto (A24), in treno (L'Aquila + bus TUA) o in aereo (Pescara, Roma Ciampino)." },
    ],
  }),
});

function GettingHerePage() {
  const { t } = useT();
  const items = [
    { Icon: Car, titleKey: "getting_car", descKey: "getting_car_desc" },
    { Icon: Train, titleKey: "getting_train", descKey: "getting_train_desc" },
    { Icon: Plane, titleKey: "getting_plane", descKey: "getting_plane_desc" },
  ] as const;
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">{t("getting_title")}</h1>
      <div className="space-y-5">
        {items.map(({ Icon, titleKey, descKey }) => (
          <article key={titleKey} className="stone-card rounded-2xl p-6 flex gap-5">
            <div className="grid place-items-center w-12 h-12 rounded-full bg-primary text-primary-foreground shrink-0">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold mb-1">{t(titleKey)}</h2>
              <p className="text-muted-foreground">{t(descKey)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
