```js
var createHistory = require('history').createMemoryHistory;
var Router = require('react-router').Router;

var pages = [
   {
      "node":{
         "fields":{
            "slug":"/articles-and-talks/",
            "prefix":"1"
         },
         "frontmatter":{
            "title":"Articles and talks",
            "menuTitle":null
         }
      }
   },
];
var path = '/';
var history = createHistory();

<Router history={history}>
  <Menu pages={pages} path={path}/>
</Router>
```
