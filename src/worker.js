// agencja.fun — consulting form + static assets

const CHAT_ID = "1578521052";

const PACKS = {
  hour: "Pierwsza konsultacja — 500 zł, maks. 1 h",
  canvas: "Lean Canvas w 1 dzień — 1 500–2 500 zł",
  weeks: "AI i produkt, 4 tygodnie — 6–12 tys. zł",
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "cache-control": "no-store",
    },
  });

function clean(s, max) {
  return String(s || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);
}

function page(ok) {
  const title = ok ? "Wysłane" : "Nie wyszło";
  const copy = ok
    ? "Poszło na Telegram. Odezwę się."
    : "Nie wyszło. Wróć i spróbuj jeszcze raz.";
  const html =
    "<!DOCTYPE html><html lang=\"pl\"><head><meta charset=\"UTF-8\">" +
    "<meta name=\"robots\" content=\"noindex\">" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
    "<title>" + title + "</title></head><body style=\"font-family:sans-serif;background:#0b0a09;color:#efe6d8;padding:48px 20px\">" +
    "<p>" + copy + "</p><p><a href=\"/consulting/\" style=\"color:#d4572a\">← consulting</a></p></body></html>";
  return new Response(html, {
    status: ok ? 200 : 502,
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "no-store",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/consulting" && request.method === "POST") {
      const origin = request.headers.get("origin") || "";
      const referer = request.headers.get("referer") || "";
      const fromSite =
        origin === "https://agencja.fun" ||
        origin === "https://www.agencja.fun" ||
        referer.startsWith("https://agencja.fun/") ||
        referer.startsWith("https://www.agencja.fun/");
      if (!fromSite) return json({ success: false }, 403);

      const len = Number(request.headers.get("content-length") || "0");
      if (len > 12000) return json({ success: false }, 413);

      const ct = request.headers.get("content-type") || "";
      const wantsHtml = ct.indexOf("application/json") === -1;
      let data = {};
      try {
        if (ct.indexOf("application/json") !== -1) data = await request.json();
        else data = Object.fromEntries((await request.formData()).entries());
      } catch (e) {
        return wantsHtml ? page(false) : json({ success: false }, 400);
      }

      if (data.website) return wantsHtml ? page(true) : json({ success: true });

      const name = clean(data.name, 120);
      const what = clean(data.what, 240);
      const pack = clean(data.pack, 20);
      const back = clean(data.back, 180);
      const note = clean(data.note, 2000);

      if (!name || !what || !PACKS[pack] || back.length < 2) {
        return wantsHtml ? page(false) : json({ success: false, error: "fields" }, 400);
      }

      const text = [
        "Consulting · agencja.fun",
        "",
        "Imię: " + name,
        "Co buduje: " + what,
        "Pakiet: " + PACKS[pack],
        "Odpowiedź: " + back,
        note ? "" : "",
        note ? note : "",
      ]
        .filter(function (line) {
          return line !== "";
        })
        .join("\n");

      if (!env.TELEGRAM_BOT_TOKEN) {
        return wantsHtml ? page(false) : json({ success: false }, 502);
      }

      try {
        const tg = await fetch(
          "https://api.telegram.org/bot" + env.TELEGRAM_BOT_TOKEN + "/sendMessage",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text }),
          }
        );
        const tgJson = await tg.json();
        if (!tgJson.ok) return wantsHtml ? page(false) : json({ success: false }, 502);
      } catch (e) {
        return wantsHtml ? page(false) : json({ success: false }, 502);
      }

      return wantsHtml ? page(true) : json({ success: true });
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "not found" }, { status: 404 });
    }
    return env.ASSETS.fetch(request);
  },
};
