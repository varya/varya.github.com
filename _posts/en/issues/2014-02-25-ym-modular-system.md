---

title: YM Modular System. Why?

categories: en issues

layout: post

---
Recently published [step-by-step tutorial on
i-bem.js](http://bem.info/tutorials/articles/bem-js-tutorial/) mentioned **YM
modular system** as a base for component JavaScript solution behind BEM. Why do
we need another modular system? Let us see...

The author of YM modules, [Dmitry Filatov](https://github.com/dfilatov) recently
came up with an [article about YM modules](http://habrahabr.ru/post/213627/) in
Russian. And below you can find the translation.

<hr/>

So, one more modular system? Besides CommonJS and AMD? Why should we care?

I will not write why modules and modular systems are needed, there are plenty of
articles about it. Let us rather proceed to the msin question: why do we need
*another* modular system?<br/>
For sure, there are CommonJS and AMD, but working for large projects I faced
their large drawback. They anyway are synchronious. This is not fatal, but in my
project we often had to prodive different hacks for it.

Let us say, we have 3 modules: moduleA, moduleB and moduleC. moduleC depends on
both moduleA and moduleB. Initially I will describe this in code for all the
three solutions:

####CommonJS

*moduleA.js:*

```js
module.exports = 'A';
```

*moduleB.js:*

```js
module.exports = 'B';
```

*moduleC.js:*

```js
var moduleA = require('A'); 
    moduleB = require('B');

module.exports = moduleA + moduleB + 'C';
```

*Linking and usage:*

```js
var moduleC = require('C');
console.log(moduleC); // prints "ABC"
```

####AMD

*moduleA.js:*

```js
define('A', function() {
    return 'A';
});
```

*moduleB.js:*:

```js
define('B', function() {
    return 'B';
});
```

*moduleC.js:*

```js
define('С', ['A', 'B'], function(moduleA, moduleB) {
    return moduleA + moduleB + 'C';
});
```

*Linking and usage:*

```js
require(['С'], function(moduleC) {
    console.log(moduleC); // prints "ABC"
});
```

####YM

*moduleA.js:*

```js
modules.define('A', function(provide) {
    provide('A');
});
```

*moduleB.js:*

```js
modules.define('B', function(provide) {
    provide('B');
});
```

*moduleC.js:*

```js
modules.define('C', ['A', 'B'], function(provide, moduleA, moduleB) {
    provide(moduleA + moduleB + 'C');
});
```

*Linking and usage:*

```js
modules.require(['С'], function(moduleC) {
    console.log(moduleC); // prints "ABC"
});
```

Nothing interesting yet. All the three examples are similar. Although you may
notice the `provide` callback in the YM example. What is it for?

Let us imagine a case that `moduleA` and `moduleB` cannot be resolved immediately
(synchroniuosly, as it is required by CommonJS and AMD). Sometimes you need to
do an asynchronious action first. The simpliest example can me `setTimeout`.
There is no way to implement it elegantly with CommonJS and AMD.
But with `YM` it can be coded like following:

*moduleA.js:*

```js
modules.define('A', function(provide) {
    setTimeout(function() {
        provide('A');
   });
});
```

*moduleB.js:*

```js
modules.define('B', function(provide) {
    setTimeout(function() {
        provide('B');
    });
});
```

*moduleC.js:*

```js
modules.define('C', ['A', 'B'], function(provide, moduleA, moduleB) {
    provide(moduleA + moduleB + 'C');
});
```

Interesting, that `moduleC` does not know anything about asyncronious actions in
its dependant modules. *Profit!*

### Real life example

As for real file example, I use a lot YandexMaps API (API of [Yandex.Maps](http://maps.yandex.com/)
public service. Yandex.Maps API has complex loading scheme and this cannot be
done synchroniously. This means that I cannot simply link it to a page
`<script type="text/javascript" src="url-of-ymaps.js"></script>` and be sure that
all teh following scripts will get the API code ready. First I need to wait for
the event `ymaps.ready` to fire.

The project I am working for is quite complex; we have many classes inherited
from the basic API. For example, we have `ComplexLayer` class based on `ymaps.Layer`.
With YM modules it is implemented simply. We define `ymaps` module which loads
the API code, waits for the `ymaps.ready` event and then provides itself. All
the modules which have `ymaps` module as their dependency start to resolve only
after this. As you can see, other modules know nothing about asynchroniounsy of
Yandex.Map API. *No hacks in code!*

*ymaps.js:*

```js
modules.define(
    'ymaps',
    ['loader', 'config'],
    function(provide, loader, config) {

    var url = config.hosts.ymaps + '/2.1.4/?lang=ru-RU' +
              '&load=package.full&coordorder=longlat';

    loader(url, function() {
        ymaps.ready(function() {
            provide(ymaps);
        });
    });
});
```
