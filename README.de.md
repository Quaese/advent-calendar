# Advent Calendar — Responsives HTML-Template

Ein kleines, responsives Starter-Template für eine Advent-Calendar-Webseite.

**Projektstruktur (wichtigste Dateien)**
- `index.html` — Einstiegspunkt der Seite; bindet CSS und JavaScript aus `assets/` ein.
- `assets/css/style.css` — Hauptstyling (verwendet `variables.css` für Farbstandards und Variablen).
- `assets/css/variables.css` — CSS-Variablen (Farben, Maße).
- `assets/images/` — Bildassets (Hintergründe, Icons, etc.).
- `assets/scripts/` — JavaScript-Module (z. B. `global.js`, `events.js`, `adventcalendar.js`).

**Kurzbeschreibung**
- Das Template enthält einen Header, einen Container-Bereich mit der Advent-Calendar-Ansicht (`.adventcalendar-content`) und ein Modal/Dialog-Overlay (`.qp-overlay`, `#qp-modal-dialog`).
- Das CSS nutzt Variablen und responsive Media-Queries (Breakpoint bei `800px`) zur Anpassung der Navigation.
- Die Advent-Türen werden über `.adventcalendar-door` positioniert und können (per JS) geöffnet/geschlossen werden.

**Lokal testen (schnell)**
Im Projektordner ausführen:

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen: `http://localhost:8000`

(Hinweis: `python3 -m http.server` dient nur zur schnellen Vorschau. Bei aktiviertem JS/Modulen funktioniert die Seite lokal damit in der Regel gut.)

**Entwicklerhinweise & Tipps**
- CSS-Variablen: Passe `assets/css/variables.css` an, um Farbschema und Abstände global zu ändern.
- Bilder: Lege Hintergrundbilder in `assets/images/` ab und referenziere sie relativ aus `assets/css/style.css`.
- Scripts: `assets/scripts/adventcalendar.js` enthält vermutlich die Logik zum Anzeigen/Öffnen der Türen. Verwende `defer` in `index.html`, damit das DOM geladen ist.
- Accessibility: Modal/Dialogs sollten Fokus-Falle und Tastatur-Zugänglichkeit berücksichtigen; die Templates für Overlay/Modal sind bereits vorhanden.
