---

title: Using SC5 StyleGuide

date: 2015-07-30

layout: post

---
I've been presenting [SC5 StyleGuide](http://styleguide.sc5.io/) several times in this year sharing my experience of using it for one
of the SC5's clients — Elisa. Assuming that Elisa is a huge mobile operator with a lot of websites and a need
to keep those websites visually consistent, there is no wonder that the SC5 StyleGuide as a tool provides benefits
there. But what about smaller websites? Would it be useful there? I did not know the answer to this question
and wanted to experiment. The experiment went with my blog's codebase.
<excerpt/>

This is how the Living StyleGuide looks: [varya.me/styleguide](http://varya.me/styleguide). You can see the interface
decomposed into block pieces, each of those represents a meaningful interface unit. This is a perspective from which I
haven't seen the interface of my blog before. It gave me a lot of thoughts on what its CSS architecture should be.
But, let's consider things one by one.

## Tuning the SC5 StyleGuide tool

Everything starts with

```
npm install --save-dev sc5-styleguide
```

Then, I was able to use the tool for building the interface representation. It required
[a couple of Gulp tasks](https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/Gulpfile.js).

I had to make some steps out of the example configuration to make my StyleGuide working as it does now. Let me
name and explain these things.

### Providing `appRoot` parameter.

As I am hosting the StyleGuide website not it the root directory but in a folder (aparently named `styleguide`), I inform the
  generator about that to let it build properly working app.

```js
gulp.task("styleguide:generate", function() {

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide.generate({
      title: "Varya.me Styleguide",
      appRoot: '/styleguide',
      ...
```

### Providing scripts

In `extraHead` parameter I list all the additions needed. Some of my components
need JavaScript to function. It is indeed possible to ignore that fact and present
their view only, but I wanted them to be exactly as they are used in the blog.
Thanks to `extraHead` I could provide any code needed. I used it for
linking the same scripts which are at my blog pages.

```js
gulp.task("styleguide:generate", function() {

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide.generate({
      title: "Varya.me Styleguide",
      ...
      extraHead: [
        '<script src="http://yandex.st/jquery/1.7.2/jquery.min.js"></script>',
        '<script src="/desktop.bundles/index/index.min.js"></script>',
        ...
      ]
    ...
```

However to make the scripts working properly I needed one more trick. My components are written with `i-bem.js`
framework which automatically initialises them on the `domReady` event. This is what I wanted for the static pages because the
components' markup is in HTML. But for a StyleGuide which is architecturally a SPA this did not work. The components
are rendered on fly, and this obviously happens later than the `domReady`. Which is why by deafult they stay
uninited. So they need to be initialised after
they have been rendered. Luckily, the StyleGuide
triggers an event on the `window` object named `styleguide:onRendered` every time a new component is re-rendered.
Handling this event I managed to make the components initialised right after they appear in HTML. This code is needed
for the StyleGuide only, so I do not include it into the project bundle but provide as an additional script in the
StyleGuide configuration:

```
gulp.task("styleguide:generate", function() {

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide.generate({
      title: "Varya.me Styleguide",
      ...
      extraHead: [
        ...
        '<script src="/styleguide/i-bem__init_styleguide.js"></script>'
      ]
    ...
```

You can check how the JavaScript components are working with the block which is initially empty and renders the list
of repositories after asking GitHub API: [varya.me/styleguide/#/section/4.3](http://varya.me/styleguide/#/section/4.3).
Or try out the Candies randomly built with JavaScript [varya.me/styleguide/#/section/5.1](http://varya.me/styleguide/#/section/5.1).

The last important thing to make the JavaScript working is using `disableEncapsulation: true` parameter. Normally the
StyleGuide wraps each component in the ShadowDOM because it let us developers to write the components' CSS  without
bothering about affecting the StyleGuide interface. But it also makes the components scoped from the JavaScript linked
to the StyleGuide website. Including that additional JavaScript I showed above. With disabling the encapsulation I make
the components to be inserted into the HTML page as they are, whithout any scoping. As for affecting the StyleGuide
interface, in my case it should never happen because I use BEM and all my components are "encapsulated" at the
methodological level.

### Hosting a static page

The SC5 StyleGuide provides a development server which routes all the paths to its root. When hosting it outside you
should take care about this routing yourself as you would do for any other SPA. But my blog is hosted in GitHub Pages
which is a simple static hosting and does not provide any routing possibilities. For managing this case I use
`disableHtml5Mode: true` option. It makes the StyleGuide application generate the old-school links with `#`. And so it
works.

## Documenting the components
As I used BEM for my website frontend from very beginning, the CSS was already written in the component-way. I only
needed to create a descriptive structure other this code and document the blocks with KSS.

### Structuring the code
Unfortunately the BEM way for storing the components in folders turned out to be not good (or not good enough) for
looking at the code from the style-guide perspecive. On a file system all the components are represented at the same
level which makes them a long list without any structuring:

```
desktop.blocks/
├── article
├── articles-list
├── box
├── ...
└── text
```

[github/varya/varya.github.com/desktop-blocks](https://github.com/varya/varya.github.com/tree/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks)

In this case the atomic components are not distinct from the structural interface pieces (such as Header or Footer)
nor from the side blocks nor from CSS provided to style third-party things. Flat structure is indeed good for
bundling tools but we human being developers need more logical nestings.

For that I provide an `overview.css` file, which has nothing to do with the final product and only helps me to sort the
blocks out. I have 5 sections, in which I place the blocks depending on what they are:

```
/*
Atoms

Styleguide 1

styleguide:ignore:start

@import url("logo/logo.css"); // 1.1
@import url("text/text.css"); // 1.2
...

styleguide:ignore:end
*/

/*
Main blocks

Styleguide 2

styleguide:ignore:start

@import url("header/header.css"); // 2.1
...

styleguide:ignore:end
*/
```
[github/varya/varya.github.com/desktop-blocks/overview.css](https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/overview.css)

There are only comments in this file in which I provide the documentation of every subset as a StyleGuide section.
Listing the paths of the dependant CSS files makes it easier to navigate through code. The `@import` syntax is used just
becase :-)

The only trick here are the magic `styleguide:ignore:start` and `styleguide:ignore:end` keywords. It is possible to
place them inside comments in any piece of your CSS (or SASS or LESS) code and make the StyleGuide generator to ignore 
what is in between.
In my case I say to skip my overview lists because they have nothing to do with the codebase. But the names of the
sections and their possible descriptions (I just haven't provided any) are in work.

### Describing the pieces
Everything else went even smoother. For every component I provided the KSS description. The `logo` block can be the
simpliest example:

```css
/*

Logo

markup:
<logo class="logo">···<b class="var">var</b>·<b class="ya">ya</b>;<b class="cursor"></b></logo>

Styleguide 1.1

*/
.logo
{
...
```
[github/varya/varya.github.com/desktop-blocks/logo/logo.css](https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/logo/logo.css)

This is how you can see it rendered: [varya.me/styleguide/#/section/1.1](http://varya.me/styleguide/#/section/1.1)

In some other components I used extra features. For example, different social icons are the same `ico` element with different
modifiers. In the StyleGuide I could documents them all together:

```css
/*
Social icon

.social-ico__ico_type_rss         - RSS
.social-ico__ico_type_twitter     - Twitter
.social-ico__ico_type_github      - Github
.social-ico__ico_type_facebook    - Facebook
.social-ico__ico_type_linkedin    - LinkedIn

markup:
<a class="link social-ico__ico {$modifiers}" href="#" title="Icon title"></a>

Styleguide 1.5.1
*/

.social-ico__ico
{
...
```

[github/varya/varya.github.com/desktop-blocks/social-ico/social-ico.css](https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/social-ico/social-ico.css#L49)

In the website the component is rendered separately with every modifier possible:
[varya.me/styleguide/#/section/1.5.1](http://varya.me/styleguide/#/section/1.5.1)

For the complex components which contain other ones I used `<sg-insert>` keyword. It takes another component's markup
by its reference number.

```css
/*
Sidebar
markup:
<nav class="sidebar">
  <sg-insert>4.2</sg-insert>
  <sg-insert>4.3</sg-insert>
</nav>
Styleguide 4.1
*/

.sidebar
{
...
```
[github/varya/varya.github.com/desktop-blocks/sidebar/sidebar.css](https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/sidebar/sidebar.css)

This makes the markup examples pretty short, however it expands for rendering the component and showing the
markup at the website: [varya.me/styleguide/#/section/4.1](http://varya.me/styleguide/#/section/4.1)

## Style-Guide-Driven Development
If you type "logo" in the StyleGuide search field, it will find and render all the components where logo fits!
The search goes though all the CSS codebase. Similarly you can search for the components using `<em>` in their markup.
Or `font:` in their CSS.

I personally like that the search source is not only the CSS of components but also their markup examples. During the
refactorings this, for example,
makes possible to select all the components cotaining inputs and look how the changes affect them.

However this is just a small addition to one major benefit I see in using the StyleGuide. Far more important I found
that it reveals my mistakes.

I already used the component way when building my blog. And I was pretty sure that my BEM experience is a 100%
guarantee that I make this right. But even developing with highly modular approach I did this from the page perspective.
Before the components were integrated into the blog engine, I had developed a static page and this was where the
components first fitted.

I considered them independent and so tried to write my code. But **sitting at the same page they never actually were
independent**.

After the SC5 StyleGuide magically represented each of them separately, I can see that the
[logo](http://varya.me/styleguide/#/section/1.1) is aligned to the right.
Why should it be? Obviously, my mistake when I tried to made it fit into the Header.

The same goes for the [language switcher](http://varya.me/styleguide/#/section/1.4) positioned to the right.

In the [set of social icons](http://varya.me/styleguide/#/section/1.5) the language switcher provided with the RSS
icon was considered to stay with it. But this only happens because at the blog pages
it is placed into a narrow container. The StyleGuide represents it on its own and I can see that it is not that
accurate as I thought.

Such discover will obviously lead the codebase to refactoring :-)

To top it off, I must say that the experiment does not end and there are already findings for further
posts. Stay tuned!
