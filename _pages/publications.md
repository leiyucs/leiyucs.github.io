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

<!-- <div id="bibbase-container">
  <script src="https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1"></script>
</div> -->

<div id="bibbase-container">Loading publications...</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    let bibbaseContainer = document.getElementById("bibbase-container");

    // Ensure the container exists before manipulating it
    if (bibbaseContainer) {
      let cachedBibBase = localStorage.getItem("bibbase_cache");
      
      if (cachedBibBase) {
        bibbaseContainer.innerHTML = cachedBibBase;
      } else {
        let script = document.createElement("script");
        script.src = "https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1";
        bibbaseContainer.appendChild(script);
      }
    } else {
      console.error("Error: #bibbase-container not found!");
    }
  });
</script>