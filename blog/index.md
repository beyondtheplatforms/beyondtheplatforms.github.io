---
layout: page
title: Blog
eyebrow: Blog
subtitle: "Articles, guides and reflections on AI, Copilot Studio, Microsoft Fabric, Power Platform, automation and agents."
---

<section class="section">
  <div class="container">
    <form class="blog-search" role="search" aria-label="Blog" hidden>
      <label for="blog-search-input">Search articles</label>
      <input id="blog-search-input" type="search" placeholder="Search..." aria-controls="blog-posts" autocomplete="off">
      <p class="blog-search-status" role="status" aria-live="polite" aria-atomic="true"></p>
    </form>
    <p id="blog-search-empty" class="section-description" hidden>No articles found.</p>
    <div id="blog-posts" class="grid grid-3">
      {% for post in site.posts %}
      <a class="card" href="{{ post.url | relative_url }}" data-search="{{ post.title | escape }} {{ post.category | escape }} {{ post.tags | join: ' ' | escape }} {{ post.content | markdownify | strip_html | escape }}">
        <span class="card-tag">{{ post.category }}</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <div class="meta">{{ post.date | date: "%B %-d, %Y" }}</div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
