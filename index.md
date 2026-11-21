---
layout: default
title: Home
description: "Beyond The Platforms: AI, Copilot Studio, Microsoft Fabric and Power Platform insights."
---
{%- assign latest = site.posts.first -%}
<section class="hero">
  <div class="hero__glow" aria-hidden="true"></div>
  <div class="wrap hero__grid">
    <div class="hero__copy">
      <p class="eyebrow">AI · Copilot Studio · Microsoft Fabric · Power Platform</p>
      <h1>Going <em>beyond</em> the tools.</h1>
      <p class="lead lead--big">Ideas, guides and practical content to go beyond the tools: building real solutions, AI agents and automations in the Microsoft world.</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="{{ '/blog/' | relative_url }}">Read the articles <span aria-hidden="true">→</span></a>
        <a class="btn btn--ghost" href="{{ '/portfolio/' | relative_url }}">See my projects</a>
      </div>
    </div>
    {%- if latest %}
    <div class="hero__latest">
      <p class="hero__label"><span class="dot" aria-hidden="true"></span> Latest article</p>
      {% include post-card.html post=latest big=true %}
    </div>
    {%- endif %}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section__head" data-reveal>
      <div>
        <p class="eyebrow">From the blog</p>
        <h2>Recent <em>articles.</em></h2>
      </div>
      <a class="link-arrow" href="{{ '/blog/' | relative_url }}">All articles <span aria-hidden="true">→</span></a>
    </div>
    <div class="grid grid-3">
      {% for post in site.posts offset: 1 limit: 6 %}
        {% include post-card.html post=post %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section__head" data-reveal>
      <div>
        <p class="eyebrow">Topics</p>
        <h2>What I write <em>about.</em></h2>
      </div>
    </div>
    {%- assign all_tags = "" | split: "" -%}
    {%- for post in site.posts -%}{%- assign all_tags = all_tags | concat: post.tags -%}{%- endfor -%}
    {%- assign all_tags = all_tags | uniq | sort_natural -%}
    <div class="chips chips--topics" data-reveal>
      {% for tag in all_tags %}<a class="chip" href="{{ '/blog/' | relative_url }}?tag={{ tag | url_encode }}">{{ tag }}</a>{% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <a class="teaser" href="{{ '/portfolio/' | relative_url }}" data-reveal>
      <div>
        <p class="eyebrow">Portfolio</p>
        <h2>Eleven real projects, <em>from brief to adoption.</em></h2>
        <p class="lead">AI agents, apps, portals, automations and Power BI reports built for companies like IKEA, Dolce&amp;Gabbana Beauty and FLOS.</p>
      </div>
      <span class="btn btn--primary">Open the portfolio <span aria-hidden="true">↗</span></span>
    </a>
  </div>
</section>

<section class="section">
  <div class="wrap">{% include newsletter-form.html %}</div>
</section>
