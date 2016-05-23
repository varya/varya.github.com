---

title: Living SC5 Styleguide, the next level

date: 2016-05-23

layout: post

meta:
  desc: >
    Living documentaion for CSS, JavaScript and templates of your components with SC5 Style Guide. In this post I share
    my experience from the recent large project.

---

When it comes to the large web applications, we often operate with complex components. Such components are not just CSS
styles for the pieces of an interface but also their JavaScript interactions and templates. As documentation, the style
guide should reflect them all. In other words, the components on the style guide's pages should be the same living as in
production.

<excerpt/>

At my recent project, we have been using SC5 Style Guide in its simplest way - documenting the view of the components. For
that, we provided the needed HTML in the KSS code and so has received the rendered component library.

However, in the production code, these components appeared at the pages as a result of some templating transformations.
Also, the project is massive and fast-developed, and the changes to the templates happened all the time. As a result,
the style guide was always out of date.

Moreover, much functionality could not be illustrated with plain HTML.
To be rendered correctly and interact with a user, it also needs its JavaScript code.

At this project, I have solved the problem using advanced configuration of SC5 Style Guide. Below you can find the
tricks and explanation.

## Living JavaScript components

Usually, a piece of an interface (often called 'a component') is a combination of HTML, CSS, and JavaScript. With the
basic features if SC5 Style Guide you can easily document HTML and CSS. However, applying JavaScript to the components
requires an additional configuration.

In SC5 Styleguide, you can provide additional tags into the `<head>` section of the generated style guide's page. They
can be `<script>` tags linking the JavaScript you need.

Assuming this, you can bundle the necessary JavaScript into one file, and link it to the style guide's pages, like this:

```
gulp.task("styleguide:generate", function() {

  return gulp.src(["path/to/css/**/*.sass"])
    .pipe(styleguide.generate({
      title: "My Styleguide",
      ...
      extraHead: [
        '<script src="/js/all-components.js"></script>',
        ...
      ]
    ...
```

Another option for you to use in the configuration is `disableEncapsulation: true`. By default, the tool wraps every
component into a Shadow DOM container. It makes the components encapsulated and protects from unwanted impact of global CSS.
Also, the Shadow DOM wrapper prevents global JavaScript to access the components. Disabling this function, you can give
the JavaScript all the access, the same way as it works on a usual page.

In most cases, JavaScript for the components requires initialization. On the style guide's pages a `styleguide:onRendered`
event emits when a component is rendered. You can listen for this event and initialize the components in the event's
handler function.

For example, if using jQuery:

```
$(window).on('styleguide:onRendered', function(e) {
  // e.originalEvent.detail.elements[0] - component's container
  initComponent(e.originalEvent.detail.elements[0])
});
```

## Additional processors

The SC5 Style Guide parses the KSS documentation in your CSS (SASS, LESS) code, collects information about all the
components and produces a JSON file with it. The documentation pages you can see are the Angular pages built
on the information in this JSON.

Generating the style guide, you can inject additional processors into transforming data for this JSON file. The
custom processing functions can re-organize and modify this data. You can use this trick to provide a more clever
generator, run templates and parametrized JavaScript components.

Examine the generated `styleguide.json` file to see how the data is organized by default. You are going to find out that
every component is represented by an object similar to the following:

```
{
  header: "Sub navigation tabs",
  description: "<p class="sg">Navigation item</p> ",
  modifiers: [ ],
  deprecated: false,
  experimental: false,
  reference: "4.15.1",
  markup: "<ul class="sub-navigation-tabs">...<ul>",
  css: ".sub-navigation-tabs { /* some css */ }",
  syntax: "less",
  file: "tabs.less",
  parentReference: "4.15",
  wrapper: "<sg-wrapper-content/>",
  renderMarkup: "<ul class="sub-navigation-tabs">...<ul>",
  variables: [
    "colorMain",
    "bgColorSecond",
    "textColor",
    "textColorHover"
  ],
  fileHash: "d00311f793d66a9e9dee9939dedd9fd9"
}
```

To modify this data, provide additional processing function as `styleguideProcessors` option. For example,

```
gulp.task("styleguide:generate", function() {

  return gulp.src(["path/to/css/**/*.sass"])
    .pipe(styleguide.generate({
      title: "My Styleguide",
      ...
      styleguideProcessors: {
        30: processTemplates
      }
    ...
```

As a value of this option, you can list the processing functions. The given indexes matter for the order in which these
functions are applied to the data.

