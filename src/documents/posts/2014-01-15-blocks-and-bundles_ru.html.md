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
ошибочно!<excerpt/>

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

Выделяя в проекте блоки и бандлы, можно делать разные наборы блоков и разные
бандлы, собранные из этих наборов. Например, блоки для desktop и touch версий
сайта могут храниться в одном репозитории. И страницы, собранные из таких блоков
— тоже.

<pre><code>├── desktop.blocks/
├── desktop.bundles/
├── touch.blocks/
└── touch.bundles/</code></pre>

Возвращаясь к примерам из реального мира, не только кирпичики могут быть
модулями, но и детальки LEGO.

<img
src="http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e0f6_f69c7d44_L.jpg">

Из них также можно построить дом. Немножечко другой, конечно.

<img
src="http://img-fotki.yandex.ru/get/9326/14441195.30/0_7e0f4_3d999550_L.jpg"/>

Если пойти дальше, вы можете выделить код блоков, общий для всех платформ, и
хранить его отдельно.

<pre><code>├── common.blocks/
├── desktop.blocks/
├── desktop.bundles/
├── touch.blocks/
└── touch.bundles/</code></pre>

С такой структурой desktop версия формируется из кода блоков уровней
`common.blocks` и `desktop.blocks`, а touch версия — из уровней `common.blocks`
и `touch.blocks`.

<img
src="http://img-fotki.yandex.ru/get/6725/14441195.30/0_7e0f5_3e107fd4_L.jpg"/>

И в заключении, я не перестаю радоваться идее проекта
[BEM project
stub](https://github.com/bem/project-stub/). Сама постоянно использую его,
начиная новые проекты. Туториал о
[старте проекта на полном стеке
БЭМ](http://ru.bem.info/articles/start-with-project-stub/) показывает, как именно.
Так же БЭМ использует и знакомый, задавший мне вопрос. Я никогда раньше не
подозревала, что project stub позволяет начать работы с БЭМ без знания всего
того, что описано выше. :-)

Кстати, написав все это, я поняла, что описание основ БЭМ для меня несложно и
занимает разумное время. При этом (я надеюсь!), это очень полезно для других.
Так что спрашивайте всё, что вы хотите знать.
