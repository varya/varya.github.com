---
title: Использование JSCS

date: 2014-11-25
v2: true

layout: post
---

Хочу поделиться опытом поддержания единого стиля JavaScript в одном из своих проектов. Недавно мы решили пробовать
молодой инструмент JSCS, и результат его использования понравился всем членам команды.
<excerpt/>

Когда я присоединилась к проекту [SC5 Styleguide](http://styleguide.sc5.io/), мне сразу бросилось в глаза отсутствие
единого стиля для JavaScript кода. Это ещё не было ужасающим, но было ясно, что проект в скором времени будет расти и чем раньше мы начнём
прилагать усилия к соблюдению единого стиля, тем лучше. Тем более, я уже знала о существовании и особенностях JSCS,
потому что на одном из моих проектов [публиковался перевод
статьи о нем](http://frontendbabel.info/articles/jscs-javascript-code-style/). Поэтому мы даже не стояли перед вопросом,
какой инструмент выбрать.

Конечно, есть и другие решения. Чаще всего называют JSLint и JSHint. Но давайте я сначала расскажу вам одну историю.

Оказывается, когда авторы JSHint познакомились с JSCS, он им так понравился, что они предпочли стать его
контрибьютерами, чем развивать проверку стиля в своём инструменте. А у себя оставили более сложные штуки, не про стиль,
а про программирование.

<blockquote class="twitter-tweet" lang="ru"><p>And with that, JSCS now has all the style enforcement rules that are
being dropped in <a href="https://twitter.com/JSHint">@JSHint</a> 3.0: <a
href="https://t.co/W98EMSiTN5">https://t.co/W98EMSiTN5</a> cc <a
href="https://twitter.com/valueof">@valueof</a></p>&mdash; Mike Sherov (@mikesherov) <a
href="https://twitter.com/mikesherov/status/419596672520318976">4 января 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Получается, выбор стоит не между JSLint, JSHint и JSCS, а между JSLint и комбинацией JSHint + JSCS.

```js
gulp.task("jslint", ["jshint", "jscs"]);
```

А учитывая, что инструмент новый, со стройной архитектурой, контрибьютить в него будет одно удовольствие да и меньше
шансов на слишком долгую жизнь багов из-за какого-нибудь непроходимого легаси.

Вдохновляет также и тот факт, что JSCS уже выбрали такие уважаемые команды как разработчики jQuery, Bootsrap и
AngularJS.

Итак, JSCS — это npm-пакет, и установить его можно как глобально на свою машину так и локально на конкретный проект:

```
npm install jscs
```

Кроме того, понадобится создать конфигурационный файл `.jscsrc` и там описать, какого стиля должен придерживаться
JavaScript на вашем проекте. Этот файл помещается в корень проекта.

Несмотря на большое количество правил, которые поддерживает JSCS, конфиг вряд ли будет большим, потому что в инструменте
предусмотрены пресеты. Популярных стилей для JavaScript кода не так много, и если вы выбрали один из них, то нет нужды
описывать стиль полностью. Достаточно указать, на кого вы хотели бы быть похожим:

- airbnb
- crockford
- google
- jquery
- mdcs
- wikimedia
- yandex

Даже если у вас есть расхождения с этими стилями, всё равно удобно выбрать максимально похожий пресет, потому что в JSCS
возможно переопределить правила пресета.

И, конечно, важно, что инструмент уже достаточно зрелый. А значит, есть все необходимые дружественные пакеты и плагины
для разных редакторов.

## Как это было

В общем, учитывая все эти факты, мы остановились на JSCS. Начали с того, что написали подходящую нам конфигурацию и тут
же исключили из списка для проверки все наши файлы. У проекта уже была модульная структура, поэтому это оказалось
несложным.

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

Мы договорились, что начиная работать с каким-нибудь модулем, кроме реализации фич, мы также будем править стиль и
вычеркивать исправленные модули из списка непроверяемых файлов. Соблюдая это, мы довольно быстро исправили все файлы и
обошлись без конфликтов.

Гораздо важнее оказалось поддержание исправленных файлов в их исправленном состоянии во время будуших правок. Конечно,
тут нам помогают автоматические проверки. Но возникает вопрос, настолько строги мы должны быть в этих проверках и когда
именно проверять. Ведь поддержка стиля не должна становиться самоцелью и должна перетягивать на себя весь фокус
разработки.

В итоге мы пришли к концепции раздения ответственности. Так, для основного репозитория мы выбрали жесткую политику
в вопросе соблюдения стиля, а для форков — рекомендательную. Мы настроили Travis так, чтобы он проверял стиль для
пул-реквестов. Если стиль не соблюден, пул-реквест не может быть влит в основной репозиторий. Таким образом, там вообще
никогда нет кода с плохим стилем. В то же время для форков всё гораздо мягче. Мы отказались от насильственных pre-push
хуков с проверкой стиля, но рекомендуем самостоятельную установку pre-commit хука и использование плагинов JSCS для
редакторов, чтобы узнавать об ошибках в процессе разработки, а не тогда, когда ломается пул-реквест. Все рекомендации
написаны у нас в разработческой документации, и новые члены команды активно ими пользуются.

Всем особенно нравится, как реализована поддержка в редакторах. Ведь конфигурация стиля приезжает в репозиторий проекта
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

Это не очень хорошее решение, ведь здесь пришлось перечислить все те исключения, которые уже задекларированы в `.jscsrc`.
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

## А также

Возможно, вас также заинтересует [рассказ автора JSCS](http://habrahabr.ru/post/220229/) и мои
[слайды](http://varya.me/jscs-talk/) от доклада на эту тему.
