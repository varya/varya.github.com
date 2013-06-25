---

title: Kinds of JavaScript components

categories: en issues

layout: post

invisible: true

---
This article features some problems that developers often face to
when writing JavaScript for a client side, some possible solutions to these
problems and the explanations of my choice among those solutions.

## What is client-side JavaScript for?
TODO: change title<br/>
I am going to write about client-side JavaScript only, the code runs under a
browser and empowers an interface with interactivity.

A piece of interface is reprecented with some HTML (and obviously styled with
CSS). Also it can be equiped with JavaScript usually describing how to react on
user's doings.

So, when developing a piece of interface, we write:

1. HTML/CSS
2. JavaScript
3. Some code to link 2 to 1.<br/>
   This code says which part of HTML on a page corresponds to a JavaScript
   component.

## A few ways to matchmake
Thus, the so-called "linking" describes that a piece of JavaScript matches a
special piece of HTML. This can be done differently.

### Linking with events attributes. The old school way.
Since in most cases running JavaScript is a reaction to some events firing,
there is a natural way to declare in HTML what the reaction should be. These are
the [intrinsic events
attributes](http://www.w3.org/TR/html401/interact/scripts.html#events).

For example, if you need a hidden `<div>` with an authorization form to be shown
when a user clicks on a "log in" link, this can be done with a JavaScript
function. Then, call it in an event `onclick` attribute.

```
<a href="/login-page" onclick="return showLogin()">log in</a>
<div id="login-form">
    <form name="login" ... >
    ...
    </form>
</div>
```

```
dom = document.getElementById ? true : false;

function showLogin() {
  if ( dom && document.forms['login'] ) {
    document.getElementById('login-form').style.display = 'block';
    return false;
  } else return true;
}
```

That works fine, except of using global variables and some constraint with
choosing a script loading strategy, which will be descanted below. Also in this
case you cannot code any predefined action; everything happens after a user
does something.<br/>
I personally don't like this method because it leaves JavaScript implants in
HTML code, which is to describe document structure, not page behavior.

### Moving JavaScript into JavaScript
Therefore, the better way would be to stack everything related to JavaScript
into the page `.js` file.

Here and after I will write jQuery code to save your time and some letters. If you
better like another library, just catch the idea.

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

With plugins you can describe behavioural pattern and then apply it to the
elements needed. In this case your don't need to inject JavaScript into HTML any
more, which makes maintenance easier, but you still have to write a line of code
for every single element you would like to apply the plugin to.

### Declaring behavior with CSS classes
For dozens of controls per page it's not useful to unitialize each of them
separately. The better way would be to mark HTML block with a matching CSS
class.

```
<input class="js-myPlugin" type="text" name="login" />
```

```
$.fn.myPlugin = function() {
  this.fadeIn(
    'normal',
    function() { ... }
  );
}

$('.js-myPlugin').myPlugin();
```

With that you need your 'linking' code only once for a plugin; and it can be
written right in the plugin file helping the consistency.

### One CSS class to rule them all

However, when the variety of components grows, the 'linking' solution should be
even more declarative. So that reading the block HTML enables
to understand if there should be some JavaScript for it. You can mark all the
'alive' parts of your page with a common CSS class for them all; let it be `js`.

```
<input
  class="inpt js"
  data-component="myPlugin"
  name="login"
  value=""/>
```

The step up of this method is the need of information which plugin is to apply to
a particular control and a little more code to initialize. This leads onto a
question about how to parametrize the component. This example suggests `data`
attributes although there is another idea (spoiler!).

With minor change there is the code initializing a proper JavaScript component
for all the blocks on a page:

```
$('.js').each(function() {
    var $this = $(this);
    $this[$this.data('component')]();
})
```

## Parametrizing
Not only a component name has to be provided when initializing by `js` CSS class.
Instances of the same component also may need to pass some information. The
input plugin can validate the field value. But depending on the input different
kinds of data expected can be expected.

```
$.fn.myInput = function() {
    // ...
}
```

```
<input name="login" value=""/>
<input name="zipcode" value=""/>
```

It is easy to provide per-instance parameters when initializing every instance
separately.

```
$('input[name="login"]').myInput({
  validator: 'login'
});
$('input[name="zipcode"]').myInput({
  validator: 'zipcode'
});
```

### data attributes
With more declarative manner you need to include such information into a
component HTML structure. Already mentioned data attributes can help with that.

```
<input
  class="inpt js"
  data-component="myInput"
  data-validator="login"
  name="login"
  value=""/>

<input
  class="inpt js"
  data-component="myInput"
  data-validator="zipcode"
  name="login"
  value=""/>
```

```
$.fn.myInput = function() {
    if (this.data('validator') === 'login') // Supported by many frameworks
}
```

Data attribute is a brainchild of HTML5, so carry a doctype when using them.

As a widespread solution with many libraries providing helpers for them, data
attributes make parametrizing not difficult. Although the limitation of being
able to use plain types of data only can affect the plugin architecture.

### onclick
An elegant way is to provide data for a JavaScript component using natural
JavaScript format, such as hash. Here the event attributes can serve us again.

```
<input
    class="myInput"
    onclick="return {
        validator: 'login'
    }"
    name="login"
    value=""/>
```

When a user normally clicks, the hash is booleanized into `true`, so nothing is
changed. From your plugin you can call the event-named method and get the data
in its native JavaScript format without any need to parse and convert.

```
$.fn.myInput = function() {
 this[0].onclick().validator === 'login'
};
```

As a JavaScript, this data can be any of any type. Not only strings and number,
but large treeish hashes, arrays and even functions. Such a flexibility is extra
salutary for organizing data in complex component and customization.

```
<input
    class="inpt js"
    onclick="return {
        component: 'myInput',
        validator: function() { ... }
    }"
    name="login"
    value=""/>
```

With nested hashes an HTML block can be operated by 2 or more different
JavaScript components, each with its own bunch of parameters.

```
<input
    class="inpt js"
    onclick="return {
        'myInput' : {
            validator: function() { ... }
        },
        'anotherPlugin' : {}
    }"
    name="login"
    value=""/>
```

## How to start fast
### Initializing components
Applying plugins to elements is only possible when the page is loaded and your
library can look for these elements in the document.

First, you can link script file right after the HTML code it corresponds to.

```
<input
    class="myInput"
    onclick="return {
        validator: 'login'
    }"
    name="login"
    value=""/>
<script src="js/plugins/myInput.js"></script>
```

Whilst it can work sometimes, the method is just unreliable. It's not certain
that the DOM will be ready by the time of the script loaded. Loading every plugin
as a separate file would definitely slow down the page loading. In addition, this
is just ugly.

Then, as it's need for a page to be loaded when running scripts, logically an
`onload` event on the `window` object can help.

```
$(window).load(function(){
    $('.js').each(function() {
        var $this = $(this);
        $this[$this.data('component')]();
    })
})
```

The drawback is that `window.onload` occurs when all the content has been loaded.
Including images, which are not necessary to run scripts.

The time you can safely initizlize your components is right after the document
has been loaded and parsed into DOM, which is accompanied by `document.ready`
event.

```
$(function() {
    $('.js').each(function() {
        var $this = $(this);
        $this[$this.data('component')]();
    })
})
```

With that all the plugins used can be bundled into one JavaScript file and linked
to a page within the `<head>` element as usual. Precisely loaded in advance,
the script will be run when the page is ready.

### Loading scripts
Although, putting `<script>` tag into `<head>` aslo delays page loading. The
better strategy is to draw a page as fast as possible and then introduce JavaScript
magic. Reach that with placing `<script>` before the closing `</body>` tag.

On the other hand, when a user sees a page, it is expected to work. By now, it's
hardly possible to respond user actions with plain HTML; people are used to rich
interfaces. If that's crucial for your page functioning, divide the script file
into 2. The first one linked in `<head>` provides major functionality. Then the
second placed before `</body>` imbues all the magic tricks.

## Organizing code
TODO: change title
global variables

## Component core


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

```
"By reducing your global footprint to a single name, you significantly reduce
the chance of bad interactions with other applications, widgets, or libraries." 
- Douglas Crockford
```

http://www.slideshare.net/cheilmann/javascript-best-practices-1041724
```
You run the danger of your code being overwritten by any other JavaScript added
to the page after yours.
```

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

Separate JavaScript functionality
http://coding.smashingmagazine.com/2008/09/16/jquery-examples-and-best-practices/

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
Lazy initialization is similar to lazy loading
https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md#lazy-load-assets-that-arent-immediately-required

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

http://net.tutsplus.com/tutorials/javascript-ajax/24-javascript-best-practices-for-beginners/
```
Place Scripts at the Bottom of Your Page
This tip has already been recommended in the previous article in this series. As
it’s highly appropriate though, I’ll paste in the information.

Remember — the primary goal is to make the page load as quickly as possible for
the user. When loading a script, the browser can’t continue on until the entire
file has been loaded. Thus, the user will have to wait longer before noticing
any progress.
If you have JS files whose only purpose is to add functionality — for example,
after a button is clicked — go ahead and place those files at the bottom, just
before the closing body tag. This is absolutely a best practice.
```

Sharing data with events. Lintener, ... and Dispatcher  (mediator pattern?)
Explanation by Dima http://www.artlebedev.ru/tools/technogrette/js/observable/



http://www.slideshare.net/cheilmann/javascript-best-practices-1041724
```
At a later stage you can also expose these when usuing the revealling module
pattern to create an API to extend the main functionality.
Good code should be easy to build upon withour rewriting the core.
```
