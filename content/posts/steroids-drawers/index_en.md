---

title: Using side drawers in mobile apps on Steroids.js

date: 2014-06-09
v2: true

layout: post

---
As a mobile apps user you may be already familiar to drawers.
They are quite popular solution for a side menu. Using `Steroids`
HTML5/JavaScript framework for hybrid mobile applications, you
can bring such an interface solution into your product very easy.
<excerpt/>

The usage of drawers explained here is demonstrated in the [Steroids
Kitchensink](https://github.com/AppGyver/kitchensink) open source application.
This is now being developed set of most useful examples for Steroids.
As the application is constantly changing, I will freeze the code examples
at [28 May 2014](https://github.com/AppGyver/kitchensink/tree/ceacb0ea80799b1d81454e2e966b553b807fbadc).

To explore the application in your mobile device or in a
simulator clone the repository and run the project. You may need some information
about how to start Steroids projects. That can be learned from tutorials:
* [Installing
  Steroids](https://academy.appgyver.com/categories/1-setup-and-getting-started/contents/1-installing-steroids)
* [Hello World application](https://academy.appgyver.com/categories/1-setup-and-getting-started/contents/2-hello-world)

Or from my recent article about [HTML5 mobile apps with native UI on
Steroids](/en/posts/html5-mobile-app-width-native-ui/).

Once run the project you will see a page with a list of examples
and a navigation bar.

<img class="article__image" src="http://img-fotki.yandex.ru/get/9652/14441195.32/0_8477d_3b6d66a5_L.png" width="282" height="500" border="0"/>

The button to teh left of a menu bar opens a side menu. But before we start to
study side drawers let's look at how this button is shown.

The initial view is coded in [`app/views/example/index.html`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/views/example/index.html).
This is an angular view with directives for the list and for the navigation bar.

```html
<div ng-controller="IndexCtrl">
  <navigation-bar title="Steroids Kitchensink">
    <left-button icon="/vendor/icons8/menu-32"
        onTap="showMenu()"></left-button>
  </navigation-bar>
  ...
</div>
```

The `navigation-bar` directive is custom and described in [`app/directives/navigationBar.coffee`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/directives/navigationBar.coffee).
Using such a directive rather than `steroids.view.navigationBar` helpers at every page is
more useful for the applications with many views.

Indeed inside the directive the same helpers are used. But declaring navigation bar
title and buttons in the view makes our programmers lifes a little bit
easier.

Here the navigation bar titled "Steroids Kitchensink" contains a "hamburger"
menu button which responds to the tapping with calling `showMenu` methods of
the corresponding controller.

This controller is coded in [`app/controllers/example.coffee`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/controllers/example.coffee).
As you can see, the `showMenu` method is pretty short.

```coffee
$scope.showMenu = ()->
  steroids.drawers.show {
    edge: steroids.screen.edges.LEFT
  }
```

It uses the drawers `show` method and slide the initial view to
the right which uncovers the menu view.

Of course, the code needs to know what is the view we mean by 'left'.
We have to provide it with such a knowledge declaring the list of drawers
in the [`config/application.coffee`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/config/application.coffee#L39)
configuration file.

```coffee
steroids.config.drawers =
  left:
    id: "sidemenu"
    location: "http://localhost/views/sidemenu/index.html"
    showOnAppLoad: false
    widthOfDrawerInPixels: 250
  options:
    centerViewInteractionMode: "Full"
    closeGestures: ["PanNavBar", "PanCenterView", "TapCenterView"]
    openGestures: ["PanNavBar", "PanCenterView"]
    showShadow: true
    stretchDrawer: true
    widthOfLayerInPixels: 0
```

Here the menu view file and some parameters. You can learn about
what they mean from a special tutorial about [configuring drawers](https://academy.appgyver.com/categories/3-user-interface-and-design/contents/98-configuring-drawers-on-app-load).

This will make the sidemenu shown.

<img class="article__image" src="http://img-fotki.yandex.ru/get/9766/14441195.32/0_8477e_dbe7889e_L.png" width="282" height="500" border="0"/>

To make it look like in the picture you need to provide a
corresponding view with the list of menu items. Here it is defined
in [`app/views/sidemenu/index.html`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/views/sidemenu/index.html).
This is pretty similar to the list of examples in the initial view. To make it function
we provide:
* a list of items and the corresponding view in [`www/data/sidemenu.json`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/www/data/sidemenu.json);
* data model in [`app/models/sidemenu.js`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/models/sidemenu.js);
* controller in [`app/controllers/sidemenu.coffee`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/controllers/sidemenu.coffee).

From the drawers perspective the most important piece of code
to study is the controller. It says to hide the opened drawer if you
tap the currently active menu item. Opening other menu items goes
differently; it replaces the current central view with some animation.

```coffee
if item.active
  steroids.drawers.hide {}
else
  webView = new steroids.views.WebView {
    id: item.id,
    location: item.url
  }
  steroids.drawers.hide {
    center: webView
  }
```

Hiding the currently opened drawer with `steroids.drawers.hide` simply
gets back the previously shown central view.

If you want to show a different page, you would also use `steroids.drawers.hide` but
with an additional `center` parameter to pass the needed view. This view has to be
created in advance with `steroids.views.WebView`.

Besides, such a view must be configured as preloaded in [`config/application.coffee`](https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/config/application.coffee#L31).

```coffee
steroids.config.preloads = [
  {
    id: "settings"
    location: "http://localhost/views/settings/index.html"
  }
]
```

Thus, with tapping on the *Settings* menu item you will get the settings
page shown.

<img class="article__image" src="http://img-fotki.yandex.ru/get/9667/14441195.32/0_8477f_2aafe347_L.png" width="282" height="500" border="0"/>

This page is empty yet. The upcoming posts will fill it in with something
interesting. Stay tuned :-)
