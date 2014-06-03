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

The installation guide is super short and easy. Clone, fork or
copy from the [docpad-bem-stub repository](https://github.com/varya/docpad-bem-stub).
Then, go though the 3 installation steps:

```
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
item, you can see it in this list and navigate to its page
— the docpad rebuilds from source automatically.

## How to develop statics

## How to publish
TODO: insert gh-pages

## Why Docpad?
This blog had been running on Jekyll for a while. This was an
acceptable soltuion for a quick start. However with the growth
of the post base I started to suffer from not very fast
rebuilds. Also, sometimes providing changes into the blog
layout was hard, mostly due to limitations of `liquid`
templates.

I've decided that [Docpad](http://docpad.org/) should be much
better alternative. It is served as an npm package, possible to
be extended with plugins and has an active fast-growing
developers community.

The `docpad-bem-stub` gives you initial structure, from which
you already can write and publish. If you want to provide changes
into the build process, modify the templates or extend with
plugins, [learn at Docpad website](http://docpad.org/).

You can also see how the other guys deal with Docpad. Here are
the repositories I recommed:
* [varya/varya.github.com](https://github.com/varya/varya.github.com)<br/>
Source code for this blog.
* [sapegin/blog.sapegin.me](https://github.com/sapegin/blog.sapegin.me)<br/>
Source code for [blog.sapegin.me](http://blog.sapegin.me/)

Mreover, [Stackoverflow](http://stackoverflow.com/) indeed already
has an answer to almost all the question you have. If not, create a new
one.

## Why BEM?

## Inside about

### ENB
faster

### i-bem.js and modules

### BEMHTML

### bem-core and bem-components

## What next?
* detect changes in static files
* atomic builds for statics
* css preprocessors
* fresh design
* nice initial posts
