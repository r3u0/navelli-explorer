// =============================================================================
// SERVIZI ESSENZIALI E PUNTI DI INTERESSE / ESSENTIAL SERVICES & POI
// -----------------------------------------------------------------------------
// COME AGGIUNGERE O MODIFICARE UN PUNTO:
// 1. Copia uno degli oggetti qui sotto.
// 2. Cambia id, type, nome, indirizzo, telefono, coordinate (lat/lng).
// 3. Per aggiungere un nuovo tipo: aggiungilo a ServiceType + SERVICE_META.
// =============================================================================

export type ServiceType =
  | "municipio"
  | "guardia-medica"
  | "carabinieri"
  | "posta"
  | "farmacia"
  | "negozio"
  | "campo-sportivo"
  | "proloco"
  | "casetta-libri"
  | "murales"
  | "biblioteca"
  | "asilo-nido"
  | "alimentari"
  | "casa-verde"
  | "bar";

export interface Service {
  id: string;
  type: ServiceType;
  name: string;
  address: string;
  phone?: string;
  /** Breve descrizione opzionale mostrata nel popup della mappa */
  description?: string;
  coordinates: { lat: number; lng: number };
}

export const SERVICE_META: Record<
  ServiceType,
  { emoji: string; label: string; color: string }
> = {
  municipio:        { emoji: "🏛️", label: "Municipio",        color: "#475569" },
  "guardia-medica": { emoji: "⚕️",  label: "Guardia Medica",   color: "#dc2626" },
  carabinieri:      { emoji: "🚓", label: "Carabinieri",      color: "#1e3a8a" },
  posta:            { emoji: "✉️",  label: "Ufficio Postale",  color: "#ca8a04" },
  farmacia:         { emoji: "💊", label: "Farmacia",         color: "#16a34a" },
  negozio:          { emoji: "🛍️", label: "Punto vendita",    color: "#9333ea" },
  "campo-sportivo": { emoji: "⚽", label: "Campo Sportivo",   color: "#15803d" },
  proloco:          { emoji: "ℹ️",  label: "Pro Loco",         color: "#0284c7" },
  "casetta-libri":  { emoji: "📚", label: "Casetta dei Libri", color: "#b45309" },
  murales:          { emoji: "🎨", label: "Murales",          color: "#db2777" },
  biblioteca:       { emoji: "📖", label: "Biblioteca",       color: "#7c3aed" },
  "asilo-nido":     { emoji: "🧸", label: "Asilo Nido",       color: "#f472b6" },
  alimentari:       { emoji: "🛒", label: "Alimentari",       color: "#f59e0b" },
  "casa-verde":     { emoji: "🌿", label: "Casa Verde",       color: "#22c55e" },
  bar:              { emoji: "🍹", label: "Bar",              color: "#0D9488" },
};

