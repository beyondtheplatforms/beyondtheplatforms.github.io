# Beyond The Platforms - Jekyll Site V1

Sito professionale statico per GitHub Pages, basato su Jekyll.

## Struttura inclusa

- Home page
- Blog con post Markdown
- About Me
- Live Session alimentata da `_data/live_sessions.yml`
- Past Events alimentata da `_data/past_events.yml`
- Newsletter page
- Social links da `_data/social.yml`
- Layout riutilizzabili
- CSS responsive dark/Azure style

## Come pubblicare su GitHub Pages

1. Carica tutti i file nella root del repository `beyondtheplatforms.github.io`.
2. Se esiste già `index.html`, eliminalo o sostituiscilo con `index.md` incluso nel pacchetto.
3. Vai in Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: main / root.
6. Commit.

GitHub Pages genererà automaticamente il sito con Jekyll.

## Dove modificare i contenuti

- Articoli: `_posts/`
- Social: `_data/social.yml`
- Live: `_data/live_sessions.yml`
- Eventi: `_data/past_events.yml`
- Stile: `assets/css/style.css`
- Header/Footer: `_includes/`
