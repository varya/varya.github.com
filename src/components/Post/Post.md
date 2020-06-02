```js
 const post = {
    "id": "/Users/varya/WebDev/Personal/varya-gatsby/content/posts/blocks-and-bundles/index_en.md absPath of file >>> MarkdownRemark",
    "html": "<p>A couple of days ago I was asked about some basic things of using <a href=\"https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c\">BEM project\nstub</a>\nfrom someone who is enjoying the full BEM stack (BEM-CSS, i-bem.js and BEMHTML\ntemplates) for their projects. Answering the questions I promised to turn the\ninformation into text as we always skip many important things mistakenly\nconsidering them being primitive.\n<excerpt/></p>\n<p>The quesion was about <code class=\"language-text\">.bem/make.js</code> configuration file which is needed if you\nuse <a href=\"http://bem.info/tools/bem/bem-tools/\">bem tools</a> to build your pages. The\n<a href=\"https://github.com/bem/project-stub/blob/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/make.js#L12\">12th and 13th\nlines</a>\ndescribe regular expressions to match <code class=\"language-text\">blocks</code> and <code class=\"language-text\">bundles</code>. And the meaning of\nthese terms turned out to be unclear.</p>\n<p>First of all, the expressions are to detect folders on the project file system.\nThose which end with <code class=\"language-text\">.blocks</code> store blocks, and those which end with <code class=\"language-text\">.bundles</code>\nstore bundles. The <code class=\"language-text\">desktop.blocks</code> and <code class=\"language-text\">desktop.bundles</code> folders of the project\nstub demonstrate this.</p>\n<p>The purpose of <code class=\"language-text\">desktop.blocks</code> folder should be clear. As BEM is a modular\ndevelopment pattern there has to be a place to store modules, the so-called\n<code class=\"language-text\">blocks</code>. Each block has its own directory to keep all the files needed for this\nparticular interface module. E.g. <a href=\"https://github.com/varya/online-shop-dummy/tree/master/desktop.blocks\">one project block\nset</a>.</p>\n<p>The <code class=\"language-text\">desktop.bundles</code> folder needs some comments. It stores pages, which are the\nresult of blocks applied. Every page has its own folder and inside you can find\ndifferent files needed for a page to function. Examine the <a href=\"https://github.com/varya/online-shop-dummy/tree/gh-pages/desktop.bundles\">example\nproject</a>\nagain.</p>\n<p>The difference is that block files are coded by a developer, as bundle files are\nbuilt with the tools. Block files are our dear CSS, JavaScript and sometimes templates.</p>\n<pre><code>├── desktop.blocks/\n│   ├── goods/\n│   │   ├── <a href=\"https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.bemhtml\">goods.bemhtml</a>\n│   │   ├── <a href=\"https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.css\">goods.css</a>\n│   │   ├── <a href=\"https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.deps.js\">goods.deps.js</a>\n│   │   └── <a href=\"https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.ie.css\">goods.ie.css</a></code></pre>\n<p>Real world analogy of a BEM block (and actually any module of any modular\npattern) can be a buiding brick.</p>\n<p><img src=\"http://img-fotki.yandex.ru/get/6730/14441195.30/0_7e0f8_33c1c86c_L.jpg\"></p>\n<p>Bundle files are also what a browser can read: CSS, JavaScript, HTML. <em>None of\nthem was written by a person, they are built with BEM tools</em>. Have a look\ninside to be sure that this is robot’s code.</p>\n<pre><code>├── desktop.bundles/\n│   ├── index/\n│   │   ├── <a href=\"https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.css\">_index.css</a>\n│   │   ├── <a href=\"https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.js\">_index.js</a>\n│   │   ├── <a href=\"https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js\">index.bemjson.js</a>\n│   │   └── <a href=\"https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.html\">index.html</a></code></pre>\n<p>Think about bem tools as about building crane to pick up the bricks and make a\nhouse with them.</p>\n<p><img src=\"http://img-fotki.yandex.ru/get/9058/14441195.30/0_7e0f3_ff76f66a_L.jpg\"></p>\n<p>Besides *.js, *.css and *.html files there is the only one here written by a\ndeveloper. This is\n<a href=\"https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js\">index.bemjson.js</a>,\nthe JSON decription of what are the blocks on a page and what it their nested\nstructure. Sounds logical, as only we human can know what we would like to see\non a page. Everything else is produced by the <code class=\"language-text\">bem tools</code>. Once given\ninformaiton about which blocks to use for a page, they pick them up from\n<code class=\"language-text\">desktop.blocks</code> set of blocks and do their job.</p>\n<p>Extending the building-a-house example I can say that <code class=\"language-text\">page.bemjson.js</code> file\nhere is a draft.</p>\n<p><img src=\"http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e1ba_9dacd537_L.jpg\"></p>\n<p>But why do <code class=\"language-text\">bem tools</code> need the regular expessions?</p>\n<p>This is quite easy. The folders <code class=\"language-text\">bem tools</code> operate with are <code class=\"language-text\">levels</code>. It can\nhelp if you think about a level as about <code class=\"language-text\">a set</code>, a set of entities. There can be\na set of blocks wraped with <code class=\"language-text\">desktop.blocks</code> folder, and a set of result pages\nwraped with <code class=\"language-text\">desktop.bundles</code> folder. In the\n<a href=\"https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/levels\">.bem/levels/</a>\ncofiguration folder there are some instructions from which bem tools understand\nwhat to do with those different types of levels.</p>\n<p>Dividing your project entities into blocks and bundles makes it possible to have\ndifferent sets of blocks and different bundles built with those sets. For\nexample, you can store blocks to a desktop and touch versions of your web site\ninto the same repository as well as the pages built with them.</p>\n<pre><code>├── desktop.blocks/\n├── desktop.bundles/\n├── touch.blocks/\n└── touch.bundles/</code></pre>\n<p>Comming back to the real world, not only bricks are the modules but lego blocks\nas well.</p>\n<p><img src=\"http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e0f6_f69c7d44_L.jpg\"></p>\n<p>They also are to build a house. A pretty different house though.</p>\n<p><img src=\"http://img-fotki.yandex.ru/get/9326/14441195.30/0_7e0f4_3d999550_L.jpg\"></p>\n<p>Going futher you can detach code common for all the platforms and store it\nseparately.</p>\n<pre><code>├── common.blocks/\n├── desktop.blocks/\n├── desktop.bundles/\n├── touch.blocks/\n└── touch.bundles/</code></pre>\n<p>With that structure desktop version of a web site gets source code from both\n<code class=\"language-text\">common.blocks</code> and <code class=\"language-text\">desktop.blocks</code> levels as touch version gets it from\n<code class=\"language-text\">common.blocks</code> and <code class=\"language-text\">touch.blocks</code>.</p>\n<p><img src=\"http://img-fotki.yandex.ru/get/6725/14441195.30/0_7e0f5_3e107fd4_L.jpg\"></p>\n<p>And before I wrap up, I cannot stop being delighted by the idea of <a href=\"https://github.com/bem/project-stub/\">BEM project\nstub</a>. I use it a lot myself when starting\nprojects. The <a href=\"http://bem.info/articles/start-with-project-stub/\">Full stack quick start\ntutorial</a> which you may\nremember demostrates how exactly. So does a friend who asked me about the\nbasics. I never realized before that the project stub makes is possible to start\na BEM project with no knowledge above. :-)</p>\n<p>Having this written I see that describing the BEM basics is pretty easy and not very\ntime-consuming to me being (I hope!) useful for the others. If so, please ask\nwhat you need to know.</p>",
    "fields": {
      "slug": "en/posts/blocks-and-bundles/",
      "prefix": ""
    },
    "frontmatter": {
      "title": "Blocks are bricks, and bundles are buildings",
      "category": null,
      "cover": null,
    },
    "fields": {
      "readingTime": {
        "minutes": 5,
      },
    },
  };
const next = {
    "id": "/Users/varya/WebDev/Personal/varya-gatsby/content/posts/blocks-and-bundles/index_ru.md absPath of file >>> MarkdownRemark",
    "fields": {
      "slug": "ru/posts/blocks-and-bundles/",
      "prefix": ""
    },
    "frontmatter": {
      "title": "Блоки как кирпичи и бандлы как дома",
      "category": null
    }
  };

const prev = {
    "id": "/Users/varya/WebDev/Personal/varya-gatsby/content/posts/borschik-static-assets/index_en.md absPath of file >>> MarkdownRemark",
    "fields": {
      "slug": "en/posts/borschik-static-assets/",
      "prefix": ""
    },
    "frontmatter": {
      "title": "Borschik helps with remote static assets",
      "category": null
    }
  };

const authornote = "<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href=\"/\">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>";

<Post
  post={post}
  authornote={authornote}
  prev={prev}
  next={next}
/>
```
