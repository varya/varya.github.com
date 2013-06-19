---

title: Kinds of JavaScript components

categories: en issues

layout: post

invisible: true

---
After presentation
http://events.yandex.ru/events/yasubbotnik/msk-jul-2012/talks/302/

Adding JavaScript ot HTML empowers interface.

Not all the methods are covered here, but some the most interesting.

Topic:

 * for a developer,
 * about JavaScript,
 * about client-side components.

Example of interface: a link to authorizing page.
Improvement: no separate page but popup (layer) with authorizing form.

```
<a href="/login-page" onclick="return showLogin()">
```
Also there is a hidden `div` with a webform inside.

```
dom = document.getElementById ? true : false;

function showLogin() {
  if ( dom && document.forms['login'] ) {
    document.getElementById('login-form').style.display = 'block';
    return false;
  } else return true;
}
```


Yahoo [Best Practises for Speeding Up Your Web
Site](http://developer.yahoo.com/performance/rules.html) suggests about
components:
!!TODO: read!!

* Mark a component with a special CSS class ``js``.
* Pass data in DOM attributes. (Arrays and hashes in `onclick`).
* Insert `<script>` tag just before `<body>`.
* Load components code separately or in bundles.
* Create instances of component classes.

Sharing data with events. Lintener, ... and Dispatcher  (mediator pattern?)
Explanation by Dima http://www.artlebedev.ru/tools/technogrette/js/observable/
