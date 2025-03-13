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
  <p id="loading-message">The script is loading...</p>
  <script src="https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1"></script>
</div>

<script>
  // Select the container where BibBase will insert content
  let bibbaseContainer = document.getElementById("bibbase-container");
  let loadingMessage = document.getElementById("loading-message");

  // Use MutationObserver to detect when BibBase modifies the DOM
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length > 0) {
        // Remove "The script is loading..." once BibBase adds content
        if (loadingMessage) {
          loadingMessage.style.display = "none";
        }
        observer.disconnect(); // Stop observing once content is loaded
      }
    });
  });

  // Start observing for changes in the container
  observer.observe(bibbaseContainer, { childList: true, subtree: true });
</script>