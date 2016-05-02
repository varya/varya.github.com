---

title: Simple React Angular project

date: 2016-05-03

layout: post

meta:
  desc: >
    Detailed explanation of React+Angular starting project. Optimal bridge to React, ES2015 and webpack
    for the developers with Angular background.

---

Earlier this year, I took part in developing a single page application. Together with the team we started this
project from scratch being free of legacy on any kind. This situation was the most comfortable to start with
new technologies in practise.

The stack which I aimed to practise was React + ES2015 + postcss + webpack. However, keeping in mind that most of the
team (who were supposed to maintain the project later) is mainly experienced in Angular, I was looking for some
sort of combination of these two frameworks.

<excerpt/>

Finally, I came up with the project structure where React is used for the view thereas Angular rules the data layer. I
believe that a project of such architecture vey well plays a bridge role. Often happens that the development team has
strict deadline. There is no time for mastering new rocket science approaches. However, we may study new gradually.

For that project I decided that we can introduce React with ES2015. The project structure stays so that is should be
easy to refactor in React-only project in the next iterations.

I cannot share the code of very project, but I made a starting repository with the same structure:
[varya/angular-react-stub](https://github.com/varya/angular-react-stub).

A new project may be forked/copied from it. After installing the needed npm packages, the development starts with
running

```
npm start
```

This launches the local server that responds with the builds of html, js and css files related to the project. The magic
is performed with `webpack`. Below I will explain in details.

For now, let's concentrate on the file structure.

A human-made code of teh project sits in `src` folder.

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

[index.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/index.js) file
is "entering point" of the building process. From it, the webpack gets to know what are the modules needed for the
appliction to function.

In this file, I create an Angular application and define the rules for routing. Roughly, each routing path corresponds
to its page. It takes page's template (an `html` file) and pages controller (a `js` module), and make them work together.

Putting everything in a good order, I made `pages` folder, where each page has its subfolder for storing a teamplate
and a controller.

The controller is normal Angular code. It prepares date for future usage in the view. Getting the data from server and
any transformation on them should also be the controller's business. However, in the given example there is no such
heavy code. Anyways, you may see how the `$scope` is fulfilled in
[pages/components/components.ctrl.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/pages/components/components.ctrl.js).

Data from `$scope` is accessible in the template. From [pages/components/components.html](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/pages/components/components.html)
you can see how is is passed down to the only used Angular directive, `react-component`. This directive is a bridge
between Angular-prepared data and React-operated view. Is gets the name of a React component to render and the data it
should get as its properties. Everything else happens in the React modules.

There is a special `modules` folder at the same level as pages. It contains all the React modules used in the
application. The modules can be complex, meaning include other modules. However the fils structure is flat. Each component
is represented by a folder with its JavaScript file and any corresponding content. Often it is CSS, but the pictures and
other needed stuff may be in the same folder.

You can check out a typical component code from
[modules/menu/menu.component.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/modules/menu/menu.component.js).
Note that the needed CSS is required in the JavaScript as

```
import styles from './menu.css';
```

This is one of the webpack's features which makes developing with it so awesome. A component declares which CSS it is
going to need. Then, the bundle CSS is built in accord with such declarations. Later, when refactoring, the process will
automatically exclude out-of-date CSS if its module is no longer in use.

The knowledge of what required files to process and how to process them is stored in
[webpack.config.js](https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/webpack.config.js).
It considers file types from their extensions. Thus, `*.js` and `*.jsx` files are ES2015 and go through transfromation
into plain JavaScript. `*.html` files are inserted as raw strings, this is why they can be used as Angular templates.
`*.css` files are required as styles but first go through postcss transformations. I also use `precss` as a plugin, which
makes possible to enjoy most of usual pre-processing features.

Briefly, this is pretty much all about the basic structure. A real project can use external libraries and modules as
well as have more complex building process. But here is its starting point: [varya/angular-react-stub](https://github.com/varya/angular-react-stub/).
