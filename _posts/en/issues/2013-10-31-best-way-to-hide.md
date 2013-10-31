---

title: Best way to hide

categories: en issues

layout: post

---
There is a ripe front-end pattern to have a hidden markup in DOM and make it
visible when necessary.

And as any good pattern it can be compromised with wrong implementation. Very
often **hidden** means that the DOM element has `display: none` property.
It became even more widespreaded with jQuery helpers `$.hide` and `$.show`.

Once you have a visual block to hide, you use the `hide` helper which assignes
`display: none` inline property making the block invisible. When it is needed to
be visible again, the `show` helper removes the inline CSS `display` property.

I belive it is a very good example of wrong implementation.

The solution unifies all the elements over the world and assumes they all need
just one way to be hidden. But this is far from reality.

Let us say we have an element with `display: inline-block` property in its
visible state. Guess what will happen when using `$.hide` and `$.show`? Yes, it
will loose its correct `display` property. In the other words, the element will
not return back to its original visible state.

```
$('.my-block');

// <span class="my-block" style="display: inline-block;">..</span>

$('.my-block').hide()

// <span class="my-block" style="display: none;">..</span>

$('.my-block').show()

// <span class="my-block" style="display: block;">..</span>

```

jQuery is clever enough to distingush inline elements. Using `$.hide` and
`$.show` on them you get something like this:

```
$('.my-block');

// <span class="my-block">...</span>

$('.my-block').hide();

// <span class="my-block" style="display: none;">...</span>

$('.my-block').show();

// <span class="my-block" style="display: inline;">...</span>

```

Again, the block has not **returned** into its first state when being shown. For
sure, it became visible, but this state is not equivalent to the original one.
Any new CSS class appended to the element with an intention to change its
`display` property will not we working as an inline declared property majors.

The other problem is that setting `display` property as `none` doesn't always
work for making an element invisible. Maybe for some reason it has to be hidden
from a user with `left: -9999px'?

This is only the interface block implementation who should know about all the
block states including the hidden one.

Modifiers (no matter if you prefer [SMACCS](http://smacss.com/),
[OOCSS](http://oocss.org/) or [BEM](http://bem.info/)) are designed to express
an interface component states. The same goes for the hidden state.

Every block you would like to hide and show whould be equiped with a proper
modifier:

```
.my-block_hidden {
    display: none;
}
```

Then, applying this midifier and removing it from a block you can be sure it
goes in one of its predefined states:

```
$('.my-block');

// <span class="my-block">...</span>

$('.my-block').addClass('my-block_hidden');

// <span class="my-block my-block_hidden">...</span>

$('.my-block').removeClass('my-block_hidden');

// <span class="my-block">...</span>
```

This enables you to provide any type of hiding, not necessarily `display: none`,
and ensures a block turns back to its original visible state when shown again.

If you would like not being annoyed with all those `addClass` and `removeClass`
helpers, you can teach your basic JavaScript to work with modifiers (e.g. [as
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

That's all. From now on you are not allowed to use `$.hide` and `$.show`.
Nerither for prototyping :-)
