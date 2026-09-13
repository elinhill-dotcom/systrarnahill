# Sistertrip Milano

Mobilvänlig webbapp på svenska med 31 startplatser, sökning och kategorier, interaktiv OpenStreetMap-karta, Hotel Ariston, platsvisning på begäran och integrerade gångvägar med rosa linje och svänganvisningar. Alla platser visas med rosa symboler, även när listan filtreras. Avbockade platser kan få flera bildbevis. Egna platser läggs in via kartpunkt och formulär.

## Starta på datorn

Kör `python -m http.server 8765 --bind 127.0.0.1` i appmappen och öppna http://127.0.0.1:8765. Python behövs bara för lokal förhandsvisning. Appen kan publiceras som statiska filer på en HTTPS-webbserver.

## Användning

- Välj kategori eller sök. Hotellet finns alltid kvar på kartan.
- Tryck på ”Var är vi?” och tillåt webbläsarens platsåtkomst. Positionen uppdateras när knappen trycks, inte kontinuerligt.
- Lägg till flera stopp med ”Till rutten”. Flytta dem med pilarna. Tryck ”Visa gångvägen på kartan” för rosa gångväg, gångtid, avstånd och svenska svänganvisningar direkt i appen. Välj högst 19 stopp. När stoppen ändras tas föregående väg bort så att en gammal väg inte visas som aktuell.
- ”Gå hit från där vi är” hämtar aktuell position och visar gångvägen direkt i appen. Ingen extern kartapp öppnas.
- Bocka av en plats. Under ”Avbockat” kan ni lägga in bildbevis från bildbibliotek eller mobilens filväljare. Bilder komprimeras lokalt och sparas i IndexedDB.
- Klicka på kartan och därefter ”Egen plats” för att använda vald koordinat. Det går också att skriva koordinaterna.
- Säkerhetskopian innehåller platser, rutt, avbockningar och foton. En inläst backup ersätter rutt och avbockningar; tidigare foton behålls.

## Begränsningar i denna första version

Ingen inloggning eller automatisk synkning mellan mobiler. Data lagras i respektive webbläsare. Rensad webbläsardata kan radera minnen; använd säkerhetskopiering. Kartbilder, kartbibliotek och typsnitt kräver internet. Ingen offlinekarta. Mobil platsåtkomst kräver normalt HTTPS. Förhandsvisning på localhost fungerar på datorn, men är inte en publicerad mobiladress.

Kartnålarna är ungefärliga och områden har en representativ punkt. Gångvägar beräknas med Valhallas publika FOSSGIS-demotjänst på valhalla1.openstreetmap.de och visas på appens karta. Tjänsten kräver internet, har användningsgränser och saknar garanterad tillgänglighet; inför större publik lansering behövs en driftlösning för routing. Endast begärda start- och stoppkoordinater skickas för beräkning. Ingen kontinuerlig GPS-spårning eller automatisk omräkning under promenaden. Aktuella priser, tillgänglighet och öppettider hämtas inte automatiskt. Se källänkar på platskorten. Underlag kontrollerat 2026-09-13.

## Filer

`index.html`, `style.css`, `places.js`, `app.js` och `logo.png` utgör appen. Inga API-nycklar eller byggsteg krävs.
