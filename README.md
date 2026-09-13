# agencja.fun

Hub w stylu Linktree: cztery duże drzwi, analityka, zero maila i telefonu.

**Live:** https://agencja.fun

| Przycisk | Cel |
|---|---|
| Muzyka & DJ | https://tomasz.agencja.fun |
| Startupy & Consulting | `/consulting/` — w budowie |
| Artykuły | `/artykuly/` |
| Media i linki | `/media/` — IG, SoundCloud, YouTube, Facebook |

## Stack

- Cloudflare Worker `agencja-fun` + static assets (`public/`)
- GitHub: `wojdatomek/agencja-fun`
- CI: push na `master` → dev **i** produkcja (`wrangler-action@v3.14`, wrangler `4.126.0`)

## Analityka

1. **Cloudflare Web Analytics** — włączone na strefie (`auto_install`), bez ciasteczek. Dashboard: Cloudflare → agencja.fun → Analytics → Web Analytics.
2. **Google Analytics 4** — `G-KE8PG4PMGB` w `public/js/config.js`. Banner zgody RODO; bez zgody skrypt Google się nie ładuje. Zdarzenie: `select_content` z `item_id` (`muzyka`, `consulting`, `artykuly`, `media`, `media_ig`…).

Bez zgody skrypt Google się nie ładuje.

## Struktura

```
public/
  index.html
  artykuly/  media/  consulting/  prywatnosc/
  css/hub.css  js/config.js  js/hub.js
  img/avatar.jpg  img/og.jpg
src/worker.js
wrangler.toml
```

Nowy artykuł = nowy katalog `public/artykuly/slug/index.html` + wpis w sitemapie.

## Deploy

```bash
git add -A && git commit -m "opis" && git push origin master
```

Produkcja aktualizuje się z pushem. README nie odpala workflow.

## Zasady

- Brak publicznego maila i telefonu
- Socials tylko te już publiczne na tomasz.agencja.fun
- Nie nazywać publicznej subdomeny workers.dev w copy
