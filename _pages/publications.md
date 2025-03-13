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

<!-- Move the loading message OUTSIDE the BibBase container -->
<div id="loading-wrapper" style="text-align: center; margin-bottom: 10px;">
    <p id="loading-message" style="
        display: inline-flex;
        font-size: 25px;
        font-style: italic;
        align-items: center;
        gap: 10px;
        min-width: 200px;
        white-space: nowrap;">
        <span class="spinner"></span> Loading publication list...
    </p>
</div>


<div id="bibbase-container">
  {% raw %}
  <script async id="bibbase-script" src="https://bibbase.org/show?bib=https://bibbase.org/f/gSr8DjLGW8y2y2snm/uploaded.bib&jsonp=1"></script>
  {% endraw %}
</div>
<style>
    /* Define the spinning animation */
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* Ensure the spinner is visible and properly styled */
    .spinner {
        width: 30px;
        height: 30px;
        border: 5px solid rgba(0, 0, 0, 0.2); /* Light gray border */
        border-top: 5px solid #007bff; /* Blue top border for spinning effect */
        border-radius: 50%;
        display: inline-block;
        animation: spin 1s linear infinite; /* Ensures continuous rotation */
    }

    /* Smooth fade-out animation */
    .fade-out {
        opacity: 0;
        transition: opacity 0.8s ease-out;
    }
</style>

<script src="/assets/js/bibbase.js"></script>