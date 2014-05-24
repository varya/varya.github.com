---

title: BEML - an HTML preprocessor for BEM

categories: en issues

layout: post

---
Depending on a project people prefer different ways to adapt BEM.
This results 
into a range of tools for our choice. Today, I am translating Maxim Shkalin's
description of the `BEML` templating pre-processor.

Willing to lighten the development with BEM I propose a tiny extension for the
HTML syntax (yes, I used to writ all those long CSS classes manually). As the
name `BEMHTML` is greedily taken by the Yandex guys, let us call it `BEML`.<excerpt/>

## Objective

1. Smooth learning curve<br/>
HTML-syntax with no need to transform one language into another.
1. Portability<br/>
The tool has to be easy to use with other languages.
1. Compatiblity with template engines<br/>
Instead of trying to replace them.
1. Simplicity<br/>
Easy to use at any project.

It might be my habit, but I do not see the need to transform JSON into HTML.
BEMJSON page description usually looks like spaghetti and is very hard to read
due to its syntax. Also I do not think that HTML is wrong. AngularJS has already
shown that HTML can be much flexible than now. Thus, I decided to follow this
example.

Moreover, there is anothe problem with using BEMHTML. You need Node.js running
for your backend; or use another JavaScript engine for PHP or Rython with dirty
hacks like V8JS or PyV8. The otehr way round could be preparation of a rendered
template, but this sounds even more unnatural.

It would be nice to have a JavaScript-preprocessor and a relative Grunt task
which can be used for creating the prototypes. Then, with transforming to PHP
you can use the same templates in the backend.

## Concept
I had a lot of ideas how to extend HTML with inheritance, includes and loops.
But finally I cut them off. It would be too complex to support and then provide
the portability. Besides, there is a lot of other template engines; I would
rather enter into alliance with them than to compete. Finally I got not a
template engine but a preprocessor (or postprocessor) to the current one.

The scenario is the following. First, create BEML markup using your template
engine. Then, past it not to the client but to the post-processor which turns
BEM syntax into HTML. Funally the HTML goes to the client.

Or, there is a faster way for the braves. You can change your template with
pre-processor which turns BEM attributes into HTML, cache it and use this
chached copy with your dear template engine. Indeed, the pre-processor does not
touch the template engine code.

## Syntax
This is very simple, you just use 4 more attributes like `block`, `elem`, `mod`
and `mix`. I suppose it is clear what each of them is responsible for. For the
complex values you can use light JSON dialect with no quotation marks and
optional curly braces. Finally the tool turns this code:

```html
<div block="b-animals">
  <div elem="cat" mod="size:big, color:red"></div>
</div>
```

into the following HTML.

```html
<div class="b-animals">
  <div class="b-animals__cat
              b-animals__cat_size_big
              b-animals__cat_color_red
              "></div>
</div>
```

Much readable.

Full information about the syntax you can learn from the [README on GitHub](https://github.com/zenwalker/node-beml).

## Try now

```bash
npm install beml
```

```js
var beml = require('beml');
var template = '<div block="b-block" mod="size:big"></div>';

beml.process(template, function(err, html) {
  console.log(html);
});
```

## Author
This article is a translaton.
The original article by Maxim Shkalin was [posted in his
blog](http://zenwalker.ru/blog/2014/1/html-preprocessor-for-bem.html). Follow him in the social networks:
<a class="link social-ico__ico social-ico__ico_in-text social-ico__ico_type_twitter"
href="https://twitter.com/zenwalker2/" target="_blank"></a>
<a class="link social-ico__ico social-ico__ico_in-text social-ico__ico_type_github"
href="https://github.com/zenwalker/" target="_blank"></a>
