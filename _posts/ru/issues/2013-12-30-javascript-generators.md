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

Это -- генераторы. Знающие люди объясняют, что это "как в Python". А для тем, кто
с Python не знаком, предлагаю результаты моего независимого расследования.

## Окружение
На данный момент генераторы описаны в [черновике спецификации ES6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-function-definitions),
и это значит, что уже можно экспериментировать. Но раз это черновик, среда должна
быть свежая. Подойдет [Chrome, начиная с 30го, или Firefox 27-29](http://kangax.github.io/es5-compat-table/es6/).<br/>
В случае Node.js нужно взять [unstable версию 0.11](http://nodejs.org/dist/v0.11.2/)
и запускать скрипты с ключом `--harmony` или `--harmony-generators`.
