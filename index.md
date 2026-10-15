---
layout: default
title: Home
description: "Beyond The Platforms: AI, Copilot Studio, Microsoft Fabric and Power Platform insights."
---

<section class="hero">
  <div class="container">
    <div class="badge">AI · Copilot Studio · Microsoft Fabric · Power Platform</div>
    <h1>Beyond The Platforms</h1>
    <p>
      Ideas, guides and practical content to go beyond the tools: building real solutions,
      AI agents and automations in the Microsoft world.
    </p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/blog/' | relative_url }}">Read the articles</a>
      <a class="button button-secondary" href="{{ '/about/' | relative_url }}">Learn more</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <div>
        <div class="section-eyebrow">Latest content</div>
        <h2>Featured articles</h2>
      </div>
      <p class="section-description">
        In-depth insights on AI Agents, Copilot Studio, Microsoft Fabric, Power Platform and process automation.
      </p>
    </div>

    <div class="grid grid-3">
      {% assign latest_posts = site.posts | slice: 0, 3 %}
      {% for post in latest_posts %}
      <a class="card" href="{{ post.url | relative_url }}">
        <span class="card-tag">{{ post.category }}</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 135 }}</p>
        <div class="meta">{{ post.date | date: "%B %-d, %Y" }}</div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    {% include newsletter-form.html %}
  </div>
</section>
