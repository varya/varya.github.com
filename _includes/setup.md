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

Looking if the page have a translation
Borrowed from https://github.com/kizu/kizu.github.com

    {% if lang == 'en' %}
        {% capture expected_translation_id %}{{ page.id | replace:'/en/','/' }}{% endcapture %}
    {% else %}
        {% capture expected_translation_id  %}/en{{ page.id }}{% endcapture %}
    {% endif %}

    {% assign posts_ids = site.posts | map:'id' %}

    {% if page.page_type != 'post' or posts_ids contains expected_translation_id %}
        {% assign page_has_translation = true %}
    {% endif %}

{% capture category %}{% if lang == "ru" %}{{ page.categories[1] }}{% else %}{{ page.categories[0] }}{% endif %}{% endcapture %}

{% include references.md %}
