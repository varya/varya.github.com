---

title: BEML - an HTML preprocessor for BEM

categories: en issues

layout: post

---
The original article by Maxim Shkalin was [posted in his
blog](http://zenwalker.ru/blog/2014/1/html-preprocessor-for-bem.html).

Willing to lighten the development with BEM I propose a tiny extension for the
HTML syntax (yes, I used to writ all those long CSS classes manually). As the
name `BEMHTML` is greedily taken by the Yandex guys, let us call it `BEML`.

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
