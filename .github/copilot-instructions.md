# Copilot Instructions — Antoinette Data Center

## Content Reference

All website copy (French and English), program details, contact info, partner list, and key metrics live in:

```
docs/content.md
```

**Always read `docs/content.md` before editing `index.html` or any other content-bearing file.** Use the text, prices, names, links, and translations from that file as the single source of truth.

## Repository Layout

| Path | Purpose |
|------|---------|
| `index.html` | Main single-page site |
| `css/style.css` | Stylesheet |
| `js/` | JavaScript modules |
| `assets/` | Images and static assets |
| `docs/content.md` | Master content (FR + EN copy) |
| `docs/mindmap.md` | Project mind-map / architecture notes |
| `scripts/` | Build and generation helpers |

## Key Facts

- Site language: bilingual FR / EN (toggle via `switchLang()`)
- Deployed to GitHub Pages from `main` branch via `.github/workflows/deploy.yml`
- No test/lint runner — validate Python scripts with `python -m py_compile scripts/build.py scripts/generate.py`
