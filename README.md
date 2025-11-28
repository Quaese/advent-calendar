# Advent Calendar — Responsive HTML Template

A simple, responsive starter template for an Advent Calendar website.

**Project Structure (key files)**
- `index.html` — Entry point of the site; loads CSS and JavaScript from `assets/`.
- `assets/css/style.css` — Main styling (imports `variables.css` for color standards and variables).
- `assets/css/variables.css` — CSS variables (colors, dimensions).
- `assets/images/` — Image assets (backgrounds, icons, etc.).
- `assets/scripts/` — JavaScript modules (e.g., `global.js`, `events.js`, `adventcalendar.js`).

**Overview**
- The template includes a header, a container area with the Advent Calendar view (`.adventcalendar-content`), and a modal/dialog overlay (`.qp-overlay`, `#qp-modal-dialog`).
- CSS uses variables and responsive media queries (breakpoint at `800px`) for responsive navigation.
- Advent doors are positioned via `.adventcalendar-door` and can be opened/closed via JavaScript.

**Quick Local Test**
Run in the project folder:

```bash
python3 -m http.server 8000
```

Then open in your browser: `http://localhost:8000`

(Note: `python3 -m http.server` is for quick preview only. With JS/modules enabled, the site typically works well locally.)

**Mock/Test Data**
For testing add in `adventscalendar.js` in

```javascript
const date = {
        // now: new Date(2025, 10, 15), // Testing date (November 15, 2025) -- adjust as needed
        now: new Date(), // use this in production
        validMonth: 10, // December (0-based index). NOTE: original code used 10 -> November? Keep as provided.
    };
```

the current date as `Testing date`. And adjust `validMonth` to the chosen test month (0-based).

**Developer Notes & Tips**
- CSS Variables: Modify `assets/css/variables.css` to change the color scheme and spacing globally.
- Images: Place background images in `assets/images/` and reference them relatively from `assets/css/style.css`.
- Scripts: `assets/scripts/adventcalendar.js` likely contains the logic for displaying and opening doors. Use `defer` in `index.html` to ensure the DOM is loaded.
- Accessibility: Modals/dialogs should consider focus trapping and keyboard accessibility; overlay and modal templates are already in place.

