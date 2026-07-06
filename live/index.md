---
layout: page
title: "Video, live e contenuti YouTube"
eyebrow: Live Session
subtitle: "Una raccolta ordinata delle sessioni live, video tecnici, demo e contenuti formativi pubblicati online."
---

<div class="container">

  <div class="grid grid-2">

    {% for session in site.data.live_sessions %}

    <div class="card">

      <h3>{{ session.title }}</h3>

      {{ session.url }}

        <img
          class="youtube-thumb"
          src="https://img.youtube.com/vi/{{ session.video_id }}/hqdefault.jpg"
          alt="{{ meta">
        {{ session.platform }} · {{ session.topic }} · {{ session.date }}
      </div>

    </div>

    {% endfor %}

  </div>

</div>
