// =============================================================================
// EVENTI / EVENTS
// -----------------------------------------------------------------------------
// COME AGGIUNGERE UN EVENTO:
// 1. Copia uno degli oggetti qui sotto e incollalo nella lista `events`
// 2. Modifica: id (univoco), date (formato YYYY-MM-DD), endDate (opzionale),
//    nome e descrizione nelle 5 lingue, location, categoria.
// 3. Le categorie valide sono: 'sagra' | 'religious' | 'cultural' | 'music' | 'nature'
// 4. Salva: l'evento appare automaticamente nella pagina Eventi.
// =============================================================================

import type { Multilang } from "./translations";

export type EventCategory = "sagra" | "religious" | "cultural" | "music" | "nature";

export interface NavelliEvent {
  id: string;
  name: Multilang;
  date: string; // YYYY-MM-DD
  endDate?: string;
  location: string;
  description: Multilang;
  category: EventCategory;
}

const year = new Date().getFullYear();

export const events: NavelliEvent[] = [
  {
    id: "madonna-gonfalone",
    name: {
      it: "Madonna del Gonfalone e Panarda",
      en: "Madonna del Gonfalone and Panarda",
      fr: "Madonna del Gonfalone et Panarda",
      de: "Madonna del Gonfalone und Panarda",
      es: "Madonna del Gonfalone y Panarda",
    },
    date: `${year}-05-12`,
    location: "Navelli",
    category: "religious",
    description: {
      it: "Processione religiosa e distribuzione del pane benedetto per tutto il borgo.",
      en: "Religious procession and distribution of blessed bread throughout the village.",
      fr: "Procession religieuse et distribution du pain béni dans tout le village.",
      de: "Religiöse Prozession und Verteilung des gesegneten Brotes im ganzen Dorf.",
      es: "Procesión religiosa y distribución del pan bendito por todo el pueblo.",
    },
  },
  {
    id: "navelli-estate",
    name: {
      it: "Navelli in Estate",
      en: "Navelli in Summer",
      fr: "Navelli en Été",
      de: "Navelli im Sommer",
      es: "Navelli en Verano",
    },
    date: `${year}-07-01`,
    endDate: `${year}-08-31`,
    location: "Navelli",
    category: "cultural",
    description: {
      it: "Rassegna estiva di arte, musica, teatro ed enogastronomia che anima il borgo per tutta l'estate.",
      en: "Summer festival of art, music, theatre and food events that bring the village alive all summer long.",
      fr: "Festival estival d'art, musique, théâtre et gastronomie qui anime le village tout l'été.",
      de: "Sommerfestival mit Kunst, Musik, Theater und Gastronomie, das das Dorf den ganzen Sommer belebt.",
      es: "Festival de verano de arte, música, teatro y gastronomía que anima el pueblo todo el verano.",
    },
  },
  {
    id: "sagra-ceci-zafferano",
    name: {
      it: "Sagra dei Ceci e dello Zafferano",
      en: "Chickpea and Saffron Festival",
      fr: "Fête des Pois Chiches et du Safran",
      de: "Kichererbsen- und Safranfest",
      es: "Fiesta del Garbanzo y del Azafrán",
    },
    date: `${year}-`,
    endDate: `${year}-`,
    location: "Navelli",
    category: "sagra",
    description: {
      it: "Il primo weekend dopo Ferragosto: l'evento più importante dell'anno. Include il Palio degli Asini, stand di gnocchetti allo zafferano, arrosticini, ceci dolci e cauciunitti.",
      en: "First weekend after Ferragosto: the most important event of the year. Includes the Palio degli Asini (donkey race) and food stands with saffron gnocchetti, arrosticini, sweet chickpeas and cauciunitti.",
      fr: "Premier week-end après le 15 août : l'événement le plus important de l'année. Inclut le Palio degli Asini (course d'ânes) et des stands de gnocchetti au safran.",
      de: "Erstes Wochenende nach Ferragosto: das wichtigste Ereignis des Jahres. Mit dem Palio degli Asini (Eselrennen) und Ständen mit Safran-Gnocchetti.",
      es: "Primer fin de semana después del Ferragosto: el evento más importante del año. Incluye el Palio degli Asini (carrera de burros) y puestos de gnocchetti al azafrán.",
    },
  },
  {
    id: "madonna-arco-civitaretenga",
    name: {
      it: "Madonna dell'Arco e Fiera delle Cipolle",
      en: "Madonna dell'Arco and Onion Fair",
      fr: "Madonna dell'Arco et Foire aux Oignons",
      de: "Madonna dell'Arco und Zwiebelmarkt",
      es: "Madonna dell'Arco y Feria de la Cebolla",
    },
    date: `${year}-`,
    location: "Civitaretenga",
    category: "religious",
    description: {
      it: "Domenica successiva all'8 settembre. Processione serale con fiaccolata dal paese alla cappella, seguita dalla tradizionale Fiera delle Cipolle.",
      en: "Sunday after September 8th. Evening torchlight procession from the village to the chapel, followed by the traditional Onion Fair.",
      fr: "Dimanche après le 8 septembre. Procession aux flambeaux du village à la chapelle, suivie de la traditionnelle Foire aux Oignons.",
      de: "Sonntag nach dem 8. September. Abendliche Fackelprozession vom Dorf zur Kapelle, gefolgt vom traditionellen Zwiebelmarkt.",
      es: "Domingo después del 8 de septiembre. Procesión vespertina con antorchas del pueblo a la capilla, seguida de la tradicional Feria de la Cebolla.",
    },
  },
  {
    id: "madonna-rosario",
    name: {
      it: "Madonna del Rosario e Sant'Antonio Abate",
      en: "Madonna del Rosario and Sant'Antonio Abate",
      fr: "Madonna del Rosario et Sant'Antonio Abate",
      de: "Madonna del Rosario und Sant'Antonio Abate",
      es: "Madonna del Rosario y Sant'Antonio Abate",
    },
    date: `${year}-10-06`,
    location: "Navelli",
    category: "religious",
    description: {
      it: "Prima domenica di ottobre. Processione e benedizione degli animali e degli attrezzi agricoli.",
      en: "First Sunday of October. Procession and blessing of animals and farm tools.",
      fr: "Premier dimanche d'octobre. Procession et bénédiction des animaux et outils agricoles.",
      de: "Erster Sonntag im Oktober. Prozession und Segnung der Tiere und landwirtschaftlichen Geräte.",
      es: "Primer domingo de octubre. Procesión y bendición de animales y herramientas agrícolas.",
    },
  },
  {
    id: "fioritura-zafferano",
    name: {
      it: "Fioritura dello Zafferano",
      en: "Saffron Bloom",
      fr: "Floraison du Safran",
      de: "Safranblüte",
      es: "Floración del Azafrán",
    },
    date: `${year}-10-15`,
    endDate: `${year}-11-15`,
    location: "Altopiano di Navelli",
    category: "nature",
    description: {
      it: "Ottobre–novembre: l'altopiano si tinge di viola con la fioritura del Crocus sativus. Visita all'alba per la raccolta a mano.",
      en: "October–November: the plateau turns purple with the bloom of Crocus sativus. Visit at dawn for the hand harvest.",
      fr: "Octobre–novembre : le plateau se teinte de violet avec la floraison du Crocus sativus.",
      de: "Oktober–November: Die Hochebene färbt sich violett mit der Blüte des Crocus sativus.",
      es: "Octubre–noviembre: el altiplano se tiñe de violeta con la floración del Crocus sativus.",
    },
  },
];
