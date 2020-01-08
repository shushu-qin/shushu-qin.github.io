---
title: About
layout: page
permalink: "/about/"
published: true
---

<div class="page" markdown="1">

{% capture page_subtitle %}
<img
    class="me"
    alt="{{ author.name }}"
    src="{{ site.author.photo | relative_url }}"
    srcset="{{ site.author.photo2x | relative_url }} 2x"
/>
{% endcapture %}

{% include page/title.html title=page.title subtitle=page_subtitle %}

你好, Hello, Bonjour, Hola! I am a CAE software engineer who has the passion to share thoughts and ideas through website. This blog to share my excitement with Computational Mechanics as well as the world ;)

</div>