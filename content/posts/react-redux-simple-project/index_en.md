---

title: Simple yet promising structure for React/Redux project

date: 2016-11-21

layout: post

meta:
  desc: >
    Very simple React/Redux project structure with a lot of space for evolving into bigger but still neat project. This
    is an extract from real project of migrating large e-commerce website from old-school stack to modern cutting edge
    solutions.

---

Two weeks ago, I have started a new project of migrating a large website to React. Although this is not developing from
scratch but refactoring, there still was a great chance to reconsider the project file structure in its client part.

As a proof-of-concept, I have chosen a pair of components: shopping cart and adding button. This is e-commerce what we
are building here :-) My initial goal was to create simple components and demonstrate their reusing as well as introduce
Redux as a glue to the components in the data area. As a result, I think I provided a nice and neat structure which
helps a developer to understand what serves what. On the other hand, I tried to keep it simple. In the beginning, there
is no need in overcomplicated.

<excerpt/>
In this post, I present the initial state of the project structure, extracted from the working repository. In our actual
project, it has already evolved to use other patterns and helping tools. I hope I will make it to present these changes
in the following posts.

The demonstrative extract is a public repository at
[varya/react-redux-project](https://github.com/varya/react-redux-project). To run it locally, you need to check it out
run `npm install` and then `npm start`. You will see a page, similar to what is [hosted
here](http://varya.me/react-redux-project/index.html).

In this page, two React components are sharing one data store. You can see how the number in `Cart` increments every
time you click a button.

Now, let's have a look at the project file structure. You will find all the source files in `src` folder in the
repository:

```
src/
  components/
    AddToCartButton/
    Button/
    Cart/
    Icon/
  containers/
    AddToCartButton/
  redux/
    modules/
      cart.js
      reducer.js
  index.js
```

The `components` folder is dedicated for representative, "static" components. The components can reuse one another. For
example, in the project, the `AddToCartButton` wraps the `Button`.

On the file system, each component is a folder. Inside there are usually `index.js`, almost always `style.css` and other
files such as images if needed. I used to name the JavaScript file by the component name, like `Button.js` and
`Button.css`. But in this
project, I tried more unified structure. It turned out to be very handy, especially in the beginning, when we make a lot
of small components. Now the component folders can be copied and renamed easily.

Next folder is named `containers`. It is for the wrappers around the components. These wrappers often have the same
names. Unlike representative components, which only know about how to render the data, the containers are for getting
the data and passing it down. Technically the containers are also React components, but they are decorated with
`connect` from Redux. This provides the glue for view and data. You can see typical container here:
[src/containers/AddToCartButton](https://github.com/varya/react-redux-project/blob/eb0e7a24ba8a723ce373d3763c299b95661fdfc6/src/containers/AddToCartButton/index.js)

For the data, the containers use reducers from Redux. The project is made in a hope for future growing. This is why the
reducers are divided into modules (meaning, separate files) according to what are the entities they operate with. They
are stores in [src/modules](https://github.com/varya/react-redux-project/tree/master/src/redux/modules) directory. It
has yet one module and the
[src/modules/reducer.js](https://github.com/varya/react-redux-project/blob/master/src/redux/modules/reducer.js) which
combines them all.

Take a look at the module code.

```js
const ADD = 'cart/ADD';

const initialState = {
  goods: 0
};

export default function cart(state = initialState, action = {}) {

  switch (action.type) {
    case ADD:
      return {
        ...state,
        goods: ++state.goods
      }
    default:
      return state;
  }

}

export function add() {
  return {
    type: ADD
  }
}
```

This style of organizing reducers is called [Ducks](https://github.com/erikras/ducks-modular-redux).

The entering file of the application [src/index.js](https://github.com/varya/react-redux-project/blob/master/src/index.js)
takes the components or containers, makes the Redux store and creates the app with them. In here, you can also decorate
representative components with Redux' `connect` if they do not have a special container.

As the following weeks showed, this structure turned out to be very convenient. Of course, it has evolved more. I hope
to cover the changes in the next posts.
