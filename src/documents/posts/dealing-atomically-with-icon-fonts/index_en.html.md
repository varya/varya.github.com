---

title: Dealing atomically with icon fonts

date: 2015-11-10

layout: post

meta:
  desc: >
    Fixing the "using UI library" workflow with building icon fonts from atomic SVG icons. The library has its own flow,
    and obviously the new things can only appear in new versions. However it is understandable that the library
    customers sometimes cannot wait even an hour. With the atomic builds you can easily provide library customer with
    the freedom to modify everything. Even icon fonts.

---

My recent huge project was developing a library of CSS and JavaScript components for sharing this code across a lot of
web services and mobile apps. In most cases such work brings up question about how to avoid blocking the processes.

The library has its own flow, and obviously the new things can only appear in new versions. However I made my best to
provide fast releases, and so we had them 2-3 times a week, it is still understandable that the library customers
sometimes cannot wait even an hour.

I belive that one of the must-haves of UI library is the freedom it should give to its customer. You can easily provide
it if practice atomic approach in most cases. For example, for the icon fonts.

<excerpt/>

### Solid piece
Soon or not SVG will conquer the world. But now we still have icon fonts in some projects. The same story was with that
library.

However the icon font perfectly suited for the displaying icons onto the webpage, it was integration and flow which
created the problem. All the icons fit into one fontfile (in 4 different formats):

```
src/
  fonts/
    iconfont.eot
    iconfont.svg
    iconfont.ttf
    iconfont.woff
```

Also the library provided CSS to make the icon-symbol matching:

```scss
.icon {
  font-family: $global-font-icon;
  &:before {
    /* Some common icon stuff */
  }
  &--support {
    &:before {
      content: "a";
    }
  }
  &--chat {
    &:before {
      content: "b";
    }
  }
  ...
}
```

Customers get the library as a Bower or npm package. When they need a new icon to be in the set, they might request this
and wait for the package to update. As usual, the fastest way to get something happening is to do this yourself. So, it
possible to contribute and even release yourself. But still any further change would need you to go through the
development process.

### Atomic and buildable

Often you need to divide into smaller pieces in order to make things more mantainable. The same with icons. In the
library we changed it so that the source is now a set of SVG files:

```
src/
  icons/
    1000-support.svg
    1010-chat.svg
    1020-users.svg
```

The file names are important, these words are used to generate the CSS classes, which are the API for the customer.
Numbers are for the right order. If building the icon system from very beginning, they are not needed. But in the
library case I wanted back compatibility.

Then, these icons are built into the same icon fonts with `gulp-iconfont` plugin:

```js
var gulp = require("gulp");
var iconfont = require("gulp-iconfont");
var consolidate = require("gulp-consolidate");

var sourcePath = "src/";

gulp.task("build:icons", function() {
    return gulp.src([sourcePath + "/icons/*.svg"])
      .pipe(iconfont({
        fontName: "myicons",
        formats: ["ttf", "eot", "woff", "svg"],
        centerHorizontally: true,
        fixedWidth: true
      }))
      .on("glyphs", (glyphs) => {

        glyphs.forEach((icon) => {
          icon.name = icon.name.replace(/^\d+\-/g, "");
        });

        gulp.src(sourcePath + "/icons/util/*.scss") // Template
            .pipe(consolidate("lodash", {
                glyphs: glyphs,
                fontName: "myiconfont",
                fontPath: "../fonts/"
            }))
            .pipe(gulp.dest(sourcePath + "/scss/"));
      })
      .pipe(gulp.dest(sourcePath + "/fonts/"));
});
```

Besides the icon files this task needs the templates to produce the CSS (or SCSS, as in this case) which makes the
class-symbol matching. I found it logical to store it together with the icon files:

```
src/
  icons/
    utils/
      iconfont__icons.scss
      iconfont__variables.scss
```

It's possible to manage with one template only, but for even more flexibility I have two. The main one makes the
classes:

```css
@font-face {
  font-family: $global-font-icon;
  src:url("<%= fontPath %><%= fontName %>..eot");
  src:url("<%= fontPath %><%= fontName %>.?#iefix") format("embedded-opentype"),
    url("<%= fontPath %><%= fontName %>.woff") format("woff"),
    url("<%= fontPath %><%= fontName %>.ttf") format("truetype"),
    url("<%= fontPath %><%= fontName %>.#<%= fontName %>") format("svg");
  font-weight: normal;
  font-style: normal;
}

.icon {
  font-family: $global-font-icon;

  &:before {
    /* Some common icon stuff */
  }
<% _.each(glyphs, function(glyph) { %>
  &.--<%= glyph.name %> {
    &:before {
      content: $icon--<%= glyph.name %>;
    }
  }<% }); %>

}
```

And another one makes the varibles:

```css
<% _.each(glyphs, function(glyph) { %>
$icon-<%= glyph.name %>: "\<%= glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase() %>" !default;
<% }); %>
```

Running the task produces the fonts and 2 generic SCSS files:

```
src/
  font/
    iconfont.eot
    iconfont.svg
    iconfont.ttf
    iconfont.woff
  scss/
    icons.scss // Not generic
    iconfont__icons.scss
    iconfont__variables.scss
```

In the `icons.scss`, which is normal SCSS file, the result is requested:

```css
// Icons
//
// Lists all the icons that are used in the services.
//
// Styleguide 5

@import "iconfont__variables.scss";
@import "iconfont__icons.scss";
```

### Extend on fly

The variables may be redefined on the customer's side. This makes is a fast way to change the icon, if the replacement
already sit in the font.

If not, it is almost zero amout of work to implement this build-from-atoms process on the customer side.

The customer has all the library code, let's say in `bower_components`, and can have its own folder of icons:

```
bower_components/
  ui-library/
    dist/
      icons/
      scss/
src/
  icons/
    2000-rabbit.svg
    2010-gift.svg
```

When building the font they need to use both their set of icons and the library icons:

```js

var sourcePath = "src/";

gulp.task("build:icons", function() {
    return gulp.src([sourcePath + "/icons/*.svg", "bower_components/ui-library/dist/icons/*.svg"])
      .pipe(iconfont({
        /* The same as above */
      }))
      .on("glyphs", (glyphs) => {

        gulp.src("bower_components/ui-library/dist/icons/util/*.scss")
            .pipe(consolidate("lodash", {
                /* The same as above */
            }))
            .pipe(gulp.dest(sourcePath + "/scss/"));
      })
      .pipe(gulp.dest(sourcePath + "/fonts/"));
});
```

It is not even needed to implement template for the output SCSS, it comes in the library dist.

With such a flow a UI library customer stays completely independent from the library release cycle and may bring a new
icon into her product as soon as the atomic SVG file is copied into the needed folder. As a background process it is
needed to contribute the same icon into to library, but not necessarily the same moment. And even the contributing
process is changed to be better because it came to adding an SVG file.

As other atomical things, such font flow makes git history more useful. With separate files changing it is easier to see
if the provided change affected many or just one icon. Also, SVG images are rendered nicely in pull requests.

Even simultaneous changes of the icons in both library and customer websites are possible and should not cause any
conflict.

And the last but not least nice thing: all the icons are now in the library as SVG files. Hopefully later we come up
with using next century technologies and not the icons fonts. When this sweet moment comes, half of the work will have
been done :-)
