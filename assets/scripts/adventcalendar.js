(() => {
    // adventcalendar.js
    // Get access to events via global Symbol (defined in global.js)
    let qp = Symbol.for("qp");

    // Array of questions/solutions to show when a door is opened.
    // Mixed German content; each entry has a question and a solution string.
    const adventQuestions = [
        { question: "Wärme, die man nicht sieht, aber spürt – was ist es?", solution: "Nächstenliebe" },
        { question: "Ich werde kürzer, je länger ich brenne. Was bin ich?", solution: "Eine Kerze" },
        { question: "Was teilt man, ohne dass es weniger wird?", solution: "Freude" },
        { question: "Welcher Stern zeigt immer den Weg?", solution: "Der Polarstern" },
        {
            question: "Ich habe viele Zacken, aber keinen Mund. Wer bin ich?",
            solution: "Ein Schneestern",
        },
        { question: "Was kann man nur mit offenen Händen fangen?", solution: "Schneeflocken" },
        { question: "Klein, rund, süß – und verschwindet meist zu schnell?", solution: "Plätzchen" },
        {
            question: "Ich bin nicht laut und doch erfüllt mein Klang den Raum.",
            solution: "Eine Glocke",
        },
        { question: "Was leuchtet, ohne heiß zu sein?", solution: "Weihnachtslichter" },
        { question: "Ich komme nur im Winter und schmelze im Frühling.", solution: "Schnee" },
        { question: "Was bringt Licht, Hoffnung und Wochen zum Zählen?", solution: "Der Adventskranz" },
        { question: "Ohne mich kein Winter, ohne Kälte kein ich. Was bin ich?", solution: "Eis" },
        { question: "Was wächst, ohne zu leben, und glänzt im Dunkeln?", solution: "Eiszapfen" },
        { question: "Klein, bunt, hängt gern am Baum – was ist es?", solution: "Weihnachtskugel" },
        { question: "Ich raschele im Wind und bringe Farbe ins Fest.", solution: "Geschenkpapier" },
        { question: "Ohne mich keine Überraschung. Wer bin ich?", solution: "Das Geschenk" },
        { question: "Was duftet warm und würzig und gehört in die Weihnachtszeit?", solution: "Zimt" },
        {
            question: "Ich bin der Weg zur Freude – Schritt für Schritt.",
            solution: "Der Adventskalender",
        },
        { question: "Was zeigt die Zeit, bis Licht und Frieden kommen?", solution: "Der Advent" },
        { question: "Ich fliege nicht, doch habe Flügel. Was bin ich?", solution: "Ein Engel" },
        { question: "Was wird schwerer, je mehr man teilt?", solution: "Das Herz vor Freude" },
        {
            question: "Ich bin voll Wünsche – aber keine Sterne hängen an mir.",
            solution: "Der Wunschzettel",
        },
        { question: "Ein leises Knistern, wenn ich im Kamin liege.", solution: "Holz" },
        { question: "Was macht aus kalten Tagen warme Momente?", solution: "Gemeinschaft" },
        {
            question: "Ich glitzere im Dunkeln, obwohl ich nicht aus Gold bin.",
            solution: "Schnee im Mondlicht",
        },
        { question: "Ich öffne Türen, aber keine aus Holz.", solution: "Adventskalendertürchen" },
        {
            question: "Was kommt nur einmal im Jahr und macht Groß und Klein Freude?",
            solution: "Weihnachten",
        },
        { question: "Ich bin süß, warm und komme oft aus einem Becher.", solution: "Kinderpunsch" },
        { question: "Was reist um die Welt, aber man sieht es nicht?", solution: "Weihnachtsfreude" },
        { question: "Was bringt Licht in dunkle Tage, auch ohne Kerze?", solution: "Ein Lächeln" },

        // --- Technical/IT themed entries ---
        { question: "Was hat viele Bits, aber keine Zähne?", solution: "Ein Computer" },
        { question: "Welches Gerät hat ein Auge, aber sieht nicht wie wir?", solution: "Eine Kamera" },
        { question: "Ich bin im Netz, aber kein Fischer – was bin ich?", solution: "Ein Router" },
        { question: "Was speichert mehr, je kleiner es wird?", solution: "Ein Speicherchip" },
        { question: "Was läuft im Hintergrund, ohne Beine zu haben?", solution: "Ein Prozess" },
        {
            question: "Ich bin ein Baum, aber wachse im Dateisystem.",
            solution: "Ein Directory-/Ordnerbaum",
        },
        { question: "Was sendet Pakete, ohne Postbote zu sein?", solution: "Das Internet/Netzwerk" },
        { question: "Ich bin eine Wolke, aber bringe keine Regentropfen.", solution: "Die Cloud" },
        { question: "Ich habe Tasten, aber keine Türen.", solution: "Eine Tastatur" },
        {
            question: "Was lädt, ohne Strom zu verbrauchen?",
            solution: "Eine Webseite (vom Browser gecached)",
        },
        {
            question: "Welche Datei ist nur im Dezember besonders wichtig und endet oft mit Wünschen?",
            solution: "Der Wunschzettel.txt",
        },
        {
            question: "Welcher Server verteilt jedes Jahr Milliarden kleiner Pakete – ohne Ausfallzeit?",
            solution: "Der Weihnachtsmann (Santa-Server)",
        },
        {
            question: "Welches Gerät sorgt für festliche Stimmung, indem es ständig 'leuchtet'?",
            solution: "Ein LED-Lichterketten-Controller",
        },
        {
            question: "Welche Schleife macht nicht den Code langsam, aber die Geschenke schöner?",
            solution: "Die Geschenk-Schleife",
        },
        {
            question: "Welche Protokolle nutzt der Weihnachtsmann, um schnell durch den Kamin zu kommen?",
            solution: "S(t)anta-Transport-Protokoll (STP 😉)",
        },
        {
            question: "Welche Datei wächst jedes Jahr, je mehr Kinder brav sind?",
            solution: "Die nice_list.json",
        },
        {
            question: "Welches Gerät funktioniert nur, wenn es 'gut geschmiert' und voller Kekse ist?",
            solution: "Der Schlitten (Keks-getriebenes Legacy-System)",
        },
        {
            question: "Welche Art Backup wird jedes Jahr unter dem Baum gefunden?",
            solution: "Ein Geschenk (Sicherung der Weihnachtsfreude)",
        },
        {
            question: "Welche Logs riechen nach Zimt, statt nach Fehlern?",
            solution: "Weihnachts-Logs im Kamin",
        },
        {
            question: "Welcher Code läuft nur im Dezember und sorgt für Magie?",
            solution: "Der Weihnachts-Zauberalgorithmus",
        },
    ];

    // Toggle debug logging
    const debug = false;
    // Background resolution used to preserve aspect ratio of the background image
    const bgResolution = { w: 1536, h: 1024 };

    let hTimer; // debounce timer for resize handler

    // Variables controlling layout and placement behavior of the calendar
    const maxAttempts = 1200; // max tries to place a single tile before increasing density
    let container; // DOM element that will contain the doors

    let calendar = {
        offset: 50, // margin offset inside container
        doors: 24, // how many doors to place
        limit: 5, // initial grid limit (approx. how many per row/col)
        space: 5, // spacing inside/around each square
        container: {
            width: 0,
            height: 0,
        },
        square: {
            dim: 0, // pixel dimension of each square door (computed)
        },
    };

    // For testing purposes the date can be fixed; validMonth is 0-based (11 for December)
    const date = {
        // now: new Date(2025, 10, 15), // Testing date (November 15, 2025) -- adjust as needed
        now: new Date(), // use this in production
        validMonth: 10, // December (0-based index). NOTE: original code used 10 -> November? Keep as provided.
    };

    // Event handler for clicking a door.
    // - Toggles opened class
    // - Shows a modal dialog via global qp interface with question & answer
    // - Removes further click handling and locks the door visually
    const hDoorEvent = (e) => {
        const door = e.currentTarget;
        door.classList.toggle("opened");

        // dataset.number is 1-based; map to 0-based index for the questions array
        const questionIndex = parseInt(door.dataset.number) - 1;

        // Retrieve and display the question/answer modal dialog via global qp API
        // Assumes window[qp].showModalDialog is implemented elsewhere
        window[qp].showModalDialog({
            title: `${e.target.dataset.number}. Dezember`,
            html: `<div>Frage: ${adventQuestions[questionIndex].question}</div>
                <div>Antwort: ${adventQuestions[questionIndex].solution}</div>
                `,
        });

        // Prevent the door from being opened multiple times
        door.removeEventListener("click", hDoorEvent);
        door.classList.add("locked");
    };

    // Creates a calendar door element with positioning and styling and appends it to container
    const createDoor = (number, x, y) => {
        const door = document.createElement("div");

        // Apply styling: size, padding, and offset positioning
        door.classList.add("adventcalendar-door");
        door.style.width = `${calendar.square.dim}px`;
        door.style.height = `${calendar.square.dim}px`;
        door.style.left = `${calendar.offset + x}px`;
        door.style.top = `${calendar.offset + y}px`;
        door.style.padding = `${calendar.space}px`;

        // store the door number (1-based) for later use
        door.dataset.number = number;

        // Determine if the door is locked (not in the valid month or a future date)
        if (date.now.getMonth() !== date.validMonth || number > date.now.getDate()) {
            door.classList.add("locked");
        } else {
            // attach click handler for doors that can be opened
            door.addEventListener("click", hDoorEvent);
        }

        container.appendChild(door);
    };

    // Draw all created square placements as DOM doors.
    // placedSquares is an array of {x, y} positions
    const drawAll = (placedSquares) => {
        debug && console.log("Draw all squares:", placedSquares);

        for (let i = 0; i < placedSquares.length; i++) {
            const square = placedSquares[i];
            createDoor(i + 1, square.x, square.y, calendar);
        }
    };

    // Check if a candidate rectangle (x,y) conflicts/overlaps with any already placed squares.
    // Uses calendar.square.dim and calendar.space to compute effective occupied area.
    const rectConflicts = (x, y, placedSquares) => {
        for (const p of placedSquares) {
            const px = p.x,
                py = p.y;
            const overlapX = !(
                x + calendar.square.dim + calendar.space <= px ||
                px + calendar.square.dim + calendar.space <= x
            );
            const overlapY = !(
                y + calendar.square.dim + calendar.space <= py ||
                py + calendar.square.dim + calendar.space <= y
            );
            if (overlapX && overlapY) return true; // conflict found
        }
        return false; // no conflict
    };

    // Compute calendar dimensions and square size based on container size and current limit
    const configureCalendar = () => {
        const containerDims = container.getBoundingClientRect();

        // Use offset to leave margins around the placement area
        calendar.container.width = containerDims.width - 2 * calendar.offset;
        calendar.container.height = containerDims.height - 2 * calendar.offset;

        // Compute square size so that 'limit' squares fit (roughly) into the smaller dimension
        calendar.square.dim = parseInt(
            (Math.min(calendar.container.width, calendar.container.height) -
                calendar.limit * 2 * calendar.space) /
                calendar.limit
        ); // square dimension in pixels

        // Return a deep copy of the calendar state to avoid accidental external mutation
        return JSON.parse(JSON.stringify(calendar));
    };

    // Build the advent calendar by randomly placing 'doors' (non-overlapping squares)
    const buildAdventCalendar = () => {
        // Reconfigure calendar dims based on container current size
        calendar = configureCalendar(container);

        debug &&
            console.log(
                `Building advent calendar with calendar.container.width=${calendar.container.width}, calendar.container.height=${calendar.container.height}, calendar.square.dim=${calendar.square.dim}`
            );

        let placedSquares = []; // positions of successfully placed squares
        let i = 0; // count of placed doors
        debug && console.log("Starte...");

        // Recursive function that tries to place doors until calendar.doors reached
        function placeNext() {
            if (i >= calendar.doors) {
                // All doors placed: render them
                debug && console.log(`Fertig ${i}: ${placedSquares.length} / ${calendar.doors} platziert.`);
                drawAll(placedSquares);
                return;
            }

            let placedThis = false;

            // Try up to maxAttempts to find a non-overlapping random position for the next square
            for (let attempt = 0; attempt < maxAttempts; attempt++) {
                const x = Math.random() * (calendar.container.width - calendar.square.dim);
                const y = Math.random() * (calendar.container.height - calendar.square.dim);

                if (!rectConflicts(x, y, placedSquares)) {
                    // Accept this position and continue with next square
                    placedSquares.push({ x, y });
                    placedThis = true;
                    i++;

                    // Immediately place next (keeps stack depth shallow enough for typical counts)
                    placeNext();
                    break;
                }
            }
            if (!placedThis) {
                // If placement failed after many attempts, increase the grid density (limit) and retry
                debug &&
                    console.log(
                        `Abbruch: konnte Quadrat ${
                            i + 1
                        } nach ${maxAttempts} Versuchen nicht platzieren. Nächster Durchlauf mit max ${
                            calendar.limit + 1
                        } Türchen pro Zeile/Spalte.`
                    );

                placedSquares.length = 0; // reset placed positions
                i = 0;
                calendar.limit++; // allow more cells (smaller squares)

                calendar = configureCalendar(container);

                // Restart placement loop after a short pause so UI stays responsive
                setTimeout(placeNext, 10);
            }
        }

        placeNext();
    };

    // Initialize the advent calendar: find container, set height by aspect ratio, and build
    const initAdventsCalendar = () => {
        container = document.querySelector(".adventcalendar-content");

        const bgAspectRatio = bgResolution.w / bgResolution.h;

        // Get container width & compute height to maintain background aspect ratio
        const boundingClientRect = container.getBoundingClientRect();
        const containerHeight = boundingClientRect.width / bgAspectRatio;

        // Apply calculated height and ensure background scales correctly
        container.style.height = `${containerHeight}px`;
        container.style.backgroundSize = "100% auto";

        buildAdventCalendar();
        hTimer = null;
    };

    // Debounced resize handler: clears and rebuilds calendar after window resize
    window.addEventListener("resize", () => {
        if (!hTimer) container.innerHTML = "";

        clearTimeout(hTimer);

        hTimer = setTimeout(() => {
            // Clear existing doors and reinitialize calendar to adapt to new size
            container.innerHTML = "";
            initAdventsCalendar();
        }, 250);
    });

    // Build the calendar once DOM content is loaded
    window.addEventListener("DOMContentLoaded", initAdventsCalendar);
})();
