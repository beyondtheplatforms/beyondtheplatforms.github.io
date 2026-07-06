---
layout: page
title: "Video, live e contenuti YouTube"
eyebrow: Live Session
subtitle: "Una raccolta ordinata delle sessioni live, video tecnici, demo e contenuti formativi pubblicati online."
---

<div class="container">

{% for session in site.data.live_sessions %}

<div class="card">

<h3>{{ session.title }}</h3>

<p>{{ session.description }}</p>

<div class="meta">
{{ session.platform }} · {{ session.topic }} · {{ session.date }}
</div>

</div>

{% endfor %}

</div>
