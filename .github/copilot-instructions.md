# Beyond The Platforms · instructions for GitHub Copilot

This repository is a Jekyll site published with GitHub Pages at https://beyondtheplatforms.github.io.
It is Paolo Asnaghi's blog about AI agents, Copilot Studio, Microsoft Fabric and the Power Platform.
The blog is in **English only**.

## Creating a new article

When asked to create or publish an article (for example "create an article from this text"):

1. Create `_posts/YYYY-MM-DD-short-title.md`. Use today's date unless another date is given.
   The short title is lowercase, words separated by hyphens, no accents.
2. Start the file with this front matter, every field filled in:

   ```yaml
   ---
   title: "Article title"
   date: YYYY-MM-DD
   category: "Copilot Studio"
   tags: ["AI Agents", "Copilot Studio"]
   excerpt: "One or two sentences that sum up the article."
   image: "/assets/images/posts/short-title/cover.webp"
   image_alt: "What the cover image shows"
   ---
   ```

   - Do **not** add `layout: post`: it is set automatically in `_config.yml`.
   - `category`: one of Copilot Studio, AI Agents, Power Platform, Microsoft Fabric, Power BI, Automation.
     Reuse existing categories and tags before inventing new ones (look at the other files in `_posts/`).
   - `excerpt`: plain text, no Markdown, max ~200 characters.
3. Images go in `assets/images/posts/short-title/`. The cover is `cover.webp` (or .jpg).
   The layout shows the cover automatically: do **not** repeat it with an `<img>` at the top of the article.
   Other images use Markdown: `![Description](/assets/images/posts/short-title/name.webp)`.
4. Body in Markdown. Use `##` for sections and `###` for subsections; never `#` (the title is already the H1).
   Articles over 800 words with at least three `##` sections get a table of contents automatically.
5. Keep the author's text. Fix only typos and formatting unless asked to rewrite.

## Other conventions

- Social links live in `_data/social.yml`; the newsletter URL in `_config.yml`.
- Style is in `assets/css/style.css` (colours are CSS variables at the top, dark and light theme).
- The portfolio at `/portfolio/` is a separate, pre-built React page (`portfolio/index.html`). Do not edit it by hand.
- Do not add Jekyll plugins outside the GitHub Pages allow-list.
