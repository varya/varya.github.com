---

title: The best way to hide

categories: en issues

layout: post

---
There is a well-known front-end pattern to have hidden elements in DOM and make them
visible when necessary. As with any good pattern, wrong implementation can compromise it.

Most of the times, **hidden** means that the DOM element gets a `display: none` property.
This approach has become even more widespread thanks to `.hide()` and `.show()` jQuery helpers.

Once you have a visible block which you need to hide, you use the `.hide()` helper which assignes
an inline `display: none` style property, making the block invisible. When it has to
become visible again, the `.show()` helper changes the inline CSS `display` property again.

I believe this is a very nice example of wrong implementation.

The solution unifies all the elements around the world and assumes all of them need
just one way to be hidden; this assumption is far from reality.

Let us say we have an element in a visible state. Guess what will happen when we use `.hide()` and `.show()`?
Yes, an inline style with a `display` property will be added.
In other words, the element won't return back to its original visible state.

```
$('.my-block');

// <span class="my-block">..</span>

$('.my-block').hide()

// <span class="my-block" style="display: none;">..</span>

$('.my-block').show()

// <span class="my-block" style="display: block;">..</span>

```

jQuery is clever enough to detect inline elements. By applying `.hide()` and
`.show()`, you get something like this:

```
$('.my-block');

// <span class="my-block">...</span>

$('.my-block').hide();

// <span class="my-block" style="display: none;">...</span>

$('.my-block').show();

// <span class="my-block" style="display: inline;">...</span>

```

Again, the block didn't **return** to its original state after being shown. For
sure, it became visible, but this state is not equivalent to the original one.
Any new CSS class appended to the element with an intention to change its
`display` property won't work as the inline style rule will prevail.

The other problem is that setting `display` property to `none` doesn't always
work for making an element invisible. Maybe for some reason it has to be hidden
from a user with `left: -9999px`?

It's only the interface block implementation that should know about all the
block states, including the hidden one.

Modifiers (no matter if you prefer [SMACCS](http://smacss.com/),
[OOCSS](http://oocss.org/) or [BEM](http://bem.info/)) are designed to express
states of interface components. The same goes for the hidden state.

Every block you would like to hide and show should be equipped with a proper
modifier:

```
.my-block_hidden {
    display: none;
}
```

Then, by applying this modifier and removing it from a block you can be sure it
transitions into one of its predefined states:

```
$('.my-block');

// <span class="my-block">...</span>

$('.my-block').addClass('my-block_hidden');

// <span class="my-block my-block_hidden">...</span>

$('.my-block').removeClass('my-block_hidden');

// <span class="my-block">...</span>
```

This enables you to provide any type of hiding, not necessarily `display: none`,
and ensures the block turns back into its original visible state when shown again.

If you would rather prefer not to mess with all those `.addClass()` and `.removeClass()`
helpers, you can teach your JavaScript to work with modifiers (e.g. [as
BEM does
it](https://github.com/varya/bem-js-tutorial/blob/master/02-Modifiers.md)) which
will make your code even better:

```
$.block('my-block');

// <span class="my-block">...</span>

$.block('my-block').setMod('hidden');

// <span class="my-block my-block_hidden">...</span>

$.block('my-block').delMod('hidden');

// <span class="my-block">...</span>
```

That's all. From now on you are not allowed to use `.hide()` and `.show()`.
Even for prototyping :-)
