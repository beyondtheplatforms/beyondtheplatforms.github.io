---
layout: page
title: "Eventi, talk e sessioni"
eyebrow: Past Events
subtitle: "Una raccolta degli eventi live e online a cui ho partecipato come speaker, contributor o partecipante attivo."
---

<section class="section">
  <div class="container">
    <div class="list">
      {% for event in site.data.past_events %}
      <a class="list-item" href="{{ event.url }}">
        <h3>{{ event.title }}</h3>
        <p>{{ event.topic }}</p>
        <div class="meta">{{ event.location }} · {{ event.format }} · {{ event.role }} · {{ event.date }}</div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
