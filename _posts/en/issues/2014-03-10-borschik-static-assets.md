---

title: Borschik helps with remote static assets

categories: en issues

layout: post

---
Last week I met the need to develop a web site which static assets have to be
hosted on a different server and respond by different URL than its HTML. This
is the requirement to all the static files: stylesheets and JavaScript linked to
the page as well as imges and fonts mentioned in HTML, CSS and JavaScript
code.<excerpt/> However it is obvious that these resources should be local when developing.
Thus, the challenge was to introduce a piece of magic which knows where we aim
to host the statics and transforms all the relative paths into absolute ones
according to it.

The tools which helped me is called
[Borschik](http://bem.info/tools/optimizers/borschik/). The name is funny.
Besides it reffers to a famous Russian/Ukranian soup, it also alludes to a word
"сборщик" [sborschik], and so might be translated as
<strike>ass</strike>embler. "Removing the ass part" as one of my friends says.

<center>
<iframe src="//embed.gettyimages.com/embed/135591409?et=B_T3l-shrE-pr9-ELe_wJw&sig=5haG67PAzCxGourA96ZB7m9LwSket1v9PpvXEXNIkBM=" width="508" height="407" frameborder="0" scrolling="no"></iframe>
</center>

In the [varya/st-deliverer](https://github.com/varya/st-deliverer) public repository
you can find a stub project illustrating the solution.

### Project structure
As you will be able to see later `borschik` is very flexible. So you can use any
project structure. In my project I store everything in
[src folder](b.com/varya/st-deliverer/tree/master/src).
When building I get HTML files in
[dist/html directory](https://github.com/varya/st-deliverer/tree/gh-pages/dist/html).
Check out the code and make sure that static files are linked from a different
server.

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

[Open in your browser](http://varya.me/st-deliverer/dist/html/) to enjoy my visual
design and a tom-cat.

### Bring borschik to your project
Borschik is an npm package. So, you can install it globally by runing

```bash
npm install -g borschik
```

I personally prefer local project dependencies, so my project has a
[package.json](https://github.com/varya/st-deliverer/blob/master/package.json)
file:

```js
{
  ...
  "dependencies": {
    "borschik": "0.4.2"
  },
  ...
}
```

### Configuration
Before we start the magic transformation it is needed to instruct `borschik` what
to transform and how to transform. The [.borschik](https://github.com/varya/st-deliverer/blob/master/.borschik)
configuration file serves for that.

```js
{
  "paths" : {
    "src/img/": "http://varya.github.io/stor.../st-deliverer/img/",
    "src/css/": "http://varya.github.io/stor.../st-deliverer/css/",
    "src/font/": "http://varya.github.io/storage/fonts/"

  }
}
```
Note that you can tune different replacements for different paths. Here I tried
to illusrate with the fonts.

### Run the command
Run borschik over a file with contains links to local static assets, and you
will get the transformation result. For example,

```bash
./node_modules/borschik/bin/borschik \
  --input=src/css/styles.css
```
Fot the building process you will also need an `--output` flag to instruct
`borschik` where to place the result.

Borschik knows the syntax of web technologies. It will not touch the links
mentioned in text, for example.

### Build system
Now you can use `borschik` in you project build process. I simply wrote a
[Makefile](https://github.com/varya/st-deliverer/blob/master/Makefile) with a
lot of help from [@alexeyten](https://github.com/alexeyten) (tnx!).
There is also a grunt plugin [megatolya/grunt-borschik](https://github.com/megatolya/grunt-borschik).<br/>
Indeed, `borschik` is included into [bem-tools](http://bem.info/tools/bem/bem-tools/)
and [enb](https://github.com/enb-make/enb) — the two competitive solutions for
building the projects with BEM structure.

### Result
[Check the cat again](http://varya.me/st-deliverer/dist/html/). Still there?

You also can learn about other features of `borschik` from the article:
[http://bem.info/articles/borschik/](http://bem.info/articles/borschik/).
