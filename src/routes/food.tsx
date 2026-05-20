import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import saffronImg from "@/assets/saffron.jpg";

export const Route = createFileRoute("/food")({
  component: FoodPage,
  head: () => ({
    meta: [
      { title: "Cibo & tradizioni · Navelli" },
      { name: "description", content: "Zafferano DOP, ceci Slow Food, gnocchetti, cauciunitti e liquore di zafferano: le tradizioni gastronomiche di Navelli." },
    ],
  }),
});

const dishes = [
  { emoji: "🌺", name: "Zafferano DOP", desc: { it: "Pistilli essiccati di Crocus sativus, raccolti a mano all'alba. Profumo intenso, colore oro.", en: "Hand-harvested Crocus sativus stigmas. Intense aroma, golden hue.", fr: "Stigmates de Crocus sativus récoltés à la main.", de: "Handgeerntete Crocus-sativus-Stempel.", es: "Estigmas de Crocus sativus recogidos a mano." } },
  { emoji: "🥣", name: "Ceci di Navelli", desc: { it: "Piccoli, scuri, intensi. Presidio Slow Food, perfetti in zuppa con olio nuovo.", en: "Small, dark, intense. Slow Food presidium, perfect in soup.", fr: "Petits pois chiches noirs et intenses, Sentinelle Slow Food.", de: "Kleine, dunkle, intensive Kichererbsen — Slow-Food-Presidium.", es: "Garbanzos pequeños, oscuros, intensos. Baluarte Slow Food." } },
  { emoji: "🍝", name: "Gnocchetti allo zafferano", desc: { it: "Pasta fresca con farina e uovo, condita con un battuto di guanciale e zafferano.", en: "Fresh egg pasta with guanciale and saffron.", fr: "Pâtes fraîches au guanciale et au safran.", de: "Frische Eierpasta mit Guanciale und Safran.", es: "Pasta fresca con guanciale y azafrán." } },
  { emoji: "🥟", name: "Cauciunitti", desc: { it: "Ravioli dolci ripieni di ceci, cacao, mandorle e mosto cotto — dolci natalizi.", en: "Sweet ravioli filled with chickpeas, cocoa, almonds and grape must — Christmas treats.", fr: "Raviolis sucrés farcis de pois chiches, cacao, amandes et moût cuit.", de: "Süße Ravioli mit Kichererbsen, Kakao, Mandeln und Traubenmost.", es: "Ravioles dulces rellenos de garbanzos, cacao, almendras y mosto cocido." } },
  { emoji: "🍷", name: "Liquore allo zafferano", desc: { it: "Distillato artigianale ambrato, profumato e suadente. Da degustare a fine pasto.", en: "Artisan amber liqueur, aromatic and smooth — after-dinner sipper.", fr: "Liqueur artisanale ambrée, aromatique.", de: "Handwerklicher bernsteinfarbener Likör, aromatisch.", es: "Licor artesanal ámbar, aromático." } },
  { emoji: "🍢", name: "Arrosticini", desc: { it: "Spiedini di pecora cotti sulla brace — l'icona della pastorizia abruzzese.", en: "Mutton skewers grilled over embers — icon of Abruzzo shepherding.", fr: "Brochettes de mouton grillées.", de: "Über Glut gegrillte Hammelfleischspieße.", es: "Brochetas de cordero a la brasa." } },
];

function FoodPage() {
  const { t, tField, lang } = useT();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("food_title")}</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-10">{t("food_intro")}</p>

      <img
        src={saffronImg}
        alt="Fiori di zafferano in fiore"
        className="w-full h-72 object-cover rounded-3xl mb-10 border border-border"
        loading="lazy"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dishes.map((d) => (
          <article key={d.name} className="stone-card rounded-2xl p-6">
            <div className="text-4xl mb-3">{d.emoji}</div>
            <h2 className="font-display text-xl font-bold mb-2">{d.name}</h2>
            <p className="text-sm text-muted-foreground">{d.desc[lang] || d.desc.it}</p>
          </article>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground italic">{tField({ it: "Per dove gustarli, vai alla pagina Ospitalità.", en: "To taste them, visit the Hospitality page.", fr: "Pour les goûter, visitez la page Hébergement.", de: "Zum Verkosten besuchen Sie die Unterkunft-Seite.", es: "Para degustarlos, visite la página Hospedaje." })}</p>
    </div>
  );
}
