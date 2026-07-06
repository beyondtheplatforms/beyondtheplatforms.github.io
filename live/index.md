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

      <div style="margin:15px 0;">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/{{ session.video_id }}"
          title="{{ session.title }}"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>

      <p>{rgin-top:15px;">
        <a
          href="{{ session.url }}"
          target="_blank"
          class="button button-primary">
         iv>
