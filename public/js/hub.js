(function () {
  var cfg = window.AGENCJA || {};
  var GA = (cfg.gaId || "").trim();
  var KEY = "agencja_ga_consent_v2";

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  function loadGA() {
    if (!GA || window.__gaLoaded) return;
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA, {
      anonymize_ip: true,
      send_page_view: true
    });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA);
    document.head.appendChild(s);
  }

  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }
  window.agencjaTrack = track;

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-track]");
    if (!el) return;
    track("select_content", {
      content_type: "hub_link",
      item_id: el.getAttribute("data-track")
    });
  });

  if (GA && stored() === "yes") loadGA();
  if (!GA || stored()) return;

  var bar = document.getElementById("consent");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "consent";
    bar.className = "consent";
    document.body.appendChild(bar);
  }
  bar.setAttribute("role", "dialog");
  bar.setAttribute("aria-modal", "true");
  bar.setAttribute("aria-labelledby", "consent-title");
  bar.setAttribute("aria-describedby", "consent-copy");
  bar.innerHTML =
    '<div class="consent__panel">' +
      '<p class="consent__kicker">Analityka</p>' +
      '<h2 class="consent__title" id="consent-title">Zgoda na Google Analytics</h2>' +
      '<p class="consent__copy" id="consent-copy">Pokazuje, które drzwi klikasz. Bez zgody strona działa tak samo — zero ciasteczek Google.</p>' +
      '<p class="consent__sign">Zgadzając się, pozwalasz mi się ulepszać!</p>' +
      '<div class="consent__row">' +
        '<button type="button" data-consent="yes">Zgoda</button>' +
        '<button type="button" class="ghost" data-consent="no">Bez analityki</button>' +
      '</div>' +
      '<a class="consent__more" href="/prywatnosc/">Szczegóły w polityce prywatności</a>' +
    '</div>';

  function close() {
    bar.classList.remove("is-on");
    document.documentElement.classList.remove("consent-lock");
    document.body.classList.remove("consent-lock");
  }

  bar.classList.add("is-on");
  document.documentElement.classList.add("consent-lock");
  document.body.classList.add("consent-lock");

  var yes = bar.querySelector("[data-consent='yes']");
  var no = bar.querySelector("[data-consent='no']");
  if (yes) {
    yes.addEventListener("click", function () {
      save("yes"); close(); loadGA();
    });
    yes.focus();
  }
  if (no) no.addEventListener("click", function () {
    save("no"); close();
  });
})();
