// =============================================================================
// OSPITALITÀ / HOSPITALITY
// -----------------------------------------------------------------------------
// COME AGGIUNGERE UNA STRUTTURA (B&B, ristorante, bar):
// 1. Copia uno degli oggetti qui sotto e incollalo nella lista.
// 2. Modifica: id univoco, type ('sleep' | 'eat' | 'drink'),
//    nome, indirizzo, telefono, sito, descrizione nelle 5 lingue,
//    tags, coordinate, fascia di prezzo, link Google Maps (opzionale).
// 3. Salva: la nuova struttura appare automaticamente nella tab giusta.
// =============================================================================

import type { Multilang } from "./translations";

export type HospType = "sleep" | "eat" | "drink";

export interface Hospitality {
  id: string;
  name: string;
  type: HospType;
  subtype: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  description: Multilang;
  tags: string[];
  coordinates: { lat: number; lng: number };
  priceRange: "$" | "$$" | "$$$";
  googleMapsLink?: string;
}

export const hospitality: Hospitality[] = [
  // ============ SLEEP ============
  {
    id: "dimora-arte",
    name: "La Dimora dell'Arte",
    type: "sleep",
    subtype: "B&B / Affittacamere",
    address: "Via del Municipio 21, Navelli (AQ)",
    phone: "+39 349 6992199",
    website: "https://cantinarte.com",
    description: {
      it: "Una prestigiosa dimora storica nel cuore del borgo medievale, con cinque camere. Gli ospiti possono degustare vini e olio extravergine biologici prodotti dall'azienda agricola annessa. Un connubio unico tra arte, storia e tradizione abruzzese.",
      en: "A prestigious historic residence in the heart of the medieval borgo, with five rooms. Guests can enjoy tastings of wine and extra-virgin olive oil produced by the attached organic farm. A unique blend of art, history and Abruzzo tradition.",
      fr: "Une résidence historique prestigieuse au cœur du village médiéval, avec cinq chambres et dégustations de vin et huile bio.",
      de: "Eine prestigeträchtige historische Residenz im Herzen des mittelalterlichen Dorfes mit fünf Zimmern und Bio-Wein- und Ölverkostungen.",
      es: "Una prestigiosa residencia histórica en el corazón del pueblo medieval, con cinco habitaciones y catas de vino y aceite ecológicos.",
    },
    tags: ["B&B", "centro storico", "wine tasting", "romantic"],
    coordinates: { lat: 42.236896, lng: 13.728965 },
    priceRange: "$$",
  },
  {
    id: "ex-convento-sant-antonio",
    name: "Ex Convento di Sant'Antonio — Hostel",
    type: "sleep",
    subtype: "Historic Hostel",
    address: "Ex Convento S. Antonio, Fraz. Civitaretenga (AQ)",
    phone: "+39 329 8009732",
    description: {
      it: "Sistemazione semplice ma profondamente caratteristica all'interno del Convento di Sant'Antonio da Padova del XV secolo. Un'esperienza unica: dormire tra le mura di un chiostro duecentesco con annessa chiesa rinascimentale.",
      en: "Simple but deeply characterful accommodation inside the 15th-century Convent of Sant'Antonio da Padova. A unique experience: sleeping within the walls of a 13th-century cloister with an attached Renaissance church.",
      fr: "Hébergement simple mais profondément caractéristique à l'intérieur du Couvent de Sant'Antonio du XVe siècle.",
      de: "Einfache, aber charaktervolle Unterkunft im Kloster Sant'Antonio aus dem 15. Jahrhundert.",
      es: "Alojamiento sencillo pero profundamente característico dentro del Convento de Sant'Antonio del siglo XV.",
    },
    tags: ["hostel", "historic", "convent", "budget", "unique experience"],
    coordinates: { lat: 42.245959, lng: 13.710023 },
    priceRange: "$",
  },
  {
    id: "sotto-volte",
    name: "B&B Sotto le Volte",
    type: "sleep",
    subtype: "B&B / Affittacamere",
    address: "Via del Municipio 15 bis, Navelli (AQ)",
    phone: "3334894216",
    website: "https://maps.app.goo.gl/Ai18VReSdNGUTQvR7",
    description: {
      it: "Camere nel cuore del centro storico, sotto i caratteristici archi in pietra medievali di Navelli. Atmosfera tranquilla e autentica.",
      en: "Rooms in the heart of the historic village, nestled under the characteristic medieval stone arches of Navelli. Quiet, authentic atmosphere.",
      fr: "Chambres au cœur du village historique, sous les arches en pierre médiévales caractéristiques de Navelli.",
      de: "Zimmer im Herzen des historischen Dorfes, unter den charakteristischen mittelalterlichen Steinbögen Navellis.",
      es: "Habitaciones en el corazón del pueblo histórico, bajo los característicos arcos de piedra medievales de Navelli.",
    },
    tags: ["B&B", "archi medievali", "centro storico"],
    coordinates: { lat: 42.237258, lng: 13.728814 },
    priceRange: "$$",
  },
  {
    id: "papavero-rosso",
    name: "Il Papavero Rosso",
    type: "sleep",
    subtype: "B&B",
    address: "Strada Statale 17, Navelli (AQ)",
    phone: "+39 3452979995",
    website: "https://maps.app.goo.gl/J6rjibkA9rBhoEJWA",
    description: {
      it: "B&B con balcone e vista panoramica. Posizione comoda sulla strada principale a pochi minuti dal borgo. 21 km dalla fortezza di Rocca Calascio.",
      en: "B&B with balcony access and panoramic views. Conveniently located on the main road just minutes from the village. 21 km from Rocca Calascio fortress.",
      fr: "B&B avec balcon et vues panoramiques. À 21 km de la forteresse de Rocca Calascio.",
      de: "B&B mit Balkon und Panoramablick. Nur 21 km von der Festung Rocca Calascio entfernt.",
      es: "B&B con balcón y vistas panorámicas. A 21 km de la fortaleza de Rocca Calascio.",
    },
    tags: ["B&B", "balcony", "panoramic view", "easy access"],
    coordinates: { lat: 42.234678, lng: 13.725140 },
    priceRange: "$$",
  },
  {
    id: "abruzzo-segreto",
    name: "Abruzzo Segreto",
    type: "sleep",
    subtype: "B&B",
    address: "Via S. Girolamo 3, Navelli (AQ)",
    phone: "+39 3383997221",
    website: "https://www.abruzzo-segreto.it/",
    description: {
      it: "B&B nel centro di Navelli con noleggio biciclette gratuito e WiFi gratis. Ottima base per esplorare l'altopiano e i borghi limitrofi in bici o a piedi.",
      en: "B&B in the center of Navelli with free bicycle rental and free WiFi throughout. A great base for exploring the plateau by bike or on foot.",
      fr: "B&B au centre de Navelli avec location de vélos gratuite et WiFi gratuit.",
      de: "B&B im Zentrum von Navelli mit kostenlosem Fahrradverleih und WLAN.",
      es: "B&B en el centro de Navelli con alquiler de bicicletas gratuito y WiFi gratis.",
    },
    tags: ["B&B", "bikes", "WiFi", "centro storico"],
    coordinates: { lat: 42.236614, lng: 13.728712 },
    priceRange: "$$",
  },
  {
    id: "loggia-federico",
    name: "La Loggia di Federico",
    type: "sleep",
    subtype: "Holiday Apartment",
    address: "Via degli Archi 13, Civitaretenga (AQ)",
    phone: "+39 3385304104",
    website: "https://maps.app.goo.gl/PBhJNCkLC4Ttmgrt7",
    description: {
      it: "Appartamento vacanze con soggiorno e terrazza panoramica sull'altopiano di Navelli. Camere family disponibili, TV satellitare e frigorifero. Viste mozzafiato sui campi di zafferano.",
      en: "Holiday apartment with a living room and panoramic terrace overlooking the Navelli plateau. Family rooms available, with flat-screen satellite TV and fridge. Stunning views over the saffron fields.",
      fr: "Appartement de vacances avec terrasse panoramique sur le plateau de Navelli. Chambres familiales disponibles.",
      de: "Ferienwohnung mit Panoramaterrasse mit Blick auf die Navelli-Hochebene. Familienzimmer verfügbar.",
      es: "Apartamento vacacional con terraza panorámica sobre el altiplano de Navelli. Habitaciones familiares disponibles.",
    },
    tags: ["holiday apartment", "terrace", "panorama", "families"],
    coordinates: { lat: 42.238872, lng: 13.726867 },
    priceRange: "$$",
  },
  
  
  {
    id: "casa-franco",
    name: "A Casa di Franco",
    type: "sleep",
    subtype: "Holiday Apartment",
    address: "Civitaretenga (AQ)",
    website: "https://www.facebook.com/profile.php?id=100091865363330",
    description: {
      it: "Appartamento privato con vista su strada tranquilla nel paese. Struttura non fumatori, ben posizionata per esplorare Navelli e la campagna circostante.",
      en: "Private apartment with quiet street views in the village. Non-smoking property, well positioned for exploring both Navelli and the surrounding countryside.",
      fr: "Appartement privé avec vue sur rue tranquille dans le village. Non-fumeurs.",
      de: "Private Wohnung mit Blick auf eine ruhige Straße im Dorf. Nichtraucher.",
      es: "Apartamento privado con vistas a una calle tranquila en el pueblo. No fumadores.",
    },
    tags: ["holiday apartment", "quiet", "countryside"],
    coordinates: { lat: 42.244589, lng: 13.703965 },
    priceRange: "$",
  },

  // ============ EAT ============
  {
    id: "antica-taverna",
    name: "Ristorante Antica Taverna",
    type: "eat",
    subtype: "Traditional Restaurant",
    address: "Via dell'Osteria 16, Navelli (AQ)",
    phone: "+39 0862 959171",
    email: "info@anticataverna.it",
    website: "https://anticataverna.it",
    description: {
      it: "Il ristorante tradizionale di riferimento nel centro storico di Navelli. Menu che cambia ogni giorno per garantire freschezza e stagionalità: gnocchetti allo zafferano, zuppa di ceci, arrosticini, agnello. Un must per chi vuole un pasto autentico.",
      en: "The go-to traditional restaurant in Navelli's historic center. The menu rotates daily to guarantee freshness and seasonality, with classic Abruzzo dishes: saffron gnocchetti, chickpea soup, arrosticini, lamb.",
      fr: "Le restaurant traditionnel de référence dans le centre historique de Navelli. Menu changeant chaque jour : gnocchetti au safran, soupe de pois chiches, arrosticini, agneau.",
      de: "Das traditionelle Restaurant im historischen Zentrum von Navelli. Tägliches Menü mit Safran-Gnocchetti, Kichererbsensuppe, Arrosticini und Lamm.",
      es: "El restaurante tradicional de referencia en el centro histórico de Navelli. Menú que cambia cada día: gnocchetti al azafrán, sopa de garbanzos, arrosticini, cordero.",
    },
    tags: ["traditional", "Abruzzo cuisine", "centro storico", "lunch", "dinner"],
    coordinates: { lat: 42.233758, lng: 13.729547 },
    priceRange: "$$",
  },
  {
    id: "crocus",
    name: "Ristorante Bar Crocus",
    type: "eat",
    subtype: "Restaurant / Bar",
    address: "Strada Statale 17 Km 65.125, Navelli (AQ)",
    phone: "+39 0862 959193",
    description: {
      it: "Tappa informale sulla SS17 poco prima di arrivare a Navelli da L'Aquila. Ottimo rapporto qualità-prezzo con piatti locali abbondanti: ceci allo zafferano, gnocchi alla navellese, coratella e agnello tenero. Servizio rapido e cordiale.",
      en: "An informal stop on the SS17 state road just before arriving in Navelli from L'Aquila. Excellent value for money with hearty local dishes: saffron chickpeas, Navellese-style gnocchi, coratella, and tender lamb.",
      fr: "Arrêt informel sur la SS17. Excellent rapport qualité-prix avec des plats locaux copieux : pois chiches au safran, gnocchi à la navellese, coratella, agneau.",
      de: "Informeller Stopp an der SS17. Hervorragendes Preis-Leistungs-Verhältnis mit herzhaften lokalen Gerichten.",
      es: "Parada informal en la SS17. Excelente relación calidad-precio con platos locales abundantes.",
    },
    tags: ["restaurant", "bar", "state road", "budget", "local cuisine"],
    coordinates: { lat: 42.249118, lng: 13.695112 },
    priceRange: "$",
  },
  

  // ============ DRINK ============
  {
    id: "grottino-borgo",
    name: "Bar Il Grottino del Borgo",
    type: "drink",
    subtype: "Bar / Pub",
    address: "Centro storico, Navelli (AQ)",
    phone: "+39 347 8767570",
    description: {
      it: "Il cuore sociale del paese. Un bar accogliente nel centro storico, aperto fino all'1:00. Perfetto per un aperitivo pre-cena, una birra artigianale o una serata rilassata. È qui che si ritrovano i locali — il posto migliore per sentirsi un navellese.",
      en: "The social heart of the village. A cosy bar in the historic center, open until 1:00 AM. The perfect spot for a pre-dinner aperitivo, a craft beer, or a relaxed evening drink.",
      fr: "Le cœur social du village. Un bar chaleureux ouvert jusqu'à 1h. Parfait pour un apéritif, une bière artisanale ou une soirée détendue.",
      de: "Das soziale Herz des Dorfes. Eine gemütliche Bar bis 1 Uhr nachts. Perfekt für einen Aperitif oder ein Craft-Bier.",
      es: "El corazón social del pueblo. Un bar acogedor abierto hasta la 1:00. Perfecto para un aperitivo o una cerveza artesanal.",
    },
    tags: ["bar", "pub", "aperitivo", "evening", "centro storico", "locals"],
    coordinates: { lat: 42.238203, lng: 13.728321 },
    priceRange: "$",
  },
  {
    id: "sotto-castagno",
    name: "Sotto al Castagno",
    type: "drink",
    subtype: "Bar",
    address: "Piazza San Pelino, Navelli (AQ)",
    phone: "+39 0862 959437",
    description: {
      it: "Un grazioso bar situato proprio sulla bellissima Piazza San Pelino nel cuore del borgo. Ideale per un caffè, un drink o una pausa rilassata mentre si esplora il paese. Tavolini all'aperto sulla piazza storica.",
      en: "A charming bar located right on the beautiful Piazza San Pelino in the heart of the borgo. Great for a coffee, a drink or a relaxed break. Lovely outdoor seating on the historic square.",
      fr: "Un charmant bar sur la belle Piazza San Pelino. Idéal pour un café ou une pause détendue. Belle terrasse sur la place historique.",
      de: "Eine charmante Bar an der schönen Piazza San Pelino. Ideal für einen Kaffee oder eine entspannte Pause.",
      es: "Un encantador bar en la hermosa Piazza San Pelino. Ideal para un café o un descanso relajado.",
    },
    tags: ["bar", "coffee", "drinks", "piazza", "outdoor seating"],
    coordinates: { lat: 42.236233, lng: 13.731105 },
    priceRange: "$",
  },
  {
    id: "cantinarte",
    name: "CantinArte",
    type: "drink",
    subtype: "Wine Bar / Tasting Room",
    address: "Via del Municipio 21, Navelli (AQ)",
    phone: "+39 349 6992199",
    website: "https://cantinarte.com",
    description: {
      it: "Un raffinato wine bar e sala degustazioni annesso a La Dimora dell'Arte. Vini biologici e olio extravergine d'oliva prodotti direttamente in azienda. Una tappa sofisticata per gli amanti del cibo e del vino in un contesto storico.",
      en: "A refined wine bar and tasting room attached to La Dimora dell'Arte. Organic wines and extra-virgin olive oil produced directly on the estate. A sophisticated stop for food and wine lovers.",
      fr: "Un raffiné bar à vin et salle de dégustation. Vins bio et huile d'olive produits sur le domaine.",
      de: "Eine raffinierte Weinbar mit Verkostungsraum. Bio-Weine und Olivenöl aus eigener Produktion.",
      es: "Un refinado wine bar y sala de catas. Vinos ecológicos y aceite de oliva producidos en la finca.",
    },
    tags: ["wine bar", "tasting", "organic wine", "olive oil", "romantic"],
    coordinates: { lat: 42.236954, lng: 13.729182 },
    priceRange: "$$",
  },
  {
    id: "rajca-liquori",
    name: "Rajca Liquori",
    type: "drink",
    subtype: "Artisan Liquor Shop & Tasting",
    address: "Via del Commercio, Navelli (AQ)",
    phone: "+39 334 6059179",
    description: {
      it: "Produttore artigianale di liquori con ingredienti locali selezionati a mano: genziana, amarene, vino, liquirizia, mela cotogna. Il prodotto di punta è il liquore allo zafferano di Navelli — un souvenir perfetto e unico. Degustazioni disponibili.",
      en: "Artisan liquor producer using hand-selected local ingredients: gentian root, sour cherries, wine, liquorice root, quince. The star product is the saffron liqueur of Navelli — a perfect and unique souvenir.",
      fr: "Producteur artisanal de liqueurs avec ingrédients locaux : gentiane, amarena, réglisse, coing. La star est la liqueur au safran de Navelli.",
      de: "Handwerklicher Likörhersteller mit lokalen Zutaten: Enzian, Sauerkirschen, Süßholz, Quitten. Höhepunkt ist der Safranlikör von Navelli.",
      es: "Productor artesanal de licores con ingredientes locales: genciana, guindas, regaliz, membrillo. La estrella es el licor de azafrán de Navelli.",
    },
    tags: ["artisan liqueurs", "saffron", "souvenir", "tasting", "local"],
    coordinates: { lat: 42.234404, lng: 13.731043 },
    priceRange: "$",
  },
];

