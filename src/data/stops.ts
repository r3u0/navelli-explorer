// =============================================================================
// TAPPE DEL TOUR / TOUR STOPS
// -----------------------------------------------------------------------------
// Stops are listed in the exact visit order. The map and tour both follow
// the `stopNumber` field. To reorder: just renumber and update prev/nextStopId.
// =============================================================================

import type { Multilang } from "./translations";

export type StopCategory = "gate" | "church" | "palace" | "nature" | "monument" | "historic";

export type StopArea = "Navelli" | "Civitaretenga" | "Cerulis";

export interface Stop {
  id: string;
  stopNumber: number;
  area: StopArea;
  name: Multilang;
  shortDescription: Multilang;
  fullDescription: Multilang;
  details?: Multilang;
  visitTip?: Multilang;
  requiresBooking?: boolean;
  requiresCar?: boolean;
  category: StopCategory;
  coordinates: { lat: number; lng: number };
  images: string[];
  prevStopId?: string;
  nextStopId?: string;
}

// Real centres for the map
export const NAVELLI_CENTER = { lat: 42.23775, lng: 13.72935 };
export const CIVITARETENGA_CENTER = { lat: 42.24535, lng: 13.70625 };

// Default for local images: /images/stops/<id>/<n>.jpg
const local = (id: string, count = 2) =>
  Array.from({ length: count }, (_, i) => `/images/stops/${id}/${i + 1}.jpg`);

