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
