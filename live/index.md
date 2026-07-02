---
layout: page
title: "Video, live e contenuti YouTube"
eyebrow: Live Session
subtitle: "Una raccolta ordinata delle sessioni live, video tecnici, demo e contenuti formativi pubblicati online."
---

<section class="section">
  <div class="container">
    <div class="list">
      {% for session in site.data.live_sessions %}
      <a class="list-item" href="{{ session.url }}">
        <h3>{{ session.title }}</h3>
        <p>{{ session.description }}</p>
        <div class="meta">{{ session.platform }} · {{ session.topic }} · {{ session.date }}</div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
