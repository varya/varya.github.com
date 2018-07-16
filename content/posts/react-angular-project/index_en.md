---

title: Simple React Angular project

date: 2016-05-19
v2: true
cover: thumb.png

layout: post

meta:
  desc: >
    The detailed explanation of React+Angular starting project. Optimal bridge to React, ES2015 and webpack
    for the developers with Angular background.

---

Earlier this year, I participated in a development of a single page application. With the team, we started this
project from scratch. This situation was the most suitable to practice the new technologies.

The stack I've tried was React + ES2015 + postcss + webpack. However, keeping in mind that most of the
team (who were supposed to maintain the project later) are mainly experienced in Angular, I was looking for some
sort of combination of these frameworks.

<excerpt/>

Finally, I made a project with React used for the view and Angular governing the data layer. I
believe that such project is ideal for the a bridge role. Often happens that the development team has a
strict deadline. There is no time to invent new rocket science approaches. However, we can introduce them gradually.

For that project, I decided that we can introduce React with ES2015. The project structure is easy to refactor
into a React-only project in the next iterations.

I cannot share the exact code of the project, but I created a dummy repository with the same structure:
[varya/angular-react-stub](https://github.com/varya/angular-react-stub).

A new project may be forked/copied from it. After installation of the required npm packages, the development starts with
running

```
npm start
```

It starts a local server that builds of html, js and css files related to the project. The magic
happens with `webpack`. Let me explain it below.

For now, let's concentrate on the file structure.

A human produced code of the project is placed in the `src` folder.

```
src/

  _helpers/

  modules/
    menu/
      menu.component.js
      menu.css

  pages/
    contact/
      contact.ctrl.js
      contact.html

  index.html
  index.js
```

The [index.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/index.js) file
is 'entering point' of the building process. Here, the webpack finds out what the modules required for the
app are.

In this file, I create an Angular application and define the rules for routing. Roughly, each routing path corresponds
to its page. It takes a page template (an `html` file) and a page controller (a `js` module), and make them work
together.

To keep everything neat, I made `pages` folder, where each page has a subfolder with a template
and a controller.

The controller is normal Angular code. It manipulates the data for future usage in the view. Also, controller is
responsible for extraction the data fromthe server and any transformation of it.

However, the given example contains no such
heavy code. Anyway, you can see how the `$scope` is filled in
[pages/components/components.ctrl.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/pages/components/components.ctrl.js).

The data from `$scope` is accessible in the template. From [pages/components/components.html](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/pages/components/components.html)
you can see how it is passed down to the only used Angular directive, `react-component`. This directive is a bridge
between Angular-cooked data and React-operated view. In the directive you declare what React component to render and
pass the properties to it. After that, the React component operates independently from the Angular.

## Modules

There is a special `modules` folder at the same level as `pages`. It contains all the React modules used in the
application. The modules can be complex and include other modules. However, the file structure is flat. Each component
is represented by a folder with its JavaScript file and any other related content inside. Often, it is CSS, however
the pictures and other required stuff may be in the same folder.

You can check out a typical component code in the file
[modules/menu/menu.component.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/modules/menu/menu.component.js).

Note that the required CSS is imported in the JavaScript as

```
import styles from './menu.css';
```

This is one of the webpack's features which makes developing with it so awesome. A component declares the CSS it uses.
Then, the bundled CSS is built according to these declarations. In refactoring, the process will
automatically exclude out-of-date CSS if its module is no longer in use.

[webpack.config.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/webpack.config.js)
stores the data what files to process and how to do it.
It gets the file types from their extensions. Thus, `*.js` and `*.jsx` files are ES2015 and transform
into plain JavaScript. `*.html` files are inserted as raw strings. This is why they can be used as Angular templates.
`*.css` files are required as styles but first transform with Postcss. I also use `precss` as a plugin, which
makes possible to enjoy most of the usual pre-processing features.

This covers pretty much all about the basic structure. A real project can use external libraries and modules as
well as have more complex building process. But here is its starting point: [varya/angular-react-stub](https://github.com/varya/angular-react-stub/).
