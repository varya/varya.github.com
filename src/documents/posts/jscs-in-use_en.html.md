---

title: JSCS in use

date: 2014-12-29

layout: post

---
This time I would like to share my experience of keeping a codestyle in one of my working projects. This is about a new
tool called **JSCS** which we have recently chosen with the team and now are very pleased with the result.
<excerpt/>

Once I joined [SC5 Styleguide](http://styleguide.sc5.io/) project, I discovered that it was not consistent enough from
its codestyle perspective. It was not frightening by that time, but it was already clear that the project was going to
grow fast and the sooner we start bothering about keeping the codestyle the better. I was already aware about JSCS and
its features because had published [a translation of author's tool
introduction](http://frontendbabel.info/articles/jscs-javascript-code-style/) in one of my side-projects. So the
decision which tool to use was made quickly.

There are indeed many other solutions, such as JSLint and JSHint, the most mentioned once. But let me first tell you a
story.

Interesting enough that JSHint authors liked JSCS so much that they prefered to contribute into it rather than develop
style checkings in their tool. So they removed all the style enforcement rules out of JSHint and keep it now for
more complex things not about coding style but about programming patterns.
<blockquote class="twitter-tweet" lang="en"><p>And with that, JSCS now has all the style enforcement rules that are
being dropped in <a href="https://twitter.com/JSHint">@JSHint</a> 3.0: <a
href="https://t.co/W98EMSiTN5">https://t.co/W98EMSiTN5</a> cc <a
href="https://twitter.com/valueof">@valueof</a></p>&mdash; Mike Sherov (@mikesherov) <a
href="https://twitter.com/mikesherov/status/419596672520318976">4 Jan 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This means that there is no question if you choose JSLint, JSHint **or** JSCS. Currently you can choose between
JSLint and JSHint + JSCS working together.

```js
gulp.task('jslint',
  [ 'jshint', 'jscs' ]
  );
```

Assuming that JSCS is a new tool with not yet spoiled structure, I suppose that it would be a pleasure to contribute
into it. Also, the tool's youth promises that future possible bugs would be fixed soon as there is no legacy.


Moreover, I personally find encouraging that JSCS has been already chosen by such respectable teams as jQuery, Bootsrap
and AngularJS.

Long story short, JSCS is an npm package. You can install it either globally or locally for a particular project:

```
npm install jscs
```

Besides, you will need a configuration file `.jscsrc` and define what kind of JavaScript style you prefer for the
project. This file should be put into the root of your project.

JSCS support tonns of rules. Nethertheless, your config file would not be too heavy thanks to presets. In most cases we
choose from popular JavaScript styles and so there is no need to define the rules over and over again. You only need to
write who you prefer to look like:

* airbnb
* crockford
* google
* jquery
* mdcs
* wikimedia
* yandex

Even if you want to be special, you still can choose the most similar preset and redefine some of its rules below.

Important thing is that JSCS is already quite a mature thing, which means that you can easily find acompany packagies
and needed plug-ins for editors.

## The Sucess Story

Assuming these facts, we decided to give JSCS a try. We started with defining a lovely configuration but excluded all
the files from the checking process yet. Our project already had modular structure, so this was easy.

```
{
    ...

    "excludeFiles": [
      "node_modules/**",
      "src/modules/a/**",
      "src/modules/b/**",
      "src/*.js
    ]
}
```

Then, we agreed that if any of us starts coding or changing a module, he/she will fix the codestyle and swipe out the
fixed moduler from the `excludeFiles` list. Following this, we got our files fixed quite fast and even avoid conflicts.

Keeping the codestyle when maintaining these files lately turned out to be more challengable. Automatic checkings are
very helpful here, but we needed to decide how strict we should be. The codestyle should not be our main goal instead of
development.



В итоге мы пришли к концепции раздения ответственности. Так, для основного репозитория мы выбрали жесткую политику
в вопросе соблюдения стиля, а для форков — рекомендательную. Мы настроили Travis так, чтобы он проверял стиль для
пул-реквестов. Если стиль не соблюден, пул-реквест не может быть влит в основной репозиторий. Таким образом, там вообще
никогда нет кода с плохим стилем. В то же время для форков всё гораздо мягче. Мы отказались от насильственных pre-push
хуков с проверкой стиля, но рекомендуем самостоятельную установку pre-commit хука и использование плагинов JSCS для
редакторов, чтобы узнавать об ошибках в процессе разработки, а не тогда, когда ломается пул-реквест. Все рекомендации
написаны у нас в разработческой документации, и новые члены команды активно ими пользуются.

Всем особенно нравится, как реализована поддержа в редакторах. Ведь конфигурация стиля приезжает в репозиторий проекта
вместе с кодом, и редактор считывает её самостоятельно. А, главное, у разных проектов может быть разный стиль, и для
перекрестной работы не требуется никакая перенастройка.

![](http://varya.me/jscs-talk/pictures/sublime.gif)

Ну и, конечно, всегда есть возможность запустить проверку стиля вручную как gulp-таск.

![](http://varya.me/jscs-talk/pictures/travis.png)

## Предостережения

Во время внедрения инструмента мы столкнулись с парочкой неудобств. Думаю, стоит о них упомянуть, тем более, что к ним
нашлись решения.

Основное расстройство — ошибка "out of memory" при запуске gulp-таска с проверкой. Оказалось, что недостаточно исключить
файлы в конфигурации JSCS. Gulp всё равно сначала пытается работать с ними всеми и пока дело доходит до JSCS, память уже
кончается. В итоге мы пришли к использованию пакета `gulp-ignore`:

```
gulp.task('jscs', function() {
  return gulp.src([
    '**/*.js'
  ])
  .pipe(gulpIgnore.exclude([
    'node_modules/**',
    'demo-output/**'
  ]))
  .pipe(jscs());
})
```

Это не очень хорошее решение, ведь здесь пришлось перчислись все те исключения, которые уже задекларированы в `.jscsrc`.
Но лучшего варианта у нас пока нет.

И, второй момент: если вы используете watch в разработке, то скорее всего захотите видеть ошибки в терминале, но не
прерывать исполнение таска. Для этого потребуется `gulp-plumber`:

```
gulp.task('jscs', function() {
  return gulp.src([
    '**/*.js'
  ])
  ...
  .pipe(plumber())
  .pipe(jscs());
});
```

Всё, больше никаких проблем или вопросов относительно иструмента у нас не было. Он прекрасно работает и уже сохранил нам
тысячи человекочасов.

## А так же

Возможно, вас также заинтересует [рассказ автора JSCS](http://habrahabr.ru/post/220229/) и мои
[слайды](http://varya.me/jscs-talk/) от доклада на эту тему.

