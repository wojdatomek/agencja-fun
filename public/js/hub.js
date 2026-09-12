(function () {
  var cfg = window.AGENCJA || {};
  var GA = (cfg.gaId || "").trim();
  var KEY = "agencja_ga_consent";

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

  var bar = document.getElementById("consent");
  if (GA && !stored() && bar) {
    bar.classList.add("is-on");
    var yes = bar.querySelector("[data-consent='yes']");
    var no = bar.querySelector("[data-consent='no']");
    if (yes) yes.addEventListener("click", function () {
      save("yes"); bar.classList.remove("is-on"); loadGA();
    });
    if (no) no.addEventListener("click", function () {
      save("no"); bar.classList.remove("is-on");
    });
  }
})();
