import { IProduct } from "../models/iproduct";

export const MOCK_PRODUCT: IProduct[] = [
  { id: 1, name: "Smartphone", description: "Dispositivo mobile avanzato con funzioni di chiamata, messaggistica, navigazione web e multimedia.", available: true },
  { id: 2, name: "Tablet", description: "Dispositivo mobile con schermo più grande rispetto a uno smartphone, ideale per la navigazione web, l'intrattenimento e la produttività.", available: true },
  { id: 3, name: "Laptop", description: "Computer portatile con schermo, tastiera e trackpad integrati, utilizzato per lavoro, intrattenimento e produttività.", available: true },
  { id: 4, name: "Smartwatch", description: "Orologio intelligente con funzioni come controllo del fitness, notifiche, GPS e molto altro.", available: false },
  { id: 5, name: "Altoparlante intelligente", description: "Dispositivo in grado di riprodurre audio e di interagire con l'utente tramite comandi vocali.", available: true },
  { id: 6, name: "TV intelligente", description: "Televisore con funzioni di connettività come accesso a Internet, app e servizi di streaming video.", available: true },
  { id: 7, name: "Fotocamera digitale", description: "Dispositivo per scattare foto e registrare video, disponibile in diverse forme e con diverse funzionalità.", available: true },
  { id: 8, name: "Consolle di gioco", description: "Dispositivo per giocare a video giochi, disponibile in diverse forme e con diverse funzionalità.", available: true },
  { id: 9, name: "Drone", description: "Veicolo aereo pilotato a distanza utilizzato per scopi ricreativi o professionali.", available: true },
  { id: 10, name: "Realtà virtuale", description: "Tecnologia che immerge l'utente in un ambiente virtuale, solitamente indossando un dispositivo sul viso o sulle mani.", available: false }
]
