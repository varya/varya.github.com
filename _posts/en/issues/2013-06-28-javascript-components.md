---

title: JavaScript component solutions

categories: en issues

layout: post

invisible: true

---
This article features some problems that developers often face to
when writing JavaScript for a client side, some possible solutions to these
problems and the explanations of my choice among those solutions.

## Client side magic
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
able to use key-value pairs only can affect the plugin architecture.

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

## Start fast
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

## Common best practises

### Cover up
In this article, swiched from calling `showLogin` function to jQuery plugins
there were made some improvements in linking components to HTML code. But not
only. Giving JavaScript responsibility for the page behavior, it aslo enables to
step forward with avoiding global variables in the code.

This is true not only about JavaScript. The ids, form names and input name (all
the things that can be named in HTML) are also a kind of global object.

The usual advice is to avoid it.

> By reducing your global footprint to a single name, you significantly reduce
> the chance of bad interactions with other applications, widgets, or libraries.
> Douglas Crockford

### Doublecheck you don't doubledo
Initializing components can take time and resources. So, when first initialized,
the result can be saved and then reused. jQuery provides a nice `data` method
suitable for that.

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

### Beyond the element
If the corresponding block has been removed from a page, it's component's
responsibility to clean up. Event listeners, constant background calculations
and even layout changes can happen. When being deactivated, a component has to
place things back with `destroy` method.

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

### Initializing by request
With dinamically changed pages it's not enough to initialize components just ones after
`domReady`. There has to be some code to run every time you append new block
onto a page, which turns HTML fragment into a functioning component.

```
$.fn.myInit = function() {
    this.find('.js').each(function() {
        var $this = $(this);
        $this[$this.data('component')]();
    });
    return this;
})
```

A special method to destroy being removed components has similar sense.

```
$.fn.myDestroy = function() {
    this.find('.js').each(function() {
        var $this = $(this),
            name = $this.data('component');
        $this.data(name).destroy();
    });
    return this.remove();
})
```

### Lazy initialization
One more trick is [lazy
initialization](http://en.wikipedia.org/wiki/Lazy_initialization) of the
components. The idea is similar
to [lazy
loading](https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md#lazy-load-assets-that-arent-immediately-required)
and merely means do as less as possible beforehand.

In general, the component can be initialized right after a user started to use
it. So, all the necessary predefined actions won't be run in advance and won't
slow down page rendering and the other components. Objects corresponding to
never-used components won't be created, which saves memory.

## Component core
Many code practises above would be repeated again and again when implementing
many components. As you can guess, all the common things can be wrapped with a
framework representing the core code for the components.

jQuery UI widgets demostrate a kind of this. When created a new widget, you use
API and get embbeded functionality.

```
$.widget('my.component', {
    _create: function() { /* ... */ },
    destroy: function() { /* ... */ }
    myMethod: function() { /* ... */ },
});
```

## Credits
Before I wrapped up, let me 
thank to [Sergey Berezhnoy](https://github.com/veged) also known as
[@veged](https://twitter.com/veged) for his presentation about creating
JavaScript components. The Russian speaking readers, you can enjoy the video! [
Сергей Бережной, Яндекс
Разные способы создания клиентских
js-компонентов](http://events.yandex.ru/events/yasubbotnik/msk-jul-2012/talks/302/)
