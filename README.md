# Beyond The Platforms

Source of [beyondtheplatforms.github.io](https://beyondtheplatforms.github.io), the blog and portfolio of **Paolo Asnaghi**:
AI agents, Copilot Studio, Microsoft Fabric and the Power Platform, from real projects.

- **Blog** – articles and guides, in English: [/blog/](https://beyondtheplatforms.github.io/blog/)
- **Portfolio** – eleven projects, from brief to adoption: [/portfolio/](https://beyondtheplatforms.github.io/portfolio/)
- **Newsletter** – [Substack](https://paoloasnaghi.substack.com)

Built with [Jekyll](https://jekyllrb.com) and published with GitHub Pages. No build step and no dependencies beyond the GitHub Pages defaults.

## Publishing an article

1. Create `_posts/YYYY-MM-DD-short-title.md` (the date in the file name is the publication date).
2. In the empty file type `btp-post` and press Enter to insert the front matter, then fill it in (`Tab` moves to the next field).
3. Put images in `assets/images/posts/short-title/`. The cover (`cover.webp` or `.jpg`) is shown automatically, so don't repeat it in the text.
   Use `btp-img` for an image inside the article and `btp-yt` for a YouTube video.
4. Write in Markdown, using `##` for sections.
5. Commit and push to `main`. The article goes live in a couple of minutes, with its LinkedIn preview and RSS entry.

GitHub Copilot can do steps 1–4 from plain text: it follows the rules in [`.github/copilot-instructions.md`](.github/copilot-instructions.md).
A commented template lives in [`_drafts/article-template.md`](_drafts/article-template.md); files in `_drafts/` are not published.

**Images:** covers around 1600×900 or 1536×1024, under 300 KB, in WebP or JPG.

## Project structure

| What | Where |
|---|---|
| Articles | `_posts/` |
| Drafts (not published) | `_drafts/` |
| Pages | `index.md`, `blog/`, `about/`, `newsletter/` |
| Social links | `_data/social.yml` |
| Site title, description, newsletter URL | `_config.yml` |
| Styles and colours (dark and light theme) | `assets/css/style.css` |
| Header, footer, article cards | `_includes/` |
| Page and article layouts | `_layouts/` |
| Logo and favicon | `assets/images/brand/` |
| Portfolio (pre-built React page) | `portfolio/index.html` |

## Features

- Dark and light theme, remembered across the blog and the portfolio
- Full-text search and tag filters on the blog (`/blog/?tag=Copilot%20Studio` works as a link)
- Table of contents, reading progress and reading time on articles
- Social previews (`jekyll-seo-tag`), RSS feed at `/feed.xml` and a sitemap

© Paolo Asnaghi. Articles and images may not be reused without permission.
