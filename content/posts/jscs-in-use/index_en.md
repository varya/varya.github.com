---

title: JSCS in use

date: 2015-02-11
v2: true

layout: post
---<div data-excerpt>

This time I would like to share my experience of keeping a codestyle in one of my working projects. This is about a new
tool called **JSCS** which we have recently chosen with the team and now are very pleased with the result.

</div>

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
gulp.task("jslint", ["jshint", "jscs"]);
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

- airbnb
- crockford
- google
- jquery
- mdcs
- wikimedia
- yandex

Even if you want to be special, you still can choose the most similar preset and redefine some of its rules below.

Important thing is that JSCS is already quite a mature thing, which means that you can easily find acompanying packages
and needed plug-ins for editors.

## The Success Story

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
fixed module from the `excludeFiles` list. Following this, we got our files fixed quite fast and even avoid conflicts.

Keeping the codestyle when maintaining these files lately turned out to be more challengeable. Automatic checkings are
very helpful here, but we needed to decide how strict we should be. The codestyle should not be our main goal instead of
development.

Finally we came up with "separation of concerns" model. Thus, for the upstream repository we have strict codestyle
policy, and for the forks it is more suggestive. We taught Travis to check codestyle in the pull requests we are
getting. If codestyle is broken, the Travis build fails. So, pull requests with wrong codestyle cannot be merged into
the upstream. This ensures us that we will never get bad code there. However for the forks it is not that strict. We
turned down the idea of using pre-push hooks but recommend a developer to install a pre-commit hook in their repository
clone as well as using JSCS IDE plugins in order to learn about wrong codestyle while developing and not when their pull
request gets broken. These recommendations are described in our documentation for developers and all the team members
follow them.

Everyone especially likes that JSCS can work with the code editors. The codestyle configuration is stored in the project
repository and so an editor reads on its own. The most wonderful thing is that when switching between the projects with
different codestyles, it does not require any change of settings.

![](http://varya.me/jscs-talk/pictures/sublime.gif)

And of course it is always possible to check the codestyle manually running a gulp task.

![](http://varya.me/jscs-talk/pictures/travis.png)

## Word of caution

We faced a couple of problems when applying the tool. I believe they are worth to be mentioned, especially as I can
provide the solutions.

The most painful was "out of memory" error when running a gulp task with JSCS checking. Turned out, that excluding files
in the configuration is not enough. Gulp tries to process all the files that match the mask and is soon run out of
memory. We fixed this with using `gulp-ingnore` package:

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

This is not the best solution because we need to list the excluded files in both `.jscs` configuration and the
`gulpfile.js`. But there is nothing better yet.

The second trick is about checking the codestyle while watching the project files with Gulp. You would probably like to
see the errors reported in your terminal but still have the `watch` task running. This is possible with the help of
`gulp-plumber`:

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

This is all, we did not face any other problem with the tool. It works just fine and has already saved thousands of
man-hours.

## Besides

If you are interested in the slides for this talk, here they are
[http://varya.me/jscs-talk/](http://varya.me/jscs-talk/).
