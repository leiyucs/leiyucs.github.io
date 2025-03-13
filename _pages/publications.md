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
<br>

<div id="bibbase-container">
  <!-- <script src="https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1"></script> -->
  <script>
  document.addEventListener("DOMContentLoaded", function() {
    let cachedBibBase = localStorage.getItem("bibbase_cache");
    if (cachedBibBase) {
      document.getElementById("bibbase-container").innerHTML = cachedBibBase;
    } else {
      let script = document.createElement("script");
      script.src = "https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1";
      document.body.appendChild(script);
    }
  });
</script>
</div>
