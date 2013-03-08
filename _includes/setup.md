{% assign lang = "en" %}
{% assign lang_prefix = "en" %}

{% if page.categories contains 'en' or page.url contains '/en/' %}
    {% assign lang = "en" %}
    {% assign lang_prefix = "en/" %}
{% endif %}

{% capture category %}{% if lang == "en" %}{{ page.categories[1] }}{% else %}{{ page.categories[0] }}{% endif %}{% endcapture %}

{% if page.categories contains 'ru' or page.url contains '/ru/' %}
    {% assign lang = "ru" %}
    {% assign lang_prefix = "ru/" %}
{% endif %}

{% capture category %}{% if lang == "ru" %}{{ page.categories[1] }}{% else %}{{ page.categories[0] }}{% endif %}{% endcapture %}

{% include references.md %}
