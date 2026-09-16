(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var applyUrl = (window.SITE_CONFIG && window.SITE_CONFIG.applyUrl) || "#apply";
    var consultUrl = (window.SITE_CONFIG && window.SITE_CONFIG.consultUrl) || applyUrl;

    function setCtaHref(el, url) {
      el.setAttribute("href", url);
      if (url.charAt(0) !== "#") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    }

    document.querySelectorAll(".js-cta-apply").forEach(function (el) {
      setCtaHref(el, applyUrl);
    });
    document.querySelectorAll(".js-cta-consult").forEach(function (el) {
      setCtaHref(el, consultUrl);
    });

    var yearEl = document.getElementById("js-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
