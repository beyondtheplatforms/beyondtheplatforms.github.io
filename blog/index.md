---
layout: page
title: Blog
eyebrow: Blog
subtitle: "Articoli, guide e riflessioni su AI, Copilot Studio, Microsoft Fabric, Power Platform, automazione e agenti."
---

<section class="section">
  <div class="container">
    <div class="grid grid-3">
      {% for post in site.posts %}
      <a class="card" href="{{ post.url | relative_url }}">
        <span class="card-tag">{{ post.category }}</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <div class="meta">{{ post.date | date: "%d/%m/%Y" }}</div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
