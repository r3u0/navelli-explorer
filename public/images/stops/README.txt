==============================================================================
COME GESTIRE LE FOTO DELLE TAPPE DEL TOUR
==============================================================================

Ogni tappa del tour ha la propria cartella all'interno di:
    public/images/stops/<id-tappa>/

Esempio: per la tappa "Palazzo Santucci" (id = palazzo-santucci) crea la
cartella public/images/stops/palazzo-santucci/ e inserisci dentro le foto
chiamandole 1.jpg, 2.jpg, 3.jpg ...

Gli ID delle tappe attualmente disponibili sono:

  NAVELLI
   - piazza-san-pelino
   - madonna-rosario
   - palazzo-de-roccis
   - cappella-san-pasquale
   - chiesa-san-sebastiano
   - palazzo-santucci

  CIVITARETENGA
   - monastero-sant-antonio
   - chiesa-sant-egidio
   - ghetto-ebraico
   - chiesa-san-salvatore
   - torre-civitaretenga

------------------------------------------------------------------------------
COSA FARE PASSO DOPO PASSO:

1. Apri la cartella public/images/stops/<id-tappa>/
   (se non esiste, creala con esattamente lo stesso nome dell'ID).

2. Copia dentro le foto desiderate, rinominandole 1.jpg, 2.jpg, ecc.
   Formati supportati: .jpg / .jpeg / .png / .webp
   Dimensioni consigliate: 1200×800 px, max 500 KB per foto.

3. Se vuoi aggiungere PIÙ di 2 foto a una tappa, apri src/data/stops.ts
   e aggiorna l'array `images` di quella tappa, ad esempio:
     images: [
       "/images/stops/palazzo-santucci/1.jpg",
       "/images/stops/palazzo-santucci/2.jpg",
       "/images/stops/palazzo-santucci/3.jpg",
     ],

4. Salva e ricarica la pagina: le nuove foto appariranno subito sia nella
   lista delle tappe sia nella pagina di dettaglio.

NOTA: se una foto non esiste o il file non viene trovato, il sito mostra
automaticamente un'immagine generica di placeholder, così il sito non si
"rompe" mai. Sostituiscila quando hai la foto definitiva.
==============================================================================
