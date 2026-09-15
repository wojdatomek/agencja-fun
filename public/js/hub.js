(function () {
  var cfg = window.AGENCJA || {};
  var GA = (cfg.gaId || "").trim();
  var CONSENT_KEY = "agencja_ga_consent_v2";
  var LANG_KEY = "agencja_lang";

  var I18N = {
    pl: {
      skip: "Przejdź do treści",
      lang_btn: "EN",
      lang_aria: "Switch to English",
      nav: "Kierunki",
      music: "Muzyka & DJ",
      music_sub: "deep / melodic / tribal house · booking",
      consulting: "Startupy & Consulting",
      consulting_sub: "AI, produkt, strony — wracam z tym",
      soon: "wkrótce",
      articles: "Artykuły",
      articles_sub: "teksty, notatki, process",
      media: "Media i linki",
      media_sub: "instagram · x · soundcloud · youtube",
      privacy: "Prywatność",
      title_home: "agencja.fun — Tomasz Wojda",
      title_media: "Media i linki — agencja.fun",
      title_articles: "Artykuły — agencja.fun",
      title_consulting: "Startupy & Consulting — agencja.fun",
      title_privacy: "Prywatność — agencja.fun",
      title_404: "Nie ma takiej strony — agencja.fun",
      media_lead: "Profile, które już są publiczne. Bez maila, bez telefonu.",
      media_nav: "Linki",
      media_dj_sub: "strona DJ / producent · booking",
      media_sc_sub: "tracki i sety",
      articles_lead: "Krótkie, konkretne — muzyka, produkt, to co warte zapisania. Zero newslettera.",
      articles_zero: "Numer zero.",
      articles_empty: " Pierwsza paczka jeszcze nie weszła na stronę. Jak wrzucę tekst, pojawi się tutaj jako zwykły wpis — tytuł, data, zero newslettera.",
      consulting_lock: "02 · w budowie",
      consulting_h1: "Startupy<br>&amp; consulting",
      consulting_lead: "AI, produkt, strony, wdrożenia. Ten pokój jest zamknięty — otworzę go, jak będzie co pokazać, nie wcześniej.",
      back_hub: "Wróć do huba",
      nothing: "Tu nic nie ma",
      nothing_lead: "Albo link się zestarzał, albo ktoś zgadł adres.",
      privacy_h1: "Prywatność",
      privacy_p1: "Na tej domenie nie ma formularza, maila ani telefonu. Booking jest na <a href=\"https://tomasz.agencja.fun/\">tomasz.agencja.fun</a>.",
      privacy_h2a: "Cloudflare Web Analytics",
      privacy_p2: "Licznik odwiedzin bez ciasteczek, włączony na strefie agencja.fun. Nie identyfikuje Cię po imieniu.",
      privacy_h2b: "Google Analytics 4",
      privacy_p3: "Włącza się tylko gdy jest ustawiony identyfikator G- i klikniesz „Zgoda”. Zdarzenia: odsłona strony i kliknięcia przycisków. IP jest skracane. Brak zgody = brak skryptu Google.",
      privacy_h2c: "Hosting",
      privacy_p4: "Strona leży na Cloudflare Workers. Logi brzegowe Cloudflare mogą zawierać IP — to ich infrastruktura, nie nasz marketing.",
      hub: "Hub",
      consent_kicker: "Analityka",
      consent_title: "Zgoda na Google Analytics",
      consent_copy: "Pokazuje, które drzwi klikasz. Bez zgody strona działa tak samo — zero ciasteczek Google.",
      consent_yes: "Zgoda",
      consent_no: "Bez analityki",
      consent_more: "Szczegóły w polityce prywatności"
    },
    en: {
      skip: "Skip to content",
      lang_btn: "PL",
      lang_aria: "Przełącz na polski",
      nav: "Sections",
      music: "Music & DJ",
      music_sub: "deep / melodic / tribal house · booking",
      consulting: "Startups & Consulting",
      consulting_sub: "AI, product, sites — coming back to this",
      soon: "soon",
      articles: "Articles",
      articles_sub: "writing, notes, process",
      media: "Media & links",
      media_sub: "instagram · x · soundcloud · youtube",
      privacy: "Privacy",
      title_home: "agencja.fun — Tomasz Wojda",
      title_media: "Media & links — agencja.fun",
      title_articles: "Articles — agencja.fun",
      title_consulting: "Startups & Consulting — agencja.fun",
      title_privacy: "Privacy — agencja.fun",
      title_404: "Page not found — agencja.fun",
      media_lead: "Public profiles only. No email, no phone.",
      media_nav: "Links",
      media_dj_sub: "DJ / producer site · booking",
      media_sc_sub: "tracks and sets",
      articles_lead: "Short pieces — music, product, whatever is worth writing down. No newsletter.",
      articles_zero: "Issue zero.",
      articles_empty: " First batch is not up yet. When I publish, it lands here as a normal post — title, date, no newsletter.",
      consulting_lock: "02 · in progress",
      consulting_h1: "Startups<br>&amp; consulting",
      consulting_lead: "AI, product, sites, shipping. This room stays closed until there is something to show.",
      back_hub: "Back to the hub",
      nothing: "Nothing here",
      nothing_lead: "The link aged out, or someone guessed the URL.",
      privacy_h1: "Privacy",
      privacy_p1: "This domain has no form, email, or phone. Booking lives on <a href=\"https://tomasz.agencja.fun/\">tomasz.agencja.fun</a>.",
      privacy_h2a: "Cloudflare Web Analytics",
      privacy_p2: "A cookieless visit counter on the agencja.fun zone. It does not know your name.",
      privacy_h2b: "Google Analytics 4",
      privacy_p3: "Loads only with a G- ID and after you tap Agree. Events: page view and button clicks. IP is truncated. No consent = no Google script.",
      privacy_h2c: "Hosting",
      privacy_p4: "The site runs on Cloudflare Workers. Edge logs may include IP — their infrastructure, not our marketing.",
      hub: "Hub",
      consent_kicker: "Analytics",
      consent_title: "Google Analytics consent",
      consent_copy: "It shows which doors you tap. Without consent the site works the same — no Google cookies.",
      consent_yes: "Agree",
      consent_no: "No analytics",
      consent_more: "Details in the privacy policy"
    }
  };

  function detectLang() {
    try {
      var s = localStorage.getItem(LANG_KEY);
      if (s === "en" || s === "pl") return s;
    } catch (e) {}
    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "pl"];
    for (var i = 0; i < list.length; i++) {
      var x = String(list[i] || "").toLowerCase();
      if (x.indexOf("en") === 0) return "en";
      if (x.indexOf("pl") === 0) return "pl";
    }
    return "pl";
  }

  var lang = detectLang();
  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.pl[key] || key);
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (!key) continue;
      if (el.tagName === "TITLE") {
        document.title = t(key);
      } else {
        el.textContent = t(key);
      }
    }
    var htmls = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmls.length; j++) {
      htmls[j].innerHTML = t(htmls[j].getAttribute("data-i18n-html"));
    }
    var arias = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < arias.length; k++) {
      arias[k].setAttribute("aria-label", t(arias[k].getAttribute("data-i18n-aria")));
    }
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = t("lang_btn");
      btn.setAttribute("aria-label", t("lang_aria"));
    }
  }

  function injectLang() {
    if (document.getElementById("lang-toggle")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "lang-toggle";
    btn.className = "lang";
    btn.textContent = t("lang_btn");
    btn.setAttribute("aria-label", t("lang_aria"));
    btn.addEventListener("click", function () {
      lang = lang === "pl" ? "en" : "pl";
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      applyI18n();
      if (document.getElementById("consent") && document.getElementById("consent").classList.contains("is-on")) {
        renderConsent(document.getElementById("consent"));
      }
    });
    document.body.appendChild(btn);
  }

  applyI18n();
  injectLang();

  function stored() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function save(v) {
    try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {}
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

  function closeConsent(bar) {
    bar.classList.remove("is-on");
    document.documentElement.classList.remove("consent-lock");
    document.body.classList.remove("consent-lock");
  }

  function renderConsent(bar) {
    bar.innerHTML =
      '<div class="consent__panel">' +
        '<p class="consent__kicker"></p>' +
        '<h2 class="consent__title" id="consent-title"></h2>' +
        '<p class="consent__copy" id="consent-copy"></p>' +
        '<div class="consent__row">' +
          '<button type="button" data-consent="yes"></button>' +
          '<button type="button" class="ghost" data-consent="no"></button>' +
        '</div>' +
        '<a class="consent__more" href="/prywatnosc/"></a>' +
      '</div>';
    bar.querySelector(".consent__kicker").textContent = t("consent_kicker");
    bar.querySelector("#consent-title").textContent = t("consent_title");
    bar.querySelector("#consent-copy").textContent = t("consent_copy");
    bar.querySelector("[data-consent='yes']").textContent = t("consent_yes");
    bar.querySelector("[data-consent='no']").textContent = t("consent_no");
    bar.querySelector(".consent__more").textContent = t("consent_more");
    var yes = bar.querySelector("[data-consent='yes']");
    var no = bar.querySelector("[data-consent='no']");
    yes.addEventListener("click", function () {
      save("yes"); closeConsent(bar); loadGA();
    });
    no.addEventListener("click", function () {
      save("no"); closeConsent(bar);
    });
    var coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (!coarse) yes.focus();
  }

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
  renderConsent(bar);
  bar.classList.add("is-on");
  document.documentElement.classList.add("consent-lock");
  document.body.classList.add("consent-lock");
})();
