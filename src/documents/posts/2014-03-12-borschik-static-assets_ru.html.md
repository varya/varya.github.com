---

title: Локальная разработка и удаленный хостинг статики

categories: ru issues
old: true

layout: post

---
На прошлой неделе мне понадобилось сделать сайт, статика которого раздаётся с
другого сервера. Это касалось всех статических файлов: как подключенных к HTML
документу CSS и JavaScript, так и изображений и шрифтов, использованных уже в
их коде.<excerpt/> Хотя очевидно, что все они эти ресурсы должны быть локальными во
время разработки. То есть задача была придумать магию, которая знает, где будет
размещена статика, и преобразовывает относительные пути в коде в абсолютные
согласно этому знанию.

Эту задачу я решила при помощи инструмента
[Borschik](http://bem.info/tools/optimizers/borschik/). Борщик-сборщик, всем
должно быть понятно. :-)

<center>
<iframe src="//embed.gettyimages.com/embed/135591409?et=B_T3l-shrE-pr9-ELe_wJw&sig=5haG67PAzCxGourA96ZB7m9LwSket1v9PpvXEXNIkBM=" width="508" height="407" frameborder="0" scrolling="no"></iframe>
</center>

Демо-проект с этим решением находится в репозитории
[varya/st-deliverer](https://github.com/varya/st-deliverer)

### Структура проекта
Как вы позже увидите, `borschik` можно гибко настроить. Так что возможна любая
структура проекта. В моём проекте все хранится в директории
[src](b.com/varya/st-deliverer/tree/master/src).
После сборки получается HTML-файлы в папке
[dist/html](https://github.com/varya/st-deliverer/tree/gh-pages/dist/html).
Проверьте его код, и вы убедитесь, что статические файлы подключены с другого
хоста по абсолютному пути.

```html
<html>
  <head>
    <title>Deliver static assets with Borschik</title>
    <link
      rel="stylesheet"
      href="http://varya.github.io/stor.../styles.css"/>
  </head>
  <body
    class="page"
    background="http://varya.github.io/stor.../grungy.jpg">
  ...
```

Страничку можно [открыть в браузере](http://varya.me/st-deliverer/dist/html/) и
насладиться моим дизайном и прекрасным котиком.

### Borschik в вашем проекте
Borschik — это npm-пакет. Его можно установить глобально при помощи команды

```bash
npm install -g borschik
```

Но лично я предпочитаю локальные зависимости, так что завожу в корне проекта
файл
[package.json](https://github.com/varya/st-deliverer/blob/master/package.json):

```js
{
  ...
  "dependencies": {
    "borschik": "0.4.2"
  },
  ...
}
```

### Настройка
Прежде чем начинать преобразования, нужно проинструктировать `borschik`, что
преобразовывать и как. Для этого нужен конфигурационный файл
[.borschik](https://github.com/varya/st-deliverer/blob/master/.borschik):

```js
{
  "paths" : {
    "src/img/": "http://varya.github.io/stor.../st-deliverer/img/",
    "src/css/": "http://varya.github.io/stor.../st-deliverer/css/",
    "src/font/": "http://varya.github.io/storage/fonts/"

  }
}
```

Заметьте, для разных путей можно настроить разную замену. Здесь это видно на
примере с фонами.

### Запускаем!
Запустите `borschik` над файлом, содержащим ссылки на локальные статические
ресурсы, и вы получите результат преобразования. Например,

```bash
./node_modules/borschik/bin/borschik \
  --input=src/css/styles.css
```

Чтобы использовать это в сборке, понадобится ещё один флаг `--output`,
сообщающий куда записать получившееся.

`borschik` знаком с синтаксисом web-технологий. То есть "ссылки" размещенные в
простом тексте останутся нетронутыми.

### Система сборки
Теперь `borschik` можно включить в систему сборки проекта. В моём случае это
небольшой
[Makefile](https://github.com/varya/st-deliverer/blob/master/Makefile), спасибо
[@alexeyten](https://github.com/alexeyten) за 90% его содержания. :-) Но есть
также и плагин для grunt [megatolya/grunt-borschik](https://github.com/megatolya/grunt-borschik).<br/>
Конечно, `borschik` включен в системы сборки БЭМ-проектов
[bem-tools](http://bem.info/tools/bem/bem-tools/)
и [enb](https://github.com/enb-make/enb)

### Результат
Для закрепления [проведайте котика ещё раз](http://varya.me/st-deliverer/dist/html/).

А узнать о многих других возможностях `borschik` можно из статьи
[http://ru.bem.info/articles/borschik/](http://ru.bem.info/articles/borschik/).