Check out [the documentation for options](https://github.com/SC5/sc5-styleguide#build-options).

In my projects, I used additional processors to operate custom KSS parameters and modify data.

## Custom KSS data

In the section descriptions, you can provide additional KSS parameters with the names prefixed with `sg-`. For example,
you can provide a path to a template which produces the markup for the component:

```
// Button
//
// markup:
// { title: "Move on", type="submit" }
//
// sg-template:
// src/components/button/button.ejs
//
// Styleguide 1.2.3
```

In here the markup works as an input value for the given template. You can teach Style Guide to apply the template to
the declared object and put the result as a markup to render. To do it you need a custom processing function mentioned
above.

```
var processTemplates = (styleguide) => {

  styleguide.sections.forEach((section) => {

    if (section['sg-template']) {
      var templatePath = section['sg-template'].trim()
      templatePath = path.join(process.cwd(), templatePath)

      var templateStr = fs.readFileSync(templatePath, 'utf8')
      var inputData = eval('(' + section.markup + ')')

      section.renderMarkup = ejs.render(templateStr, insertData)
    }

  }

}
```

## Templates on fly

In the single-page applications, templates work on the client side. In this case, it is better to process them
in the style guide too. In other words, you should include the templates into the JavaScript bundle and initialize
the components on containers.

Combining this approach to the custom processors, you can store the code example for every compoentn in the `markup`
KSS field.

For example,

```
// Tabs
//
// markup:
// var Tabs = require('src/components/tab.js')
// Tabs.init($container, { items: [...] })
//
// sg-js-component:
// <div class="sg-tabs-container"></div>
//
// Styleguide 1.2.3
```

With a custom processor, you can put the container's code as a markup to render:

```
var processorForJsComponents = function(styleguide) {

  styleguide.sections.forEach((section) => {
    if (section['sg-js-component']) {
      section.renderMarkup = section.wrapper.replace(
        '<sg-wrapper-content/>', section['sg-js-component']
      );
    }
  }

}
```

## Adjustable initialization for JavaScript

Usually, different components need to be initialized in differently. Also, they may require some fake data. You can
run various Javascript functions on separate component containers to get this result.

```
var TabsInit = require('src/components/tabs/tabs.init.js')

var knownComponents = {
  '.sg-tabs-container': TabsInit
}

$(window).on('styleguide:onRendered', function(e) {

  knownComponents.forEach((componentInit, componentSelector) => {
    var containingComponents = $(e.originalEvent.detail.elements[0]).find(componentSelector)
    if (containingComponents.length > 0) {
      componentInit(containingComponents)
    }
  })

})
```

This code runs a corresponding function for every selector in the `knownComponents` object. The matching DOM element(s)
passed into the initializing function as a parameter.

```
// src/components/tabs/tabs.sg-init.js

var Tabs = require('./tabs.js')

var fakeData = [
  { title: 'Tab1', url: '/index.html' },
  { title: 'Tab2', url: '/contacts' }
]

module.exports = function($container) {
  // Real calling for initing function depends on
  // you component system interface
  Tabs.init($container, { items: fakeData })
}

```

In this system, you can have several containers with the same CSS class but parametrized with any other information, e.g.
data attributes:

```
// Tabs, another version
//
// markup:
// var Tabs = require('src/components/tab.js')
// Tabs.init($container, { another: true, items: [...] })
//
// sg-js-component:
// <div class="sg-tabs-container" data-type="another"></div>
//
// Styleguide 1.2.4
```

```
...
module.exports = function($container) {
  var type = $container.data('type')

  if (type == 'another') {
    Tabs.init($container, { another: true,  items: fakeData })
  } else {
    Tabs.init($container, { items: fakeData })
  }
}
```

## File structure

You may have noticed that I suggest storing everything related to the component under the same folder. This is also
relevant to the style-guide-related files.

For a user, a component is a consistent entity. They get it as a whole thing, no matter how many technologies
are behind. For a developer, it is not that straightforward. We use CSS for styling, JavaScript for interactions and HTML
for the view. The corresponding code is usually placed in a separate file for each technology. I find it quite
distracting.

However, the 'component folder' approach smoothes this situation. Storing everything (including the documentation) in
the same place improves developer's experience very much.

```
src/
  components/
    login/
      login.ejs
      login.js
      login.sg-init.js
    tabs/
      tabs.ejs
      tabs.js
      tabs.sass
      tabs.sg-init.js
```

## Enjoy

After ajusting the SC5 Style Guide, as shown above, you will get the double living documentation. Remember about the
watching mode to re-generate the style guide on the file changes. It works as a nice development playground.

Also, last but not least, I would like to thank the community which made these things possible. I used the SC5 Style Guide
features by other developers and so feel very grateful. You may see their names [at the releases'
page](https://github.com/SC5/sc5-styleguide/releases). If you want yours to appear here, please
[contribute](https://github.com/SC5/sc5-styleguide).