export interface LocalProduct {
  id: string;
  emoji: string;
  name: Multilang;
  description: Multilang;
}

export const localProducts: LocalProduct[] = [
  {
    id: "zafferano",
    emoji: "🌺",
    name: { it: "Zafferano dell'Aquila DOP", en: "L'Aquila DOP Saffron", fr: "Safran DOP de L'Aquila", de: "DOP-Safran von L'Aquila", es: "Azafrán DOP de L'Aquila" },
    description: {
      it: "Zafferano di Navelli, prodotto e certificato dalla Cooperativa Altopiano di Navelli (Civitaretenga). Il miglior zafferano d'Italia.",
      en: "Navelli saffron, produced and certified by the Cooperativa Altopiano di Navelli (Civitaretenga). The finest saffron in Italy.",
      fr: "Safran de Navelli, produit et certifié par la Coopérative de l'Altopiano. Le meilleur safran d'Italie.",
      de: "Safran aus Navelli, hergestellt und zertifiziert von der Cooperativa Altopiano. Der beste Safran Italiens.",
      es: "Azafrán de Navelli, producido y certificado por la Cooperativa Altopiano. El mejor azafrán de Italia.",
    },
  },
  {
    id: "ceci",
    emoji: "🌱",
    name: { it: "Ceci di Navelli — Presidio Slow Food", en: "Navelli Chickpeas — Slow Food Presidium", fr: "Pois Chiches de Navelli — Sentinelle Slow Food", de: "Navelli-Kichererbsen — Slow-Food-Presidium", es: "Garbanzos de Navelli — Baluarte Slow Food" },
    description: {
      it: "Ceci locali, piccoli e dal sapore intenso, riconosciuti dalla Fondazione Slow Food.",
      en: "Local chickpeas, small and intensely flavoured, recognized by the Slow Food Foundation.",
      fr: "Pois chiches locaux, petits et au goût intense, reconnus par la Fondation Slow Food.",
      de: "Lokale Kichererbsen, klein und intensiv im Geschmack, anerkannt von der Slow Food Foundation.",
      es: "Garbanzos locales, pequeños e intensos de sabor, reconocidos por la Fundación Slow Food.",
    },
  },
  {
    id: "liquore-zafferano",
    emoji: "🍷",
    name: { it: "Liquore allo Zafferano Rajca", en: "Rajca Saffron Liqueur", fr: "Liqueur au Safran Rajca", de: "Rajca Safranlikör", es: "Licor de Azafrán Rajca" },
    description: {
      it: "Liquore artigianale allo zafferano, il souvenir commestibile più unico di Navelli.",
      en: "Artisan saffron liqueur, the most unique edible souvenir from Navelli.",
      fr: "Liqueur artisanale au safran, le souvenir comestible le plus unique de Navelli.",
      de: "Handwerklicher Safranlikör, das einzigartigste essbare Souvenir aus Navelli.",
      es: "Licor artesanal de azafrán, el souvenir comestible más único de Navelli.",
    },
  },
  {
    id: "olio-cantinarte",
    emoji: "🫒",
    name: { it: "Olio biologico CantinArte", en: "CantinArte Organic Olive Oil", fr: "Huile bio CantinArte", de: "CantinArte Bio-Olivenöl", es: "Aceite ecológico CantinArte" },
    description: {
      it: "Olio extravergine d'oliva biologico prodotto nei terreni di CantinArte nell'area di Navelli.",
      en: "Organic extra-virgin olive oil produced at Cantinarte's estate in the Navelli area.",
      fr: "Huile d'olive extra-vierge bio produite sur le domaine CantinArte.",
      de: "Bio-Olivenöl extra vergine vom Gut CantinArte im Gebiet Navelli.",
      es: "Aceite de oliva virgen extra ecológico de la finca CantinArte.",
    },
  },
];
