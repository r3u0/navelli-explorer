import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import saffronImg from "@/assets/saffron.jpg";
import type { Multilang } from "@/data/translations";
import { traditions, type Tradition } from "@/data/traditions";
import { Utensils, Wine, Calendar, Info, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";


export const Route = createFileRoute("/food")({
  component: FoodPage,
  head: () => ({
    meta: [
      { title: "Cibo & tradizioni · Navelli" },
      {
        name: "description",
        content:
          "Zafferano DOP, ceci Slow Food, gnocchetti, cauciunitti e liquore di zafferano: la guida completa alle tradizioni gastronomiche di Navelli per il viaggiatore.",
      },
    ],
  }),
});

export interface Dish {
  emoji: string;
  name: string;
  desc: Multilang;
  // Optional: omit the field entirely to hide the corresponding line + icon.
  where?: Multilang;
  when?: Multilang;
}

export const dishes: Dish[] = [
  {
    emoji: "🌺",
    name: "Zafferano DOP dell'Aquila",
    desc: {
      it: "Pistilli essiccati di Crocus sativus, raccolti a mano all'alba e tostati su braci di mandorlo. Profumo intenso, colore oro, sapore amarognolo elegante. Bastano pochi pistilli (0,1 g) per insaporire un risotto per 4 persone.",
      en: "Hand-harvested Crocus sativus stigmas, picked at dawn and toasted over almond-wood embers. Intense aroma, golden hue, elegant bitter finish. Only a few threads (0.1 g) flavour a risotto for four.",
      fr: "Stigmates de Crocus sativus récoltés à la main à l'aube. Arôme intense, couleur or, saveur amère élégante.",
      de: "Handgeerntete Stempel des Crocus sativus, im Morgengrauen gepflückt und über Mandelholzglut getrocknet. Intensives Aroma, goldene Farbe.",
      es: "Estigmas de Crocus sativus recogidos al amanecer. Aroma intenso, color dorado, sabor amargo elegante.",
    },
    where: {
      it: "In vendita direttamente dai produttori del Consorzio per la Tutela dello Zafferano dell'Aquila a Navelli.",
      en: "Sold directly by producers of the Consorzio per la Tutela dello Zafferano dell'Aquila in Navelli.",
      fr: "Vendu directement par les producteurs du Consortium à Navelli.",
      de: "Direkt bei den Produzenten des Konsortiums in Navelli erhältlich.",
      es: "Venta directa de los productores del Consorzio en Navelli.",
    },
    when: {
      it: "Raccolta: fine ottobre – inizio novembre.",
      en: "Harvest: late October – early November.",
      fr: "Récolte : fin octobre – début novembre.",
      de: "Ernte: Ende Oktober – Anfang November.",
      es: "Cosecha: finales de octubre – principios de noviembre.",
    },
  },
  {
    emoji: "🥣",
    name: "Ceci di Navelli",
    desc: {
      it: "Piccoli, scuri e dalla buccia sottile. Presidio Slow Food, coltivati senza concimi chimici sull'altopiano. Si cuociono in olio nuovo con aglio e rosmarino, oppure in zuppa con la pasta.",
      en: "Small, dark, thin-skinned chickpeas. Slow Food presidium, grown without chemical fertilisers on the plateau. Cooked in fresh olive oil with garlic and rosemary, or in soup with pasta.",
      fr: "Petits pois chiches sombres à peau fine. Sentinelle Slow Food.",
      de: "Kleine, dunkle Kichererbsen mit dünner Schale — Slow-Food-Presidium.",
      es: "Garbanzos pequeños, oscuros y de piel fina. Baluarte Slow Food.",
    },
    where: {
      it: "Si trovano dai produttori locali e nelle trattorie del borgo.",
      en: "Available from local producers and the village trattorias.",
      fr: "Chez les producteurs locaux et les trattorias.",
      de: "Bei lokalen Erzeugern und in den Trattorien des Dorfes.",
      es: "Disponibles en productores locales y trattorias.",
    },
    when: {
      it: "Tutto l'anno; protagonisti della Sagra dei Ceci ad agosto.",
      en: "Year-round; stars of the Sagra dei Ceci in August.",
      fr: "Toute l'année ; stars de la Sagra dei Ceci en août.",
      de: "Ganzjährig; Hauptdarsteller der Sagra dei Ceci im August.",
      es: "Todo el año; protagonistas de la Sagra dei Ceci en agosto.",
    },
  },
  {
    emoji: "🍝",
    name: "Sagne con ceci e zafferano",
    desc: {
      it: "Pasta fresca all'uovo lavorata a mano, condita con soffritto di cipolla, battuto di guanciale, ceci di navelli e pistilli di zafferano. Piatto della domenica e delle ricorrenze.",
      en: "Fresh egg pasta handmade and dressed with sautéed onion, guanciale, Navelli chickpeas and saffron threads. A Sunday and special-occasion dish.",
      fr: "Pâtes fraîches aux œufs faites à la main, servies avec oignon sauté, guanciale, pois chiches de Navelli et filaments de safran. Plat du dimanche et des occasions spéciales.",
      de: "Frische Eiernudeln, von Hand gefertigt, mit sautierten Zwiebeln, Guanciale, Navelli-Kichererbsen und Safranfäden serviert. Ein Sonntags- und Festtagsgericht.",
      es: "Pasta fresca hecha a mano con huevo, condimentada con cebolla salteada, guanciale, garbanzos de Navelli y hebras de azafrán. Plato para domingos y ocasiones especiales.",
    },
  },
  {
    emoji: "🥟",
    name: "Cauciunitti (o calcionetti)",
    desc: {
      it: "Ravioli dolci fritti ripieni di purè di ceci, cacao, mandorle tostate, scorza d'arancia e mosto cotto. Sono il dolce natalizio per eccellenza dell'aquilano.",
      en: "Sweet fried ravioli filled with chickpea purée, cocoa, toasted almonds, orange zest and grape must. The signature Christmas sweet of the L'Aquila area.",
      fr: "Raviolis sucrés frits, farcis de purée de pois chiches, cacao, amandes et moût cuit. Douceur de Noël.",
      de: "Süße frittierte Ravioli mit Kichererbsenpüree, Kakao, Mandeln und Traubenmost — Weihnachtssüßspeise.",
      es: "Ravioles dulces fritos rellenos de garbanzos, cacao, almendras y mosto cocido. Dulce navideño.",
    },
    where: {
      it: "Forni e pasticcerie del paese nel periodo natalizio.",
      en: "Village bakeries and pastry shops during the Christmas season.",
      fr: "Boulangeries et pâtisseries du village à Noël.",
      de: "In Bäckereien und Konditoreien zur Weihnachtszeit.",
      es: "Panaderías y pastelerías en Navidad.",
    },
    when: {
      it: "Dicembre – inizio gennaio.",
      en: "December – early January.",
      fr: "Décembre – début janvier.",
      de: "Dezember – Anfang Januar.",
      es: "Diciembre – principios de enero.",
    },
  },
  {
    emoji: "🥃",
    name: "Liquore allo zafferano",
    desc: {
      it: "Distillato artigianale ambrato a base di alcol, zucchero e pistilli di zafferano in infusione. Profumo balsamico, gusto rotondo: si beve fresco a fine pasto.",
      en: "Artisan amber liqueur infused with saffron threads, sugar and alcohol. Balsamic aroma, round flavour — served chilled after dinner.",
      fr: "Liqueur artisanale ambrée à base de safran. À déguster frais en fin de repas.",
      de: "Handwerklicher bernsteinfarbener Safranlikör, kalt nach dem Essen.",
      es: "Licor artesanal ámbar al azafrán, frío al final de la comida.",
    },
    where: {
      it: "Produttori locali di zafferano e botteghe del borgo.",
      en: "Local saffron producers and village shops.",
      fr: "Producteurs locaux et boutiques du village.",
      de: "Lokale Safranproduzenten und Dorfläden.",
      es: "Productores locales y tiendas del pueblo.",
    },
    when: {
      it: "Tutto l'anno.",
      en: "Year-round.",
      fr: "Toute l'année.",
      de: "Ganzjährig.",
      es: "Todo el año.",
    },
  },
];

const tips: { titleKey: string; title: Multilang; desc: Multilang; icon: typeof Info }[] = [
  {
    titleKey: "tip-saffron",
    title: {
      it: "Come riconoscere lo zafferano DOP",
      en: "How to spot real DOP saffron",
      fr: "Reconnaître le vrai safran DOP",
      de: "Echten DOP-Safran erkennen",
      es: "Cómo reconocer el azafrán DOP",
    },
    desc: {
      it: "Cerca sempre i pistilli interi (non in polvere), il marchio DOP «Zafferano dell'Aquila» e il logo del Consorzio. Diffida di prezzi sotto i 25–30 € al grammo: la resa è di circa 1 g ogni 200 fiori raccolti a mano.",
      en: "Always look for whole threads (never powder), the DOP «Zafferano dell'Aquila» mark and the Consortium logo. Be wary of prices under €25–30 per gram: it takes around 200 hand-picked flowers for a single gram.",
      fr: "Cherchez les pistils entiers (jamais en poudre), la marque DOP et le logo du Consortium. Méfiez-vous des prix sous 25–30 €/g.",
      de: "Immer ganze Fäden (kein Pulver), DOP-Siegel und Konsortiums-Logo suchen. Misstrauen Sie Preisen unter 25–30 €/g.",
      es: "Busca siempre los pistilos enteros (nunca en polvo), el sello DOP y el logo del Consorzio. Desconfía de precios bajo 25–30 €/g.",
    },
    icon: Info,
  },
  {
    titleKey: "tip-when",
    title: {
      it: "Quando venire per la gastronomia",
      en: "Best times for the food experience",
      fr: "Quand venir pour la gastronomie",
      de: "Wann für die Küche kommen",
      es: "Cuándo venir para la gastronomía",
    },
    desc: {
      it: "Ad agosto la Sagra dei Ceci e dello Zafferano riempie le strade del borgo. A fine ottobre/inizio novembre la fioritura dello zafferano: un'esperienza unica al mondo. A dicembre tornano i cauciunitti.",
      en: "In August the Sagra dei Ceci and Saffron Festival fills the village streets. Late October/early November is saffron blooming time — a one-of-a-kind sight. In December the cauciunitti return.",
      fr: "En août la Sagra dei Ceci anime le village. Fin octobre/début novembre, la floraison du safran. En décembre, les cauciunitti.",
      de: "Im August Sagra dei Ceci. Ende Oktober/Anfang November die Safranblüte. Im Dezember die Cauciunitti.",
      es: "En agosto la Sagra dei Ceci. A finales de octubre la floración del azafrán. En diciembre los cauciunitti.",
    },
    icon: Calendar,
  },
  {
    titleKey: "tip-reservation",
    title: {
      it: "Prenotare a tavola",
      en: "Booking a table",
      fr: "Réserver une table",
      de: "Tisch reservieren",
      es: "Reservar mesa",
    },
    desc: {
      it: "Navelli è un borgo piccolo: ristoranti e trattorie hanno pochi coperti. Prenota sempre, soprattutto nei weekend, durante le sagre e nella stagione della fioritura.",
      en: "Navelli is a small village: restaurants and trattorias seat few guests. Always book ahead, especially on weekends, during festivals and the saffron blooming season.",
      fr: "Réservez toujours, surtout les week-ends, pendant les fêtes et la floraison.",
      de: "Immer reservieren, vor allem am Wochenende, während der Feste und zur Blütezeit.",
      es: "Reserva siempre, sobre todo los fines de semana y en temporada de floración.",
    },
    icon: Utensils,
  },
  {
    titleKey: "tip-pairing",
    title: {
      it: "I vini da provare",
      en: "Wines worth trying",
      fr: "Vins à goûter",
      de: "Weine, die man probieren sollte",
      es: "Vinos para probar",
    },
    desc: {
      it: "Sull'altopiano si abbinano benissimo i grandi vini abruzzesi: Montepulciano d'Abruzzo DOC con gli arrosticini e i ceci, Trebbiano d'Abruzzo o Pecorino con il risotto allo zafferano, Cerasuolo per l'aperitivo.",
      en: "Pair the local food with great Abruzzo wines: Montepulciano d'Abruzzo DOC with arrosticini and chickpeas, Trebbiano or Pecorino with saffron risotto, Cerasuolo for aperitivo.",
      fr: "Montepulciano d'Abruzzo avec arrosticini, Trebbiano avec le risotto au safran, Cerasuolo à l'apéritif.",
      de: "Montepulciano d'Abruzzo zu Arrosticini, Trebbiano zum Safranrisotto, Cerasuolo als Aperitif.",
      es: "Montepulciano d'Abruzzo con arrosticini, Trebbiano con risotto al azafrán, Cerasuolo de aperitivo.",
    },
    icon: Wine,
  },
  {
    titleKey: "tip-shopping",
    title: {
      it: "Cosa portare a casa",
      en: "What to bring home",
      fr: "Ce qu'il faut rapporter",
      de: "Was mitnehmen",
      es: "Qué llevarse a casa",
    },
    desc: {
      it: "Una bustina di zafferano DOP, un sacchetto di ceci di Navelli, una bottiglia di liquore allo zafferano e — se è stagione — un vasetto di cauciunitti. Tutti i prodotti sono in vendita direttamente in paese.",
      en: "A pouch of DOP saffron, a bag of Navelli chickpeas, a bottle of saffron liqueur and — in season — a jar of cauciunitti. All sold directly in the village.",
      fr: "Safran DOP, pois chiches de Navelli, liqueur au safran et, en saison, cauciunitti. Tout est vendu au village.",
      de: "Eine Tüte DOP-Safran, Kichererbsen aus Navelli, eine Flasche Safranlikör und — in der Saison — Cauciunitti. Alles direkt im Ort erhältlich.",
      es: "Azafrán DOP, garbanzos de Navelli, licor al azafrán y, en temporada, cauciunitti. Todo se vende en el pueblo.",
    },
    icon: ShoppingBag,
  },
];

type OpenItem =
  | { kind: "dish"; data: Dish }
  | { kind: "tradition"; data: Tradition }
  | null;

function FoodPage() {
  const { t, tField, lang } = useT();
  const [open, setOpen] = useState<OpenItem>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("food_title")}</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8">{t("food_intro")}</p>

      <img
        src={saffronImg}
        alt="Fiori di zafferano in fiore sull'altopiano di Navelli"
        className="w-full h-72 object-cover rounded-3xl mb-12 border border-border"
        loading="lazy"
      />

      {/* Story block */}
      <section className="stone-card rounded-3xl p-7 md:p-10 mb-14">
        <span className="text-xs uppercase tracking-widest text-accent font-bold">
          {tField({ it: "La storia", en: "The story", fr: "L'histoire", de: "Die Geschichte", es: "La historia" })}
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">
          {tField({ it: "Otto secoli di Oro Rosso", en: "Eight centuries of Red Gold", fr: "Huit siècles d'Or Rouge", de: "Acht Jahrhunderte Rotes Gold", es: "Ocho siglos de Oro Rojo" })}
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          {tField({
            it: "Nel XIII secolo il monaco domenicano Fra' Santucci portò dalla Spagna i bulbi di Crocus sativus e li piantò sull'altopiano di Navelli. Il clima secco, l'escursione termica e il terreno calcareo si rivelarono perfetti: i pistilli che ne nascono sono tra i più aromatici al mondo. Da allora le stesse famiglie coltivano lo zafferano con metodi rimasti immutati: aratura a mano, raccolta all'alba, separazione dei pistilli a tavola e tostatura su braci di mandorlo. Il marchio DOP «Zafferano dell'Aquila» (dal 2005) tutela oggi questa filiera cortissima — dal campo al barattolo, tutto avviene entro pochi chilometri.",
            en: "In the 13th century the Dominican friar Fra' Santucci brought Crocus sativus bulbs from Spain and planted them on the Navelli plateau. The dry climate, large temperature range and limestone soil were perfect: the resulting threads are among the most aromatic in the world. Since then the same families have grown saffron with unchanged methods — hand ploughing, harvest at dawn, manual stigma separation and toasting over almond-wood embers. The DOP mark «Zafferano dell'Aquila» (since 2005) protects this very short supply chain — field to jar, all within a few kilometres.",
            fr: "Au XIIIe siècle, le moine dominicain Fra' Santucci rapporta d'Espagne les bulbes de Crocus sativus.",
            de: "Im 13. Jahrhundert brachte der Dominikanermönch Fra' Santucci Crocus-sativus-Knollen aus Spanien.",
            es: "En el siglo XIII el fraile dominico Fra' Santucci trajo de España bulbos de Crocus sativus.",
          })}
        </p>
      </section>

      {/* Dishes grid — clickable */}
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
        {tField({ it: "I piatti e i prodotti tipici", en: "Typical dishes and products", fr: "Plats et produits typiques", de: "Typische Gerichte und Produkte", es: "Platos y productos típicos" })}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {dishes.map((d) => (
          <button
            key={d.name}
            type="button"
            onClick={() => setOpen({ kind: "dish", data: d })}
            className="stone-card rounded-2xl p-6 flex flex-col text-left cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="text-4xl mb-3">{d.emoji}</div>
            <h3 className="font-display text-xl font-bold mb-2">{d.name}</h3>
            <p className="text-sm text-foreground/85 line-clamp-3">{d.desc[lang] || d.desc.it}</p>
          </button>
        ))}
      </div>

      {/* Usanze e tradizioni — clickable */}
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
        {tField({ it: "Usanze e tradizioni", en: "Customs and traditions", fr: "Us et traditions", de: "Bräuche und Traditionen", es: "Usos y tradiciones" })}
      </h2>
      <p className="text-sm text-muted-foreground max-w-3xl mb-6">
        {tField({
          it: "Riti, feste e gesti quotidiani che raccontano l'anima di Navelli. Clicca una scheda per leggere tutto.",
          en: "Rites, festivals and daily gestures. Click a card to read more.",
          fr: "Rites, fêtes et gestes. Cliquez sur une carte pour lire plus.",
          de: "Riten, Feste und Alltagsgesten. Karte anklicken.",
          es: "Ritos, fiestas y gestos. Haz clic en una tarjeta.",
        })}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 items-start">
        {traditions.map((tr) => (
          <button
            key={tr.id}
            type="button"
            onClick={() => setOpen({ kind: "tradition", data: tr })}
            className="stone-card rounded-2xl overflow-hidden flex flex-col text-left cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {tr.images && tr.images.length > 0 && (
              <div className={`grid gap-1 ${tr.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {tr.images.slice(0, 2).map((img, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={img} alt={tField(tr.title)} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{tr.emoji}</span>
                {tr.when && (
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">{tField(tr.when)}</span>
                )}
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{tField(tr.title)}</h3>
              <p className="text-sm text-foreground/85 line-clamp-3">{tField(tr.description)}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Practical tips */}
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
        {tField({ it: "Consigli pratici per il viaggiatore", en: "Practical tips for travellers", fr: "Conseils pratiques", de: "Praktische Tipps", es: "Consejos prácticos" })}
      </h2>
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {tips.map((tip) => (
          <article key={tip.titleKey} className="stone-card rounded-2xl p-6 flex gap-4">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-primary/15 text-primary shrink-0">
              <tip.icon className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold mb-1.5">{tField(tip.title)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tField(tip.desc)}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-sm text-muted-foreground italic">
        {tField({
          it: "Per dove gustarli e dormire in zona, vai alla pagina Ospitalità.",
          en: "To taste them and find a place to stay, visit the Hospitality page.",
          fr: "Pour les goûter et dormir sur place, visitez la page Hébergement.",
          de: "Zum Verkosten und Übernachten besuchen Sie die Unterkunft-Seite.",
          es: "Para degustarlos y alojarte, visita la página Hospedaje.",
        })}
      </p>

      {/* Popup */}
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {open?.kind === "dish" && (
            <>
              <DialogHeader>
                <div className="text-5xl mb-2">{open.data.emoji}</div>
                <DialogTitle className="font-display text-2xl md:text-3xl">{open.data.name}</DialogTitle>
              </DialogHeader>
              <DialogDescription asChild>
                <div className="space-y-4 text-foreground">
                  <p className="text-base leading-relaxed">{open.data.desc[lang] || open.data.desc.it}</p>
                  {(open.data.where || open.data.when) && (
                    <div className="space-y-2 pt-3 border-t border-border text-sm text-muted-foreground">
                      {open.data.where && (
                        <p className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                          <span>{open.data.where[lang] || open.data.where.it}</span>
                        </p>
                      )}
                      {open.data.when && (
                        <p className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                          <span>{open.data.when[lang] || open.data.when.it}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </DialogDescription>
            </>
          )}
          {open?.kind === "tradition" && (
            <>
              {open.data.images && open.data.images.length > 0 && (
                <div className={`grid gap-1 -mx-6 -mt-6 mb-2 ${open.data.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {open.data.images.slice(0, 2).map((img, i) => (
                    <div key={i} className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img src={img} alt={tField(open.data.title)} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl">{open.data.emoji}</span>
                  {open.data.when && (
                    <span className="text-xs uppercase tracking-widest text-accent font-bold">{tField(open.data.when)}</span>
                  )}
                </div>
                <DialogTitle className="font-display text-2xl md:text-3xl">{tField(open.data.title)}</DialogTitle>
              </DialogHeader>
              <DialogDescription asChild>
                <p className="text-base leading-relaxed whitespace-pre-line text-foreground">{tField(open.data.description)}</p>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
