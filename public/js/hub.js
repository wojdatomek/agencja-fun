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
      consulting_sub: "pierwsza godzina · 500 zł",
      soon: "wkrótce",
      articles: "Artykuły",
      articles_sub: "teksty, notatki, process",
      media: "Media i linki",
      media_sub: "instagram · x · soundcloud · youtube",
      privacy: "Prywatność",
      title_home: "agencja.fun — Tomasz Wojda",
      title_media: "Media i linki — agencja.fun",
      title_articles: "Artykuły — agencja.fun",
      title_consulting: "Consulting dla founderów — 500 zł | agencja.fun",
      title_privacy: "Prywatność — agencja.fun",
      title_404: "Nie ma takiej strony — agencja.fun",
      media_lead: "Profile, które już są publiczne. Bez maila, bez telefonu.",
      media_nav: "Linki",
      media_dj_sub: "strona DJ / producent · booking",
      media_sc_sub: "tracki i sety",
      articles_lead: "Krótkie, konkretne — muzyka, produkt, to co warte zapisania. Zero newslettera.",
      articles_zero: "Numer zero.",
      articles_empty: " Pierwsza paczka jeszcze nie weszła na stronę. Jak wrzucę tekst, pojawi się tutaj jako zwykły wpis — tytuł, data, zero newslettera.",
      consulting_lock: "02 · consulting",
      consulting_h1: "Consulting dla founderów",
      consulting_lead: "Produkt i AI. Pierwsza godzina, 500 zł, maks. 1 h.",
      c_kicker: "02 · consulting",
      c_h1: "Consulting dla founderów",
      c_lead: "Produkt i AI. Pierwsza godzina, 500 zł, maks. 1 h. Potem canvas albo cztery tygodnie. Piszesz — odpisuję na Telegramie. Maila tu nie ma.",
      c_bio: "Doświadczony doradca biznesowy i CTO z silnym backgroundem technicznym. Specjalizuję się w transformowaniu innowacyjnych koncepcji w skalowalne modele biznesowe i rysuję jasną drogę rozwoju. Posiadam unikalną umiejętność łączenia głębokiej wiedzy technologicznej (AI, Mobile, R&D) z egzekucją biznesową: od strategii przez budżetowanie i budowanie zespołów, po skuteczny fundraising u globalnych graczy. Jako konsultant startupowy oferuję partnerstwo oparte na realnym doświadczeniu w budowaniu własnych projektów i doradztwie dla zewnętrznych founderów.",
      c_hi_h: "Z drogi",
      c_hi_1: "Charactr, CTO — zespół z 6 do 36. Mowa, STT, NLP.",
      c_hi_2: "Tediberry — 1,2 mln zł od VC. Pitching dla Universal, Warner, Sony.",
      c_hi_3: "iTwins — produkt dla agencji, 2017–2022.",
      c_hi_4: "MojAkademik — 6 lokalizacji, ponad 350 osób, exit w 2019.",
      c_hi_5: "GDG Poland od 2014. Network Speed Dating w Google for Startups.",
      c_offers_h: "Trzy pakiety",
      c_p1_name: "Pierwsza konsultacja",
      c_p1_fmt: "maks. 1 godzina",
      c_p1_price: "500 zł",
      c_p1_a: "Jeden problem. Nie prezentacja.",
      c_p1_b: "Czy jest o czym pracować.",
      c_p1_c: "Jak pasuje — mówię, który pakiet dalej.",
      c_p2_name: "Lean Canvas w 1 dzień",
      c_p2_fmt: "3–4 godziny przy stole",
      c_p2_price: "1 500–2 500 zł",
      c_p2_a: "Jeden problem, jeden klient, jeden kanał.",
      c_p2_b: "Co nie wchodzi — też zapisane.",
      c_p2_c: "Kartka, z której da się działać jutro.",
      c_p3_name: "AI i produkt, 4 tygodnie",
      c_p3_fmt: "4 sesje i praca między nimi",
      c_p3_price: "6–12 tys. zł",
      c_p3_a: "Co budować, a czego nie ruszać.",
      c_p3_b: "Gdzie AI skraca robotę, a gdzie robi szum.",
      c_p3_c: "Decyzje zapisane. Nie „pogadaliśmy”.",
      c_how_h: "Jak to idzie",
      c_s1: "Piszesz, który pakiet i co budujesz.",
      c_s2: "Jedna rozmowa. Jak nie pasuje — mówię to od razu.",
      c_s3: "Robota zostaje u Ciebie.",
      c_faq_h: "Pytania",
      c_q1: "Ile kosztuje pierwsza konsultacja?",
      c_a1: "500 zł, maks. 1 godzina.",
      c_q2: "Jak się umówić?",
      c_a2: "Formularz na tej stronie. Odpowiedź idzie na Telegram. Publicznego maila nie ma.",
      c_q3: "Co jest po pierwszej godzinie?",
      c_a3: "Lean Canvas w jeden dzień albo cztery tygodnie nad produktem i AI. Widełki domykamy przed startem.",
      c_form_h: "Napisz",
      c_form_d: "Idzie na Telegram. Na stronie nie zostaje.",
      c_f_name: "Imię",
      c_f_what: "Co budujesz",
      c_f_pack: "Pakiet",
      c_f_back: "Jak odpisać — Telegram albo mail",
      c_f_note: "Jedno zdanie, jeśli trzeba",
      c_send: "Wyślij zapytanie",
      c_done_h: "Poszło.",
      c_done_p: "Jest na Telegramie. Odezwę się.",
      back_hub: "Wróć do huba",
      nothing: "Tu nic nie ma",
      nothing_lead: "Albo link się zestarzał, albo ktoś zgadł adres.",
      privacy_h1: "Prywatność",
      privacy_p1: "Publicznego maila i telefonu tu nie ma. Booking DJ jest na <a href=\"https://tomasz.agencja.fun/\">tomasz.agencja.fun</a>.",
      privacy_h2d: "Formularz consultingu",
      privacy_p5: "Imię, opis i sposób odpowiedzi z /consulting/ idą na Telegram. Nie są publikowane. Newslettera nie ma.",
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
      consent_more: "Szczegóły w polityce prywatności",
      now_kicker: "Nowy track · SoundCloud",
      now_dek: "16.09.2026 · electronic · deep house",
      now_cta: "Słuchaj",
      now_cta_close: "Zamknij"
    },
    en: {
      skip: "Skip to content",
      lang_btn: "PL",
      lang_aria: "Przełącz na polski",
      nav: "Sections",
      music: "Music & DJ",
      music_sub: "deep / melodic / tribal house · booking",
      consulting: "Startups & Consulting",
      consulting_sub: "first hour · 500 PLN",
      soon: "soon",
      articles: "Articles",
      articles_sub: "writing, notes, process",
      media: "Media & links",
      media_sub: "instagram · x · soundcloud · youtube",
      privacy: "Privacy",
      title_home: "agencja.fun — Tomasz Wojda",
      title_media: "Media & links — agencja.fun",
      title_articles: "Articles — agencja.fun",
      title_consulting: "Founder consulting — 500 PLN | agencja.fun",
      title_privacy: "Privacy — agencja.fun",
      title_404: "Page not found — agencja.fun",
      media_lead: "Public profiles only. No email, no phone.",
      media_nav: "Links",
      media_dj_sub: "DJ / producer site · booking",
      media_sc_sub: "tracks and sets",
      articles_lead: "Short pieces — music, product, whatever is worth writing down. No newsletter.",
      articles_zero: "Issue zero.",
      articles_empty: " First batch is not up yet. When I publish, it lands here as a normal post — title, date, no newsletter.",
      consulting_lock: "02 · consulting",
      consulting_h1: "Consulting for founders",
      consulting_lead: "Product and AI. First hour, 500 PLN, max 1 h.",
      c_kicker: "02 · consulting",
      c_h1: "Consulting for founders",
      c_lead: "Product and AI. First hour, 500 PLN, max 1 h. Then a canvas, or four weeks. You write. I answer on Telegram. No public email.",
      c_bio: "A business advisor and CTO with a strong technical background. I turn early ideas into models that can scale, and I draw a clear path for them. I join deep tech — AI, mobile, R&D — with the business work: strategy, budget, teams, and fundraising with people who actually write checks. The partnership comes from building my own projects, and from advising other founders.",
      c_hi_h: "From the road",
      c_hi_1: "Charactr, CTO — the team grew from 6 to 36. Speech, STT, NLP.",
      c_hi_2: "Tediberry — 1.2 million PLN from a VC. Pitches to Universal, Warner, Sony.",
      c_hi_3: "iTwins — product for agencies, 2017–2022.",
      c_hi_4: "MojAkademik — 6 sites, 350+ people, exit in 2019.",
      c_hi_5: "GDG Poland since 2014. Network Speed Dating at Google for Startups.",
      c_offers_h: "Three packages",
      c_p1_name: "First consultation",
      c_p1_fmt: "max 1 hour",
      c_p1_price: "500 PLN",
      c_p1_a: "One problem. Not a deck.",
      c_p1_b: "Whether there is something to work on.",
      c_p1_c: "If it fits, I say which package is next.",
      c_p2_name: "Lean Canvas in one day",
      c_p2_fmt: "3–4 hours at the table",
      c_p2_price: "1,500–2,500 PLN",
      c_p2_a: "One problem, one customer, one channel.",
      c_p2_b: "What stays out — written down too.",
      c_p2_c: "A page you can act on tomorrow.",
      c_p3_name: "AI and product, 4 weeks",
      c_p3_fmt: "4 sessions, and work between them",
      c_p3_price: "6–12k PLN",
      c_p3_a: "What to build, and what not to touch.",
      c_p3_b: "Where AI shortens the work, and where it is noise.",
      c_p3_c: "Decisions written down. Not “we talked”.",
      c_how_h: "How it goes",
      c_s1: "You write which package, and what you are building.",
      c_s2: "One conversation. If it does not fit, I say so immediately.",
      c_s3: "The work stays with you.",
      c_faq_h: "Questions",
      c_q1: "What does the first consultation cost?",
      c_a1: "500 PLN, max 1 hour.",
      c_q2: "How do you book?",
      c_a2: "The form on this page. The reply goes to Telegram. There is no public email.",
      c_q3: "What comes after the first hour?",
      c_a3: "A Lean Canvas in one day, or four weeks on product and AI. We lock the range before we start.",
      c_form_h: "Write",
      c_form_d: "It goes to Telegram. It does not stay on the page.",
      c_f_name: "Name",
      c_f_what: "What you are building",
      c_f_pack: "Package",
      c_f_back: "How to reply — Telegram or email",
      c_f_note: "One sentence, if you need it",
      c_send: "Send the ask",
      c_done_h: "Sent.",
      c_done_p: "It is on Telegram. I will answer.",
      back_hub: "Back to the hub",
      nothing: "Nothing here",
      nothing_lead: "The link aged out, or someone guessed the URL.",
      privacy_h1: "Privacy",
      privacy_p1: "No public email or phone here. DJ booking lives on <a href=\"https://tomasz.agencja.fun/\">tomasz.agencja.fun</a>.",
      privacy_h2d: "Consulting form",
      privacy_p5: "Name, note, and how to reply from /consulting/ go to Telegram. They are not published. There is no newsletter.",
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
      consent_more: "Details in the privacy policy",
      now_kicker: "New track · SoundCloud",
      now_dek: "16 Sep 2026 · electronic · deep house",
      now_cta: "Listen",
      now_cta_close: "Close"
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
    syncNowCta();
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
      if (typeof window.gtag === "function") {
        window.gtag("set", "user_properties", { hub_lang: lang });
        track("language_change");
      }
      if (document.getElementById("consent") && document.getElementById("consent").classList.contains("is-on")) {
        renderConsent(document.getElementById("consent"));
      }
    });
    document.body.appendChild(btn);
  }

  function injectBgMark() {
    if (document.querySelector(".bg-mark")) return;
    var el = document.createElement("div");
    el.className = "bg-mark";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = "agencja<span>.</span>fun";
    document.body.appendChild(el);
  }

  function nowBtn() {
    return document.querySelector(".now[data-embed]");
  }

  function syncNowCta() {
    var btn = nowBtn();
    if (!btn) return;
    var cta = btn.querySelector(".now__cta");
    if (!cta) return;
    var open = btn.getAttribute("aria-expanded") === "true";
    cta.textContent = t(open ? "now_cta_close" : "now_cta");
  }

  function scWidget(url, autoplay) {
    var src = "https://w.soundcloud.com/player/?url=" + encodeURIComponent(url)
      + "&color=%23d4572a&auto_play=" + (autoplay ? "true" : "false")
      + "&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false";
    var f = document.createElement("iframe");
    f.setAttribute("width", "100%");
    f.setAttribute("height", "166");
    f.setAttribute("scrolling", "no");
    f.setAttribute("frameborder", "no");
    f.setAttribute("allow", "autoplay");
    f.title = "SoundCloud";
    f.src = src;
    return f;
  }

  function scMsg(iframe, method) {
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.postMessage(JSON.stringify({ method: method }), "https://w.soundcloud.com");
    } catch (e) {}
  }

  function bindNow() {
    var btn = nowBtn();
    if (!btn) return;
    var wrap = btn.closest(".now-wrap");
    var panel = wrap && wrap.querySelector(".now-player");
    var url = btn.getAttribute("data-embed");
    if (!wrap || !panel || !url) return;

    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      if (open) {
        btn.setAttribute("aria-expanded", "false");
        wrap.classList.remove("is-open");
        panel.setAttribute("aria-hidden", "true");
        scMsg(panel.querySelector("iframe"), "pause");
        track("now_close", { content_type: "audio", item_id: "pumpednfined", publication_type: "track" });
      } else {
        btn.setAttribute("aria-expanded", "true");
        wrap.classList.add("is-open");
        panel.setAttribute("aria-hidden", "false");
        var iframe = panel.querySelector("iframe");
        if (!iframe) {
          panel.appendChild(scWidget(url, true));
        } else {
          scMsg(iframe, "play");
        }
        track("now_open", { content_type: "audio", item_id: "pumpednfined", publication_type: "track" });
      }
      syncNowCta();
    });
  }

  applyI18n();
  injectLang();
  injectBgMark();
  bindNow();

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
    gtag("set", "user_properties", { hub_lang: lang });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA);
    document.head.appendChild(s);
  }

  function hubSurface() {
    var p = (location.pathname || "/").replace(/\/+$/, "") || "/";
    if (p.indexOf("/artykuly") === 0) return "artykuly";
    if (p.indexOf("/media") === 0) return "media";
    if (p.indexOf("/consulting") === 0) return "consulting";
    if (p.indexOf("/prywatnosc") === 0) return "prywatnosc";
    return "home";
  }

  function track(name, params) {
    if (typeof window.gtag !== "function") return;
    var payload = { hub_lang: lang, hub_surface: hubSurface() };
    if (params) {
      for (var k in params) {
        if (Object.prototype.hasOwnProperty.call(params, k)) payload[k] = params[k];
      }
    }
    window.gtag("event", name, payload);
  }
  window.agencjaTrack = track;

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-track]");
    if (!el) return;
    var id = el.getAttribute("data-track");
    if (id === "now") return;
    track("select_content", {
      content_type: "hub_link",
      item_id: id
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
