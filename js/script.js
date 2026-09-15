(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var applyUrl = (window.SITE_CONFIG && window.SITE_CONFIG.applyUrl) || "#apply";

    document.querySelectorAll(".js-cta").forEach(function (el) {
      el.setAttribute("href", applyUrl);
      if (applyUrl.charAt(0) !== "#") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });

    var yearEl = document.getElementById("js-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