export const services: Service[] = [
  // ============ SERVIZI ESSENZIALI ============
  {
    id: "municipio-navelli",
    type: "municipio",
    name: "Municipio di Navelli",
    address: "Via Pereto, 2, 67020 Navelli AQ",
    phone: "+39 0862 959132",
    coordinates: { lat: 42.236483, lng: 13.726567 },
  },
  {
    id: "guardia-medica-navelli",
    type: "guardia-medica",
    name: "Guardia Medica",
    address: "Via Pereto, 21, 67020 Navelli AQ",
    phone: "+39 0862 959144",
    coordinates: { lat: 42.235808, lng: 13.728873 },
  },
  {
    id: "carabinieri-navelli",
    type: "carabinieri",
    name: "Stazione Carabinieri",
    address: "Via del Commercio, 24, 67020 Navelli AQ",
    phone: "112",
    coordinates: { lat: 42.235524, lng: 13.731953 },
  },
  {
    id: "posta-navelli",
    type: "posta",
    name: "Ufficio Postale",
    address: "Via Pereto, 15/2, 67020 Navelli AQ",
    phone: "+39 0862 959121",
    coordinates: { lat: 42.236370, lng: 13.726910 },
  },
  {
    id: "farmacia-navelli",
    type: "farmacia",
    name: "Farmacia",
    address: "SS17, 1, 67020 Navelli AQ",
    phone: "+39 0862 959150",
    coordinates: { lat: 42.234628, lng: 13.725360 },
  },

  // ============ PUNTI DI INTERESSE ============
  {
    id: "campo-sportivo-navelli",
    type: "campo-sportivo",
    name: "Campo Sportivo",
    address: "Navelli (AQ)",
    coordinates: { lat: 42.238665, lng: 13.720009 },
  },
  {
    id: "proloco-navelli",
    type: "proloco",
    name: "Pro Loco Navelli",
    phone: "+39 0862959158",
    address: "Via del Municipio, 31, 67020 Navelli AQ",
    coordinates: { lat: 42.236777, lng: 13.730263 },
  },

  // ============ BAR ============
  {
    id: "bar-sotto-castagno",
    type: "bar",
    name: "Sotto al Castagno",
    address: "Piazza San Pelino, Navelli (AQ)",
    phone: "+39 0862 959437",
    coordinates: { lat: 42.236233, lng: 13.731105 },
  },
  {
    id: "bar-grottino-borgo",
    type: "bar",
    name: "Il Grottino del Borgo",
    address: "Centro storico, Navelli (AQ)",
    phone: "+39 347 8767570",
    coordinates: { lat: 42.238203, lng: 13.728321 },
  },
  

  // ============ NEGOZI / PUNTI VENDITA ============
  {
    id: "Virgilio-mini-market",
    type: "alimentari",
    name: "Virgilio Mini Market",
    address: "Via del Commercio, Navelli (AQ)",
    phone: "+39 0862958405",
    description: "Orari apertura 09:30–13:54,17:30–19:30. Giovedì chiuso",
    coordinates: { lat: 42.236191, lng: 13.731631 },
  },
  {
    id: "bar-rajca-liquori",
    type: "negozio",
    name: "Rajca Liquori",
    address: "Via del Commercio, Navelli (AQ)",
    phone: "+39 334 6059179",
    description: "Contattare telefonicamente per orari e disponibilità.",
    coordinates: { lat: 42.234404, lng: 13.731043 },
  },
  {
    id: "bar-cantinarte",
    type: "negozio",
    name: "CantinArte",
    address: "Via del Municipio 21, Navelli (AQ)",
    phone: "+39 349 6992199",
    description: "Produzione di olio e vino biologico",
    coordinates: { lat: 42.236954, lng: 13.729182 },
  },
   {
    id: "Ceramiche-Casrillo",
    type: "negozio",
    name: "Ceramiche Casrillo",
    address: "Via Spiagge Grandi, 50, 67020 Navelli AQ",
    phone: "+39 3714744849",
    description: "laboratorio artigianale dove la tradizione italiana della ceramica prende forma in pezzi unici per uso domestico e ornamentale.",
    coordinates: { lat: 42.239772, lng: 13.730080 },
  },
  {
    id: "Morena-Miele",
    type: "negozio",
    name: "Morena Miele",
    address: "Via Vicenne, 4, 67020 Navelli AQ",
    phone: "+39 3663406897",
    description: "Produttore di miele biologico.",
    coordinates: { lat: 42.235194, lng: 13.728031 },
  },
  {
    id: "ZUFRAN LIQUORE ZAFFERANO DOP NAVELLI",
    type: "negozio",
    name: "Zufran Liquore Zafferano DOP Navelli",
    address: "SS 17 KM 68, 153, 67020 Navelli AQ",
    phone: "+39 3452979995",
    description: "Produttore di liquore allo zafferano biologico. ",
    coordinates: { lat: 42.234648, lng: 13.725266 },
  },

  // ============ CASETTE DEI LIBRI ============
  // Aggiungi qui le casette di condivisione libri con type: "casetta-libri".

  // ============ MURALES ============
  // Aggiungi qui i murales con type: "murales" e le coordinate corrette.
];
