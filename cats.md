---
title: Категорії
permalink: "/cat/"
layout: page
---


<div class="categories">
	<h1>Хмара категорій:</h1>
	<ul>		
		{% for cat in site.categories %}
			<li>
				{% include categorypreview.html %}
			</li>
		{% endfor %}		
	</ul>
</div>
