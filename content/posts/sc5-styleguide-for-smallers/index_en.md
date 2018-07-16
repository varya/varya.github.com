---

title: Style-guide the smaller things

date: 2015-07-30
v2: true

layout: post

meta:
  desc: >
    A story about how I tried to use SC5 Style Guide on my tiny tiny blog project and aparently got see the CSS
    architecture from completety different perspective.

---
I've been presenting [SC5 Style Guide](http://styleguide.sc5.io/) several times during this year sharing my experience of using it for one
of the SC5's clients, Elisa. Assuming that Elisa is a huge mobile operator with a lot of websites and a need
to keep those websites visually consistent, there is no wonder that the SC5 Style Guide as a tool provides benefits
there. But what about smaller websites? Would it be useful there? I did not know the answer to this question
and wanted to experiment. The experiment was conducted on my blog codebase.
<excerpt/>

This is how the Living Style Guide looks like: [varya.me/styleguide](http://varya.me/styleguide). You can see the interface
decomposed into block pieces, each of those representing a meaningful interface unit. I haven't seen the interface of my blog
from this perspective before. It gave me a lot of insight into the ways the CSS architecture of my blog should be designed.
But, let's consider things one by one.

## Fine-tuning the SC5 Style Guide tool

Everything starts with

```
npm install --save-dev sc5-styleguide
```

Then, I was able to use the tool to build the interface representation. It required
[a couple of Gulp tasks](https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/Gulpfile.js).

I had to deviate from the example configuration in a couple of places to make my Style Guide work as it does now. Let me
name and explain these things.

### Providing the `appRoot` parameter.

As I am hosting the Style Guide website not it the root folder but in a subfolder named `styleguide`, I inform the
  generator about that, so it can build the properly working app:

```js
gulp.task("styleguide:generate", function() {

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide.generate({
      title: "Varya.me Styleguide",
      appRoot: '/styleguide',
      ...
```

### Providing scripts

Under the `extraHead` parameter I list all the additions needed. Some of my components
need JavaScript to function. It is indeed possible to ignore that and present
their views only, but I wanted them to be exactly as they were used in the blog.
Thanks to `extraHead` I could supply any code needed. I used it to
link the same scripts that I have on my blog pages:

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

However, I needed yet another trick to make the scripts work properly. My components are written with `i-bem.js`
framework which automatically initialises them on the `domReady` event. This is what I wanted for the static pages because the
components markup is in HTML document. But for the Style Guide, which is architecturally a SPA, this did not work. The components
are rendered on the fly, and this obviously happens after `domReady`; that is why by default they stay
uninitialized. So they should be initialized after they had been rendered. Luckily, the Style Guide
triggers an event on the `window` object named `styleguide:onRendered` every time a new component is re-rendered.
By handling this event, I managed to get the components initialized right after they appear on the page. This code is needed
for the Style Guide only, so I do not include it into the project bundle but provide as an additional script in the
Style Guide configuration:

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
of repositories after querying the GitHub API: [varya.me/styleguide/#/section/4.3](http://varya.me/styleguide/#/section/4.3).
Or try out the Candies randomly built with JavaScript [varya.me/styleguide/#/section/5.1](http://varya.me/styleguide/#/section/5.1).

The last important thing to make JavaScript work is to use `disableEncapsulation: true` parameter. Normally the
Style Guide wraps each component in the ShadowDOM because it lets us developers write component CSS without
worrying about affecting the Style Guide interface. But it also makes the components scoped from the JavaScript linked
to the Style Guide website — including that additional JavaScript I showed above. By disabling the encapsulation, I made
the components to be inserted into the HTML page as they are, without any scoping. As for affecting the Style Guide
interface, in my case it will never happen as I use BEM and all my components are already "encapsulated" thanks to that methodology.

### Hosting a static page

The SC5 Style Guide provides a development server which routes all the paths to its root. When hosting it outside, you
should care about the routing yourself as you would do for any other SPA. But my blog is hosted on GitHub Pages
which is a simple static hosting and does not provide any routing capabilities. For managing this case, I use the
`disableHtml5Mode: true` option. It makes the Style Guide application generate the old-school links with `#`. And so it
works.

## Documenting the components
As I used BEM for my website frontend from very beginning, the CSS was already written the component-way. I only
needed to create a descriptive structure and document the blocks with KSS.

### Structuring the code
Unfortunately the BEM way of storing components in folders turned out to be not good enough to see
the code from the living-style-guide perspective. On a file system, all the components are represented at the same
level which turns them into a long list without much structure:

```
desktop.blocks/
├── article
├── articles-list
├── box
├── ...
└── text
```

[github/varya/varya.github.com/desktop-blocks](https://github.com/varya/varya.github.com/tree/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks)

In this case the atomic components are not distinct from the structural interface pieces (such as Header or Footer),
from the side blocks, or from CSS provided to style third-party things. Flat structure is indeed good for
bundling tools but we humans need more logical nesting.

For that I provide the `overview.css` file, which has nothing to do with the final product and only helps me arrange the
blocks. I have 5 sections, in which I place the blocks depending on what they are:

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

There are only comments in this file in which I provide the documentation of every subset as a Style Guide section.
Listing the paths of the dependant CSS files makes it easier to navigate through the code. The `@import` syntax is used just
because :-)

The only trick here is the magic `styleguide:ignore:start` and `styleguide:ignore:end` keywords. It is possible to
place them inside comments in any piece of your CSS (or SASS or LESS) and make the Style Guide generator ignore 
what is in between.

In my case, I tell it skip my overview lists because they have nothing to do with the codebase. But the names of the
sections and their possible descriptions (I just haven't provided any) are in work.

### Describing the pieces
Everything else went smoothly. For every component I provided the KSS description. The `logo` block can be the
simplest example:

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

See it rendered: [varya.me/styleguide/#/section/1.1](http://varya.me/styleguide/#/section/1.1)

In some other components I used extra features. For example, different social icons are the same `ico` element with different
modifiers. In the Style Guide I could documents them all together:

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
markup on the website: [varya.me/styleguide/#/section/4.1](http://varya.me/styleguide/#/section/4.1)

## Style-Guide-Driven Development
If you type "logo" in the Style Guide search field, it will find and render all the components where `logo` is found!
The search goes through all the CSS codebase. Similarly you can search for the components using `<em>` in their markup.
Or `font:` in their CSS.

I personally like that the search source is not only the CSS of components but also their markup examples. During the
refactorings this, for example, makes possible to select all the components containing inputs and look how the changes affect them.

However this is just a small addition to one major benefit I see in using the Style Guide. I find it far more important 
that **it reveals my mistakes**.

I already used the component way when building my blog. And I was pretty sure that my BEM experience is a 100%
guarantee that I get this right. But even developing with a highly modular approach in mind, I did this from the page perspective.
Before the components were integrated into the blog engine, I had developed a static page and this was where the
components fitted first.

I considered them independent and so tried to write my code. But **sitting at the same page they never actually were
independent**.

After the SC5 Style Guide magically represented each of them separately, I can see that the
[logo](http://varya.me/styleguide/#/section/1.1) is aligned to the right.
And why should it be? Obviously, my mistake when I tried to made it fit into the Header.

The same goes for the [language switcher](http://varya.me/styleguide/#/section/1.4) positioned on the right.

In the [set of social icons](http://varya.me/styleguide/#/section/1.5), the language switcher provided with the RSS
icon was considered to stay with it. But this only happens because at the blog pages
it is placed into a narrow container. The Style Guide represents it on its own and I can see that it is not that
flawless as I thought.

Such discoveries obviously lead to the refactoring :-)

To top it off, I must say that the experiment does not end and there are already findings for further
posts. Stay tuned!
