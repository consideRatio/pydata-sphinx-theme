/* define several functions to replace jQuery methods
 * inspired by https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/
 */

/**
 * Execute a method if DOM has finished loading
 *
 * @param {function} callback the method to execute
 */
export function documentReady(callback) {
  if (document.readyState != "loading") {
    // Called directly, an error would propagate into the file calling
    // documentReady (e.g. pydata-sphinx-theme.js) and stop it, skipping the
    // documentReady calls after it. Report it instead, as an error in a
    // DOMContentLoaded listener would be.
    try {
      callback();
    } catch (error) {
      reportError(error);
    }
  } else document.addEventListener("DOMContentLoaded", callback);
}
