/**
 * Global namespace initialization
 * 
 * This script initializes a global namespace using a Symbol to avoid
 * polluting the global scope. It ensures that the global object for
 * custom events is created only once.
 * 
 * Author: Quaese
 * Date: 2025-11
 */

(() => {
  let qp = Symbol.for("qp");
  window[qp] = window[qp] || {};
})();
