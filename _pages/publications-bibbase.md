---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
toc: true
---
{% if site.author.googlescholar %}
<p style="font-size: 18px;">
  You may find my updated publication list on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
</p>
{% endif %}


<!-- Move the loading message OUTSIDE the BibBase container -->
<p id="loading-message" style="display: inline-flex; font-size: 25px; font-style: italic; gap: 10px; min-width: 200px;  white-space: nowrap; color: #555; visibility: visible !important;">
<img src="https://i.gifer.com/VAyR.gif" alt="Loading..." width="24" height="24"> 
Loading publication list...
</p>

<div id="bibbase-container">
  {% raw %}
  <script id="bibbase-script" src="https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1"></script>
  {% endraw %}
</div>

<script src="/assets/js/bibbase.js"></script>