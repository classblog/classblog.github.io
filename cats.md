---
title: Категорії
permalink: "/cat/"
layout: page
---

<aside class="content conteiner">
	<h1>Мітки та категорії:</h1>
	<ul>
		<li>
		{% for cat in site.categories %}
			<a href="/cat/{{ cat[0] }}">#{{ cat[0] }}</a>
		{% endfor %}
		</li>
	</ul>
</aside>