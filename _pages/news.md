---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

{% include base_path %}

<div class="grid__wrapper">
  {% for post in site.news reversed %}
     {% include archive-single-news.html %}
  {% endfor %}
</div>