---
layout: page
title: "Video, live e contenuti YouTube"
eyebrow: Live Session
subtitle: "Una raccolta ordinata delle sessioni live, video tecnici, demo e contenuti formativi pubblicati online."
---

<div class="containerimg
          class="youtube-thumb"
          src="https://img.youtube.com/vi/{{ session.video_id }}/hqdefault.jpg"
      <div class="meta">
        {{ session.platform }} · {{ session.topic }} · {{ session.date }}
      </div>

    </div>

    {% endfor %}

  </div>

</div>
