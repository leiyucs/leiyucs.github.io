---
layout: archive
title: "Patents"
permalink: /patents/
author_profile: true
---

<div class="bootstrap-scope">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="/assets/js/bibtex_js.js" charset="utf-8"></script>
    <bibtex src="/files/uploaded.bib"></bibtex>
    <style>
            .bootstrap-scope html, body, span {
                font-family: "Times New Roman", Times, serif;
                font-size: 17px;
            }
            .bootstrap-scope bibtex { 
                display: none; 
            }
            .bootstrap-scope #bibtex_errors { 
                margin-top: 10px; 
                color: red; 
            }
            .bootstrap-scope .title {
            font-size: 18px; /* Adjust title font size */
            }
            @media screen and (max-width: 768px) {
            .bootstrap-scope html, body, span, h1 {
                font-size: 14px; /* Adjust for tablets and small screens */
            }
            .bootstrap-scope .title {
            font-size: 15px; /* Adjust title font size */
            }
            }
            @media screen and (max-width: 480px) {
                .bootstrap-scope html, body, span, h1 {
                    font-size: 14px; /* Adjust for mobile phones */
                }
                .bootstrap-scope .title {
                    font-size: 15px; /* Adjust title font size for small screens */
                }
            }
    </style>
    <div class="bibtex_structure">
    <div class="sections bibtextypekey">
    <div class="section misc">
    <div class="sort year" extra="DESC string">
          <div class="templates"></div>
    </div>
    </div>
    </div>
    </div>
    <div class="bibtex_display">
        <div class="if bibtex_template" style="display: none;">
            <ul>
                <li>
                    <span class="if title">
                    <a class="bibtexVar" extra="BIBTEXKEY">
                        <span style="text-decoration: underline;" class="title"></span>,
                    </a>
                    </span>
                    <div class="if author">
                        <span class="author"></span>
                    </div>
                    <div>
                        <span class="if journal"><em><span class="journal"></span></em>,</span>
                        <span class="if booktitle">In <em><span class="booktitle"></span></em>,</span>
                        <!-- <span class="if editor"><span class="editor"></span> (editors),</span> -->
                        <span class="if publisher"><em><span class="publisher"></span></em>,</span>
                        <!-- <span class="if !journal number">Technical report <span class="number"></span>,</span> -->
                        <span class="if institution"><span class="institution"></span>,</span>
                        <span class="if address"><span class="address"></span>,</span>
                        <span class="if volume"><span class="volume"></span>,</span>
                        <span class="if journal number">(<span class="number"></span>),</span>
                        <span class="if pages"> pages <span class="pages"></span>,</span>
                        <span class="if month"><span class="month"></span>,</span>
                        <span class="if year"><span class="year"></span>.</span>
                        <span class="if note"><span class="note"></span>.</span>
                    </div>
                    <div style="display:none"><span class="bibtextype"></span></div>
                    <div style="display:none"><span class="if topic"><span class="topic"></span></span></div>
                </li>
            </ul>
        </div>
    </div>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</div>