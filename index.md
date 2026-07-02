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
      Idee, guide e contenuti pratici per andare oltre gli strumenti: costruire soluzioni,
      agenti AI e automazioni reali nel mondo Microsoft.
    </p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/blog/' | relative_url }}">Leggi gli articoli</a>
      <a class="button button-secondary" href="{{ '/live/' | relative_url }}">Guarda le live</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <div>
        <div class="section-eyebrow">Latest content</div>
        <h2>Articoli in evidenza</h2>
      </div>
      <p class="section-description">
        Approfondimenti su AI Agents, Copilot Studio, Microsoft Fabric, Power Platform e automazione dei processi.
      </p>
    </div>

    <div class="grid grid-3">
      {% assign latest_posts = site.posts | slice: 0, 3 %}
      {% for post in latest_posts %}
      <a class="card" href="{{ post.url | relative_url }}">
        <span class="card-tag">{{ post.category }}</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 135 }}</p>
        <div class="meta">{{ post.date | date: "%d/%m/%Y" }}</div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <div>
        <div class="section-eyebrow">Live session</div>
        <h2>Video, demo e sessioni live</h2>
      </div>
      <p class="section-description">
        Raccolta delle sessioni video pubblicate su YouTube: spiegazioni, demo, eventi e contenuti formativi.
      </p>
    </div>

    <div class="grid grid-2">
      {% for session in site.data.live_sessions limit:2 %}
      <a class="card" href="{{ session.url }}">
        <span class="card-tag">{{ session.platform }}</span>
        <h3>{{ session.title }}</h3>
        <p>{{ session.description }}</p>
        <div class="meta">{{ session.topic }} · {{ session.date }}</div>
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
