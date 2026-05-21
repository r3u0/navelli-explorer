// =============================================================================
// FILE TRADUZIONI / TRANSLATIONS
// -----------------------------------------------------------------------------
// COME MODIFICARE:
// Per cambiare un testo del sito, trova la chiave nella lingua desiderata
// (it = italiano, en = inglese, fr = francese, de = tedesco, es = spagnolo)
// e modifica il valore tra virgolette. Salva il file: il sito si aggiorna.
//
// Per aggiungere una nuova lingua: aggiungila al tipo `Lang`, poi aggiungi
// una nuova proprietà ad ogni oggetto con le traduzioni.
// =============================================================================

export type Lang = "it" | "en" | "fr" | "de" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export type Multilang = Record<Lang, string>;

const T = <T extends Record<string, Multilang>>(t: T) => t;

export const translations = T({
  // Nav
  nav_home: { it: "Home", en: "Home", fr: "Accueil", de: "Start", es: "Inicio" },
  nav_tour: { it: "Tour guidato", en: "Guided Tour", fr: "Visite guidée", de: "Rundgang", es: "Recorrido" },
  nav_stops: { it: "Punti d'interesse", en: "Points of Interest", fr: "Points d'intérêt", de: "Sehenswürdigkeiten", es: "Puntos de interés" },
  nav_map: { it: "Mappa", en: "Map", fr: "Carte", de: "Karte", es: "Mapa" },
  nav_events: { it: "Eventi", en: "Events", fr: "Événements", de: "Veranstaltungen", es: "Eventos" },
  nav_food: { it: "Cibo & tradizioni", en: "Food & Traditions", fr: "Cuisine & traditions", de: "Essen & Traditionen", es: "Comida y tradiciones" },
  nav_hospitality: { it: "Ospitalità", en: "Hospitality", fr: "Hébergement", de: "Unterkunft", es: "Hospedaje" },
  nav_getting_here: { it: "Come arrivare", en: "Getting Here", fr: "Comment venir", de: "Anreise", es: "Cómo llegar" },

  // Home
  home_tagline: { it: "Navelli — L'Oro Rosso d'Abruzzo", en: "Navelli — The Red Gold of Abruzzo", fr: "Navelli — L'Or Rouge des Abruzzes", de: "Navelli — Das Rote Gold der Abruzzen", es: "Navelli — El Oro Rojo de Abruzzo" },
  home_subtitle: { it: "Un borgo medievale tra i più belli d'Italia, custode dello zafferano DOP", en: "A medieval village among the most beautiful in Italy, home of DOP saffron", fr: "Un village médiéval parmi les plus beaux d'Italie, terre du safran DOP", de: "Eines der schönsten mittelalterlichen Dörfer Italiens, Heimat des DOP-Safrans", es: "Un pueblo medieval entre los más bellos de Italia, hogar del azafrán DOP" },
  home_intro: {
    it: "Arroccato a 760 metri sull'altopiano omonimo, Navelli è un labirinto di vicoli, archi e palazzi in pietra. Qui, nel XIII secolo, il monaco domenicano Fra' Santucci portò dalla Spagna i bulbi di Crocus sativus che hanno reso questa terra famosa nel mondo per lo zafferano DOP — l'oro rosso d'Abruzzo.",
    en: "Perched at 760 metres on its eponymous plateau, Navelli is a labyrinth of alleys, arches and stone palaces. In the 13th century the Dominican monk Fra' Santucci brought from Spain the Crocus sativus bulbs that have made this land world-famous for its DOP saffron — the red gold of Abruzzo.",
    fr: "Perché à 760 mètres sur son plateau éponyme, Navelli est un labyrinthe de ruelles, d'arcs et de palais en pierre. Au XIIIe siècle, le moine dominicain Fra' Santucci rapporta d'Espagne les bulbes de Crocus sativus qui ont rendu cette terre célèbre pour son safran DOP — l'or rouge des Abruzzes.",
    de: "Auf 760 Metern Höhe auf der gleichnamigen Hochebene gelegen, ist Navelli ein Labyrinth aus Gassen, Bögen und Steinpalästen. Im 13. Jahrhundert brachte der Dominikanermönch Fra' Santucci aus Spanien die Crocus-sativus-Knollen, die dieses Land für den DOP-Safran berühmt gemacht haben — das rote Gold der Abruzzen.",
    es: "Encaramado a 760 metros sobre su altiplano homónimo, Navelli es un laberinto de callejones, arcos y palacios de piedra. En el siglo XIII el monje dominico Fra' Santucci trajo de España los bulbos de Crocus sativus que han hecho famosa esta tierra por su azafrán DOP — el oro rojo de Abruzzo."
  },
  home_cta_tour: { it: "Inizia il tour", en: "Start the tour", fr: "Commencer la visite", de: "Tour starten", es: "Comenzar el recorrido" },
  start_now: { it: "Inizia ora", en: "Start now", fr: "Commencer", de: "Jetzt starten", es: "Empezar ahora" },
  home_cta_map: { it: "Esplora la mappa", en: "Explore the map", fr: "Explorer la carte", de: "Karte erkunden", es: "Explorar el mapa" },
  home_highlight_history: { it: "Storia millenaria", en: "Millennia of history", fr: "Histoire millénaire", de: "Jahrtausendealte Geschichte", es: "Historia milenaria" },
  home_highlight_history_desc: { it: "Dal tempio romano di Ercole alla chiesa di Santa Maria in Cerulis dell'XI secolo.", en: "From the Roman temple of Hercules to the 11th-century church of Santa Maria in Cerulis.", fr: "Du temple romain d'Hercule à l'église de Santa Maria in Cerulis du XIe siècle.", de: "Vom römischen Tempel des Herkules bis zur Kirche Santa Maria in Cerulis aus dem 11. Jahrhundert.", es: "Del templo romano de Hércules a la iglesia de Santa Maria in Cerulis del siglo XI." },
  home_highlight_saffron: { it: "Zafferano DOP", en: "DOP Saffron", fr: "Safran DOP", de: "DOP-Safran", es: "Azafrán DOP" },
  home_highlight_saffron_desc: { it: "Tra ottobre e novembre l'altopiano si tinge di viola con la fioritura del Crocus sativus.", en: "Between October and November the plateau turns purple with the bloom of Crocus sativus.", fr: "Entre octobre et novembre, le plateau se teinte de violet avec la floraison du Crocus sativus.", de: "Zwischen Oktober und November färbt sich die Hochebene violett mit der Blüte des Crocus sativus.", es: "Entre octubre y noviembre el altiplano se tiñe de violeta con la floración del Crocus sativus." },
  home_highlight_borgo: { it: "Borghi più belli d'Italia", en: "Most Beautiful Villages of Italy", fr: "Plus Beaux Villages d'Italie", de: "Schönste Dörfer Italiens", es: "Pueblos más bellos de Italia" },
  home_highlight_borgo_desc: { it: "Navelli è ufficialmente parte del prestigioso club dei borghi più belli d'Italia.", en: "Navelli is officially part of the prestigious club of Italy's most beautiful villages.", fr: "Navelli fait officiellement partie du club prestigieux des plus beaux villages d'Italie.", de: "Navelli ist offiziell Teil des renommierten Clubs der schönsten Dörfer Italiens.", es: "Navelli forma parte oficialmente del prestigioso club de los pueblos más bellos de Italia." },
  home_highlight_history_more: {
    it: "Le origini di Navelli affondano nell'epoca italica e romana: l'altopiano era attraversato dal tratturo Magno L'Aquila–Foggia e ospitava un tempio dedicato a Ercole Curino, di cui restano tracce nei resti archeologici della zona. Nel Medioevo il borgo si organizzò intorno al castello dei Caracciolo (XII–XIV sec.), con cinta muraria, porte, torri di guardia e un fitto reticolo di vicoli in pietra calcarea bianca. La chiesa di Santa Maria in Cerulis, di origine romanica (XI sec.), conserva affreschi tre-quattrocenteschi. Civitaretenga, frazione gemella, fu un avamposto fortificato lungo la via dei pellegrini e custodisce ancora il ghetto ebraico, la torre quadra medievale e diverse chiese di pregio.",
    en: "Navelli's origins reach back to Italic and Roman times: the plateau was crossed by the L'Aquila–Foggia 'tratturo' and hosted a temple to Hercules Curinus, whose remains still survive nearby. In the Middle Ages the village grew around the Caracciolo castle (12th–14th c.), with walls, gates, watchtowers and a dense web of white limestone alleys. The Romanesque church of Santa Maria in Cerulis (11th c.) preserves 14th–15th-century frescoes. The twin hamlet of Civitaretenga was a fortified pilgrim outpost and still holds its Jewish ghetto, medieval square tower and several remarkable churches.",
    fr: "Les origines de Navelli remontent à l'époque italique et romaine : le plateau était traversé par le « tratturo » L'Aquila–Foggia et abritait un temple dédié à Hercule Curinus, dont des vestiges subsistent. Au Moyen Âge le bourg s'est organisé autour du château des Caracciolo (XIIe–XIVe s.), avec remparts, portes, tours de guet et un réseau dense de ruelles en pierre calcaire blanche. L'église romane de Santa Maria in Cerulis (XIe s.) conserve des fresques des XIVe–XVe siècles. Civitaretenga, hameau jumeau, était un avant-poste fortifié sur la voie des pèlerins et garde encore son ghetto juif, sa tour carrée médiévale et plusieurs églises remarquables.",
    de: "Die Ursprünge Navellis reichen in die italische und römische Zeit zurück: die Hochebene wurde vom Tratturo L'Aquila–Foggia durchquert und beherbergte einen Tempel des Hercules Curinus, dessen Reste noch sichtbar sind. Im Mittelalter wuchs der Ort um die Burg der Caracciolo (12.–14. Jh.), mit Mauern, Toren, Wachtürmen und einem dichten Netz aus Gassen aus weißem Kalkstein. Die romanische Kirche Santa Maria in Cerulis (11. Jh.) bewahrt Fresken aus dem 14.–15. Jahrhundert. Das Schwesterdorf Civitaretenga war ein befestigter Pilgerposten und beherbergt noch jüdisches Ghetto, mittelalterlichen Quadratturm und mehrere bedeutende Kirchen.",
    es: "Los orígenes de Navelli se remontan a la época itálica y romana: el altiplano era atravesado por el «tratturo» L'Aquila–Foggia y albergaba un templo dedicado a Hércules Curino, del que aún quedan restos. En la Edad Media el pueblo se organizó en torno al castillo de los Caracciolo (s. XII–XIV), con murallas, puertas, torres de vigilancia y una densa red de callejones de piedra caliza blanca. La iglesia románica de Santa Maria in Cerulis (s. XI) conserva frescos de los s. XIV–XV. Civitaretenga, aldea hermana, fue un puesto fortificado en la vía de los peregrinos y guarda aún el gueto judío, la torre cuadrada medieval y varias iglesias notables.",
  },
  home_highlight_saffron_more: {
    it: "Lo zafferano di Navelli — Crocus sativus L. — è coltivato sull'altopiano dal XIII secolo, quando il monaco domenicano Santucci ne portò i bulbi dalla Spagna. La fioritura avviene per due–tre settimane tra fine ottobre e inizio novembre: i fiori si raccolgono all'alba, prima che si aprano, e gli stimmi rossi vengono separati a mano lo stesso giorno e essiccati su setacci sopra braci di mandorlo. Per un solo grammo di zafferano servono circa 150–200 fiori. Dal 2005 è tutelato dal marchio DOP «Zafferano dell'Aquila» ed è considerato tra i più puri al mondo (categoria I ISO 3632), con un colore intenso, profumo agrumato e sapore dolce-amaro.",
    en: "Navelli saffron — Crocus sativus L. — has been grown on the plateau since the 13th century, when Dominican friar Santucci brought the bulbs from Spain. Flowering lasts two to three weeks between late October and early November: flowers are picked at dawn before they open, the red stigmas are separated by hand the same day and dried on sieves over almond-wood embers. About 150–200 flowers are needed for a single gram. Since 2005 it carries the DOP mark «Zafferano dell'Aquila» and is considered among the purest in the world (ISO 3632 category I), with intense colour, citrus aroma and bittersweet taste.",
    fr: "Le safran de Navelli — Crocus sativus L. — est cultivé sur le plateau depuis le XIIIe siècle, quand le moine dominicain Santucci en rapporta les bulbes d'Espagne. La floraison dure deux à trois semaines entre fin octobre et début novembre : les fleurs se cueillent à l'aube avant qu'elles ne s'ouvrent, les stigmates rouges sont séparés à la main le jour même et séchés sur des tamis au-dessus de braises d'amandier. Il faut environ 150–200 fleurs pour un seul gramme. Depuis 2005 il porte la marque DOP « Zafferano dell'Aquila » et est considéré parmi les plus purs au monde (catégorie I ISO 3632), avec une couleur intense, un arôme d'agrumes et un goût doux-amer.",
    de: "Der Safran von Navelli — Crocus sativus L. — wird auf der Hochebene seit dem 13. Jahrhundert angebaut, als der Dominikanermönch Santucci die Zwiebeln aus Spanien mitbrachte. Die Blüte dauert zwei bis drei Wochen zwischen Ende Oktober und Anfang November: die Blüten werden im Morgengrauen vor dem Öffnen gepflückt, die roten Narben am selben Tag von Hand getrennt und auf Sieben über Mandelholzglut getrocknet. Für nur ein Gramm sind etwa 150–200 Blüten nötig. Seit 2005 trägt er das DOP-Siegel «Zafferano dell'Aquila» und gilt weltweit als einer der reinsten (ISO 3632 Kategorie I), mit intensiver Farbe, Zitrusduft und bittersüßem Geschmack.",
    es: "El azafrán de Navelli — Crocus sativus L. — se cultiva en el altiplano desde el siglo XIII, cuando el fraile dominico Santucci trajo los bulbos desde España. La floración dura dos o tres semanas entre finales de octubre y principios de noviembre: las flores se recogen al amanecer antes de abrirse, los estigmas rojos se separan a mano el mismo día y se secan en cribas sobre brasas de almendro. Hacen falta unas 150–200 flores para un solo gramo. Desde 2005 lleva la marca DOP «Zafferano dell'Aquila» y se considera entre los más puros del mundo (categoría I ISO 3632), de color intenso, aroma cítrico y sabor agridulce.",
  },
  home_highlight_borgo_more: {
    it: "Navelli è iscritto nel club «I Borghi più Belli d'Italia», l'associazione che dal 2001 tutela i piccoli centri storici di eccellenza. Il riconoscimento valuta integrità urbanistica, qualità architettonica, vivibilità e valorizzazione del patrimonio. Passeggiando per il borgo si attraversano archi medievali, scalinate in pietra, palazzi nobiliari come Palazzo Santucci, chiese, l'antica cappella di San Pasquale e si arriva al castello che domina la valle Tritana. Le case in pietra calcarea bianca, addossate l'una all'altra a spirale intorno al colle, regalano scorci e panorami che spaziano dal Gran Sasso alla Maiella. Anche Civitaretenga merita la visita per il suo ghetto ebraico, il Monastero di Sant'Antonio e la torre quadra.",
    en: "Navelli belongs to the «I Borghi più Belli d'Italia» club, the association that since 2001 protects Italy's outstanding small historic centres. The accolade assesses urban integrity, architectural quality, liveability and heritage care. Wandering the village you cross medieval arches, stone staircases, noble palaces like Palazzo Santucci, churches, the old San Pasquale chapel and reach the castle overlooking the Tritana valley. The white limestone houses, packed in a spiral around the hill, frame views from the Gran Sasso to the Majella. Civitaretenga too rewards the visit with its Jewish ghetto, the Monastery of Sant'Antonio and the square tower.",
    fr: "Navelli est inscrit au club « I Borghi più Belli d'Italia », association qui depuis 2001 protège les petits centres historiques d'exception. Le label évalue l'intégrité urbaine, la qualité architecturale, la qualité de vie et la mise en valeur du patrimoine. En flânant dans le bourg on traverse arcs médiévaux, escaliers en pierre, palais nobles comme le Palais Santucci, églises, l'ancienne chapelle de San Pasquale et l'on rejoint le château qui domine la vallée Tritana. Les maisons en calcaire blanc, serrées en spirale autour de la colline, offrent des vues du Gran Sasso à la Majella. Civitaretenga mérite aussi la visite pour son ghetto juif, le monastère de Sant'Antonio et la tour carrée.",
    de: "Navelli gehört zum Club «I Borghi più Belli d'Italia», der seit 2001 die herausragendsten kleinen historischen Ortskerne Italiens schützt. Die Auszeichnung bewertet städtebauliche Integrität, architektonische Qualität, Lebensqualität und Denkmalpflege. Beim Spaziergang durch den Ort durchquert man mittelalterliche Bögen, Steintreppen, Adelspaläste wie den Palazzo Santucci, Kirchen, die alte Kapelle San Pasquale und gelangt zur Burg über dem Tritana-Tal. Die weißen Kalksteinhäuser, spiralförmig um den Hügel gedrängt, bieten Ausblicke vom Gran Sasso bis zur Majella. Auch Civitaretenga lohnt den Besuch mit jüdischem Ghetto, Sant'Antonio-Kloster und Quadratturm.",
    es: "Navelli pertenece al club «I Borghi più Belli d'Italia», la asociación que desde 2001 protege los pequeños centros históricos de excelencia. El reconocimiento valora la integridad urbana, la calidad arquitectónica, la habitabilidad y la conservación del patrimonio. Paseando por el pueblo se cruzan arcos medievales, escalinatas de piedra, palacios nobles como el Palazzo Santucci, iglesias, la antigua capilla de San Pasquale y se llega al castillo que domina el valle Tritana. Las casas de piedra caliza blanca, apiñadas en espiral en torno al cerro, regalan vistas desde el Gran Sasso hasta la Majella. Civitaretenga también merece la visita por su gueto judío, el Monasterio de Sant'Antonio y la torre cuadrada.",
  },
  home_highlight_readmore: { it: "Scopri di più", en: "Read more", fr: "En savoir plus", de: "Mehr erfahren", es: "Saber más" },
  home_highlight_readless: { it: "Mostra meno", en: "Show less", fr: "Voir moins", de: "Weniger anzeigen", es: "Ver menos" },

  // Tour
  tour_title: { it: "Tour guidato del borgo", en: "Guided village tour", fr: "Visite guidée du village", de: "Geführter Dorfrundgang", es: "Recorrido guiado del pueblo" },
  tour_subtitle: { it: "16 tappe tra Navelli, l'altopiano e Civitaretenga", en: "16 stops across Navelli, the plateau and Civitaretenga", fr: "16 étapes entre Navelli, le plateau et Civitaretenga", de: "16 Stationen in Navelli, der Hochebene und Civitaretenga", es: "16 paradas entre Navelli, el altiplano y Civitaretenga" },
  tour_duration: { it: "Il percorso completo richiede circa 2–3 ore a piedi", en: "The full route takes approximately 2–3 hours on foot", fr: "Le parcours complet dure environ 2 à 3 heures à pied", de: "Der gesamte Rundgang dauert etwa 2–3 Stunden zu Fuß", es: "El recorrido completo dura aproximadamente 2–3 horas a pie" },
  car_required_title: {
    it: "Serve l'auto tra Navelli e Civitaretenga",
    en: "A car is required between Navelli and Civitaretenga",
    fr: "Une voiture est nécessaire entre Navelli et Civitaretenga",
    de: "Zwischen Navelli und Civitaretenga wird ein Auto benötigt",
    es: "Se necesita coche entre Navelli y Civitaretenga",
  },
  car_required_desc: {
    it: "Il tour si svolge in tre parti. Prima si fa il giro a piedi di Navelli (tappe 1–10) partendo e tornando in Piazza San Pelino. Da lì si riprende l'auto per la Chiesa di Santa Maria in Cerulis (tappa 11, ~2,5 km), poi si prosegue sempre in auto verso Civitaretenga (tappe 12–16, ~2 km). Le tappe 11–16 non sono raggiungibili a piedi.",
    en: "The tour has three parts. First, walk the Navelli loop (stops 1–10) starting and ending at Piazza San Pelino. From there drive to the Church of Santa Maria in Cerulis (stop 11, ~2.5 km), and then continue by car to Civitaretenga (stops 12–16, ~2 km). Stops 11–16 cannot be reached on foot.",
    fr: "Le tour se déroule en trois parties. D'abord la boucle à pied de Navelli (étapes 1–10). Puis en voiture vers Santa Maria in Cerulis (étape 11, ~2,5 km), et toujours en voiture vers Civitaretenga (étapes 12–16, ~2 km). Les étapes 11–16 ne sont pas accessibles à pied.",
    de: "Die Tour besteht aus drei Teilen. Zuerst der Rundgang durch Navelli (Stationen 1–10). Dann mit dem Auto nach Santa Maria in Cerulis (Station 11, ~2,5 km) und weiter nach Civitaretenga (Stationen 12–16, ~2 km). Die Stationen 11–16 sind nicht zu Fuß erreichbar.",
    es: "El tour tiene tres partes. Primero el recorrido a pie por Navelli (paradas 1–10). Luego en coche hasta Santa Maria in Cerulis (parada 11, ~2,5 km), y en coche hasta Civitaretenga (paradas 12–16, ~2 km). Las paradas 11–16 no son accesibles a pie.",
  },

  // Booking
  book_visit: { it: "Prenota la visita", en: "Book visit now", fr: "Réserver la visite", de: "Besuch buchen", es: "Reservar visita" },
  booking_required_title: {
    it: "Visita su prenotazione",
    en: "Visit by appointment only",
    fr: "Visite sur réservation",
    de: "Besuch nur nach Voranmeldung",
    es: "Visita con reserva",
  },
  booking_required_desc: {
    it: "La maggior parte delle chiese e dei monumenti del borgo è normalmente chiusa. Per visitare gli interni è necessario prenotare una visita guidata con la Pro Loco di Navelli con almeno 2 ore di preavviso.",
    en: "Most churches and monuments in the village are normally closed. To visit their interiors you must book a guided tour with the Pro Loco di Navelli at least 2 hours in advance.",
    fr: "La plupart des églises et monuments du village sont normalement fermés. Pour visiter les intérieurs il faut réserver une visite guidée auprès de la Pro Loco di Navelli avec au moins 2 heures de préavis.",
    de: "Die meisten Kirchen und Denkmäler im Dorf sind normalerweise geschlossen. Für eine Innenbesichtigung muss bei der Pro Loco di Navelli mit mindestens 2 Stunden Vorlauf eine Führung gebucht werden.",
    es: "La mayoría de las iglesias y monumentos del pueblo están normalmente cerrados. Para visitar los interiores hay que reservar una visita guiada con la Pro Loco di Navelli al menos 2 horas antes.",
  },
  booking_choose: { it: "Scegli come prenotare:", en: "Choose how to book:", fr: "Choisissez comment réserver :", de: "Wählen Sie, wie Sie buchen möchten:", es: "Elige cómo reservar:" },
  booking_whatsapp: { it: "WhatsApp", en: "WhatsApp", fr: "WhatsApp", de: "WhatsApp", es: "WhatsApp" },
  booking_email: { it: "Email", en: "Email", fr: "E-mail", de: "E-Mail", es: "Correo" },
  booking_phone: { it: "Telefono fisso", en: "Landline", fr: "Téléphone fixe", de: "Festnetz", es: "Teléfono fijo" },
  booking_notice: {
    it: "Si prega di prenotare con almeno 2 ore di anticipo.",
    en: "Please book with at least 2 hours' notice.",
    fr: "Merci de réserver avec au moins 2 heures de préavis.",
    de: "Bitte mindestens 2 Stunden im Voraus buchen.",
    es: "Por favor reserve con al menos 2 horas de antelación.",
  },

  // Visit notice
  visit_notes: { it: "Note per la visita", en: "Visit notes", fr: "Notes pour la visite", de: "Hinweise zum Besuch", es: "Notas para la visita" },
  car_needed: { it: "Serve l'auto", en: "Car needed", fr: "Voiture nécessaire", de: "Auto nötig", es: "Se necesita coche" },

  // Official links section (home)
  links_title: { it: "Link ufficiali", en: "Official links", fr: "Liens officiels", de: "Offizielle Links", es: "Enlaces oficiales" },
  links_intro: {
    it: "Per informazioni amministrative, eventi e iniziative turistiche, visita i siti ufficiali del Comune di Navelli e della Pro Loco.",
    en: "For administrative information, events and tourist initiatives, visit the official websites of the Municipality of Navelli and the Pro Loco.",
    fr: "Pour les informations administratives, les événements et les initiatives touristiques, visitez les sites officiels de la Mairie de Navelli et de la Pro Loco.",
    de: "Für Verwaltungsinformationen, Veranstaltungen und touristische Initiativen besuchen Sie die offiziellen Webseiten der Gemeinde Navelli und der Pro Loco.",
    es: "Para información administrativa, eventos e iniciativas turísticas, visite las webs oficiales del Ayuntamiento de Navelli y de la Pro Loco.",
  },
  links_municipality: { it: "Comune di Navelli", en: "Municipality of Navelli", fr: "Mairie de Navelli", de: "Gemeinde Navelli", es: "Ayuntamiento de Navelli" },
  links_municipality_desc: {
    it: "Sito istituzionale del Comune: avvisi, uffici, atti e contatti.",
    en: "Institutional website of the Municipality: notices, offices, deeds and contacts.",
    fr: "Site institutionnel de la Mairie : annonces, services, actes et contacts.",
    de: "Offizielle Webseite der Gemeinde: Bekanntmachungen, Ämter, Urkunden und Kontakte.",
    es: "Sitio institucional del Ayuntamiento: avisos, oficinas, actos y contactos.",
  },
  links_proloco: { it: "Pro Loco di Navelli", en: "Pro Loco of Navelli", fr: "Pro Loco de Navelli", de: "Pro Loco von Navelli", es: "Pro Loco de Navelli" },
  links_proloco_desc: {
    it: "Visit Navelli: visite guidate, eventi, prenotazioni e informazioni turistiche.",
    en: "Visit Navelli: guided tours, events, bookings and tourist information.",
    fr: "Visit Navelli : visites guidées, événements, réservations et informations touristiques.",
    de: "Visit Navelli: Führungen, Veranstaltungen, Reservierungen und Touristeninformationen.",
    es: "Visit Navelli: visitas guiadas, eventos, reservas e información turística.",
  },
  links_visit: { it: "Visita il sito", en: "Visit the site", fr: "Visiter le site", de: "Webseite besuchen", es: "Visitar el sitio" },

  // Stops
  stops_title: { it: "Punti d'interesse", en: "Points of Interest", fr: "Points d'intérêt", de: "Sehenswürdigkeiten", es: "Puntos de interés" },
  discover_more: { it: "Scopri di più", en: "Discover more", fr: "Découvrir", de: "Mehr entdecken", es: "Descubrir más" },
  stop: { it: "Tappa", en: "Stop", fr: "Étape", de: "Station", es: "Parada" },
  prev_stop: { it: "Tappa precedente", en: "Previous stop", fr: "Étape précédente", de: "Vorherige Station", es: "Parada anterior" },
  next_stop: { it: "Tappa successiva", en: "Next stop", fr: "Étape suivante", de: "Nächste Station", es: "Siguiente parada" },
  view_full_route: { it: "Vedi tutto il percorso", en: "View full route", fr: "Voir tout le parcours", de: "Ganze Route anzeigen", es: "Ver todo el recorrido" },
  share: { it: "Condividi", en: "Share", fr: "Partager", de: "Teilen", es: "Compartir" },
  link_copied: { it: "Link copiato!", en: "Link copied!", fr: "Lien copié !", de: "Link kopiert!", es: "¡Enlace copiado!" },
  about: { it: "Informazioni", en: "About", fr: "À propos", de: "Über", es: "Acerca de" },
  walking_distance: { it: "a piedi", en: "walking", fr: "à pied", de: "zu Fuß", es: "a pie" },

  // Categories
  cat_gate: { it: "Porta medievale", en: "Medieval gate", fr: "Porte médiévale", de: "Mittelalterliches Tor", es: "Puerta medieval" },
  cat_church: { it: "Chiesa", en: "Church", fr: "Église", de: "Kirche", es: "Iglesia" },
  cat_palace: { it: "Palazzo", en: "Palace", fr: "Palais", de: "Palast", es: "Palacio" },
  cat_nature: { it: "Natura", en: "Nature", fr: "Nature", de: "Natur", es: "Naturaleza" },
  cat_monument: { it: "Monumento", en: "Monument", fr: "Monument", de: "Denkmal", es: "Monumento" },
  cat_historic: { it: "Sito storico", en: "Historic site", fr: "Site historique", de: "Historische Stätte", es: "Sitio histórico" },
  cat_arte: { it: "Arte", en: "Art", fr: "Art", de: "Kunst", es: "Arte" },
  cat_piazza: { it: "Piazza", en: "Square", fr: "Place", de: "Platz", es: "Plaza" },

  // Map
  map_title: { it: "Mappa interattiva", en: "Interactive map", fr: "Carte interactive", de: "Interaktive Karte", es: "Mapa interactivo" },
  map_locate_me: { it: "Localizzami", en: "Locate me", fr: "Me localiser", de: "Mich orten", es: "Localízame" },
  map_show_hospitality: { it: "Mostra ospitalità", en: "Show hospitality", fr: "Afficher hébergement", de: "Unterkunft anzeigen", es: "Mostrar hospedaje" },

  // Events
  events_title: { it: "Eventi", en: "Events", fr: "Événements", de: "Veranstaltungen", es: "Eventos" },
  events_subtitle: { it: "Sagre, feste e tradizioni di Navelli", en: "Festivals, feasts and traditions of Navelli", fr: "Fêtes et traditions de Navelli", de: "Feste und Traditionen von Navelli", es: "Fiestas y tradiciones de Navelli" },
  events_upcoming: { it: "Prossimi eventi", en: "Upcoming events", fr: "Prochains événements", de: "Kommende Veranstaltungen", es: "Próximos eventos" },
  events_past: { it: "Eventi passati", en: "Past events", fr: "Événements passés", de: "Vergangene Veranstaltungen", es: "Eventos pasados" },
  events_all: { it: "Tutti", en: "All", fr: "Tous", de: "Alle", es: "Todos" },
  cat_sagra: { it: "Sagra", en: "Food festival", fr: "Fête gastronomique", de: "Volksfest", es: "Fiesta gastronómica" },
  cat_religious: { it: "Religioso", en: "Religious", fr: "Religieux", de: "Religiös", es: "Religioso" },
  cat_cultural: { it: "Culturale", en: "Cultural", fr: "Culturel", de: "Kulturell", es: "Cultural" },
  cat_music: { it: "Musica", en: "Music", fr: "Musique", de: "Musik", es: "Música" },
  cat_nature_ev: { it: "Natura", en: "Nature", fr: "Nature", de: "Natur", es: "Naturaleza" },
  cat_arte_ev: { it: "Arte", en: "Art", fr: "Art", de: "Kunst", es: "Arte" },

  // Hospitality
  hosp_title: { it: "Dove dormire, mangiare e bere", en: "Where to sleep, eat and drink", fr: "Où dormir, manger et boire", de: "Wo schlafen, essen und trinken", es: "Dónde dormir, comer y beber" },
  hosp_banner: {
    it: "Navelli è un borgo piccolo e autentico: ti consigliamo di prenotare in anticipo, soprattutto durante la fioritura dello zafferano (ottobre–novembre) e ad agosto per la Sagra dei Ceci.",
    en: "Navelli is a small and authentic village — we recommend booking in advance, especially during the saffron blooming season (October–November) and in August for the Sagra dei Ceci.",
    fr: "Navelli est un village petit et authentique — nous vous recommandons de réserver à l'avance, surtout pendant la floraison du safran (octobre–novembre) et en août pour la Sagra dei Ceci.",
    de: "Navelli ist ein kleines und authentisches Dorf — wir empfehlen, frühzeitig zu buchen, besonders während der Safranblüte (Oktober–November) und im August zur Sagra dei Ceci.",
    es: "Navelli es un pueblo pequeño y auténtico — recomendamos reservar con antelación, especialmente durante la floración del azafrán (octubre–noviembre) y en agosto para la Sagra dei Ceci."
  },
  hosp_sleep: { it: "🛏️ Dove dormire", en: "🛏️ Where to sleep", fr: "🛏️ Où dormir", de: "🛏️ Wo schlafen", es: "🛏️ Dónde dormir" },
  hosp_eat: { it: "🍽️ Dove mangiare", en: "🍽️ Where to eat", fr: "🍽️ Où manger", de: "🍽️ Wo essen", es: "🍽️ Dónde comer" },
  hosp_drink: { it: "🍺 Bar & drink", en: "🍺 Bars & drinks", fr: "🍺 Bars & boissons", de: "🍺 Bars & Getränke", es: "🍺 Bares y bebidas" },
  hosp_products: { it: "Prodotti locali da portare a casa", en: "Local products to bring home", fr: "Produits locaux à rapporter", de: "Lokale Produkte zum Mitnehmen", es: "Productos locales para llevar" },
  call: { it: "Chiama", en: "Call", fr: "Appeler", de: "Anrufen", es: "Llamar" },
  website: { it: "Sito web", en: "Website", fr: "Site web", de: "Webseite", es: "Sitio web" },
  directions: { it: "Indicazioni", en: "Directions", fr: "Itinéraire", de: "Wegbeschreibung", es: "Cómo llegar" },

  // Food
  food_title: { it: "Cibo & tradizioni", en: "Food & Traditions", fr: "Cuisine & traditions", de: "Essen & Traditionen", es: "Comida y tradiciones" },
  food_intro: {
    it: "La cucina di Navelli è povera, sincera e profondamente legata alla terra. Lo zafferano è il re, ma i ceci, i gnocchetti fatti a mano e gli arrosticini raccontano la stessa storia di pastori e contadini dell'altopiano.",
    en: "Navelli's cuisine is humble, honest and deeply tied to the land. Saffron is king, but chickpeas, hand-made gnocchetti and arrosticini tell the same story of plateau shepherds and farmers.",
    fr: "La cuisine de Navelli est humble, sincère et profondément liée à la terre. Le safran est roi, mais les pois chiches, les gnocchetti faits main et les arrosticini racontent la même histoire des bergers et paysans du plateau.",
    de: "Die Küche von Navelli ist einfach, ehrlich und tief mit dem Land verbunden. Safran ist König, aber Kichererbsen, handgemachte Gnocchetti und Arrosticini erzählen dieselbe Geschichte von Hirten und Bauern der Hochebene.",
    es: "La cocina de Navelli es humilde, sincera y profundamente ligada a la tierra. El azafrán es el rey, pero los garbanzos, los gnocchetti hechos a mano y los arrosticini cuentan la misma historia de pastores y campesinos del altiplano."
  },

  // Getting here
  getting_title: { it: "Come arrivare", en: "Getting here", fr: "Comment venir", de: "Anreise", es: "Cómo llegar" },
  getting_car: { it: "In auto", en: "By car", fr: "En voiture", de: "Mit dem Auto", es: "En coche" },
  getting_car_desc: { it: "Autostrada A24 Roma–Teramo, uscita L'Aquila Est, poi SS17 direzione Pescara per ~25 km.", en: "A24 motorway Rome–Teramo, exit L'Aquila Est, then SS17 towards Pescara for ~25 km.", fr: "Autoroute A24 Rome–Teramo, sortie L'Aquila Est, puis SS17 direction Pescara sur ~25 km.", de: "Autobahn A24 Rom–Teramo, Ausfahrt L'Aquila Est, dann SS17 Richtung Pescara für ~25 km.", es: "Autopista A24 Roma–Teramo, salida L'Aquila Est, luego SS17 hacia Pescara durante ~25 km." },
  getting_train: { it: "In treno", en: "By train", fr: "En train", de: "Mit dem Zug", es: "En tren" },
  getting_train_desc: { it: "Stazione di L'Aquila, poi autobus TUA in direzione Navelli (~45 minuti).", en: "L'Aquila station, then TUA bus towards Navelli (~45 minutes).", fr: "Gare de L'Aquila, puis bus TUA en direction de Navelli (~45 minutes).", de: "Bahnhof L'Aquila, dann TUA-Bus Richtung Navelli (~45 Minuten).", es: "Estación de L'Aquila, luego autobús TUA hacia Navelli (~45 minutos)." },
  getting_plane: { it: "In aereo", en: "By plane", fr: "En avion", de: "Mit dem Flugzeug", es: "En avión" },
  getting_plane_desc: { it: "Aeroporto di Pescara (63 km) o Roma Ciampino (150 km).", en: "Pescara airport (63 km) or Rome Ciampino (150 km).", fr: "Aéroport de Pescara (63 km) ou Rome Ciampino (150 km).", de: "Flughafen Pescara (63 km) oder Rom Ciampino (150 km).", es: "Aeropuerto de Pescara (63 km) o Roma Ciampino (150 km)." },

  // QR
  qr_title: { it: "Generatore QR Code", en: "QR Code Generator", fr: "Générateur QR Code", de: "QR-Code-Generator", es: "Generador QR" },
  qr_desc: { it: "Scarica i QR code da stampare per ogni tappa del borgo.", en: "Download printable QR codes for each village stop.", fr: "Téléchargez les QR codes à imprimer pour chaque étape.", de: "QR-Codes zum Ausdrucken für jede Station herunterladen.", es: "Descarga los códigos QR imprimibles para cada parada." },
  qr_download: { it: "Scarica PNG", en: "Download PNG", fr: "Télécharger PNG", de: "PNG herunterladen", es: "Descargar PNG" },
  qr_print_sheet: { it: "Stampa foglio completo", en: "Print full sheet", fr: "Imprimer la feuille", de: "Komplettes Blatt drucken", es: "Imprimir hoja completa" },

  // Footer
  footer_made: { it: "Tour digitale del borgo di Navelli", en: "Digital tour of the village of Navelli", fr: "Visite numérique du village de Navelli", de: "Digitaler Rundgang durch Navelli", es: "Recorrido digital del pueblo de Navelli" },
  footer_borghi: { it: "Tra i Borghi più Belli d'Italia", en: "Among the Most Beautiful Villages of Italy", fr: "Parmi les Plus Beaux Villages d'Italie", de: "Eines der schönsten Dörfer Italiens", es: "Entre los Pueblos más Bellos de Italia" },
});

export type TKey = keyof typeof translations;
