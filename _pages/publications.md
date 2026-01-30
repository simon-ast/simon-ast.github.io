---
layout: page
permalink: /publications/
title: publications
description: publications by year in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% capture upcoming_block %}{% bibliography --group_by none --query @*[upcoming=true]* %}{% endcapture %}
{% if upcoming_block contains '<li' %}
  <h2 class="bibliography">Upcoming</h2>
  {{ upcoming_block }}
{% endif %}

{% bibliography --query @*[upcoming!=true]* %}

</div>