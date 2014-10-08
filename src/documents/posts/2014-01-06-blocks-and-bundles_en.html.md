---

title: Blocks are bricks, and bundles are buildings

categories: en issues
old: true

layout: post

---
A couple of days ago I was asked about some basic things of using [BEM project
stub](https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c)
from someone who is enjoying the full BEM stack (BEM-CSS, i-bem.js and BEMHTML
templates) for their projects. Answering the questions I promised to turn the
information into text as we always skip many important things mistakenly
considering them being primitive.
<excerpt/>

The quesion was about `.bem/make.js` configuration file which is needed if you
use [bem tools](http://bem.info/tools/bem/bem-tools/) to build your pages. The
[12th and 13th
lines](https://github.com/bem/project-stub/blob/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/make.js#L12)
describe regular expressions to match `blocks` and `bundles`. And the meaning of
these terms turned out to be unclear.

First of all, the expressions are to detect folders on the project file system.
Those which end with `.blocks` store blocks, and those which end with `.bundles`
store bundles. The `desktop.blocks` and `desktop.bundles` folders of the project
stub demonstrate this.

The purpose of `desktop.blocks` folder should be clear. As BEM is a modular
development pattern there has to be a place to store modules, the so-called
`blocks`. Each block has its own directory to keep all the files needed for this
particular interface module. E.g. [one project block
set](https://github.com/varya/online-shop-dummy/tree/master/desktop.blocks).

The `desktop.bundles` folder needs some comments. It stores pages, which are the
result of blocks applied. Every page has its own folder and inside you can find
different files needed for a page to function. Examine the [example
project](https://github.com/varya/online-shop-dummy/tree/gh-pages/desktop.bundles)
again.

The difference is that block files are coded by a developer, as bundle files are
built with the tools. Block files are our dear CSS, JavaScript and sometimes templates.

<pre><code>├── desktop.blocks/
│   ├── goods/
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.bemhtml">goods.bemhtml</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.css">goods.css</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.deps.js">goods.deps.js</a>
│   │   └── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.ie.css">goods.ie.css</a></code></pre>

Real world analogy of a BEM block (and actually any module of any modular
pattern) can be a buiding brick.

![](http://img-fotki.yandex.ru/get/6730/14441195.30/0_7e0f8_33c1c86c_L.jpg)

Bundle files are also what a browser can read: CSS, JavaScript, HTML. _None of
them was written by a person, they are built with BEM tools_. Have a look
inside to be sure that this is robot's code.

<pre><code>├── desktop.bundles/
│   ├── index/
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.css">_index.css</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.js">_index.js</a>
│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js">index.bemjson.js</a>
│   │   └── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.html">index.html</a></code></pre>


Think about bem tools as about building crane to pick up the bricks and make a
house with them.

![](http://img-fotki.yandex.ru/get/9058/14441195.30/0_7e0f3_ff76f66a_L.jpg)

Besides *.js, *.css and *.html files there is the only one here written by a
developer. This is
[index.bemjson.js](https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js),
the JSON decription of what are the blocks on a page and what it their nested
structure. Sounds logical, as only we human can know what we would like to see
on a page. Everything else is produced by the `bem tools`. Once given
informaiton about which blocks to use for a page, they pick them up from
`desktop.blocks` set of blocks and do their job.

Extending the building-a-house example I can say that `page.bemjson.js` file
here is a draft.

![](http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e1ba_9dacd537_L.jpg)

But why do `bem tools` need the regular expessions?

This is quite easy. The folders `bem tools` operate with are `levels`. It can
help if you think about a level as about `a set`, a set of entities. There can be
a set of blocks wraped with `desktop.blocks` folder, and a set of result pages
wraped with `desktop.bundles` folder. In the
[.bem/levels/](https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/levels)
cofiguration folder there are some instructions from which bem tools understand
what to do with those different types of levels.

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

![](http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e0f6_f69c7d44_L.jpg)

They also are to build a house. A pretty different house though.

![](http://img-fotki.yandex.ru/get/9326/14441195.30/0_7e0f4_3d999550_L.jpg)

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

![](http://img-fotki.yandex.ru/get/6725/14441195.30/0_7e0f5_3e107fd4_L.jpg)

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
