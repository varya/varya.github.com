---

title: HTML5 mobile apps with native UI on Steroids

date: 2014-05-26

layout: post

---
Recently I attended [Front Trends 2014](http://2014.front-trends.com/) in Warsaw.
This is an awesome conference which you should (no, definitely have to!) attend
in 2015. Besides incredible main programm Front Trends provides a set of Lighting Talks.
This year I was a part of it presenting [Steroids](http://www.appgyver.com/steroids),
a framework and a toolkit for developing HTML5 mobile apps. If you did not have
a chance to hear it, this offline text presentation is for you.<excerpt/>

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#Cover">
  </iframe>
</div>

Being an absolute newbie in developing mobile apps I decided to showcase
Steroids because it enables me to create pretty native-looking application
and smoothly go through the developing and releasing flow in a few minutes.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#summary">
  </iframe>
</div>

The Steroids toolkit is a CLI; it brings Steroids JavaScript framewrok into
your project and takes care of building an app, developing flow, debugging
and releasing. It is based on NodeJs, so you have to have it installed.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#3">
  </iframe>
</div>

The required version for now is `0.10.25`. Follow the [Installation and Setup
Guide](http://academy.appgyver.com/categories/1/contents/1).

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#4">
  </iframe>
</div>

Your very first start would be creating a project using `steroids create`
command. Then, typing `steroids connect --watch` in the gotten project
folder launches steroids process. The `--watch` flag as you can guess tells
Steroids to watch over the file changes, rebuild the app and push the results
to the connected devices.

You can connect a physical smartphone to the project. After running
`steroids connect` you get a web page with a QR code opened in your browser.
Use `AppGyver Scanner` to read this QR code, it will bring the application
into your phone and keep it connected.

<div style="text-align:center;">
<a href="https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8"
target="_blank"><img alt="Appstore" class="appstore_icon"
src="https://share.appgyver.com/assets/appstore-df950585b54bd081a7826913fc715cd4.png"></a>
<a href="https://play.google.com/store/apps/details?id=com.appgyver.android&amp;feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5hcHBneXZlci5hbmRyb2lkIl0."
target="_blank"><img alt="Googleplay" class="appstore_icon"
src="https://share.appgyver.com/assets/googleplay-2cef882d62e402fbdbfe8cdac5794069.png"></a>
</div>

Another way to watch the app is to bring it into a desktop simulator.
To do this, type `simulator` in the terminal wich launched
`steroids connect`.

You can change the application source files. E.g. edit a text
in `www/index.html` and make sure that the app in the connected device
or in the simulator has been changed.

To provide more powerful changes you can learn from the examples
and tutorials. Run `steroids generate` command and get the relevant
code.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#5">
  </iframe>
</div>

You can learn from this code examples, from [tutorials](http://academy.appgyver.com/)
and [API Docs](http://docs.appgyver.com/en/stable/index.html). 
Below I demonstrated some of the features which enable
to use *native UI*.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#examples-list">
  </iframe>
</div>

Let us start with showing the native tabs.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#7">
  </iframe>
</div>

In the `config/application.coffee` file you can fine a commented
example of defining a list of tabs with their icons and
locations (URLs) they lead to.

In my application I created 3 tabs. They are for
* index.html
* notificationExample.html
* knowledge.html

```coffee
steroids.config.tabBar.enabled = true
steroids.config.tabBar.tabs = [
  {
    title: "Index"
    icon: "icons/pill@2x.png"
    location: "http://localhost/index.html"
  },
  {
    title: "Notifications"
    icon: "icons/bell.png"
    location: "http://localhost/notificationExample.html"
  },
  {
    title: "Knowledge base"
    icon: "icons/coding.png"
    location: "http://localhost/knowledge.html"
  }
]
```

Place the pages into `www` directory and keep them empty yet.
Do not forget the icons. You can borrow the whole [icon
folder](https://github.com/varya/steroids-fronttrends2014/tree/master/www/icons).

After making the change wait for rebuild and check.

<div style="text-align:center;">
<img src="http://img-fotki.yandex.ru/get/9088/14441195.32/0_84262_ae854cb8_orig.png" width="340" height="89" border="0" title="" alt=""/>
</div>

Next, we can play with notifications.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#8">
  </iframe>
</div>

Place these buttons inside the `<body>` container of the
`www/notificationExample.html` file.

```html
<button
  class="button button-block"
  ontouchend="showAlert()">Show alert dialogue</button>
<button
  class="button button-block"
  ontouchend="showConfirm()">Show confirm dialogue</button>
<button
  class="button button-block"
  ontouchend="showPrompt()">Show prompt dialogue</button>
<button
  class="button button-block"
  ontouchend="vibrate()">Vibrate the device</button>
```

As you can see, they run different JavaScript functions on
touch. To finish the page you need to define these functions
in the `<head>` or linked `*.js` file. Each function demonstrates
a kind of notification which are:
* `navigator.notification.alert`
* `navigator.notification.confirm`
* `navigator.notification.prompt`
* `navigator.notification.vibrate`

Borrow the JavaScript code from [my repo](https://github.com/varya/steroids-fronttrends2014/blob/master/www/notificationExample.html#L15).

Now you can navigate to this page using the tabs and try
each type of notification with tapping.

Another native element could be a button in the application navigation
bar.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#9">
  </iframe>
</div>

The navigation bar can be modified with JavaScript on Steroids.
If you want it to be the same across all the application pages,
provide this JavaScript in the `www/javascripts/application.js` file
which is linked to all the `*.html` files.

```js
var loginButton = new steroids.buttons.NavigationBarButton();
loginButton.title = "the Button";

loginButton.onTap = function() {
    navigator.notification.alert(
        'You tapped the button!',
        function(){},
        'the Alert',
        'I did!'
    );
}

steroids.view.navigationBar.update({
    buttons: {
      right: [loginButton]
    }
})
```

This will bring the button to the right silde of the
navigation bar. Tapping on it you can see a notification; one
of those you studied recently.

<div style="text-align:center;">
<img src="http://img-fotki.yandex.ru/get/9115/14441195.32/0_84264_7f27d435_L.png" width="282" height="500" border="0" title="" alt=""/>
</div>

The last of native UI examples in this app is showing
modal views.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#10">
  </iframe>
</div>

Add this button into `www/index.html`:

```html
<a
  class="button button-block"
  ontouchend="showModal()">Open modal</a>
```

And code `showModal` method to open a view as a modal.

```js
function showModal() {
  var webView =
    new steroids.views.WebView("/views/modalExample/show.html");
  steroids.modal.show(webView);
}
```
The related view is a piece of html, which you should place into
`app/views/modalExample/show.html`. BTW, it has to have an interface
element closing the view. To make the process faster, pick up the
[code from the application repo](https://github.com/varya/steroids-fronttrends2014/blob/master/app/views/modalExample/show.html).

With this and [other UI features](http://docs.appgyver.com/en/stable/steroids_Steroids%20Native%20UI_index.md.html#Steroids%C2%A0Native%C2%A0UI)
you can build a mobile interface which looks absolutely native for a
device where you application runs.

Once finished coding (or even in process) you may need to show the
application to your friend, client or Mom.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#sharing">
  </iframe>
</div>

You can use the QR code from the beginning of our session which can
bring your application to any any device directly from your computer.
However this only will work if them both are connected to the same
network.

If you want to share with someone remotely, deploy your app into the cloud.
The `steroids deploy` command serves for it. As a result you get
a page (also with a QR code) which can be scanned with AppGyver Scaner on
a phone and thus your pal get the same app from the cloud.

All your applications in the cloud can be shared, tuned and built with
web interface at [cloud.appgyver.com](https://cloud.appgyver.com/applications).

From there you also push the app into AppStore and GooglePlay.

<div style="text-align:center;">
<img src="http://img-fotki.yandex.ru/get/9062/14441195.32/0_84265_d03d686e_orig.png" width="500" height="327" border="0" title="" alt=""/>
</div>

This is easy. As easy that a newbie can develop an app in a few minutes
and show you the how-to.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#links">
  </iframe>
</div>

You can learn more about Steroids and Cordova (Steroids is based on PhoneGap)
at the [AppGyver Academy](http://academy.appgyver.com/) where you find:
* detailed tutorials,
* documentation,
* big community of devs.

And, of course, you can read [this blog](/en/posts/). I promise to share my next findings
regarding Steroids soon :-)
