---

title: Разбираемся с генераторами в JavaScript

categories: ru issues

layout: post

---
> Лучший способ понять что-то самому - объяснить это другому.<br/>
> Народная мудрость.

Всё началось с того, что зарелизился новый Node.js фреймвокрк
[koa](http://koajs.com/), и его в "Hello world!" коде нашлись [подозрительные
звездочки](http://koajs.com/#application).

```javascript
app.use(function *(){
  this.body = 'Hello World';
});
```

Это -- генераторы. Знающие люди объясняют, что это "как в Python или Ruby".
А для тем, кто с Python и Ruby не знаком, предлагаю результаты моего независимого
расследования.

## Окружение
На данный момент генераторы описаны в [черновике спецификации ES6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-function-definitions),
и это значит, что уже можно экспериментировать. Но раз это черновик, среда должна
быть свежая. Подойдет [Chrome, начиная с 30го, или Firefox 27-29](http://kangax.github.io/es5-compat-table/es6/).<br/>
В случае Node.js нужно взять [unstable версию 0.11](http://nodejs.org/dist/v0.11.2/)
и запускать скрипты с ключом `--harmony` или `--harmony-generators`.

## Что такое генератор?


Генератор определяется функцией, содержащей ключевое слово `yield`.

```js
function* foo(x) {
    while(true) {
        yield x;
    }
}
```

Вызов такой функции создаёт объект-генератор. К сожалению, в отдельный тип
объект не выделен, и это существенно ограничивает фантазию.

```js
var g = foo(2);

console.log(typeof g); // -> object
console.log(g instanceof Object); // -> true
```

Функция-генератор описывает действия каждого шага итеративного алгоритма. Каждый
следующий шаг можно иницировать вызовом метода `next()`.<br/>
В примере выше результаты всех итераций идентичны. Генератор иницирован со
значением `2`, и оно не меняется в последствии.

```js
console.log(g.next()); // -> { value: 2, done: false }
console.log(g.next()); // -> { value: 2, done: false }
console.log(g.next()); // -> { value: 2, done: false }
```

Получить описанный результат можно запустив [код первого
примера](https://github.com/varya/js-generators-playground/blob/master/samples/01-simple.js).

## Ссылки
https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7#Generators_and_iterators_(merge_into_Iterators_and_Generators)
http://habrahabr.ru/post/182620/
http://jlongster.com/2012/10/05/javascript-yield.html