export const stops: Stop[] = [
  // ============ NAVELLI ============
  {
    id: "piazza-san-pelino",
    stopNumber: 1,
    area: "Navelli",
    name: {
      it: "Piazza San Pelino",
      en: "Piazza San Pelino",
      fr: "Place San Pelino",
      de: "Piazza San Pelino",
      es: "Plaza San Pelino",
    },
    shortDescription: {
      it: "Il punto di partenza del tour, ai piedi del borgo.",
      en: "The starting point of the tour, at the foot of the village.",
      fr: "Le point de départ du tour, au pied du village.",
      de: "Ausgangspunkt der Tour, am Fuße des Dorfes.",
      es: "El punto de partida del tour, al pie del pueblo.",
    },
    fullDescription: {
      it: "Punto di partenza naturale della visita: qui i turisti possono parcheggiare e iniziare il percorso a piedi nel borgo. La piazza prende il nome dall'antica chiesa di San Pelino e ospita il bar 'Sotto al Castagno', perfetto per un caffè prima della partenza.",
      en: "The natural starting point of the tour: visitors can park here and begin the walk into the medieval village. Named after the ancient church of San Pelino, the square hosts the bar 'Sotto al Castagno', a great spot for coffee before setting off.",
      fr: "Point de départ naturel : les visiteurs peuvent se garer ici et commencer la promenade dans le village médiéval. La place tient son nom de l'ancienne église San Pelino et accueille le bar 'Sotto al Castagno'.",
      de: "Natürlicher Ausgangspunkt der Tour: Besucher können hier parken und den Spaziergang durch das mittelalterliche Dorf beginnen. Benannt nach der alten Kirche San Pelino, beherbergt der Platz die Bar 'Sotto al Castagno'.",
      es: "Punto de partida natural: los visitantes pueden aparcar aquí y comenzar el recorrido por el pueblo medieval. La plaza toma el nombre de la antigua iglesia de San Pelino y alberga el bar 'Sotto al Castagno'.",
    },
    category: "gate",
    coordinates: { lat: 42.236473, lng: 13.730644 },
    images: local("piazza-san-pelino"),
    nextStopId: "madonna-rosario",
  },
  {
    id: "madonna-rosario",
    stopNumber: 2,
    area: "Navelli",
    name: {
      it: "Chiesa della Madonna del Rosario",
      en: "Church of the Madonna del Rosario",
      fr: "Église de la Madonna del Rosario",
      de: "Kirche der Madonna del Rosario",
      es: "Iglesia de la Madonna del Rosario",
    },
    shortDescription: {
      it: "Chiesa barocca del 1726 con un raro organo a canne del 1702.",
      en: "Baroque church of 1726 with a rare 1702 pipe organ.",
      fr: "Église baroque de 1726 avec un orgue à tuyaux de 1702.",
      de: "Barocke Kirche von 1726 mit einer seltenen Pfeifenorgel von 1702.",
      es: "Iglesia barroca de 1726 con un raro órgano de tubos de 1702.",
    },
    fullDescription: {
      it: "Ricostruita in stile barocco nel 1726 dopo il terremoto, custodisce un raro organo a canne del 1702 di Adriano Fedri all'interno di un'elaborata struttura lignea, e una tela della Crocifissione del pittore veneziano Vincenzo Damini.",
      en: "Rebuilt in Baroque style in 1726 after the earthquake, it houses a rare 1702 pipe organ by Adriano Fedri inside an elaborate wooden structure, and a Crucifixion canvas by Venetian painter Vincenzo Damini.",
      fr: "Reconstruite en style baroque en 1726, elle abrite un orgue à tuyaux de 1702 d'Adriano Fedri et une toile de la Crucifixion du peintre vénitien Vincenzo Damini.",
      de: "1726 im Barockstil wiederaufgebaut, beherbergt sie eine Pfeifenorgel von 1702 von Adriano Fedri und ein Kreuzigungsgemälde des venezianischen Malers Vincenzo Damini.",
      es: "Reconstruida en estilo barroco en 1726, alberga un órgano de tubos de 1702 de Adriano Fedri y un lienzo de la Crucifixión del pintor veneciano Vincenzo Damini.",
    },
    category: "church",
    coordinates: { lat: 42.236922, lng: 13.730434 },
    images: local("madonna-rosario"),
    prevStopId: "piazza-san-pelino",
    nextStopId: "palazzo-de-roccis",
    requiresBooking: true,
    visitTip: {
      it: "L'interno è normalmente chiuso: l'organo del 1702 e la tela di Damini si visitano solo su prenotazione tramite la Pro Loco di Navelli.",
      en: "The interior is usually closed: the 1702 organ and the Damini canvas can only be seen by booking a guided visit through the Pro Loco di Navelli.",
      fr: "L'intérieur est généralement fermé : l'orgue de 1702 et la toile de Damini se visitent uniquement sur réservation via la Pro Loco di Navelli.",
      de: "Das Innere ist meist geschlossen: die Orgel von 1702 und das Damini-Gemälde sind nur nach Voranmeldung bei der Pro Loco di Navelli zu besichtigen.",
      es: "El interior suele estar cerrado: el órgano de 1702 y el lienzo de Damini se visitan solo reservando con la Pro Loco di Navelli.",
    },
  },
  {
    id: "palazzo-de-roccis",
    stopNumber: 3,
    area: "Navelli",
    name: {
      it: "Palazzo de Roccis",
      en: "Palazzo de Roccis",
      fr: "Palais de Roccis",
      de: "Palazzo de Roccis",
      es: "Palacio de Roccis",
    },
    shortDescription: {
      it: "Storico palazzo nobiliare nel cuore del borgo medievale.",
      en: "Historic noble palace in the heart of the medieval borgo.",
      fr: "Palais noble historique au cœur du village médiéval.",
      de: "Historischer Adelspalast im Herzen des mittelalterlichen Dorfes.",
      es: "Histórico palacio nobiliario en el corazón del pueblo medieval.",
    },
    fullDescription: {
      it: "Storico palazzo nobiliare nel cuore del borgo medievale di Navelli, testimonianza delle famiglie aristocratiche che hanno plasmato la storia del paese. Le facciate in pietra e i dettagli architettonici raccontano secoli di prestigio locale.",
      en: "A historic noble palace in the heart of medieval Navelli, testament to the aristocratic families that shaped the village's history. The stone façades and architectural details tell of centuries of local prestige.",
      fr: "Un palais noble historique au cœur du Navelli médiéval, témoin des familles aristocratiques qui ont façonné l'histoire du village.",
      de: "Ein historischer Adelspalast im Herzen des mittelalterlichen Navelli, Zeugnis der adeligen Familien, die die Geschichte des Dorfes prägten.",
      es: "Un histórico palacio nobiliario en el corazón de la Navelli medieval, testimonio de las familias aristocráticas que dieron forma a la historia del pueblo.",
    },
    category: "palace",
    coordinates: { lat: 42.237293, lng: 13.729453 },
    images: local("palazzo-de-roccis"),
    prevStopId: "madonna-rosario",
    nextStopId: "porta-santa-maria",
  },
  {
    id: "porta-santa-maria",
    stopNumber: 4,
    area: "Navelli",
    name: {
      it: "Porta Santa Maria",
      en: "Porta Santa Maria",
      fr: "Porta Santa Maria",
      de: "Porta Santa Maria",
      es: "Porta Santa Maria",
    },
    shortDescription: {
      it: "Antica porta di accesso al borgo medievale di Navelli.",
      en: "Ancient gateway into the medieval village of Navelli.",
      fr: "Ancienne porte d'accès au village médiéval de Navelli.",
      de: "Altes Stadttor zum mittelalterlichen Dorf Navelli.",
      es: "Antigua puerta de acceso al pueblo medieval de Navelli.",
    },
    fullDescription: {
      it: "Una delle porte storiche di Navelli, varco antico nelle mura del borgo medievale. Punto di passaggio simbolico tra la parte bassa e il nucleo storico del paese.",
      en: "One of Navelli's historic gates, an ancient opening in the medieval village walls and a symbolic threshold between the lower village and the historic core.",
      fr: "Une des portes historiques de Navelli, ouverture ancienne dans les murs du village médiéval et seuil symbolique entre la partie basse et le cœur historique.",
      de: "Eines der historischen Tore Navellis, eine alte Öffnung in den mittelalterlichen Mauern und symbolischer Übergang zum historischen Kern des Dorfes.",
      es: "Una de las puertas históricas de Navelli, antigua abertura en las murallas del pueblo medieval y umbral simbólico hacia el núcleo histórico.",
    },
    category: "gate",
    coordinates: { lat: 42.238209, lng: 13.728112 },
    images: local("porta-santa-maria"),
    prevStopId: "palazzo-de-roccis",
    nextStopId: "cappella-san-pasquale",
  },
  {
    id: "cappella-san-pasquale",
    stopNumber: 5,
    area: "Navelli",
    name: {
      it: "Cappella di San Pasquale",
      en: "Chapel of San Pasquale",
      fr: "Chapelle de San Pasquale",
      de: "Kapelle San Pasquale",
      es: "Capilla de San Pasquale",
    },
    shortDescription: {
      it: "Piccola cappella devozionale incastonata nel borgo medievale.",
      en: "Small devotional chapel embedded in the medieval village fabric.",
      fr: "Petite chapelle de dévotion encastrée dans le village médiéval.",
      de: "Kleine Andachtskapelle, eingebettet in das mittelalterliche Dorf.",
      es: "Pequeña capilla devocional integrada en el tejido del pueblo medieval.",
    },
    fullDescription: {
      it: "Piccola cappella dedicata a San Pasquale Baylon, incastonata nel tessuto del borgo medievale. Uno spazio religioso intimo e raccolto, tipico dei paesi di montagna del Sud Appennino.",
      en: "A small chapel dedicated to San Pasquale Baylon, embedded in the fabric of the medieval village. A quiet and intimate religious space typical of the Southern Apennine mountain villages.",
      fr: "Une petite chapelle dédiée à San Pasquale Baylon, encastrée dans le tissu du village médiéval. Un espace religieux intime et recueilli.",
      de: "Eine kleine Kapelle, die San Pasquale Baylon geweiht ist, eingebettet in das Gefüge des mittelalterlichen Dorfes. Ein intimer religiöser Raum.",
      es: "Pequeña capilla dedicada a San Pasquale Baylon, integrada en el tejido del pueblo medieval. Un espacio religioso íntimo y recogido.",
    },
    category: "church",
    coordinates: { lat: 42.237941, lng: 13.728645 },
    images: local("cappella-san-pasquale"),
    prevStopId: "porta-santa-maria",
    nextStopId: "chiesa-san-sebastiano",
    requiresBooking: true,
    visitTip: {
      it: "La cappella resta chiusa la maggior parte dell'anno: l'apertura per i visitatori si concorda con almeno 2 ore di preavviso con la Pro Loco.",
      en: "The chapel is closed most of the year: opening for visitors is arranged with at least 2 hours' notice via the Pro Loco.",
      fr: "La chapelle reste fermée la plupart de l'année : l'ouverture se convient avec au moins 2 heures de préavis auprès de la Pro Loco.",
      de: "Die Kapelle ist die meiste Zeit geschlossen: eine Öffnung wird mit mindestens 2 Stunden Vorlauf bei der Pro Loco vereinbart.",
      es: "La capilla está cerrada la mayor parte del año: la apertura se acuerda con al menos 2 horas de antelación con la Pro Loco.",
    },
  },
  {
    id: "porta-castello",
    stopNumber: 8,
    area: "Navelli",
    name: {
      it: "Porta Castello",
      en: "Porta Castello",
      fr: "Porta Castello",
      de: "Porta Castello",
      es: "Porta Castello",
    },
    shortDescription: {
      it: "La porta che conduceva al castello del borgo.",
      en: "The gate that once led to the castle of the borgo.",
      fr: "La porte qui menait jadis au château du village.",
      de: "Das Tor, das einst zur Burg des Dorfes führte.",
      es: "La puerta que conducía al castillo del pueblo.",
    },
    fullDescription: {
      it: "La Porta Castello segna l'ingresso alla parte alta del borgo, in direzione dell'antica fortezza medievale. Tappa fondamentale del percorso, racconta la stratificazione difensiva di Navelli nel corso dei secoli.",
      en: "Porta Castello marks the entrance to the upper part of the village, leading towards the medieval fortress. A key stop that tells the story of Navelli's layered defensive history.",
      fr: "La Porta Castello marque l'entrée vers la partie haute du village, en direction de l'ancienne forteresse médiévale. Une étape clé du parcours défensif de Navelli.",
      de: "Die Porta Castello markiert den Zugang zum oberen Teil des Dorfes in Richtung der mittelalterlichen Festung — eine wichtige Station der Verteidigungsgeschichte Navellis.",
      es: "La Porta Castello marca el acceso a la parte alta del pueblo, en dirección a la antigua fortaleza medieval. Una etapa clave de la historia defensiva de Navelli.",
    },
    category: "gate",
    coordinates: { lat: 42.238449, lng: 13.728975 },
    images: local("porta-castello"),
    prevStopId: "palazzo-santucci",
    nextStopId: "porta-san-pelino",
  },
  {
    id: "chiesa-san-sebastiano",
    stopNumber: 6,
    area: "Navelli",
    name: {
      it: "Chiesa di San Sebastiano",
      en: "Church of San Sebastiano",
      fr: "Église San Sebastiano",
      de: "Kirche San Sebastiano",
      es: "Iglesia de San Sebastiano",
    },
    shortDescription: {
      it: "Chiesa parrocchiale con portale ligneo intagliato e croce processionale del XIV secolo.",
      en: "Parish church with carved wooden door and 14th-century processional cross.",
      fr: "Église paroissiale avec portail en bois sculpté et croix processionnelle du XIVe siècle.",
      de: "Pfarrkirche mit geschnitztem Holzportal und Prozessionskreuz aus dem 14. Jahrhundert.",
      es: "Iglesia parroquial con portal de madera tallada y cruz procesional del siglo XIV.",
    },
    fullDescription: {
      it: "Chiesa parrocchiale principale di Navelli, originariamente costruita con funzione difensiva e convertita in luogo di culto durante la peste del 1478. Custodisce un pregevole portale ligneo intagliato e una rara croce processionale del XIV secolo. Il campanile era in origine la torre della fortezza medievale.",
      en: "The main parish church of Navelli, originally built for defensive purposes and converted into a place of worship during the plague of 1478. It preserves a fine carved wooden door and a rare 14th-century processional cross. The bell tower was originally the medieval fortress tower.",
      fr: "L'église paroissiale principale de Navelli, construite à l'origine à des fins défensives. Elle conserve un beau portail en bois sculpté et une rare croix processionnelle du XIVe siècle.",
      de: "Die Hauptpfarrkirche Navellis, ursprünglich zu Verteidigungszwecken erbaut. Sie bewahrt ein wertvolles geschnitztes Holzportal und ein seltenes Prozessionskreuz aus dem 14. Jahrhundert.",
      es: "La principal iglesia parroquial de Navelli, construida originalmente con fines defensivos. Conserva un valioso portal de madera tallada y una rara cruz procesional del siglo XIV.",
    },
    category: "church",
    coordinates: { lat: 42.238344, lng: 13.728672 },
    images: local("chiesa-san-sebastiano"),
    prevStopId: "cappella-san-pasquale",
    nextStopId: "palazzo-santucci",
    requiresBooking: true,
    visitTip: {
      it: "Chiesa parrocchiale principale: aperta solo per le funzioni religiose. Per visitare l'interno, il portale ligneo e la croce processionale del XIV secolo è necessario prenotare una visita guidata con almeno 2 ore di preavviso.",
      en: "Main parish church: open only for services. To visit the interior, the carved wooden door and the 14th-century processional cross, you must book a guided tour with at least 2 hours' notice.",
      fr: "Église paroissiale principale : ouverte uniquement pour les offices. Pour visiter l'intérieur il faut réserver une visite guidée avec au moins 2 heures de préavis.",
      de: "Hauptpfarrkirche: nur zu Gottesdiensten geöffnet. Für eine Besichtigung des Inneren mit mindestens 2 Stunden Vorlauf eine Führung buchen.",
      es: "Iglesia parroquial principal: abierta solo para los oficios. Para visitar el interior es necesario reservar visita guiada con al menos 2 horas de antelación.",
    },
  },
  {
    id: "palazzo-santucci",
    stopNumber: 7,
    area: "Navelli",
    name: {
      it: "Palazzo Santucci (Palazzo Baronale)",
      en: "Palazzo Santucci (Baronial Palace)",
      fr: "Palais Santucci (Palais Baronnial)",
      de: "Palazzo Santucci (Baronspalast)",
      es: "Palacio Santucci (Palacio Baronal)",
    },
    shortDescription: {
      it: "Dimora seicentesca dei signori feudali, con cortile rinascimentale e scala doppia.",
      en: "17th-century residence of the feudal lords, with Renaissance courtyard and double staircase.",
      fr: "Résidence du XVIIe siècle des seigneurs féodaux.",
      de: "Residenz der Feudalherren aus dem 17. Jahrhundert.",
      es: "Residencia del siglo XVII de los señores feudales.",
    },
    fullDescription: {
      it: "Edificato nel XVII secolo sulle rovine dell'antica fortezza medievale, Palazzo Santucci fu la residenza dei signori feudali di Navelli. Conserva un suggestivo cortile rinascimentale con cisterna centrale e una caratteristica doppia scala in pietra. Oggi è sede di eventi culturali e celebrazioni di matrimoni civili.",
      en: "Built in the 17th century on the ruins of the medieval fortress, Palazzo Santucci was the residence of Navelli's feudal lords. It features a Renaissance courtyard with a central cistern and a distinctive double stone staircase. Today it hosts cultural events and civil weddings.",
      fr: "Construit au XVIIe siècle sur les ruines de la forteresse médiévale, le Palais Santucci fut la résidence des seigneurs féodaux de Navelli.",
      de: "Im 17. Jahrhundert auf den Ruinen der mittelalterlichen Festung erbaut, war der Palazzo Santucci die Residenz der Feudalherren von Navelli.",
      es: "Construido en el siglo XVII sobre las ruinas de la fortaleza medieval, el Palacio Santucci fue residencia de los señores feudales de Navelli.",
    },
    category: "palace",
    coordinates: { lat: 42.238614, lng: 13.728621 },
    images: local("palazzo-santucci"),
    prevStopId: "chiesa-san-sebastiano",
    nextStopId: "porta-castello",
    requiresBooking: true,
    visitTip: {
      it: "Il cortile rinascimentale e gli interni si visitano solo su prenotazione (eventi, mostre e matrimoni civili a parte). Contattare la Pro Loco con almeno 2 ore di preavviso.",
      en: "The Renaissance courtyard and interiors can be visited only by appointment (apart from events, exhibitions and civil weddings). Contact the Pro Loco at least 2 hours in advance.",
      fr: "La cour Renaissance et les intérieurs se visitent uniquement sur réservation. Contacter la Pro Loco au moins 2 heures à l'avance.",
      de: "Renaissance-Innenhof und Innenräume nur nach Voranmeldung. Pro Loco mindestens 2 Stunden im Voraus kontaktieren.",
      es: "El patio renacentista y los interiores se visitan solo con reserva. Contactar la Pro Loco con al menos 2 horas de antelación.",
    },
  },
  {
    id: "porta-san-pelino",
    stopNumber: 9,
    area: "Navelli",
    name: {
      it: "Porta San Pelino",
      en: "Porta San Pelino",
      fr: "Porta San Pelino",
      de: "Porta San Pelino",
      es: "Porta San Pelino",
    },
    shortDescription: {
      it: "Antica porta meridionale del borgo, intitolata al santo patrono.",
      en: "Ancient southern gate of the village, named after the patron saint.",
      fr: "Ancienne porte sud du village, dédiée au saint patron.",
      de: "Altes Südtor des Dorfes, benannt nach dem Schutzpatron.",
      es: "Antigua puerta sur del pueblo, dedicada al santo patrón.",
    },
    fullDescription: {
      it: "Porta San Pelino è una delle porte storiche di accesso al borgo, intitolata al santo patrono di Navelli. Attraversandola si scende dal cuore medievale del paese verso la piazza, chiudendo idealmente il giro a piedi del borgo.",
      en: "Porta San Pelino is one of the historic gates of the village, named after Navelli's patron saint. Passing through it, you descend from the medieval heart of the village back towards the square, symbolically closing the walking loop of the borgo.",
      fr: "La Porta San Pelino est l'une des portes historiques du village, dédiée au saint patron de Navelli. En la traversant, on redescend du cœur médiéval vers la place, refermant la boucle à pied du bourg.",
      de: "Die Porta San Pelino ist eines der historischen Tore des Dorfes, benannt nach dem Schutzpatron Navellis. Durch sie steigt man vom mittelalterlichen Kern hinunter zum Platz und schließt so den Rundweg.",
      es: "La Porta San Pelino es una de las puertas históricas del pueblo, dedicada al santo patrón de Navelli. Al cruzarla se desciende del corazón medieval hacia la plaza, cerrando idealmente el recorrido a pie del borgo.",
    },
    category: "gate",
    coordinates: { lat: 42.237643, lng: 13.729836 },
    images: local("porta-san-pelino"),
    prevStopId: "porta-castello",
    nextStopId: "piazza-san-pelino-return",
  },
  {
    id: "piazza-san-pelino-return",
    stopNumber: 10,
    area: "Navelli",
    name: {
      it: "Ritorno a Piazza San Pelino",
      en: "Back to Piazza San Pelino",
      fr: "Retour à la Piazza San Pelino",
      de: "Zurück zur Piazza San Pelino",
      es: "Regreso a Piazza San Pelino",
    },
    shortDescription: {
      it: "Chiusura del giro a piedi: si torna in piazza per riprendere l'auto e proseguire verso Civitaretenga.",
      en: "End of the walking loop: return to the square to pick up your car and drive on to Civitaretenga.",
      fr: "Fin de la boucle à pied : retour à la place pour reprendre la voiture vers Civitaretenga.",
      de: "Ende des Rundwegs: zurück zum Platz, das Auto holen und weiter nach Civitaretenga.",
      es: "Fin del recorrido a pie: regreso a la plaza para recoger el coche y continuar hacia Civitaretenga.",
    },
    fullDescription: {
      it: "Il giro a piedi di Navelli si chiude tornando in Piazza San Pelino, da dove si è partiti. Qui i visitatori possono fermarsi per uno spuntino o un drink al bar 'Sotto al Castagno' sulla piazza, oppure al vicino 'Il Grottino del Borgo'. Da qui è necessario riprendere l'auto: la tappa successiva (n. 11 — Chiesa di Santa Maria in Cerulis, ~2,5 km) e poi Civitaretenga non sono raggiungibili a piedi.",
      en: "The Navelli walking loop ends back at Piazza San Pelino, where it began. Stop for a snack or a drink at the bar 'Sotto al Castagno' on the square, or at nearby 'Il Grottino del Borgo'. From here you must get back in your car: the next stop (no. 11 — Church of Santa Maria in Cerulis, ~2.5 km) and then Civitaretenga cannot be reached on foot.",
      fr: "La boucle à pied de Navelli se termine sur la Piazza San Pelino. Pause possible au bar 'Sotto al Castagno' sur la place ou au 'Il Grottino del Borgo' tout proche. Il faut ensuite reprendre la voiture : la prochaine étape (n° 11 — Santa Maria in Cerulis, ~2,5 km) puis Civitaretenga ne se rejoignent pas à pied.",
      de: "Der Rundgang durch Navelli endet wieder an der Piazza San Pelino. Pause im Café 'Sotto al Castagno' am Platz oder im nahen 'Il Grottino del Borgo'. Danach mit dem Auto weiter: die nächste Station (Nr. 11 — Santa Maria in Cerulis, ~2,5 km) und Civitaretenga sind nicht zu Fuß erreichbar.",
      es: "El recorrido a pie por Navelli termina en Piazza San Pelino. Pausa en el bar 'Sotto al Castagno' o en el cercano 'Il Grottino del Borgo'. Desde aquí hay que coger el coche: la siguiente parada (n.º 11 — Santa Maria in Cerulis, ~2,5 km) y Civitaretenga no son alcanzables a pie.",
    },
    category: "historic",
    coordinates: { lat: 42.236511, lng: 13.730755 },
    images: local("piazza-san-pelino"),
    prevStopId: "porta-san-pelino",
    nextStopId: "santa-maria-cerulis",
  },

  // ============ CIVITARETENGA ============
  // ============ INTERMEDIATE STOP — by car ============
  {
    id: "santa-maria-cerulis",
    stopNumber: 11,
    area: "Cerulis",
    name: {
      it: "Chiesa di Santa Maria in Cerulis",
      en: "Church of Santa Maria in Cerulis",
      fr: "Église Santa Maria in Cerulis",
      de: "Kirche Santa Maria in Cerulis",
      es: "Iglesia de Santa Maria in Cerulis",
    },
    shortDescription: {
      it: "Chiesa romanica isolata sull'altopiano, con affreschi del XIV–XV secolo. Si raggiunge in auto.",
      en: "Romanesque church isolated on the plateau, with 14th–15th century frescoes. Reachable only by car.",
      fr: "Église romane isolée sur le plateau, avec fresques du XIVe–XVe siècle. Accessible uniquement en voiture.",
      de: "Romanische Kirche, isoliert auf der Hochebene, mit Fresken aus dem 14.–15. Jahrhundert. Nur mit dem Auto erreichbar.",
      es: "Iglesia románica aislada en el altiplano, con frescos de los siglos XIV–XV. Accesible solo en coche.",
    },
    fullDescription: {
      it: "La chiesa di Santa Maria in Cerulis sorge isolata sull'altopiano di Navelli, lungo l'antico tratturo. Edificata su un sito di culto preesistente (forse paleocristiano sopra resti italici), nella sua forma attuale risale al periodo romanico (XI–XII secolo) con rimaneggiamenti successivi. L'interno conserva un prezioso ciclo di affreschi tre-quattrocenteschi e un'iconografia mariana che la rendono una delle chiese rurali più importanti dell'aquilano. Si raggiunge in auto da Piazza San Pelino in pochi minuti (~2,5 km lungo la SS17), e da qui — sempre in auto — si prosegue verso Civitaretenga (~2 km).",
      en: "The church of Santa Maria in Cerulis stands isolated on the Navelli plateau, along the ancient sheep-trail. Built on a pre-existing place of worship (probably early-Christian over Italic remains), in its current form it dates to the Romanesque period (11th–12th c.) with later additions. The interior preserves a precious cycle of 14th–15th-century frescoes and Marian iconography that make it one of the most important rural churches of the L'Aquila area. It is reached by car from Piazza San Pelino in a few minutes (~2.5 km along the SS17); from here you continue — again by car — to Civitaretenga (~2 km).",
      fr: "L'église Santa Maria in Cerulis se dresse isolée sur le plateau de Navelli, le long de l'ancien tratturo. Bâtie sur un lieu de culte préexistant, dans sa forme actuelle elle remonte à la période romane (XIe–XIIe s.) avec des remaniements ultérieurs. L'intérieur conserve un cycle de fresques des XIVe–XVe siècles. On y accède en voiture depuis la Piazza San Pelino (~2,5 km par la SS17) ; d'ici on continue, toujours en voiture, vers Civitaretenga (~2 km).",
      de: "Die Kirche Santa Maria in Cerulis steht isoliert auf der Hochebene von Navelli, am alten Tratturo. In ihrer heutigen Form stammt sie aus der Romanik (11.–12. Jh.) mit späteren Umbauten. Im Inneren ein wertvoller Freskenzyklus aus dem 14.–15. Jahrhundert. Erreichbar nur mit dem Auto ab Piazza San Pelino (~2,5 km über die SS17); von hier geht es — ebenfalls mit dem Auto — weiter nach Civitaretenga (~2 km).",
      es: "La iglesia de Santa Maria in Cerulis se alza aislada en el altiplano de Navelli, a lo largo del antiguo tratturo. En su forma actual data del románico (s. XI–XII) con reformas posteriores. El interior conserva un valioso ciclo de frescos de los siglos XIV–XV. Se llega en coche desde Piazza San Pelino (~2,5 km por la SS17); desde aquí se continúa, también en coche, hacia Civitaretenga (~2 km).",
    },
    visitTip: {
      it: "Questa tappa non è raggiungibile a piedi: serve l'auto sia per arrivare sia per proseguire verso Civitaretenga. La chiesa è normalmente chiusa: per visitare l'interno e gli affreschi è necessario prenotare con almeno 2 ore di preavviso tramite la Pro Loco.",
      en: "This stop is not reachable on foot: a car is needed both to get here and to continue on to Civitaretenga. The church is normally closed: to see the interior and the frescoes you must book at least 2 hours in advance with the Pro Loco.",
      fr: "Cette étape n'est pas accessible à pied : la voiture est indispensable, aussi bien pour arriver que pour continuer vers Civitaretenga. L'église est normalement fermée : réservation avec 2 heures de préavis auprès de la Pro Loco.",
      de: "Diese Station ist nicht zu Fuß erreichbar: ein Auto ist sowohl für die Anfahrt als auch für die Weiterfahrt nach Civitaretenga nötig. Die Kirche ist normalerweise geschlossen: Besichtigung nur nach Voranmeldung mit mindestens 2 Stunden Vorlauf bei der Pro Loco.",
      es: "Esta parada no es accesible a pie: se necesita coche tanto para llegar como para continuar hacia Civitaretenga. La iglesia está normalmente cerrada: reserva con 2 horas de antelación con la Pro Loco.",
    },
    category: "church",
    coordinates: { lat: 42.239364, lng: 13.717407 },
    images: local("santa-maria-cerulis"),
    prevStopId: "piazza-san-pelino-return",
    nextStopId: "monastero-sant-antonio",
    requiresBooking: true,
    requiresCar: true,
  },

  // ============ CIVITARETENGA ============
  {
    id: "monastero-sant-antonio",
    stopNumber: 12,
    area: "Civitaretenga",
    name: {
      it: "Monastero di Sant'Antonio & Chiesa Rinascimentale",
      en: "Monastery of Sant'Antonio & Renaissance Church",
      fr: "Monastère de Sant'Antonio & Église Renaissance",
      de: "Kloster Sant'Antonio & Renaissance-Kirche",
      es: "Monasterio de Sant'Antonio e Iglesia Renacentista",
    },
    shortDescription: {
      it: "Chiostro duecentesco e chiesa rinascimentale del 1489 con portale ornato.",
      en: "13th-century cloister and Renaissance church of 1489 with ornate portal.",
      fr: "Cloître du XIIIe siècle et église Renaissance de 1489.",
      de: "Kreuzgang aus dem 13. Jh. und Renaissance-Kirche von 1489.",
      es: "Claustro del siglo XIII e iglesia renacentista de 1489.",
    },
    fullDescription: {
      it: "Situato appena fuori dal centro abitato, il monastero conserva un chiostro del XIII secolo e una bellissima chiesa rinascimentale completata nel 1489 con un elaborato portale ornato. Oggi ospita anche una foresteria/ostello, permettendo di dormire all'interno di questo straordinario complesso storico.",
      en: "Located just outside the village, the monastery features a 13th-century cloister and a beautiful Renaissance church completed in 1489 with an ornate portal. It also now serves as a hostel.",
      fr: "Situé juste à l'extérieur du village, le monastère présente un cloître du XIIIe siècle et une belle église Renaissance achevée en 1489.",
      de: "Etwas außerhalb des Dorfes gelegen, beherbergt das Kloster einen Kreuzgang aus dem 13. Jahrhundert und eine Renaissance-Kirche von 1489.",
      es: "Situado a las afueras del pueblo, el monasterio cuenta con un claustro del siglo XIII y una iglesia renacentista de 1489.",
    },
    category: "historic",
    coordinates: { lat: 42.246124, lng: 13.709838 },
    images: local("monastero-sant-antonio"),
    prevStopId: "santa-maria-cerulis",
    nextStopId: "chiesa-sant-egidio",
    requiresBooking: true,
    visitTip: {
      it: "Il chiostro duecentesco e la chiesa rinascimentale del 1489 sono visitabili previa prenotazione (preavviso di almeno 2 ore). Il complesso ospita anche una foresteria/ostello.",
      en: "The 13th-century cloister and the 1489 Renaissance church can be visited by booking ahead (at least 2 hours' notice). The complex also hosts a hostel/guesthouse.",
      fr: "Le cloître du XIIIe siècle et l'église Renaissance de 1489 se visitent sur réservation (préavis d'au moins 2 heures).",
      de: "Der Kreuzgang aus dem 13. Jh. und die Renaissance-Kirche von 1489 sind nach Voranmeldung (mindestens 2 Stunden) zugänglich.",
      es: "El claustro del s. XIII y la iglesia renacentista de 1489 se visitan con reserva previa (al menos 2 horas de antelación).",
    },
  },
  {
    id: "chiesa-sant-egidio",
    stopNumber: 13,
    area: "Civitaretenga",
    name: {
      it: "Chiesa di Sant'Egidio (XII sec.)",
      en: "Church of Sant'Egidio (12th c.)",
      fr: "Église Sant'Egidio (XIIe s.)",
      de: "Kirche Sant'Egidio (12. Jh.)",
      es: "Iglesia de Sant'Egidio (s. XII)",
    },
    shortDescription: {
      it: "Antica chiesa parrocchiale del XII secolo.",
      en: "Ancient 12th-century parish church.",
      fr: "Ancienne église paroissiale du XIIe siècle.",
      de: "Alte Pfarrkirche aus dem 12. Jahrhundert.",
      es: "Antigua iglesia parroquial del siglo XII.",
    },
    fullDescription: {
      it: "Risalente al XII secolo, la chiesa di Sant'Egidio era l'antica parrocchiale di Civitaretenga prima della costruzione dell'attuale chiesa di San Salvatore. Conserva la semplice eleganza dell'architettura romanica abruzzese.",
      en: "Dating to the 12th century, the church of Sant'Egidio was the original parish church before the construction of the current church of San Salvatore. It preserves the simple elegance of Abruzzo's Romanesque architecture.",
      fr: "Datant du XIIe siècle, l'église Sant'Egidio était l'ancienne église paroissiale avant la construction de l'actuelle église San Salvatore.",
      de: "Aus dem 12. Jahrhundert war die Kirche Sant'Egidio die ursprüngliche Pfarrkirche, bevor die heutige Kirche San Salvatore gebaut wurde.",
      es: "Del siglo XII, la iglesia de Sant'Egidio fue la antigua parroquial antes de la construcción de la actual iglesia de San Salvatore.",
    },
    category: "church",
    coordinates: { lat: 42.245867, lng: 13.706260 },
    images: local("chiesa-sant-egidio"),
    prevStopId: "monastero-sant-antonio",
    nextStopId: "ghetto-ebraico",
    requiresBooking: true,
    visitTip: {
      it: "Chiesa romanica abruzzese normalmente chiusa: per visitarla all'interno serve una prenotazione con almeno 2 ore di preavviso.",
      en: "Abruzzo Romanesque church, normally closed: a booking with at least 2 hours' notice is required to see the interior.",
      fr: "Église romane des Abruzzes normalement fermée : réservation avec 2 heures de préavis pour l'intérieur.",
      de: "Romanische Kirche der Abruzzen, meist geschlossen: Innenbesichtigung nur mit Voranmeldung (mindestens 2 Stunden).",
      es: "Iglesia románica abruzzesa normalmente cerrada: reserva con 2 horas de antelación para visitar el interior.",
    },
  },
  {
    id: "ghetto-ebraico",
    stopNumber: 14,
    area: "Civitaretenga",
    name: {
      it: "Il Ghetto Ebraico — Via Giudea",
      en: "The Jewish Ghetto — Via Giudea",
      fr: "Le Ghetto Juif — Via Giudea",
      de: "Das jüdische Ghetto — Via Giudea",
      es: "El Gueto Judío — Via Giudea",
    },
    shortDescription: {
      it: "Antica zona ebraica con la storica Via Giudea, attiva fino al XVI secolo.",
      en: "Historic Jewish quarter with Via Giudea, active until the 16th century.",
      fr: "Ancien quartier juif avec la Via Giudea.",
      de: "Historisches jüdisches Viertel mit der Via Giudea.",
      es: "Antiguo barrio judío con la Via Giudea.",
    },
    fullDescription: {
      it: "Il piccolo ghetto ebraico ospitò una comunità ebraica dal XIII secolo fino a circa il 1510, con concessioni reali dei sovrani Ladislao di Durazzo e Giovanna II di Napoli. La strada principale Via Giudea è ancora visibile oggi e rappresenta una preziosa testimonianza della diversità storica di queste terre.",
      en: "The small Jewish ghetto housed a Jewish community from the 13th century until around 1510, with royal concessions from kings Ladislao di Durazzo and Giovanna II of Naples. The main street Via Giudea is still visible today.",
      fr: "Le petit ghetto juif abrita une communauté juive du XIIIe siècle jusqu'à environ 1510, avec des concessions royales.",
      de: "Das kleine jüdische Ghetto beherbergte vom 13. Jahrhundert bis etwa 1510 eine jüdische Gemeinde, mit königlichen Zugeständnissen.",
      es: "El pequeño gueto judío albergó una comunidad judía desde el siglo XIII hasta alrededor de 1510, con concesiones reales.",
    },
    category: "historic",
    coordinates: { lat: 42.245186, lng: 13.704455 },
    images: local("ghetto-ebraico"),
    prevStopId: "chiesa-sant-egidio",
    nextStopId: "chiesa-san-salvatore",
  },
  {
    id: "chiesa-san-salvatore",
    stopNumber: 15,
    area: "Civitaretenga",
    name: {
      it: "Chiesa di San Salvatore (XII sec.)",
      en: "Church of San Salvatore (12th c.)",
      fr: "Église San Salvatore (XIIe s.)",
      de: "Kirche San Salvatore (12. Jh.)",
      es: "Iglesia de San Salvatore (s. XII)",
    },
    shortDescription: {
      it: "Chiesa parrocchiale principale di Civitaretenga, del XII secolo.",
      en: "Main parish church of Civitaretenga, 12th century.",
      fr: "Église paroissiale principale de Civitaretenga, du XIIe siècle.",
      de: "Hauptpfarrkirche von Civitaretenga, 12. Jahrhundert.",
      es: "Iglesia parroquial principal de Civitaretenga, del siglo XII.",
    },
    fullDescription: {
      it: "Datata al XII secolo, è oggi la chiesa parrocchiale principale di Civitaretenga. Custodisce arredi sacri e tradizioni di fede che ancora oggi animano la vita comunitaria della frazione.",
      en: "Dating to the 12th century, it is today the main parish church of Civitaretenga. It preserves sacred furnishings and faith traditions that still animate community life.",
      fr: "Datant du XIIe siècle, c'est aujourd'hui l'église paroissiale principale de Civitaretenga.",
      de: "Aus dem 12. Jahrhundert stammend, ist sie heute die Hauptpfarrkirche von Civitaretenga.",
      es: "Del siglo XII, es hoy la iglesia parroquial principal de Civitaretenga.",
    },
    category: "church",
    coordinates: { lat: 42.244849, lng: 13.704562 },
    images: local("chiesa-san-salvatore"),
    prevStopId: "ghetto-ebraico",
    nextStopId: "torre-civitaretenga",
    requiresBooking: true,
    visitTip: {
      it: "Chiesa parrocchiale principale di Civitaretenga: aperta durante le funzioni religiose. Per visite guidate dell'interno e degli arredi sacri prenotare con almeno 2 ore di preavviso.",
      en: "Main parish church of Civitaretenga: open during services. For guided visits of the interior and sacred furnishings book at least 2 hours in advance.",
      fr: "Église paroissiale principale de Civitaretenga : ouverte pendant les offices. Visites guidées sur réservation (2 heures de préavis).",
      de: "Hauptpfarrkirche von Civitaretenga: zu Gottesdiensten geöffnet. Führungen nach Voranmeldung (mindestens 2 Stunden).",
      es: "Iglesia parroquial principal de Civitaretenga: abierta durante los oficios. Visitas guiadas con reserva (2 horas de antelación).",
    },
  },
  {
    id: "torre-civitaretenga",
    stopNumber: 16,
    area: "Civitaretenga",
    name: {
      it: "Torre Quadra Medievale (Zona Torre)",
      en: "Medieval Square Tower (Zona Torre)",
      fr: "Tour Carrée Médiévale (Zona Torre)",
      de: "Mittelalterlicher Vierecksturm (Zona Torre)",
      es: "Torre Cuadrada Medieval (Zona Torre)",
    },
    shortDescription: {
      it: "Torre quadrata medievale, ricostruita dopo il sisma del 2009 in stile antico-moderno.",
      en: "Medieval square tower, rebuilt after the 2009 earthquake in an ancient-modern style.",
      fr: "Tour carrée médiévale, reconstruite après le séisme de 2009 dans un style ancien-moderne.",
      de: "Mittelalterlicher Vierecksturm, nach dem Erdbeben 2009 in antik-modernem Stil wiederaufgebaut.",
      es: "Torre cuadrada medieval, reconstruida tras el terremoto de 2009 en estilo antiguo-moderno.",
    },
    fullDescription: {
      it: "La Torre Quadra di Civitaretenga è uno dei simboli più riconoscibili della frazione. La torre originale, risalente al XIII secolo, è crollata durante il devastante terremoto del 6 aprile 2009. È stata successivamente ricostruita, ma — a causa della legge italiana che vieta la riproduzione fedele dei monumenti storici come copie esatte (legge sui falsi storici) — la nuova torre non poteva riprodurre l'originale. Il risultato è una struttura che fonde antico e contemporaneo: uno stile 'antico-moderno' che riconosce onestamente sia la memoria di ciò che è andato perduto sia i vincoli legali ed etici della ricostruzione moderna.",
      en: "The Square Tower of Civitaretenga is one of the most iconic landmarks of the frazione. The original tower, dating to the 13th century, collapsed during the devastating earthquake of April 6, 2009. It was subsequently rebuilt, but — due to Italian law prohibiting the faithful reconstruction of historical monuments as exact replicas (legge sui falsi storici) — the new tower could not reproduce the original. The result is a structure that blends ancient and contemporary architecture: an 'antico-moderno' style that honestly acknowledges both the memory of what was lost and the legal and ethical constraints of modern rebuilding.",
      fr: "La Tour Carrée de Civitaretenga est l'un des symboles les plus reconnaissables du hameau. La tour originale du XIIIe siècle s'est effondrée lors du séisme du 6 avril 2009. Reconstruite, elle ne pouvait pas reproduire l'originale en raison de la loi italienne sur les faux historiques. Le résultat est un style 'antico-moderno' qui mêle ancien et contemporain.",
      de: "Der Vierecksturm von Civitaretenga ist eines der bekanntesten Wahrzeichen des Ortsteils. Der ursprüngliche Turm aus dem 13. Jahrhundert stürzte beim verheerenden Erdbeben am 6. April 2009 ein. Aufgrund italienischer Gesetze gegen die exakte Nachbildung historischer Monumente konnte der Neubau das Original nicht reproduzieren: das Ergebnis ist ein 'antico-moderno'-Stil, der Alt und Neu vereint.",
      es: "La Torre Cuadrada de Civitaretenga es uno de los símbolos más reconocibles de la pedanía. La torre original del siglo XIII se derrumbó durante el devastador terremoto del 6 de abril de 2009. Posteriormente fue reconstruida pero, debido a la ley italiana que prohíbe la reproducción fiel de monumentos históricos (legge sui falsi storici), no pudo replicar el original. El resultado es un estilo 'antico-moderno' que fusiona lo antiguo y lo contemporáneo.",
    },
    category: "monument",
    coordinates: { lat: 42.244414, lng: 13.704398 },
    images: local("torre-civitaretenga"),
    prevStopId: "chiesa-san-salvatore",
    requiresBooking: true,
    visitTip: {
      it: "L'esterno è visitabile liberamente, ma l'accesso all'interno della torre è regolamentato e va concordato con la Pro Loco con almeno 2 ore di preavviso.",
      en: "The exterior is freely visitable, but access inside the tower is regulated and must be arranged with the Pro Loco at least 2 hours in advance.",
      fr: "L'extérieur est libre, mais l'accès à l'intérieur de la tour se réserve auprès de la Pro Loco (2 heures de préavis).",
      de: "Außen frei zugänglich, der Innenraum nur nach Voranmeldung bei der Pro Loco (mindestens 2 Stunden).",
      es: "El exterior es de libre acceso, pero la visita al interior de la torre debe reservarse con la Pro Loco (2 horas de antelación).",
    },
  },
];

export function getStop(id: string): Stop | undefined {
  return stops.find((s) => s.id === id);
}

// Haversine — meters between two coords
export function distanceMeters(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const la1 = toRad(a.lat);
  const la2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// Fallback URL used when a local image is missing
export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80";
