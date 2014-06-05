---

title: Docpad with the taste of BEM

date: 2014-06-04

layout: post

---
Let me present a stub for **docpad-run** project with
**bem-built** static assets. If you ever wanted to be
a generic blog holder equiped with nice and neat static
files, here we go.
<excerpt/>

## How to start

You need install the docpad first. Follow their [Installation Guide](http://docpad.org/docs/install).

Then, the installation of the blog is super short and easy. Clone, fork or
copy from the [docpad-bem-stub repository](https://github.com/varya/docpad-bem-stub).
Then, go though the 3 installation steps:

```sh
npm install
./node_modules/bower-npm-install/bin/bower-npm-install
docpad run
```

With these 3 steps you will get:
* a local server with a generic docpad blog;
* [bem-core](http://bem.info/libs/bem-core/2.2.0/) and [bem-components](http://bem.info/libs/bem-components/v2/)
libraries of reusable CSS/JavaScript/templates code;
* fully tuned static-build instructions which run on changes
in your source code;
* initial blog structure.

## How to write
In the given structure you can write either pages or blog posts.
The posts are listed in the index page. Once you added a new
item, you can see it in this list and navigate to its page;
the docpad rebuilds from source automatically.

Place the pages as `*.html.md` files into `src/documents/pages`
directory. The posts are kept into `src/documents/posts`.

## How to develop statics
The statics is developed with [BEM](http://bem.info/).
You can get CSS and JavaScript files for your pages in
`desktop.bundles` directory. The pages are built with blocks
from `desktop.blocks` folder.

The rebuild process for statics runs under docpad server.

Sometimes you may prefer to develop static pages separately.
For this run

```
./node_modules/enb/bin/enb server
```

You will get another server which rebuilds statics. It
produces static html files from `*.bemjson.js` files in
`desktop.bundles`. You can develop the layout inserting
json there and providing `BEMHTML` templates for the
corresponding block. Find the documentation about `BEMHTML`
here:
* [BEMHTML quick start](http://bem.info/libs/bem-core/2.2.0/templating/intro/)

For the same blocks you can provide `*.css` and `*.js` files
and get them built into pages.

## How to publish
The blog is tuned to be deployed on GitHub. Thus, your
repository has to be named as `<username>.github.com`. You
can develop in its `source` branch. For deploying on
`<username>.github.io` host run this command:

```sh
docpad deploy-ghpages
```

This will create `master` branch of the repository whose
source is linked to the host.

You can also attach your own domain to the blog like I did.
Also, it is possible to host your blog in differently named
repository. However this will make you to provide changes
on `docpad.coffee` configuration file.<br/>
Study [Github Pages](https://pages.github.com/) to learn more.

## Why Docpad?
This blog had been running on Jekyll for a while. This was an
acceptable soltuion for a quick start. However with the growth
of the posts base I started to suffer from not very fast
rebuilds. Also, sometimes providing changes into the blog
layout was hard, mostly due to the limitations of `liquid`
templates.

I've decided that [Docpad](http://docpad.org/) should be much
better alternative. It is served as an npm package, possible to
be extended with plugins and has an active fast-growing
developers community.

The `docpad-bem-stub` gives you initial structure, from which
you already can write and publish. If you want to provide changes
into the build process, modify the templates or extend with
plugins, [learn at Docpad website](http://docpad.org/).

Moreover, [Stackoverflow](http://stackoverflow.com/) indeed already
has an answer to almost all the questions you have. If not, create a new
one.

## Why BEM?
BEM is a very flexible modular solution for frontend which
enables to develop reusable CSS and JavaScript components. Plus, some code
can be taken from their open source libraries.

You can learn a lot about BEM from [my articles and talks](/en/content)
or at the [official BEM site](http://bem.info/).

## Inside about
Above I described all you need to know for using your blog. Below there
are a little more technical details on what is behind.

### ENB
I use [enb](https://github.com/enb-make/enb) for building pages with block
components. This solution is preferable to bem-tools because of it is much
faster. When rebuilding pages on every change, this is sensetive.

### i-bem.js and modules
I personally love that this solution brings `i-bem.js` library to the
project. Hope to demonstrate its amazing capabilities here in near future.
But before I stuff my blog with complex JavaScript components, you
can see some examples and very detailed explanations in [Step-by-step tutorial on
i-bem.js](http://bem.info/tutorials/bem-js-tutorial/).

Another JavaScript feature you can enjoy is [YM modular system](/en/issues/ym-modular-system).
These are JavaScript modules with asynchronious resolving.

### BEMHTML
As mentioned above, `BEMHTML` is a templating solution. Being JavaScript-based,
these templates can be applied on both server and client side. There are
a couple of documents for a deeper dive into it here:
* [BEMHTML templates description](http://bem.info/libs/bem-core/2.2.0/templating/rationale/)
* [BEMHTML tutorial](http://bem.info/libs/bem-core/2.2.0/templating/reference/)

### bem-core and bem-components
BEM is also nice for a possibility to borrow the components from libraries.
`docpad-bem-stub` uses 2 now available libraries:
* [bem-core](http://bem.info/libs/bem-core/2.2.0/)
* [bem-components](http://bem.info/libs/bem-components/v2/)

I hope to see more in the future.

## What next?
Indeed everything can be improved. These are my thoughts on how
to continue.
* detect changes in static files<br/>
Docpad watches over the changes in `src` directory. This means that
when developing statics you will not get the rebuild. I am thinking
on running `enb server` under `docpad run` and proxy. This maybe
better than watch over a lot of files in `desktop.blocks`, `desktop.bundles`
and all the libraries.
* css preprocessors<br/>
The blog styles are in pure CSS now. But with a little
change into enb configuration we can learn it to build with
preprocessors.
* fresh design<br/>
Creating a simple layout is the most difficult design task. Don't you agree?
* nice initial posts<br/>
This is even harder than the desing tasks but I think the users feel much
more comfortable when getting a blog with predefined texts.

If you feel your oats and want to do your bit, fork [the repository](https://github.com/varya/docpad-bem-stub)
and start :-)
