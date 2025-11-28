/**
 * events.js
 * Custom events for 
 * - showing and hiding an overlay
 * - showing and hiding a modal dialog
 * 
 * Used in json-placeholder.js
 * 
 * Author: Quaese
 * Date: 2025-11
 */

(() => {
  // ------------------------------------------------------------
  // Overlay custom events
  // - showOverlay / hideOverlay are created once and reused.
  // - Each event's detail contains a `show` boolean for convenience.
  // ------------------------------------------------------------
  const showOverlay = new CustomEvent("showOverlay", { detail: { show: true } });
  const hideOverlay = new CustomEvent("hideOverlay", { detail: { show: false } });

  // Cached body element reference. Lazily resolved to support scripts running
  // before the DOM body exists.
  let bodyNode;

  // Ensure bodyNode is set before usage.
  const checkBodyNode = () => {
    if (!bodyNode) {
      bodyNode = document.querySelector("body");
    }
  };

  // When showOverlay is emitted, add a class to the body to indicate an overlay
  // is active. UI/CSS can use .has-overlay to show a backdrop / prevent scroll etc.
  window.addEventListener("showOverlay", (e) => {
    checkBodyNode();
    bodyNode.classList.add("has-overlay");
  });

  // When hideOverlay is emitted, remove the overlay class from the body.
  window.addEventListener("hideOverlay", (e) => {
    checkBodyNode();
    bodyNode.classList.remove("has-overlay");
  });

  // ------------------------------------------------------------
  // Modal dialog custom events
  // - showModalDialog and hideModalDialog are helper functions that dispatch
  //   events with the expected payload.
  // - The modal dialog node and close button are cached after first lookup.
  // ------------------------------------------------------------
  let modalDialogCloseBtn;
  let modalDialogNode;

  // Lazily find the dialog element in the DOM by id.
  const checkModalDialogNode = () => {
    if (!modalDialogNode) {
      modalDialogNode = document.getElementById("qp-modal-dialog");
    }
  };

  // Helper functions to dispatch modal events. They wrap dispatchEvent so
  // consumers can call these methods directly via the exported symbol.
  const showModalDialog = (content) => dispatchEvent(new CustomEvent("showModalDialog", { detail: { show: true, content } }));
  const hideModalDialog = () => dispatchEvent(new CustomEvent("hideModalDialog", { detail: { show: false } }));

  // Handle showing the modal:
  // - Ensure nodes are present.
  // - Show the overlay by dispatching the pre-created showOverlay event.
  // - Populate title and body using the event's detail.content payload.
  // - Attach a click listener to the close button the first time only.
  window.addEventListener("showModalDialog", (e) => {
    checkModalDialogNode();

    // Find modal regions inside the dialog
    const bodyNode = modalDialogNode.querySelector(".qp-modal-dialog-body");
    const titleNode = modalDialogNode.querySelector(".qp-modal-dialog-title");

    // Show overlay (uses the shared pre-created event)
    window.dispatchEvent(showOverlay);
    // Add class to make the dialog visible (CSS should handle .show state)
    modalDialogNode.classList.add("show");

    // Attach close handler once and reuse it
    if (!modalDialogCloseBtn) {
      modalDialogCloseBtn = modalDialogNode.querySelector(".qp-modal-dialog-close");
      modalDialogCloseBtn.addEventListener("click", () => {
        hideModalDialog();
      });
    }

    // Populate dialog contents; provide sensible defaults
    titleNode.innerHTML = e.detail.content.title || "Hinweis";
    bodyNode.innerHTML = e.detail.content.html || "";
  });

  // Handle hiding the modal:
  // - Hide overlay and remove the visible class from the dialog.
  window.addEventListener("hideModalDialog", (e) => {
    checkModalDialogNode();
    window.dispatchEvent(hideOverlay);
    modalDialogNode.classList.remove("show");
  });

  // ------------------------------------------------------------
  // Export API via a global Symbol to avoid polluting the global namespace.
  // The Symbol.for("qp") is expected to be used by other scripts (global.js).
  // Expose the pre-created overlay events and the modal dispatch helpers.
  // ------------------------------------------------------------
  let qp = Symbol.for("qp");
  window[qp] = {
    showOverlay,
    hideOverlay,
    showModalDialog,
    hideModalDialog,
  };
})();