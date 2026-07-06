---
layout: page
title: "Video, live e contenuti YouTube"
eyebrow: Live Session
subtitle: "Una raccolta ordinata delle sessioni live, video tecnici, demo e contenuti formativi pubblicati online."
---

<div class="container">

  {% for session in site.data.live_sessions %}

  <div class="card" style="margin-bottom:40px;">

    <h3>{{ session.title }}</h3>

    <div style="margin:20px 0;">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/{{ session.video_id }}"
        title="{{ session.title }}"
        frameborder="0"
        allowfullscreenssion.date }}
    </div>

    <p style="margin-top:15px;">
      {{ session.url }}
        Guarda su YouTube →
      </a>
    </p>

  </div>

  {% endfor %}

</div>
