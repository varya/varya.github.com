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
This is quite old code. We needed to chekc if we there was DOM and if it was
possible to use `getElementById`. If something goes wrong, the function returns
`true` which cases usual link behaviour.
+:
* there is cool degradation for non-javascript versions.
-:
* many global variables
`showLogin` function in JavaSript, `<form name="login">` and `<div
id="login-form">` in HTML.
* script must be preloaded (`<script>` placed in `<head>`)
* there is no predefined actions, everything works only *after* a user does
* something. (TODO: examples of predefined actions needed)

How to run predefined actions?

1. Use `window onload`. Drawbacks of this: `onload` happens too late because of
pictures.
2. Place `<script>` in HTML right after the element it corresponds to. This
doesn't work properly if DOM changing is needed.
3. `domReady`. TODO: find links and explanations.

jQuery Plugins

```
$.fn.myPlugin = function() {
  this.fadeIn(
    'normal',
    function() { ... }
  );
}

...

$('#element').myPlugin();
```

* It's recommended to save JS object (initialized) in `.data['myPlugin']` to
avoid unnecessary re-initialization.
```
$.fn.myPlugin = function() { return this.each(function() {
  var $this = $(this),
      data = $this.data('myPlugin');
  if (!data) {
    // init...
    $this.data('myPlugin', { /* ... */ });
  }
}};
```
* Control deactiovation (TODO: check the word) needed.
```
$.fn.myPlugin = function() { return this.each(function() {
  var $this = $(this),
      data = $this.data('myPlugin');
  if (!data) {
    // init...
    $this.data('myPlugin', {
      destroy: function() { /* ... */ }
    });
  }
}};
```
There are two different places in code: the first one describes the control, the
second uses. The plugin is not enough to fucnton. Every element condsidered to
use the plugin has to be informed about that.<br/>
It is possible to use different options per instance:
```
$('#element').myPlugin({
  // options
});
```

Control: input with error checker.
```
<input name="login" value=""/>
```

```
$.fn.myInput = function() {
  // ...
};
$('input[name="login"]').myInput();
```

For different types of inputs:
```
$('input[name="login"]').myInput({
  validator: 'login'
});
$('input[name="password"]').myInput({
  validator: 'password'
});
```

3 parts of controls:
1. HTML
2. JavaScript code of a component
3. JavaScript code linking an element with a behavior

The third part is usually imperative and here it can be optimized. So, the
components have to know where to be applied.

Linking JavaScript to HTML:

```
<input class="myInput" name="login" value=""/>
```

```
$.fn.myInput = function() {
  // ...
};
$(function() {
  $('.myInput').myInput()
});
```

Lazy initialization:

```
$.fn.myInput = function() { /* ... */ };
$(function() {
  $('body').on('change', '.myInput', function() { $(this).myInput() });
});
```
Problem is that `change` doesn't run on every change. So, lazy init won't work.

###Parametrizing instances

Hidden divs, custom attributes.

#### data attributes
```
<input
 class="myInput"
 data-validator="login"
 name="login"
 value=""/>
```

```
$.fn.myInput = function() {
 this.data('validator') === 'login' // Supported by many frameworks
};
```

#### onclick
```
<input
 class="myInput"
 onclick="return {
 validator: 'login'
 }"
 name="login"
 value=""/>
```
The hash booleanized as `true` so click work normally. It returns native
JavaScript object. And you can use not only key-value pairs but more complex
things.
```
$.fn.myInput = function() {
 this[0].onclick().validator === 'login'
};
```

Functions can be used for custom things:
```
<input
 class="myInput"
 onclick="return {
 validator: function() { ... }
 }"
 name="login"
 value=""/>
```

For dozens of controls per page it's not useful to unitialize every class. So,
marking all the conponents comes in:
```
<input
  class="myInput js"
  data-component="myInput"
  data-validator="login"
  name="login"
  value=""/>
```
One of its parametres is it's component name.
```
$(function() {
  $('.js').each(function() {
  var$this = $(this);
  $this[$this.data('component')]();
  })
})
```

With dinamically changed pages it's not enough to init components just ones after
`domReady`.
```
$.fn.myInit = function() {
 this.find('.js').each(function() {
 var$this = $(this);
 $this[$this.data('component')]();
 });
 return this;
})
```
Similarly fr destroying objects:
```
$.fn.myPlugin = function() { returnthis.each(function() {
 var$this = $(this), data = $this.data('myPlugin');
 if (!data) {
 // init...
$this.data('myPlugin', {
 destroy: function() { /* ... */ }
 });
 }
}};
```
```
$.fn.myDestroy = function() {
 this.find('.js').each(function() {
 var$this = $(this),
 name = $this.data('component');
 $this.data(name).destroy();
 });
 return this.remove();
})
```

Usually common methods are wrapped with a framework.
#### jQuery UI
```
$.widget('my.component', {
  _create: function() { /* ... */ },
destroy: function() { /* ... */ }
myMethod: function() { /* ... */ },
});
```

## Additional information
* Building
* Loading script code
* Complex connections between components
* Data binding (interface can be automatically changed after model changing)


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
