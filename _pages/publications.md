---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
toc: true
---
{% if site.author.googlescholar %}
<div class="pubmessage">
    <style>
        .pubmessage .msg {
            font-size: 17px;
        }
            @media screen and (max-width: 768px) {
            .pubmessage .msg {
                font-size: 14px; /* Adjust for tablets and small screens */
            }
            }
            @media screen and (max-width: 480px) {
            .pubmessage .msg {
                font-size: 14px; /* Adjust for tablets and small screens */
            }
            }
    </style>
<p class="msg">
  You may find the updated publication list on <a style="text-decoration: underline" href="{{site.author.googlescholar}}">my Google Scholar profile</a>.
</p>
</div>
{% endif %}
<!-- view-source:https://www.cs.cmu.edu/~mmv/Veloso.html -->
<style>
        html, body {
            overflow: hidden; /* Prevents parent page scrolling */
        }
        /* Container to hold the iframe */
        .iframe-container {
            width: 100%;
            height: 83vh; /* Make iframe fill the screen */
        }
        #publication-frame {
            width: calc(100% - 15px);
            height: 100%; /* Full height */
            border: none;
            overflow-y: auto;
        }
        /* Force a visible vertical scrollbar */
        /* .iframe-scrollbar {
            width: 15px;
            height: 75%;
            background: rgb(152, 149, 149);
            position: absolute;
            right: 0;
            top: 15;
          } */
    #publication-frame::-webkit-scrollbar {
        width: 15px; /* Width of the scrollbar */
    }
    #publication-frame::-webkit-scrollbar-track {
        background: #f1f1f1; /* Light gray background */
    }
    #publication-frame::-webkit-scrollbar-thumb {
        background: #888; /* Darker scrollbar */
        border-radius: 10px;
    }
    #publication-frame::-webkit-scrollbar-thumb:hover {
        background: #555; /* Even darker when hovered */
    }
    /* Ensure the iframe always shows the scrollbar */
    #publication-frame {
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: #888 #f1f1f1; /* Thumb color and track color */
    }
</style>
<div class="iframe-container">
<iframe src="/assets/publication.html" frameborder="0" id="publication-frame"></iframe>
        <!-- <div class="iframe-scrollbar"></div> Fake scrollbar -->
</div>
