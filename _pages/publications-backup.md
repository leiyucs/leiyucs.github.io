---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
toc: true
---

{% if site.author.googlescholar %}
  You may find my updated publication list on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include toc %}

{% include base_path %}

<!-- {% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->
# Conference Papers
{% for post in site.publications reversed %}
  {% if post.pubtype == 'conference' %}
      {% include archive-single.html %}
  {% endif %}
{% endfor %}

<br>


# Journal Articles
{% for post in site.publications reversed %}
  {% if post.pubtype == 'journal' %}
      {% include archive-single.html %}
  {% endif %}
{% endfor %}

<!-- <h2>Academic</h2>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'academic' %}
      {% include archive-single.html %}
  {% endif %}
{% endfor %} -->