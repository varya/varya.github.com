---
title: YM Modular System. Why?

categories: en issues
old: true
date: 2014-02-25

layout: post
---

The recently published [step-by-step tutorial on
i-bem.js](http://bem.info/tutorials/articles/bem-js-tutorial/) mentioned **YM
modular system** as a base for component JavaScript solution behind BEM. Why do
we need another modular system? Let us see...
<excerpt/>

The author of YM modules, [Dmitry Filatov](https://github.com/dfilatov) recently
came up with an [article about YM modules](http://habrahabr.ru/post/213627/) in
Russian. And below you can find the translation.

<hr/>

So, one more modular system? Besides CommonJS and AMD? Why should we care?

I will not write why modules and modular systems are needed, there are plenty of
articles about it. Let us rather proceed to the main question: why do we need
_another_ modular system?<br/>
For sure, there are CommonJS and AMD, but working on large projects with them I faced
large drawbacks. One is that they are synchronous. This is not fatal, but in my
project we often had to provie different hacks for it.

Let us say, we have 3 modules: moduleA, moduleB and moduleC. moduleC depends on
both moduleA and moduleB. Initially I will describe this in code for all the
three solutions:

####CommonJS

_moduleA.js:_

```js
module.exports = "A";
```

_moduleB.js:_

```js
module.exports = "B";
```

_moduleC.js:_

```js
var moduleA = require("A");
moduleB = require("B");

module.exports = moduleA + moduleB + "C";
```

_Linking and usage:_

```js
var moduleC = require("C");
console.log(moduleC); // prints "ABC"
```

####AMD

_moduleA.js:_

```js
define("A", function () {
  return "A";
});
```

_moduleB.js:_:

```js
define("B", function () {
  return "B";
});
```

_moduleC.js:_

```js
define("С", ["A", "B"], function (moduleA, moduleB) {
  return moduleA + moduleB + "C";
});
```

_Linking and usage:_

```js
require(["С"], function (moduleC) {
  console.log(moduleC); // prints "ABC"
});
```

####YM

_moduleA.js:_

```js
modules.define("A", function (provide) {
  provide("A");
});
```

_moduleB.js:_

```js
modules.define("B", function (provide) {
  provide("B");
});
```

_moduleC.js:_

```js
modules.define("C", ["A", "B"], function (provide, moduleA, moduleB) {
  provide(moduleA + moduleB + "C");
});
```

_Linking and usage:_

```js
modules.require(["С"], function (moduleC) {
  console.log(moduleC); // prints "ABC"
});
```

Nothing interesting yet. All three examples are similar, although you may
notice the `provide` callback in the YM example. What is it for?

Let us imagine a case that `moduleA` and `moduleB` cannot be resolved immediately
(synchronously, as it is required by CommonJS and AMD). Sometimes you need to
do an asynchronous action first. The simpliest example can be `setTimeout`.
There is no way to implement it elegantly with CommonJS and AMD.
But with `YM` it can be coded as follows:

_moduleA.js:_

```js
modules.define("A", function (provide) {
  setTimeout(function () {
    provide("A");
  });
});
```

_moduleB.js:_

```js
modules.define("B", function (provide) {
  setTimeout(function () {
    provide("B");
  });
});
```

_moduleC.js:_

```js
modules.define("C", ["A", "B"], function (provide, moduleA, moduleB) {
  provide(moduleA + moduleB + "C");
});
```

Interestingly `moduleC` does not know anything about asynchronous actions in
its dependant modules. _Win!_

### Real life example

As for real file example, I often use the YandexMaps API
([http://api.yandex.com/maps/](http://api.yandex.com/maps/), API of
[Yandex.Maps](http://maps.yandex.com/)
public service). Yandex.Maps API has a complex loading scheme and this cannot be
done synchronously. This means that I cannot simply link it to a page
`<script type="text/javascript" src="url-of-ymaps.js"></script>` and be sure that
all the following scripts will get the API code ready. First I need to wait for
the event `ymaps.ready` to fire.

The project I am working for is quite complex; we have many classes inherited
from the basic API. For example, we have a `ComplexLayer` class based on `ymaps.Layer`.
With YM modules it is simple to implement. We define a `ymaps` module which loads
the API code, waits for the `ymaps.ready` event and then provides itself. All
the modules which have the `ymaps` module as a dependency only start to resolve
after this. As you can see, other modules know nothing about the asynchronicity of the
Yandex.Map API. _No hacks in code!_

_ymaps.js:_

```js
modules.define("ymaps", ["loader", "config"], function (
  provide,
  loader,
  config
) {
  var url =
    config.hosts.ymaps +
    "/2.1.4/?lang=ru-RU" +
    "&load=package.full&coordorder=longlat";

  loader(url, function () {
    ymaps.ready(function () {
      provide(ymaps);
    });
  });
});
```

There are 2 other modules in use here: `loader` and `config`. I do not show
their code, but the first one loads scripts and the second one is a hash with
constant values.

_ComplexLayer.js:_

```js
modules.define('ComplexLayer', ['inherit', 'ymaps'], function(provide, inherit, ymaps) {
    var ComplexLayer = inherit(ymaps.Layer, ...);

    provide(ComplexLayer);
});
```

We can do the same if jQuery is needed. There is a module to load jQuery:

```js
modules.define(
    'jquery',
    ['loader',
    function(provide, loader) {

    loader('//yandex.st/jquery/2.1.0/jquery.min.js', function() {
        provide(jQuery.noConflict(true));
    });
});
```

Then we make other modules dependent on `jquery` module.

Thus, the whole project code is represented with modules. There is no global, no
need for agreement on the order of linking the scripts (including third-party ones),
no dirty hacks for asynchronicity.

And to wrap up, let me demonstrate you the YM modular system API (indeed, it has more
methods, and these are only the basic ones).

_Defining a module:_

```js
void modules.define(
    String moduleName,
    [String[] dependencies],
    Function(
        Function(Object objectToProvide) provide,
        [Object resolvedDependency, ...],
        [Object previousDeclaration]
    ) declarationFunction
)
```

_Requiring a module:_

```js
void modules.require(
    String[] dependencies,
    Function(
        [Object resolvedDependency, ...]
    ) callbackFunction
)
```

The project is open source and hosted at GitHub:
[github.com/ymaps/modules](https://github.com/ymaps/modules).
