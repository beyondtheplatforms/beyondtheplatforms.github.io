---
layout: page
title: Blog
eyebrow: Blog
subtitle: "Articles, guides and reflections on AI, Copilot Studio, Microsoft Fabric, Power Platform, automation and agents."
---
{%- assign all_tags = "" | split: "" -%}
{%- for post in site.posts -%}{%- assign all_tags = all_tags | concat: post.tags -%}{%- endfor -%}
{%- assign all_tags = all_tags | uniq | sort_natural -%}
<section class="section section--tight">
  <div class="wrap">
    <div class="blog-tools">
      <form class="blog-search" role="search" aria-label="Blog" hidden>
        <label class="search" for="blog-search-input">
          {% include icon.html name="search" %}
          <span class="sr-only">Search articles</span>
          <input id="blog-search-input" type="search" placeholder="Search articles…" aria-controls="blog-posts" autocomplete="off">
        </label>
        <p class="blog-search-status" role="status" aria-live="polite" aria-atomic="true"></p>
      </form>
      <div class="chips" data-tag-filter hidden>
        <button class="chip chip--on" type="button" data-tag="">All</button>
        {% for tag in all_tags %}<button class="chip" type="button" data-tag="{{ tag | escape }}">{{ tag }}</button>{% endfor %}
      </div>
    </div>
    <p id="blog-search-empty" class="empty" hidden>No articles found.</p>
    <div id="blog-posts" class="grid grid-3">
      {% for post in site.posts %}
        {% include post-card.html post=post search=true %}
      {% endfor %}
    </div>
  </div>
</section>
