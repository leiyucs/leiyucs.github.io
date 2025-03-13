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
    <p id="loading-message" style="font-size: 20px;">Loading publication list...</p>
  <script id="bibbase-script" src="https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1"></script>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    let bibbaseContainer = document.getElementById("bibbase-container");
    let loadingMessage = document.getElementById("loading-message");

    if (bibbaseContainer) {
      // Set up MutationObserver to watch for content changes
      let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(node => {
            // Ensure the added node is not just a blank text node
            if (node.nodeType === 1 && node.innerHTML.trim().length > 0) {
              if (loadingMessage) {
                loadingMessage.style.display = "none"; // Hide loading message
              }
              observer.disconnect(); // Stop observing after content appears
            }
          });
        });
      });

      // Start observing the BibBase container for content changes
      observer.observe(bibbaseContainer, { childList: true, subtree: true });

      // Fallback: If no changes detected after 10 seconds, hide the message
      setTimeout(() => {
        if (loadingMessage) {
          loadingMessage.style.display = "none";
        }
      }, 10000);
    }
  });
</script>