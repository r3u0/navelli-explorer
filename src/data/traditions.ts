// =============================================================================
// USANZE E TRADIZIONI / CUSTOMS AND TRADITIONS
// -----------------------------------------------------------------------------
// COME AGGIUNGERE UNA TRADIZIONE:
// 1. Copia uno degli oggetti qui sotto.
// 2. Modifica id, emoji, titolo, descrizione (5 lingue) e (opzionale) `when`.
// 3. Per le foto: metti 1 o 2 URL nella lista `images`. Possono essere:
//    - file caricati in public/images/traditions/...   → "/images/traditions/foo.jpg"
//    - URL esterne                                      → "https://..."
// 4. Salva: la scheda appare automaticamente nella pagina "Cibo & tradizioni".
// =============================================================================

import type { Multilang } from "./translations";

export interface Tradition {
  id: string;
  emoji: string;
  title: Multilang;
  description: Multilang;
  /** Quando si svolge (opzionale, mostrato come piccola etichetta). */
  when?: Multilang;
  /** 1 o 2 foto. Lascia vuoto per una scheda solo testo. */
  images?: string[];
}

export const traditions: Tradition[] = [
  {
    id: "fioritura-zafferano",
    emoji: "🌺",
    title: {
      it: "La fioritura dello zafferano",
      en: "The saffron blooming",
      fr: "La floraison du safran",
      de: "Die Safranblüte",
      es: "La floración del azafrán",
    },
    when: {
      it: "Fine ottobre – inizio novembre",
      en: "Late October – early November",
      fr: "Fin octobre – début novembre",
      de: "Ende Oktober – Anfang November",
      es: "Finales de octubre – principios de noviembre",
    },
    description: {
      it: "All'alba di ogni mattina d'autunno, intere famiglie scendono nei campi per raccogliere a mano i fiori violetti prima che il sole li apra. La sera, attorno al tavolo, si separano i pistilli rossi uno per uno — un rito collettivo che si ripete da otto secoli.",
      en: "At dawn every autumn morning, entire families head to the fields to hand-pick the violet flowers before the sun opens them. In the evening, around the table, the red threads are separated one by one — a collective rite repeated for eight centuries.",
      fr: "À l'aube, les familles cueillent à la main les fleurs violettes avant l'ouverture du soleil. Le soir, on sépare les pistils rouges un à un.",
      de: "Im Morgengrauen pflücken ganze Familien die violetten Blüten. Abends werden die roten Fäden einzeln getrennt.",
      es: "Al amanecer las familias recogen a mano las flores violetas. Por la tarde se separan los pistilos rojos uno a uno.",
    },
    images: [],
  },
  {
    id: "sagra-ceci-zafferano",
    emoji: "🎉",
    title: {
      it: "Sagra dei Ceci e dello Zafferano",
      en: "Chickpea & Saffron Festival",
      fr: "Sagra des Pois Chiches et du Safran",
      de: "Kichererbsen- und Safranfest",
      es: "Sagra de Garbanzos y Azafrán",
    },
    when: {
      it: "Agosto",
      en: "August",
      fr: "Août",
      de: "August",
      es: "Agosto",
    },
    description: {
      it: "Per due giorni il borgo si trasforma: tavolate lungo le vie medievali, musica popolare, ceci cotti nelle pignatte di terracotta e gnocchetti allo zafferano serviti a centinaia di visitatori.",
      en: "For two days the village transforms: long tables along the medieval lanes, folk music, chickpeas cooked in terracotta pots and saffron gnocchetti served to hundreds of visitors.",
      fr: "Pendant deux jours, le village se transforme : tables sur les ruelles médiévales, musique populaire, pois chiches et gnocchetti au safran.",
      de: "Zwei Tage lang verwandelt sich das Dorf: lange Tische in den mittelalterlichen Gassen, Volksmusik, Kichererbsen und Safran-Gnocchetti.",
      es: "Durante dos días el pueblo se transforma: mesas largas, música popular, garbanzos y gnocchetti al azafrán.",
    },
    images: [],
  },
  {
    id: "processione-san-sebastiano",
    emoji: "🕯️",
    title: {
      it: "Processione di San Sebastiano",
      en: "Saint Sebastian's Procession",
      fr: "Procession de Saint-Sébastien",
      de: "Sebastianus-Prozession",
      es: "Procesión de San Sebastián",
    },
    when: {
      it: "20 gennaio",
      en: "January 20th",
      fr: "20 janvier",
      de: "20. Januar",
      es: "20 de enero",
    },
    description: {
      it: "La statua del santo patrono viene portata in spalla per le vie del borgo accompagnata da candele e canti devozionali. Una tradizione che resiste immutata da generazioni.",
      en: "The statue of the patron saint is carried on shoulders through the village lanes, accompanied by candles and devotional songs. A tradition unchanged for generations.",
      fr: "La statue du saint patron est portée à travers les ruelles, avec bougies et chants dévotionnels.",
      de: "Die Statue des Schutzheiligen wird durch die Gassen getragen, begleitet von Kerzen und Andachtsgesängen.",
      es: "La estatua del santo patrón se lleva a hombros por las calles, con velas y cantos devocionales.",
    },
    images: [],
  },
];
