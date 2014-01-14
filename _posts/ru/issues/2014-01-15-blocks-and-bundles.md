---

title: Блоки как кирпичи и бандлы как дома

categories: ru issues

layout: post

---
Некотрое время назад мой знакомый, который делает проект на полном стеке БЭМ
(BEM-CSS, i-bem.js и BEMHTML-шаблоны),
задал мне несколько вопросов об использовании
[BEM project
stub](https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c).
Отвечая на вопрос, я пообещала опубликовать ответ в виде текста, потому что
многие вещи вокруг БЭМ не проговариваются, считаясь слишком простыми — и
ошибочно!

Вопрос был о конфигурационном файле `.bem/make.js`, который нужен при
использовании
[bem tools](http://bem.info/tools/bem/bem-tools/)
для сборки страниц.
[Строчки 12 и
13](https://github.com/bem/project-stub/blob/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/make.js#L12)
описывают регулярные выражения для `blocks` и `bundles`. Не сразу понятно,
что это значит.

Вообще эти выражения нужны, чтобы распознать папки на файловой системе. Те,
которые заканчиваются на `.blocks` — для блоков, а те, что заканчиваются на
`.bundles` — для бандлов (страниц). Под эти выражения, например, подходят папки
`desktop.blocks` и `desktop.bundles` из project-stub.

Для чего нужна папка `desktop.blocks`, должно быть понятно. Поскольку БЭМ —
модульный паттерн, необходимо место для хранения модулей, то есть блоков. Каждый
блок — это директория, содержащая все файлы, нужные для каждого конкретного
интерфейсного модуля.

Вот, например, [набор блоков одного
проекта](https://github.com/varya/online-shop-dummy/tree/master/desktop.blocks).

Папка `desktop.bundles` нуждается в пояснении. Она содержит страницы – результат
использования блоков. Каждая страница помещена в отдельную директорию, внутри
которой располагаются все файлы, нужные для страницы.
Можно снова посмотреть
[пример из предыдущего
проекта](https://github.com/varya/online-shop-dummy/tree/gh-pages/desktop.bundles).

Разница в том, что файлы блоков созданы разработчиком, а файлы бандлов созданы
bem tools. Для блоков это знакомые нам CSS, JavaScript и иногда шаблоны.

<pre><code>├── desktop.blocks/
│   ├── goods/
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.bemhtml">goods.bemhtml</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.css">goods.css</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.deps.js">goods.deps.js</a>
│   │   └── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.ie.css">goods.ie.css</a></code></pre>

Проводя параллели для БЭМ (и любого другого модульного паттерна) в реальном
мире, можно сказать, что блок — это кирпичик.

<img
src="http://img-fotki.yandex.ru/get/6730/14441195.30/0_7e0f8_33c1c86c_L.jpg"/>

Файлы бандлов — это тоже файлы, нужные для браузера: CSS, JavaScript, HTML. _Ни
один из них не написан разработчиком, они созданы bem tools_. Можете посмотреть
внутрь файлов и убедиться, что код абсолютно "роботный".

<pre><code>├── desktop.bundles/
│   ├── index/
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.css">_index.css</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.js">_index.js</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js">index.bemjson.js</a>
│   │   └── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.html">index.html</a></code></pre>


Для понимания bem tools представьте, что это строительный кран. Он берет
строительные блоки и возводит из них дом.

<img
src="http://img-fotki.yandex.ru/get/9058/14441195.30/0_7e0f3_ff76f66a_L.jpg"/>
Хотя, кроме *.js, *.css и *.html файлов, всё-таки есть один файл, написанный
разрабочиком.
Это
[index.bemjson.js](https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js)
— JSON описание того, что за блоки нужны на странице и какова их древовидная
структура. Звучит логично, ведь только человек знает, что нужно показать на
странице. Всё остальное делают bem tools. Получив информацию о том, какие блоки
нужны для страницы, они берут их код из `desktop.blocks` и формируют с их
помощью страницу.

Продолжая пример со строительством дома, можно сказать что `page.bemjson.js` —
это чертеж.

<img
src="http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e1ba_9dacd537_L.jpg"/>

Но почему же `bem tools` нужно регулярное выражение в настройках?

Это несложно. Все папки, которыми оперирует `bem tools` — это `уровни
переопределения`. Должно быть легче, если представлять уровень как набор
сущностей. Уровень блоков представлен папкой `desktop.blocks`, а уровень страниц
— папкой `desktop.pages`. В конфигурационной папке
[.bem/levels/](https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/levels)
есть инструкции, по которым bem tools понимают, что делать с уровнями разных
типов.

Dividing your project entities into blocks and bundles makes it possible to have
different sets of blocks and different bundles built with those sets. For
example, you can store blocks to a desktop and touch versions of your web site
into the same repository as well as the pages built with them.

<pre><code>├── desktop.blocks/
├── desktop.bundles/
├── touch.blocks/
└── touch.bundles/</code></pre>

Comming back to the real world, not only bricks are the modules but lego blocks
as well.

<img
src="http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e0f6_f69c7d44_L.jpg">

They also are to build a house. A pretty different house though.

<img
src="http://img-fotki.yandex.ru/get/9326/14441195.30/0_7e0f4_3d999550_L.jpg"/>

Going futher you can detach code common for all the platforms and store it
separately.

<pre><code>├── common.blocks/
├── desktop.blocks/
├── desktop.bundles/
├── touch.blocks/
└── touch.bundles/</code></pre>

With that structure desktop version of a web site gets source code from both
`common.blocks` and `desktop.blocks` levels as touch version gets it from
`common.blocks` and `touch.blocks`.

<img
src="http://img-fotki.yandex.ru/get/6725/14441195.30/0_7e0f5_3e107fd4_L.jpg"/>

And before I wrap up, I cannot stop being delighted by the idea of [BEM project
stub](https://github.com/bem/project-stub/). I use it a lot myself when starting
projects. The [Full stack quick start
tutorial](http://bem.info/articles/start-with-project-stub/) which you may
remember demostrates how exactly. So does a friend who asked me about the
basics. I never realized before that the project stub makes is possible to start
a BEM project with no knowledge above. :-)

Having this written I see that describing the BEM basics is pretty easy and not very
time-consuming to me being (I hope!) useful for the others. If so, please ask
what you need to know.
