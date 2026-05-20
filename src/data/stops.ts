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
      it: "Punto di partenza naturale della visita: La piazza è il fulcro della vita sociale del paese ed è la sede dei principali eventi comunitari ed enogastronomici del territorio. L'area faceva originariamente parte della tenuta privata di Villa Francesconi. Fu donata alla comunità di Navelli alla fine dell'Ottocento dal barone Alfonso Francesconi. La piazza si distingue per un elegante selciato bianco in pietra e ospita una caratteristica fontana monumentale risalente al 1902.",
      en: "Natural starting point of the visit: The square is the hub of the village's social life and hosts the main community and food & wine events of the area. The area originally belonged to the private estate of Villa Francesconi. It was donated to the community of Navelli at the end of the 19th century by Baron Alfonso Francesconi. The square features an elegant white stone pavement and hosts a characteristic monumental fountain dating back to 1902.",
      fr: "Point de départ naturel de la visite : La place est le centre de la vie sociale du village et accueille les principaux événements communautaires et gastronomiques de la région. L'aire faisait à l'origine partie du domaine privé de la Villa Francesconi. Elle a été donnée à la communauté de Navelli à la fin du XIXe siècle par le baron Alfonso Francesconi. La place se distingue par un élégant pavement en pierre blanche et abrite une fontaine monumentale caractéristique datant de 1902. ",
      de: "Natürlicher Ausgangspunkt der Besichtigung: Der Platz ist das Zentrum des sozialen Lebens des Dorfes und beherbergt die wichtigsten Gemeinschafts- und Wein- und Speiseveranstaltungen der Gegend. Das Gebiet gehörte ursprünglich zum privaten Anwesen der Villa Francesconi. Es wurde Ende des 19. Jahrhunderts von Baron Alfonso Francesconi der Gemeinde Navelli gespendet. Der Platz zeichnet sich durch einen eleganten weißen Steinbelag aus und beherbergt einen charakteristischen monumentalen Brunnen aus dem Jahr 1902.",
      es: "Punto de partida natural de la visita: La plaza es el centro de la vida social del pueblo y alberga los principales eventos comunitarios y gastronómicos de la zona. El área originalmente pertenecía a la finca privada de Villa Francesconi. Fue donada a la comunidad de Navelli a finales del siglo XIX por el barón Alfonso Francesconi. La plaza se distingue por un elegante pavimento de piedra blanca y alberga una característica fuente monumental que data de 1902.",
    },
    category: "monument",
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
      it: "La Chiesa della Madonna del Rosario a Navelli è uno dei principali tesori barocchi del borgo, situata nella parte bassa del paese. Ricostruita a partire dal 1726 sulle ceneri dell'antica chiesa di San Pelino (distrutta dal devastante terremoto del 1703), la struttura custodisce al suo interno autentici capolavori dell'artigianato e dell'arte abruzzese. Alla fine del Cinquecento il sito ospitava un convento di frati domenicani, in seguito abolito da Papa Innocenzo X nel 1652. Dopo l'abolizione, la peste del 1658 e il sisma del 1703 portarono alla totale rovina della struttura precedente. I lavori di ricostruzione della chiesa attuale iniziarono nel 1726 e richiesero circa cinquant'anni per il completamento. Custodisce al suo interno un raro organo a canne del 1702 di Adriano Fedri all'interno di un'elaborata struttura lignea, e una tela della Crocifissione del pittore veneziano Vincenzo Damini.",
      en: "The Church of the Madonna del Rosario in Navelli is one of the main Baroque treasures of the village, located in the lower part of the town. Rebuilt starting from 1726 on the ashes of the ancient church of San Pelino (destroyed by the devastating earthquake of 1703), the structure houses authentic masterpieces of Abruzzese craftsmanship and art. At the end of the 16th century, the site hosted a convent of Dominican friars, later abolished by Pope Innocent X in 1652. After the abolition, the plague of 1658 and the earthquake of 1703 led to the total ruin of the previous structure. The reconstruction works of the current church began in 1726 and took about fifty years to complete. It houses a rare 1702 pipe organ by Adriano Fedri within an elaborate wooden structure, and a canvas of the Crucifixion by the Venetian painter Vincenzo Damini.",
      fr: "L'église de la Madonna del Rosario à Navelli est l'un des principaux trésors baroques du village, située dans la partie basse de la ville. Reconstruite à partir de 1726 sur les cendres de l'ancienne église de San Pelino (détruite par le dévastateur tremblement de terre de 1703), la structure abrite des chefs-d'œuvre authentiques de l'artisanat et de l'art abruzzais. À la fin du XVIe siècle, le site accueillait un couvent de frères dominicains, plus tard aboli par le pape Innocent X en 1652. Après l'abolition, la peste de 1658 et le tremblement de terre de 1703 ont conduit à la ruine totale de la structure précédente. Les travaux de reconstruction de l'église actuelle ont commencé en 1726 et ont pris environ cinquante ans pour être achevés. Elle abrite un rare orgue à tuyaux de 1702 d'Adriano Fedri dans une structure en bois élaborée, et une toile de la Crucifixion du peintre vénitien Vincenzo Damini.",
      de: "Die Kirche der Madonna del Rosario in Navelli ist eines der Hauptbarockschätze des Dorfes, gelegen im unteren Teil der Stadt. Ab 1726 auf den Trümmern der alten Kirche San Pelino (zerstört durch das verheerende Erdbeben von 1703) wieder aufgebaut, beherbergt die Struktur authentische Meisterwerke der abruzzesischen Handwerkskunst und Kunst. Ende des 16. Jahrhunderts beherbergte die Stätte ein Kloster der Dominikaner, das später von Papst Innocent X. im Jahr 1652 aufgehoben wurde. Nach der Aufhebung führten die Pest von 1658 und das Erdbeben von 1703 zum totalen Ruin der vorherigen Struktur. Die Wiederaufbauarbeiten der aktuellen Kirche begannen 1726 und dauerten etwa fünfzig Jahre. Sie beherbergt eine seltene Pfeifenorgel von 1702 von Adriano Fedri in einer aufwendigen Holzstruktur und eine Leinwand der Kreuzigung des venezianischen Malers Vincenzo Damini.",
      es: "La Iglesia de la Madonna del Rosario en Navelli es uno de los principales tesoros barrocos del pueblo, ubicado en la parte baja de la ciudad. Reconstruida a partir de 1726 sobre las cenizas de la antigua iglesia de San Pelino (destruida por el devastador terremoto de 1703), la estructura alberga auténticas obras maestras de la artesanía y el arte abruzzese. A finales del siglo XVI, el sitio albergaba un convento de frailes dominicos, posteriormente abolido por el Papa Inocencio X en 1652. Después de la abolición, la peste de 1658 y el terremoto de 1703 llevaron a la ruina total de la estructura anterior. Las obras de reconstrucción de la iglesia actual comenzaron en 1726 y tomaron alrededor de cincuenta años para completarse. Alberga un raro órgano de tubos de 1702 de Adriano Fedri dentro de una elaborada estructura de madera, y un lienzo de la Crucifixión del pintor veneciano Vincenzo Damini.",
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
      it: "Storico palazzo nobiliare nel cuore del borgo medievale di Navelli, testimonianza delle famiglie aristocratiche che hanno plasmato la storia del paese. Noto localmente anche come il 'Palazzo del Milionario'. Il soprannome deriva dal proprietario originario della famiglia De Roccis, chiamato ru miglionàrijë per la sua straordinaria ricchezza. Le facciate in pietra e i dettagli architettonici raccontano secoli di prestigio locale. Oggi la struttura è di proprietà del Comune di Navelli, che la ha espropriata e restaurata per salvarla dall'abbandono post-terremoto del 2009, trasformandola in un vivace polo per mostre, eventi culturali e spazi artistici aperti alla comunità e ai visitatori.",
      en: "A historic noble palace in the heart of medieval Navelli, testament to the aristocratic families that shaped the village's history. Locally also known as the 'Palace of the Millionaire', a nickname derived from the original owner of the De Roccis family, called ru miglionàrijë for his extraordinary wealth. The stone facades and architectural details tell centuries of local prestige. Today the building is owned by the Municipality of Navelli, which expropriated and restored it to save it from post-earthquake abandonment in 2009, transforming it into a vibrant hub for exhibitions, cultural events and artistic spaces open to the community and visitors.",
      fr: "Un palais noble historique au cœur du Navelli médiéval, témoin des familles aristocratiques qui ont façonné l'histoire du village. Localement aussi connu sous le nom de 'Palais du Millionnaire', un surnom dérivé du propriétaire original de la famille De Roccis, appelé ru miglionàrijë pour sa richesse extraordinaire. Les façades en pierre et les détails architecturaux racontent des siècles de prestige local. Aujourd'hui, l'édifice appartient à la Municipalité de Navelli, qui l'a exproprié et restauré pour le sauver de l'abandon post-sismique en 2009, le transformant en un hub dynamique pour les expositions, les événements culturels et les espaces artistiques ouverts à la communauté et aux visiteurs.",
      de: "Ein historischer Adelspalast im Herzen des mittelalterlichen Navelli, Zeugnis der adeligen Familien, die die Geschichte des Dorfes prägten. Lokal auch bekannt als der 'Palast des Millionärs', ein Spitzname, der sich von dem ursprünglichen Besitzer der Familie De Roccis ableitet, genannt ru miglionàrijë wegen seines außergewöhnlichen Reichtums. Die Steinfassaden und architektonischen Details erzählen Jahrhunderte lokalen Prestiges. Heute ist das Gebäude im Besitz der Gemeinde Navelli, die es enteignete und restaurierte, um es vor dem post-erdbebenbedingten Verfall im Jahr 2009 zu retten, und es in ein lebendiges Zentrum für Ausstellungen, kulturelle Veranstaltungen und künstlerische Räume verwandelte, die der Gemeinschaft und den Besuchern offenstehen.",
      es: "Un histórico palacio nobiliario en el corazón de la Navelli medieval, testimonio de las familias aristocráticas que dieron forma a la historia del pueblo. Localmente también conocido como el 'Palacio del Millonario', un apodo derivado del propietario original de la familia De Roccis, llamado ru miglionàrijë por su extraordinaria riqueza. Las fachadas de piedra y los detalles arquitectónicos cuentan siglos de prestigio local. Hoy el edificio es propiedad del Municipio de Navelli, que lo expropió y restauró para salvarlo del abandono post-terremoto en 2009, transformándolo en un vibrante centro para exposiciones, eventos culturales y espacios artísticos abiertos a la comunidad y a los visitantes.",
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
      it: "Porta Santa Maria è una delle antiche porte d'accesso al borgo fortificato di Navelli, situata sul versante nord-ovest (od ovest) del centro storico. Edificata originariamente il 22 agosto 1475, rappresenta l'ingresso più ampio e luminoso del borgo medievale. La porta è stata restaurata più volte nel corso dei secoli, ma conserva ancora tracce della sua struttura originaria. Attraversandola si entra nel cuore storico di Navelli, lasciando alle spalle la parte più bassa del paese e immergendosi nell'atmosfera medievale del borgo.",
      en: "Porta Santa Maria is one of the ancient gateways into the fortified village of Navelli, located on the northwest (or west) side of the historic center. Originally built on August 22, 1475, it represents the widest and brightest entrance to the medieval village. The gate has been restored several times over the centuries but still retains traces of its original structure. Passing through it, you enter the historical heart of Navelli, leaving behind the lower part of the village and immersing yourself in the medieval atmosphere of the borgo.",
      fr: "Porta Santa Maria est l'une des anciennes portes d'accès au village fortifié de Navelli, située du côté nord-ouest (ou ouest) du centre historique. Construite à l'origine le 22 août 1475, elle représente l'entrée la plus large et la plus lumineuse du village médiéval. La porte a été restaurée plusieurs fois au cours des siècles, mais conserve encore des traces de sa structure originale. En la traversant, on entre dans le cœur historique de Navelli, laissant derrière soi la partie basse du village et s'immergeant dans l'atmosphère médiévale du bourg.",
      de: "Porta Santa Maria ist eines der alten Tore zum befestigten Dorf Navelli, das sich auf der nordwestlichen (oder westlichen) Seite des historischen Zentrums befindet. Ursprünglich am 22. August 1475 erbaut, stellt es den breitesten und hellsten Eingang zum mittelalterlichen Dorf dar. Das Tor wurde im Laufe der Jahrhunderte mehrmals restauriert, behält aber immer noch Spuren seiner ursprünglichen Struktur. Wenn man sie überquert, gelangt man in das historische Herz von Navelli, lässt den unteren Teil der Stadt hinter sich und taucht in die mittelalterliche Atmosphäre des Dorfes ein.",
      es: "Porta Santa Maria es una de las antiguas puertas de acceso al pueblo fortificado de Navelli, situada en el lado noroeste (o oeste) del centro histórico. Construida originalmente el 22 de agosto de 1475, representa la entrada más amplia y luminosa al pueblo medieval. La puerta ha sido restaurada varias veces a lo largo de los siglos, pero aún conserva rastros de su estructura original. Al atravesarla, se entra en el corazón histórico de Navelli, dejando atrás la parte baja del pueblo e inmersos en la atmósfera medieval del borgo.",
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
      it: "La Cappella di San Pasquale è una suggestiva cappella gentilizia privata situata nel borgo medievale di Navelli, in provincia dell'Aquila. L'edificio, annesso al seicentesco Palazzo Cappa (noto storicamente anche come Palazzo Francesconi o Mancini), rappresenta uno dei piccoli gioielli artistici e storici custoditi tra i vicoli del paese. Venne edificata nel corso del Seicento per volontà del Magnifico Filippo Maria Mancini di Navelli che la lasciò successivamente in eredità ai baroni Cappa di San Nicandro.",
      en: "The Chapel of San Pasquale is a charming private chapel located in the medieval village of Navelli, in the province of L'Aquila. The building, annexed to the 17th-century Palazzo Cappa (also historically known as Palazzo Francesconi or Mancini), represents one of the small artistic and historical gems nestled among the alleys of the village. It was built in the 17th century by the will of the Magnificent Filippo Maria Mancini of Navelli, who later left it as an inheritance to the barons Cappa of San Nicandro.",
      fr: "La Chapelle de San Pasquale est une charmante chapelle privée située dans le village médiéval de Navelli, dans la province de L'Aquila. Le bâtiment, annexe du Palais Cappa du XVIIe siècle (également connu historiquement sous le nom de Palais Francesconi ou Mancini), représente l'un des petits joyaux artistiques et historiques nichés parmi les ruelles du village. Elle a été construite au cours du XVIIe siècle par la volonté du Magnifique Filippo Maria Mancini de Navelli, qui l'a ensuite léguée aux barons Cappa de San Nicandro.",
      de: "Die Kapelle San Pasquale ist eine charmante private Kapelle im mittelalterlichen Dorf Navelli, in der Provinz L'Aquila. Das Gebäude, das an den Palazzo Cappa aus dem 17. Jahrhundert (auch historisch bekannt als Palazzo Francesconi oder Mancini) angeschlossen ist, stellt eines der kleinen künstlerischen und historischen Juwelen dar, die zwischen den Gassen des Dorfes versteckt sind. Sie wurde im 17. Jahrhundert auf Wunsch des Magnifico Filippo Maria Mancini von Navelli erbaut, der sie später den Baronen Cappa von San Nicandro vererbte.",
      es: "La Capilla de San Pasquale es una encantadora capilla privada ubicada en el pueblo medieval de Navelli, en la provincia de L'Aquila. El edificio, anexo al Palazzo Cappa del siglo XVII (también conocido históricamente como Palazzo Francesconi o Mancini), representa una de las pequeñas joyas artísticas e históricas escondidas entre los callejones del pueblo. Fue construida en el siglo XVII por voluntad del Magnífico Filippo Maria Mancini de Navelli, quien luego la dejó como herencia a los barones Cappa de San Nicandro.",
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
      it: "Chiesa parrocchiale principale di Navelli, La struttura iniziale risale al secolo XI, originariamente costruita con funzione difensiva e convertita in luogo di culto durante la peste del 1478. Custodisce un pregevole portale ligneo intagliato e una rara croce processionale del XIV secolo. Il campanile era in origine la torre della fortezza medievale. Tra i dodici altari laterali, uno è dedicato a San Carlo Borromeo. Gli storici ipotizzano sia una testimonianza dei fitti rapporti commerciali storici legati alla vendita dello zafferano di Navelli verso la città di Milano",
      en: "The main parish church of Navelli, originally built in the 11th century with a defensive function and converted into a place of worship during the plague of 1478. It houses a valuable carved wooden door and a rare 14th-century processional cross. The bell tower was originally the tower of the medieval fortress. Among the twelve side altars, one is dedicated to San Carlo Borromeo, which historians hypothesize as evidence of the historical commercial ties related to the sale of Navelli saffron to the city of Milan.",
      fr: "L'église paroissiale principale de Navelli, construite à l'origine au XIe siècle avec une fonction défensive et convertie en lieu de culte pendant la peste de 1478. Elle abrite un précieux portail en bois sculpté et une rare croix processionnelle du XIVe siècle. Le clocher était à l'origine la tour de la forteresse médiévale. Parmi les douze autels latéraux, l'un est dédié à San Carlo Borromeo, ce que les historiens supposent être une preuve des liens commerciaux historiques liés à la vente de safran de Navelli vers la ville de Milan.",
      de: "Die Hauptpfarrkirche von Navelli, ursprünglich im 11. Jahrhundert mit einer defensiven Funktion erbaut und während der Pest von 1478 in einen Ort der Anbetung umgewandelt. Sie beherbergt eine wertvolle geschnitzte Holztür und ein seltenes Prozessionskreuz aus dem 14. Jahrhundert. Der Glockenturm war ursprünglich der Turm der mittelalterlichen Festung. Unter den zwölf Seitenaltären ist einer San Carlo Borromeo gewidmet, was Historiker als Beweis für die historischen Handelsbeziehungen im Zusammenhang mit dem Verkauf von Navelli-Safran an die Stadt Mailand vermuten.",
      es: "La iglesia parroquial principal de Navelli, originalmente construida en el siglo XI con una función defensiva y convertida en un lugar de culto durante la peste de 1478. Alberga una valiosa puerta de madera tallada y una rara cruz procesional del siglo XIV. El campanario era originalmente la torre de la fortaleza medieval. Entre los doce altares laterales, uno está dedicado a San Carlo Borromeo, lo que los historiadores suponen como evidencia de los vínculos comerciales históricos relacionados con la venta de azafrán de Navelli a la ciudad de Milán.",
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
      it: "Venne edificato nel 1632 per volontà del feudatario Camillo Caracciolo sui resti di un precedente castello medievale d'epoca angioina. ) è un imponente edificio secentesco situato nel punto più alto del borgo medievale di Navelli, in provincia dell'Aquila. Rappresenta il simbolo storico del paese e un classico esempio di palazzo castellato, in cui le esigenze difensive si fondono con quelle di una residenza signorile. Palazzo Santucci fu la residenza dei signori feudali di Navelli. Conserva un suggestivo cortile rinascimentale con cisterna centrale e una caratteristica doppia scala in pietra. Oggi è sede di eventi culturali e celebrazioni di matrimoni civili.",
      en: "Built in 1632 by the will of the feudal lord Camillo Caracciolo on the remains of a previous medieval castle from the Angevin era, it is an imposing 17th-century building located at the highest point of the medieval village of Navelli, in the province of L'Aquila. It represents the historical symbol of the village and a classic example of a castellated palace, where defensive needs blend with those of a noble residence. Palazzo Santucci was the residence of the feudal lords of Navelli. It features a charming Renaissance courtyard with a central cistern and a characteristic double stone staircase. Today it hosts cultural events and civil wedding celebrations.",
      fr: "Construit en 1632 par la volonté du seigneur féodal Camillo Caracciolo sur les vestiges d'un précédent château médiéval de l'époque angevine, c'est un imposant bâtiment du XVIIe siècle situé au point le plus haut du village médiéval de Navelli, dans la province de L'Aquila. Il représente le symbole historique du village et un exemple classique de palais castellato, où les besoins défensifs se mêlent à ceux d'une résidence noble. Le Palazzo Santucci fut la résidence des seigneurs féodaux de Navelli. Il dispose d'une charmante cour Renaissance avec une citerne centrale et un escalier double en pierre caractéristique. Aujourd'hui, il accueille des événements culturels et des célébrations de mariages civils.",
      de: "Erbaut im Jahr 1632 auf Anordnung des Feudalherrn Camillo Caracciolo auf den Überresten eines früheren mittelalterlichen Schlosses aus der Anjou-Zeit, ist es ein imposantes Gebäude aus dem 17. Jahrhundert, das sich am höchsten Punkt des mittelalterlichen Dorfes Navelli in der Provinz L'Aquila befindet. Es repräsentiert das historische Symbol des Dorfes und ist ein klassisches Beispiel für einen kastellartigen Palast, in dem sich defensive Bedürfnisse mit denen einer adligen Residenz verbinden. Der Palazzo Santucci war die Residenz der Feudalherren von Navelli. Er verfügt über einen charmanten Renaissance-Innenhof mit einem zentralen Zisternen und eine charakteristische doppelte Steintreppe. Heute beherbergt er kulturelle Veranstaltungen und Feierlichkeiten für zivile Hochzeiten.",
      es: "Construido en 1632 por voluntad del señor feudal Camillo Caracciolo sobre los restos de un anterior castillo medieval de la época angevina, es un imponente edificio del siglo XVII ubicado en el punto más alto del pueblo medieval de Navelli, en la provincia de L'Aquila. Representa el símbolo histórico del pueblo y un ejemplo clásico de palacio castellato, donde las necesidades defensivas se mezclan con las de una residencia noble. El Palazzo Santucci fue la residencia de los señores feudales de Navelli. Cuenta con un encantador patio renacentista con una cisterna central y una característica doble escalera de piedra. Hoy alberga eventos culturales y celebraciones de bodas civiles.",
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
      it: "Porta Castello è l'unica porta medievale originaria superstite delle mura di Navelli. Rappresenta il quarto accesso al borgo fortificato e segna l'inizio della sua parte più antica e suggestiva. La porta dava accesso all'area in cui sorgeva l'antico castrum medievale (chiamato 'ru castégglijë' nel dialetto locale). Il castello originale fu poi sostituito in epoca rinascimentale dal monumentale Palazzo Santucci",
      en: "Porta Castello is the only surviving original medieval gate of the walls of Navelli. It represents the fourth access point to the fortified village and marks the beginning of its oldest and most evocative part. The gate provided access to the area where the ancient medieval castrum (called 'ru castégglijë' in the local dialect) stood. The original castle was later replaced in the Renaissance era by the monumental Palazzo Santucci.",
      fr: "Porta Castello est la seule porte médiévale originale survivante des murs de Navelli. Elle représente le quatrième point d'accès au village fortifié et marque le début de sa partie la plus ancienne et la plus évocatrice. La porte donnait accès à l'endroit où se trouvait l'ancien castrum médiéval (appelé 'ru castégglijë' dans le dialecte local). Le château original a ensuite été remplacé à l'époque de la Renaissance par le monumental Palazzo Santucci.",
      de: "Porta Castello ist das einzige erhaltene originale mittelalterliche Tor der Mauern von Navelli. Es stellt den vierten Zugang zum befestigten Dorf dar und markiert den Beginn seines ältesten und eindrucksvollsten Teils. Das Tor führte zu dem Bereich, in dem das alte mittelalterliche Castrum (im lokalen Dialekt 'ru castégglijë' genannt) stand. Die ursprüngliche Burg wurde später in der Renaissance durch das monumentale Palazzo Santucci ersetzt.",
      es: "Porta Castello es la única puerta medieval original superviviente de las murallas de Navelli. Representa el cuarto punto de acceso al pueblo fortificado y marca el comienzo de su parte más antigua y evocadora. La puerta daba acceso al área donde se encontraba el antiguo castrum medieval (llamado 'ru castégglijë' en el dialecto local). El castillo original fue luego reemplazado en la era renacentista por el monumental Palazzo Santucci.",
    },
    category: "gate",
    coordinates: { lat: 42.238449, lng: 13.728975 },
    images: local("porta-castello"),
    prevStopId: "palazzo-santucci",
    nextStopId: "porta-san-pelino",
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
      it: "è uno dei principali e più caratteristici accessi storici al borgo medievale di Navelli, in provincia dell'Aquila. Situata nel settore nord/sud-est del nucleo fortificato, la porta si distingue per il suo suggestivo arco gotico ogivale. Rappresenta il punto di partenza ideale per esplorare l'antico labirinto di vicoli e scalinate in pietra che caratterizzano questo comune abruzzese. La porta appartiene alla cinta muraria originaria del borgo trecentesco. A differenza di altre porte riedificate dopo il forte terremoto del 1456, mantiene la sua identità storica originaria.",
      en: "It is one of the main and most characteristic historical access points to the medieval village of Navelli, in the province of L'Aquila. Located in the north/southeast sector of the fortified core, the gate stands out for its evocative Gothic ogival arch. It represents the ideal starting point to explore the ancient labyrinth of alleys and stone staircases that characterize this Abruzzo town. The gate belongs to the original walls of the 14th-century village. Unlike other gates rebuilt after the strong earthquake of 1456, it retains its original historical identity.",
      fr: "C'est l'un des principaux et des plus caractéristiques points d'accès historiques au village médiéval de Navelli, dans la province de L'Aquila. Située dans le secteur nord/sud-est du noyau fortifié, la porte se distingue par son évocateur arc gothique ogival. Elle représente le point de départ idéal pour explorer l'ancien labyrinthe de ruelles et d'escaliers en pierre qui caractérisent cette ville d'Abruzzo. La porte appartient aux murs originaux du village du XIVe siècle. Contrairement à d'autres portes reconstruites après le fort tremblement de terre de 1456, elle conserve son identité historique originale.",
      de: "Es ist einer der wichtigsten und charakteristischsten historischen Zugangspunkte zum mittelalterlichen Dorf Navelli, in der Provinz L'Aquila. Das Tor befindet sich im Nord-/Südostsektor des befestigten Kerns und zeichnet sich durch seinen eindrucksvollen gotischen Spitzbogen aus. Es ist der ideale Ausgangspunkt, um das alte Labyrinth aus Gassen und Steintreppen zu erkunden, das diese Stadt in Abruzzo charakterisiert. Das Tor gehört zu den ursprünglichen Mauern des Dorfes aus dem 14. Jahrhundert. Im Gegensatz zu anderen Toren, die nach dem starken Erdbeben von 1456 wieder aufgebaut wurden, behält es seine ursprüngliche historische Identität bei.",
      es: "Es uno de los principales y más característicos puntos de acceso históricos al pueblo medieval de Navelli, en la provincia de L'Aquila. Ubicada en el sector norte/sureste del núcleo fortificado, la puerta se destaca por su evocador arco gótico ojival. Representa el punto de partida ideal para explorar el antiguo laberinto de callejones y escaleras de piedra que caracterizan esta ciudad de Abruzzo. La puerta pertenece a las murallas originales del pueblo del siglo XIV. A diferencia de otras puertas reconstruidas después del fuerte terremoto de 1456, conserva su identidad histórica original.",
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
      it: " La chiesa sorge sui resti di un antico insediamento italico-romano (vicus di Incerulae). Sotto la struttura sono presenti elementi templari di età repubblicana (III secolo a.C.), presumibilmente dedicati a Ercole Iovio o alla dea Cerere. Il primo nucleo cristiano risale all'epoca longobarda (VIII secolo), citato nel Chronicon Vulturnense. L'edificio attuale in stile romanico fu completato nell'XI secolo ed è menzionato in una bolla papale del 1092. : Fino al Trecento rimase il cuore del vecchio villaggio di Cerulae. Quando la popolazione si trasferì nei borghi fortificati di Navelli e Civitaretenga, la chiesa mantenne comunque il titolo di Arcipretura fino all'Ottocento",
      en: "The church stands on the remains of an ancient Italic-Roman settlement (vicus of Incerulae). Under the structure are Templar elements from the Republican era (3rd century BC), presumably dedicated to Hercules Iovius or the goddess Ceres. The first Christian nucleus dates back to the Lombard era (8th century), mentioned in the Chronicon Vulturnense. The current Romanesque-style building was completed in the 11th century and is mentioned in a papal bull of 1092. Until the 14th century, it remained the heart of the old village of Cerulae. When the population moved to the fortified villages of Navelli and Civitaretenga, the church still retained the title of Archpriesthood until the 19th century.",
      fr: "L'église se dresse sur les vestiges d'un ancien établissement italo-romain (vicus d'Incerulae). Sous la structure se trouvent des éléments templiers de l'époque républicaine (IIIe siècle av. J.-C.), probablement dédiés à Hercule Iovius ou à la déesse Cérès. Le premier noyau chrétien remonte à l'époque lombarde (VIIIe siècle), mentionné dans le Chronicon Vulturnense. Le bâtiment actuel de style roman a été achevé au XIe siècle et est mentionné dans une bulle papale de 1092. Jusqu'au XIVe siècle, il est resté le cœur de l'ancien village de Cerulae. Lorsque la population s'est déplacée vers les villages fortifiés de Navelli et Civitaretenga, l'église a néanmoins conservé le titre d'Archevêché jusqu'au XIXe siècle.",
      de: "Die Kirche steht auf den Überresten einer alten italisch-römischen Siedlung (vicus von Incerulae). Unter der Struktur befinden sich Templerelemente aus der republikanischen Ära (3. Jahrhundert v. Chr.), vermutlich gewidmet Hercules Iovius oder der Göttin Ceres. Der erste christliche Kern stammt aus der lombardischen Ära (8. Jahrhundert), erwähnt im Chronicon Vulturnense. Das aktuelle romanische Gebäude wurde im 11. Jahrhundert fertiggestellt und in einer päpstlichen Bulle von 1092 erwähnt. Bis zum 14. Jahrhundert blieb es das Herz des alten Dorfes Cerulae. Als die Bevölkerung in die befestigten Dörfer Navelli und Civitaretenga umzog, behielt die Kirche dennoch den Titel des Erzpriestertums bis ins 19. Jahrhundert.",
      es: "La iglesia se encuentra sobre los restos de un antiguo asentamiento italo-romano (vicus de Incerulae). Bajo la estructura hay elementos templarios de la era republicana (siglo III a.C.), presumiblemente dedicados a Hércules Iovio o a la diosa Ceres. El primer núcleo cristiano data de la era lombarda (siglo VIII), mencionado en el Chronicon Vulturnense. El edificio actual de estilo románico fue completado en el siglo XI y se menciona en una bula papal de 1092. Hasta el siglo XIV, permaneció como el corazón del antiguo pueblo de Cerulae. Cuando la población se trasladó a los pueblos fortificados de Navelli y Civitaretenga, la iglesia aún conservó el título de Arciprestazgo hasta el siglo XIX.",
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
      it: "Questo complesso storico, immerso nel suggestivo altopiano di Navelli e posizionato lungo l'antico tracciato del Tratturo Magno, rappresenta un luogo di grande importanza religiosa, culturale e sociale per l'intera comunità locale. La costruzione originale dell'intero bene risale al 1480, data testimoniata da un'iscrizione in caratteri gotici incisa sopra l'arco del portale. Inizialmente intitolata a Sant'Antonio Abate, la struttura passò sotto la gestione dei Frati Minori Osservanti nel 1498, momento in cui il titolo fu mutato in favore di Sant'Antonio da Padova. Adiacente alla chiesa si sviluppa il chiostro del vecchio convento francescano, che conserva parzialmente un ciclo di affreschi dedicati alle scene di vita del Santo. Oggi il complesso non è solo un monumento storico, ma anche un fulcro per la valorizzazione del territorio. Una parte dei locali ospita la sede del consorzio locale dei coltivatori e la cooperativa dell'Altopiano di Navelli per la lavorazione del pregiato zafferano DOP.",
      en: "This historic complex, nestled in the evocative plateau of Navelli and located along the ancient route of the Tratturo Magno, represents a place of great religious, cultural, and social importance for the entire local community. The original construction of the entire site dates back to 1480, as evidenced by an inscription in Gothic characters engraved above the arch of the portal. Initially dedicated to Sant'Antonio Abate, the structure came under the management of the Observant Friars Minor in 1498, at which point the dedication was changed in favor of Sant'Antonio da Padova. Adjacent to the church is the cloister of the old Franciscan convent, which partially preserves a cycle of frescoes dedicated to scenes from the life of the Saint. Today, the complex is not only a historical monument but also a hub for promoting the territory. Part of the premises hosts the headquarters of the local consortium of farmers and the cooperative of the Navelli Plateau for processing the precious DOP saffron.",
      fr: "Ce complexe historique, niché dans l'évocateur plateau de Navelli et situé le long de l'ancienne route du Tratturo Magno, représente un lieu d'une grande importance religieuse, culturelle et sociale pour l'ensemble de la communauté locale. La construction originale de l'ensemble du site remonte à 1480, comme en témoigne une inscription en caractères gothiques gravée au-dessus de l'arche du portail. Initialement dédié à Sant'Antonio Abate, la structure est passée sous la gestion des Frères Mineurs Observants en 1498, moment où la dédicace a été changée en faveur de Sant'Antonio da Padova. Adjacent à l'église se trouve le cloître de l'ancien couvent franciscain, qui conserve partiellement un cycle de fresques dédiées aux scènes de la vie du Saint. Aujourd'hui, le complexe n'est pas seulement un monument historique mais aussi un centre pour la promotion du territoire. Une partie des locaux abrite le siège du consortium local des agriculteurs et la coopérative du plateau de Navelli pour la transformation du précieux safran DOP.",
      de: "Dieser historische Komplex, eingebettet in das eindrucksvolle Plateau von Navelli und entlang der alten Route des Tratturo Magno gelegen, stellt einen Ort von großer religiöser, kultureller und sozialer Bedeutung für die gesamte lokale Gemeinschaft dar. Die ursprüngliche Konstruktion der gesamten Anlage geht auf das Jahr 1480 zurück, wie eine Inschrift in gotischen Buchstaben über dem Bogen des Portals belegt. Ursprünglich Sant'Antonio Abate gewidmet, kam die Struktur 1498 unter die Verwaltung der Observanten Franziskaner, woraufhin die Widmung zugunsten von Sant'Antonio da Padova geändert wurde. Angrenzend an die Kirche befindet sich der Kreuzgang des alten Franziskanerklosters, der teilweise einen Freskenzyklus bewahrt, der Szenen aus dem Leben des Heiligen gewidmet ist. Heute ist der Komplex nicht nur ein historisches Monument, sondern auch ein Zentrum zur Förderung des Gebiets. Ein Teil der Räumlichkeiten beherbergt den Sitz des lokalen Konsortiums der Landwirte und die Genossenschaft des Navelli-Plateaus für die Verarbeitung des kostbaren DOP-Safrans.",
      es: "Este complejo histórico, ubicado en el evocador altiplano de Navelli y situado a lo largo de la antigua ruta del Tratturo Magno, representa un lugar de gran importancia religiosa, cultural y social para toda la comunidad local. La construcción original de todo el sitio data de 1480, como lo demuestra una inscripción en caracteres góticos grabada sobre el arco del portal. Inicialmente dedicado a Sant'Antonio Abate, la estructura pasó bajo la gestión de los Frailes Menores Observantes en 1498, momento en el que se cambió la dedicación a favor de Sant'Antonio da Padova. Adyacente a la iglesia se encuentra el claustro del antiguo convento franciscano, que conserva parcialmente un ciclo de frescos dedicados a escenas de la vida del Santo. Hoy en día, el complejo no solo es un monumento histórico, sino también un centro para promover el territorio. Parte de las instalaciones alberga la sede del consorcio local de agricultores y la cooperativa del Altiplano de Navelli para procesar el precioso azafrán DOP.",
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
      it: "Risalente originariamente al XII secolo (con prime attestazioni storiche datate al 1138), questa chiesetta sorge lungo il tracciato del tratturo. In passato era considerata la principale chiesa del borgo, prima di cedere il ruolo a San Salvatore. Si presenta con un coronamento orizzontale, intonacata a seguito di recenti restauri. Il piccolo portale centrale in pietra liscia ospita nella lunetta tracce di rari affreschi del XIV-XV secolo. L'architrave d'ingresso è impreziosito dal reimpiego di un'antica epigrafe di epoca romana. L'elemento artistico di maggior pregio è custodito nel catino absidale, arricchito da rari ed eleganti affreschi tardo-trecenteschi di grande interesse storico. In seguito ai danni causati dal terremoto del 2009 ad altri edifici storici del borgo, la Chiesa di Sant'Egidio è tornata a svolgere temporaneamente la funzione di principale luogo di culto",
      en: "Dating back originally to the 12th century (with the first historical attestations dated to 1138), this small church stands along the route of the tratturo. In the past, it was considered the main church of the village, before ceding the role to San Salvatore. It features a horizontal crowning, plastered following recent restorations. The small central stone portal hosts in the lunette traces of rare frescoes from the 14th-15th centuries. The entrance architrave is embellished by the reuse of an ancient Roman-era epigraph. The most valuable artistic element is housed in the apse basin, enriched by rare and elegant late 14th-century frescoes of great historical interest. Following the damage caused by the 2009 earthquake to other historic buildings in the village, the Church of Sant'Egidio temporarily resumed its function as the main place of worship.",
      fr: "Datant à l'origine du XIIe siècle (avec les premières attestations historiques datées de 1138), cette petite église se trouve le long de la route du tratturo. Dans le passé, elle était considérée comme la principale église du village, avant de céder ce rôle à San Salvatore. Elle présente un couronnement horizontal, enduit à la suite de récentes restaurations. Le petit portail central en pierre lisse abrite dans la lunette des traces de rares fresques des XIVe-XVe siècles. L'architrave d'entrée est embellie par le réemploi d'une ancienne épigraphe de l'époque romaine. L'élément artistique le plus précieux est conservé dans la cuvette absidale, enrichie de rares et élégantes fresques tardives du XIVe siècle d'un grand intérêt historique. Suite aux dommages causés par le tremblement de terre de 2009 à d'autres bâtiments historiques du village, l'église de Sant'Egidio a temporairement repris sa fonction de principal lieu de culte.",
      de: "Ursprünglich aus dem 12. Jahrhundert stammend (mit den ersten historischen Nachweisen aus dem Jahr 1138), steht diese kleine Kirche entlang der Route des Tratturo. In der Vergangenheit wurde sie als Hauptkirche des Dorfes angesehen, bevor sie die Rolle an San Salvatore abgab. Sie verfügt über eine horizontale Krönung, verputzt nach jüngsten Restaurierungen. Das kleine zentrale Steintor beherbergt in der Lunette Spuren seltener Fresken aus dem 14.-15. Jahrhundert. Der Eingangsbogen ist durch die Wiederverwendung einer antiken Epigraph aus der römischen Zeit verziert. Das wertvollste künstlerische Element befindet sich in der Apsisbucht, bereichert durch seltene und elegante spätmittelalterliche Fresken von großem historischem Interesse. Nach den Schäden, die das Erdbeben von 2009 an anderen historischen Gebäuden des Dorfes verursachte, nahm die Kirche Sant'Egidio vorübergehend ihre Funktion als Hauptgottesdienststätte wieder auf.",
      es: "Fechada originalmente en el siglo XII (con las primeras atestaciones históricas datadas en 1138), esta pequeña iglesia se encuentra a lo largo de la ruta del tratturo. En el pasado, se consideraba la iglesia principal del pueblo, antes de ceder el papel a San Salvatore. Presenta una coronación horizontal, enlucida tras recientes restauraciones. El pequeño portal central de piedra alberga en la luneta rastros de raros frescos de los siglos XIV-XV. El arquitrabe de entrada está embellecido por el reutilizo de una antigua epígrafe de época romana. El elemento artístico más valioso se encuentra en la cuenca absidal, enriquecida por raros y elegantes frescos tardíos del siglo XIV de gran interés histórico. Tras los daños causados por el terremoto de 2009 a otros edificios históricos del pueblo, la Iglesia de Sant'Egidio retomó temporalmente su función como principal lugar de culto.",
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
      it: "Il Ghetto Ebraico di Civitaretenga è un suggestivo e raro borgo fortificato d'Abruzzo, dichiarato bene di interesse culturale nel 2017. Questa preziosa testimonianza storica, situata alle spalle della chiesa parrocchiale del paese, racconta la convivenza e il successivo sradicamento della comunità ebraica locale tra il XIV e il XVI secolo. La comunità ebraica si stabilì nel borgo presumibilmente nel corso del XIV secolo. La crescita del quartiere fu trainata dalle grandi opportunità commerciali legate alla lana e soprattutto al prezioso zafferano dell'Altopiano di Navelli. Nel 1510, a causa dell'editto di espulsione degli ebrei dal Regno di Napoli, la comunità fu costretta ad abbandonare l'area. Per cancellare l'identità ebraica del quartiere, i vecchi nomi di Via Giudea e Piazza Giudea furono modificati negli attuali Via Guidea e Piazza Guidea. Sulle facciate delle case e sugli architravi in pietra vennero scolpiti numerosi Cristogrammi 'IHS' per rimarcare la nuova proprietà cristiana. Il terremoto del 2009 ha gravemente danneggiato le strutture del ghetto. Negli ultimi anni sono stati avviati imponenti progetti di recupero edilizio (dal valore di circa 14,5 milioni di euro) gestiti dal Comune di Navelli, dall'Ufficio Speciale per la Ricostruzione dei Comuni del Cratere (USRC) e da fondazioni locali.Mentre i lavori sui grandi aggregati privati procedono per riconsegnare le case ai proprietari, la parte pubblica è destinata a diventare un polo culturale e ricreativo per la valorizzazione dello zafferano. Il sito è comunque parzialmente accessibile e visitabile.",
      en: "The Jewish Ghetto of Civitaretenga is a suggestive and rare fortified village in Abruzzo, declared a site of cultural interest in 2017. This precious historical testimony, located behind the parish church of the village, tells the story of the coexistence and subsequent uprooting of the local Jewish community between the 14th and 16th centuries. The Jewish community settled in the village presumably during the 14th century. The growth of the neighborhood was driven by great commercial opportunities related to wool and especially to the precious saffron of the Navelli Plateau. In 1510, due to the edict of exp",
      fr: "Le ghetto juif de Civitaretenga est un village fortifié suggestif et rare en Abruzzo, déclaré site d'intérêt culturel en 2017. Ce précieux témoignage historique, situé derrière l'église paroissiale du village, raconte la coexistence et le déracinement ultérieur de la communauté juive locale entre les XIVe et XVIe siècles. La communauté juive s'est installée dans le village probablement au cours du XIVe siècle. La croissance du quartier a été stimulée par de grandes opportunités commerciales liées à la laine et surtout au précieux safran du plateau de Navelli. En 1510, en raison de l'édit d'expulsion des juifs du Royaume de Naples, la communauté a été contrainte d'abandonner la zone. Pour effacer l'identité juive du quartier, les anciens noms de Via Giudea et Piazza Giudea ont été modifiés en Via Guidea et Piazza Guidea. De nombreux Christogrammes 'IHS' ont été sculptés sur les façades des maisons et les linteaux en pierre pour souligner la nouvelle propriété chrétienne. Le tremblement de terre de 2009 a gravement endommagé les structures du ghetto. Ces dernières années, d'importants projets de récupération immobilière (d'une valeur d'environ 14,5 millions d'euros) ont été lancés, gérés par la municipalité de Navelli, l'Ufficio Speciale per la Ricostruzione dei Comuni del Cratere (USRC) et des fondations locales. Alors que les travaux sur les grands agrégats privés progressent pour restituer les maisons aux propriétaires, la partie publique est destinée à devenir un pôle culturel et récréatif pour la valorisation du safran. Le site est cependant partiellement accessible et visitable.",
      de: "Das jüdische Ghetto von Civitaretenga ist ein eindrucksvolles und seltenes befestigtes Dorf in den Abruzzen, das 2017 zum Kulturerbe erklärt wurde. Dieses wertvolle historische Zeugnis, das sich hinter der Pfarrkirche des Dorfes befindet, erzählt die Geschichte des Zusammenlebens und der anschließenden Vertreibung der lokalen jüdischen Gemeinde zwischen dem 14. und 16. Jahrhundert. Die jüdische Gemeinde ließ sich vermutlich im 14. Jahrhundert im Dorf nieder. Das Wachstum des Viertels wurde durch große kommerzielle Möglichkeiten im Zusammenhang mit Wolle und insbesondere mit dem kostbaren Safran des Navelli-Plateaus angetrieben. Im Jahr 1510, aufgrund des Edikts zur Vertreibung der Juden aus dem Königreich Neapel, war die Gemeinde gezwungen, das Gebiet zu verlassen. Um die jüdische Identität des Viertels zu löschen, wurden die alten Namen Via Giudea und Piazza Giudea in Via Guidea und Piazza Guidea geändert. Zahlreiche Christogramme 'IHS' wurden auf den Fassaden der Häuser und den Steintürstürzen eingraviert, um die neue christliche Eigentümerschaft zu betonen. Das Erdbeben von 2009 hat die Strukturen des Ghettos schwer beschädigt. In den letzten Jahren wurden umfangreiche Projekte zur Wiederherstellung von Gebäuden (im Wert von etwa 14,5 Millionen Euro) gestartet, die von der Gemeinde Navelli, dem Ufficio Speciale per la Ricostruzione dei Comuni del Cratere (USRC) und lokalen Stiftungen verwaltet werden. Während die Arbeiten an den großen privaten Aggregaten voranschreiten, um die Häuser an die Eigentümer zurückzugeben, soll der öffentliche Teil zu einem kulturellen und Freizeitzentrum für die Aufwertung von Safran werden. Die Stätte ist jedoch teilweise zugänglich und besuchbar.",
      es: "El Gueto Judío de Civitaretenga es un sugerente y raro pueblo fortificado en Abruzzo, declarado sitio de interés cultural en 2017. Este valioso testimonio histórico, ubicado detrás de la iglesia parroquial del pueblo, cuenta la historia de la coexistencia y posterior desarraigo de la comunidad judía local entre los siglos XIV y XVI. La comunidad judía se estableció en el pueblo presumiblemente durante el siglo XIV. El crecimiento del barrio fue impulsado por grandes oportunidades comerciales relacionadas con la lana y especialmente con el precioso azafrán del Altiplano de Navelli. En 1510, debido al edicto de expulsión de los judíos del Reino de Nápoles, la comunidad se vio obligada a abandonar el área. Para borrar la identidad judía del barrio, los antiguos nombres de Via Giudea y Piazza Giudea fueron modificados a Via Guidea y Piazza Guidea. Numerosos Cristogramas 'IHS' fueron esculpidos en las fachadas de las casas y los dinteles de piedra para remarcar la nueva propiedad cristiana. El terremoto de 2009 dañó gravemente las estructuras del gueto. En los últimos años se han iniciado importantes proyectos de recuperación inmobiliaria (con un valor de aproximadamente 14,5 millones de euros) gestionados por el Ayuntamiento de Navelli, el Ufficio Speciale per la Ricostruzione dei Comuni del Cratere (USRC) y fundaciones locales. Mientras que los trabajos en los grandes agregados privados avanzan para devolver las casas a sus propietarios, la parte pública está destinada a convertirse en un polo cultural y recreativo para la valorización del azafrán. El sitio es sin embargo parcialmente accesible y visitable.",
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
      it: "La costruzione iniziale risale al XII secolo ma venne interamente ricostruita tra il 1794 e il 1806 sopra i resti della vecchia parrocchia. Si presenta con uno stile tardo-settecentesco. Gode di un impianto imponente, rialzato dal livello stradale tramite una scalinata di 10 gradini. La superficie è intonacata, divisa da quattro lesene e conclusa da un caratteristico coronamento ondulato con due piccole statue alle estremità. A causa del sisma del 2009, l'edificio ha riportato gravi danni strutturali ed è rimasto a lungo inagibile. Negli ultimi anni sono stati avviati e programmati interventi pubblici di riparazione e consolidamento per il suo recupero.",
      en: "The initial construction dates back to the 12th century but was entirely rebuilt between 1794 and 1806 over the remains of the old parish church. It features a late 18th-century style. It has an imposing layout, raised from street level by a staircase of 10 steps. The surface is plastered, divided by four pilasters and topped with a characteristic wavy crowning with two small statues at the ends. Due to the 2009 earthquake, the building suffered severe structural damage and remained unusable for a long time. In recent years, public repair and consolidation interventions have been initiated and planned for its recovery.",
      fr: "La construction initiale remonte au XIIe siècle, mais elle a été entièrement reconstruite entre 1794 et 1806 sur les restes de l'ancienne église paroissiale. Elle présente un style de la fin du XVIIIe siècle. Elle a une disposition imposante, surélevée par rapport au niveau de la rue par un escalier de 10 marches. La surface est enduite, divisée par quatre pilastres et surmontée d'un couronnement ondulé caractéristique avec deux petites statues aux extrémités. En raison du tremblement de terre de 2009, le bâtiment a subi de graves dommages structurels et est resté inutilisable pendant longtemps. Ces dernières années, des interventions publiques de réparation et de consolidation ont été initiées et planifiées pour sa récupération.",
      de: "Die ursprüngliche Konstruktion stammt aus dem 12. Jahrhundert, wurde jedoch zwischen 1794 und 1806 vollständig über den Überresten der alten Pfarrkirche neu erbaut. Sie weist einen spät18. Jahrhundert-Stil auf. Sie hat eine imposante Anordnung, die durch eine Treppe mit 10 Stufen vom Straßenniveau angehoben ist. Die Oberfläche ist verputzt, durch vier Pilaster geteilt und mit einem charakteristischen wellenförmigen Krönung mit zwei kleinen Statuen an den Enden versehen. Aufgrund des Erdbebens von 2009 erlitt das Gebäude schwere strukturelle Schäden und blieb lange unbrauchbar. In den letzten Jahren wurden öffentliche Reparatur- und Konsolidierungsmaßnahmen eingeleitet",
      es: "La construcción inicial data del siglo XII pero fue completamente reconstruida entre 1794 y 1806 sobre los restos de la antigua iglesia parroquial. Presenta un estilo de finales del siglo XVIII. Tiene una disposición imponente, elevada desde el nivel de la calle por una escalera de 10 peldaños. La superficie está enlucida, dividida por cuatro pilastras y coronada con un característico remate ondulado con dos pequeñas estatuas en los extremos. Debido al terremoto de 2009, el edificio sufrió graves daños estructurales y permaneció inutilizable durante mucho tiempo. En los últimos años se han iniciado y planificado intervenciones públicas de reparación y consolidación para su recuperación.",
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
      it: "Torre quadrata medievale, crollata dopo il sisma del 2009 e attualmente in ricostruzione.",
      en: "Medieval square tower, collapsed after the 2009 earthquake and currently under reconstruction.",
      fr: "Tour carrée médiévale, effondrée après le séisme de 2009 et actuellement en reconstruction.",
      de: "Mittelalterlicher Vierecksturm, nach dem Erdbeben 2009 in der Wiederaufbau in Arbeit.",
      es: "Torre cuadrada medieval, derrumbada tras el terremoto de 2009 y actualmente en reconstrucción.",
    },
    fullDescription: {
      it: "La Torre Medievale di Civitaretenga era il simbolo storico del borgo fino al suo tragico crollo avvenuto durante il terremoto del 6 aprile 2009.  Costruita originariamente intorno al XII o XIII secolo sorgeva nel cuore del rione Castello, l'area più antica del borgo fortificato e adiacente al suggestivo Ghetto Ebraico (o via Guidea). Conosciuta localmente anche come Torre dell'Orologio poiché nel XIX secolo vi era stato installato un meccanismo da parrocchia, la struttura rappresentava l'ultimo baluardo rimasto dell'antico sistema difensivo e del castello che dominava l'Altopiano di Navelli.",
      en: "The Medieval Tower of Civitaretenga was the historic symbol of the village until its tragic collapse during the earthquake of April 6, 2009. Originally built around the 12th or 13th century, it stood in the heart of the Castello district, the oldest area of the fortified village and adjacent to the evocative Jewish Ghetto (or Via Guidea). Locally also known as the Clock Tower since a parish clock mechanism was installed in the 19th century, the structure represented the last remaining bulwark of the ancient defensive system and castle that dominated the Navelli Plateau.",
      fr: "La tour médiévale de Civitaretenga était le symbole historique du village jusqu'à son effondrement tragique lors du tremblement de terre du 6 avril 2009. Construite à l'origine vers le XIIe ou XIIIe siècle, elle se dressait au cœur du quartier Castello, la plus ancienne zone du village fortifié et adjacente à l'évocateur ghetto juif (ou Via Guidea). Connue localement aussi sous le nom de Tour de l'Horloge car un mécanisme d'horloge paroissiale y avait été installé au XIXe siècle, la structure représentait le dernier bastion restant de l'ancien système défensif et du château qui dominait le plateau de Navelli.",
      de: "Der mittelalterliche Turm von Civitaretenga war das historische Symbol des Dorfes bis zu seinem tragischen Einsturz während des Erdbebens am 6. April 2009. Ursprünglich um das 12. oder 13. Jahrhundert erbaut, stand er im Herzen des Castello-Viertels, dem ältesten Bereich des befestigten Dorfes und angrenzend an das eindrucksvolle jüdische Ghetto (oder Via Guidea). Lokal auch als Uhrturm bekannt, da im 19. Jahrhundert ein Pfarruhrwerk installiert wurde, repräsentierte die Struktur den letzten verbliebenen Bollwerk des alten Verteidigungssystems und der Burg, die das Navelli-Plateau dominierte.",
      es: "La Torre Medieval de Civitaretenga fue el símbolo histórico del pueblo hasta su trágico colapso durante el terremoto del 6 de abril de 2009. Construida originalmente alrededor del siglo XII o XIII, se encontraba en el corazón del distrito Castello, la zona más antigua del pueblo fortificado y adyacente al evocador Gueto Judío (o Via Guidea). Conocida localmente también como Torre del Reloj ya que en el siglo XIX se instaló un mecanismo de reloj parroquial, la estructura representaba el último baluarte restante del antiguo sistema defensivo y del castillo que dominaba el Altiplano de Navelli.",
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
