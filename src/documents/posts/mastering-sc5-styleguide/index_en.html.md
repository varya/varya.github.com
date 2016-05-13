---

title: Mastering SC5 Style Guide

date: 2016-05-20

layout: post

meta:
  desc: >
    Desc

---

Before

<excerpt/>

## Living JavaScript components

Usually, an piece of interface (often called 'a component') is a combination of HTML, CSS and JavaScript. With basic
features if SC5 Style Guide you can easily document HTML and CSS. Applying JavaScript to the components requires an
additional configuration.

In SC5 Styleguide, you can provide additional tags into the `<head>` section of the resultant style guide's page. They
can be `<script>` tags linking the JavaScript you need.

Assuming this, you can bundle the needed JavaScript into one file, and link it to the style guide's pages, like this:

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

Another parameter, you to use in the configuration is `disableEncapsulation: true`. By default, the tool wraps every
component into a Shadow DOM container. This makes the components encapsulated and protects from unwanted global CSS.
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

The SC5 Style Guide parses the KSS dodumentation in your CSS (SASS, LESS) code, collects information about all the
components and produces a JSON file with it. The documentation pages you can see are the Angular pages built based
on the information in this JSON.

When generating the style guide, you can inject additional processors into transforming data for this JSON file. The
custom processing functions can re-organize and modify these data. You can use this trick to provide more clever
generator, run templates and parametrized JavaScript components.

Examine the generated `styleguide.json` file to see how the data is organized by default. You will find out that every
component is represented with an object similar to the following:

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

As a value of this option you can list the processing functions. The given indexes matter for the order in which these
functions are applied to the data.

Check out [documentation for options](https://github.com/SC5/sc5-styleguide#build-options).

In my projects, I used additional processors to operate custom KSS parameters and modify data based on them.

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
the declared object and put the result as a markup to render. For this, you need a custom processing function mentioned
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

In the sigle-page applications, templates work on the client side. In this case it is better to process them this way
in the style guide also. In other words, you should include the templates into the JavaScript bundle and initialize
the components on containers.

If to combine this approach with the custom processors, in the `markup` KSS field you can store the code example for
every component.

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

## Tunable initialization for JavaScript

Usually, different components need to be initialized in different ways. Also, they may require some fake data. You can
run different Javascript functions on different component containers to get this result.

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
// src/components/tabs/tabs.init.js

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


## Reusing project variables
