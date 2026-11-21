# Beyond The Platforms

Sito Jekyll pubblicato con GitHub Pages su https://beyondtheplatforms.github.io.
Blog in inglese, portfolio su `/portfolio/`.

## Pubblicare un nuovo articolo

1. In VS Code crea un file in `_posts/` chiamato `AAAA-MM-GG-titolo-breve.md`
   (la data nel nome è la data di pubblicazione).
2. Nel file vuoto scrivi `btp-post` e premi Invio: compare l'intestazione da compilare
   (titolo, categoria, tag, sommario, copertina). Con `Tab` passi al campo successivo.
3. Metti le immagini in `assets/images/posts/titolo-breve/`. La copertina si chiama `cover.webp` (o `.jpg`)
   e il sito la mostra da solo: non va ripetuta nel testo.
   Per un'immagine dentro l'articolo scrivi `btp-img`, per un video YouTube `btp-yt`.
4. Scrivi l'articolo in Markdown (`##` per le sezioni).
5. Commit e push su `main`. Dopo un paio di minuti l'articolo è online, in home, nel blog,
   nel feed RSS e con l'anteprima giusta su LinkedIn.

In alternativa chiedi a GitHub Copilot: *"Crea un nuovo articolo da questo testo"*.
Copilot segue le regole scritte in `.github/copilot-instructions.md`.

Un modello completo commentato è in `_drafts/article-template.md`.
I file in `_drafts/` non vengono pubblicati: puoi tenerci le bozze.

### Immagini

- Copertina consigliata: 1600×900 o 1536×1024, sotto i 300 KB.
- Formato WebP o JPG. Evita i PNG grandi: pesano 5-10 volte di più.
  Per convertire velocemente puoi usare https://squoosh.app.

## Dove si modifica cosa

| Cosa | Dove |
|---|---|
| Articoli | `_posts/` |
| Bozze (non pubblicate) | `_drafts/` |
| Pagine | `index.md` (home), `blog/`, `about/`, `newsletter/` |
| Link social | `_data/social.yml` |
| Titolo, descrizione, newsletter | `_config.yml` |
| Stile e colori (tema scuro e chiaro) | `assets/css/style.css` |
| Header, footer, card degli articoli | `_includes/` |
| Layout di pagina e articolo | `_layouts/` |
| Logo e favicon | `assets/images/brand/` |
| Portfolio (pagina React già compilata) | `portfolio/index.html` |

## Cosa fa il sito da solo

- Tema scuro e chiaro, con la scelta ricordata (condivisa con il portfolio)
- Ricerca a testo pieno e filtro per tag nel blog (`/blog/?tag=Copilot%20Studio` funziona come link)
- Indice automatico, barra di lettura e tempo di lettura negli articoli
- Anteprime per LinkedIn e altri social (`jekyll-seo-tag`), feed RSS (`/feed.xml`) e sitemap per Google
