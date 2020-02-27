---

title: Мобильное приложение на HTML5 со штатным интерфейсом

date: 2014-05-28
v2: true

layout: post

---
Недавно я побывала на конференции [Front Trends 2014](http://2014.front-trends.com/)
в Варшаве. Конференция очень крутая, обязательно посетите её в следующем году.
У них всегда интересная основная программа, и кроме неё есть ещё
мини-доклады от всех желающих. В этом году одним из таких докладов был мой,
о фреймворке и инструментах для разработки HTML5/JavaScript мобильных
приложений [Steroids](http://www.appgyver.com/steroids).
Если вы не были на конференции, то можете прочесть мою презентацию в тексте.
<excerpt/>

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#Cover">
  </iframe>
</div>

Я совсем новичок в разработке мобильных приложений, но всё равно решилась
показать, как пользоваться Steroids, потому что благодаря ему я смогла сделать
приложение с системным интерфейсом (native UI) и безболезненно пройти через
весь цикл разработки за считанные минуты.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#summary">
  </iframe>
</div>

Инструменты Steroids — это пакет с command line интерфейсом. Вместе с ним вы получите
JavaScript-фреймворк Steroids. А также инструменты обеспечат вам сборку проекта,
удобный процесс разработки, отладки и релиза. Всё написано под NodeJS, так что
потребуется его установить.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#3">
  </iframe>
</div>

Нужна версия `0.10.25`. В инструкции [Installation and Setup
Guide](http://academy.appgyver.com/categories/1/contents/1)
подробно написано, как устанавливать.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#4">
  </iframe>
</div>

Самая первая команда, которой вы воспользуетесь, — это `steroids create`.
Затем, в получившейся папке проекта наберите `steroids connect --watch` —
запустится процесс steroids. Флаг `--watch` нужен, чтобы Steroids отслеживал
изменения файлов и каждый раз пересобирал проект и обновлял его на подключенных
устройствах.

Вы можете подключить к проекту реальный телефон. После запуска `steroids connect`
откроется окно браузера с QR-кодом. Считайте этот QR-код мобильным приложением
`AppGyver Scanner` — и проект окажется в вашем телефоне (а кроме того — будет
обновляться).

<div style="text-align:center;">
<a href="https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8"
target="_blank"><img alt="Appstore" class="appstore_icon"
src="https://share.appgyver.com/assets/appstore-df950585b54bd081a7826913fc715cd4.png"/></a>
<a href="https://play.google.com/store/apps/details?id=com.appgyver.android&amp;feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5hcHBneXZlci5hbmRyb2lkIl0."
target="_blank"><img alt="Googleplay" class="appstore_icon"
src="https://share.appgyver.com/assets/googleplay-2cef882d62e402fbdbfe8cdac5794069.png"/></a>
</div>

Другой способ — открыть проект в Simulator. Для этого наберите `simulator`
в окне терминала, где запускали `steroids connect`.

Теперь можете изменить исходный код приложения. Например, напишите
свой текст в файле `www/index.html`. После этого можете проверить,
что приложение в подключенном телефоне или в симуляторе изменилось.

Научиться, как сделать более серьезные изменения в проекте, вы
можете из примеров и туториалов. Запустите `steroids generate`, и
получите нужный код.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#5">
  </iframe>
</div>

Можете смотреть, как устроены эти примеры, учиться по
[туториалам](http://academy.appgyver.com/) и
[API документации](http://docs.appgyver.com/en/stable/index.html).
Дальше я покажу как использовать в вашем приложении
некоторые штатные элементы интерфейса, то есть
писать на HTML5/JavaScript приложение с *native UI*.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#examples-list">
  </iframe>
</div>

Давайте начнем с табов.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#7">
  </iframe>
</div>

Вы можете найти закомментированный пример использования
табов в файле `config/application.coffee`. Это список табов
с их иконками и ссылками, на которые они ведут.

В моём приложении я создаю 3 таба для следующих страниц:
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

Положите html-файлы этих страниц в папку `www`. Пока они могут
быть пустыми. Также не забудьте об иконках, можете взять из моего
репозитория всю папку [icon
folder](https://github.com/varya/steroids-fronttrends2014/tree/master/www/icons).

После того как все изменения будут сделаны, подождите пересборки и
убедитесь в результате.

<div style="text-align:center;">
<img src="http://img-fotki.yandex.ru/get/9088/14441195.32/0_84262_ae854cb8_orig.png" width="340" height="89" border="0" title="" alt=""/>
</div>

Дальше можно поиграть с нотификациями.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#8">
  </iframe>
</div>

Разместите код этих кнопок внутри тега `<body>` на странице
`www/notificationExample.html`.

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

Кнопки реагируют на прикосновения пользователя и запускают
различные JavaScript-функции. Чтобы сделать страницу работающей,
нужно задать эти функции в `<head>` или `*.js` файле страницы.
Каждая из них иллюстрирует работу своего вида нотификации, такого
как:
a kind of notification which are:
* `navigator.notification.alert`
* `navigator.notification.confirm`
* `navigator.notification.prompt`
* `navigator.notification.vibrate`

Код функций можете взять
[из моего репозитория](https://github.com/varya/steroids-fronttrends2014/blob/master/www/notificationExample.html#L15).

Теперь вы можете перейти на эту страницу по соответствующему
табу и увидеть, как работает каждый тип нотификации.

Следующий системный элемент — кнопка на навигационной панели
(navigation bar).

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#9">
  </iframe>
</div>

Навигационная панель может быть изменена при помощи JavaScript-хелперов
фреймворка Steroids. Если вы хотите сделать её одинаковой для всех страниц
приложения, то разместите код в файле `www/javascripts/application.js`,
который подключен ко всем `*.html` файлам.

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

Этот код вставит кнопку в правую часть навигационной панели.
Касание кнопки запустит нотификацию, уже знакомую вам по предыдущему
примеру.

<div style="text-align:center;">
<img src="http://img-fotki.yandex.ru/get/9115/14441195.32/0_84264_7f27d435_L.png" width="282" height="500" border="0" title="" alt=""/>
</div>

И последний пример штатного интерфейса в этом приложении
— модальное окно.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#10">
  </iframe>
</div>

Разместите эту кнопку в файле `www/index.html`:

```html
<a
  class="button button-block"
  ontouchend="showModal()">Open modal</a>
```

И определите функцию `showModal`, которая открывает модальное
окно с соответствующим содержанием.

```js
function showModal() {
  var webView =
    new steroids.views.WebView("/views/modalExample/show.html");
  steroids.modal.show(webView);
}
```
Что показывать в модальном окне, должно быть написано в файле
`app/views/modalExample/show.html`. Кстати, не забудьте, что там
должна быть кнопка закрывания модального окна. Чтобы всё прошло
быстрее, позаимствуйте
[код из репозитория приложения](https://github.com/varya/steroids-fronttrends2014/blob/master/app/views/modalExample/show.html).

С этими и [другими элементами интерфейса](http://docs.appgyver.com/en/stable/steroids_Steroids%20Native%20UI_index.md.html#Steroids%C2%A0Native%C2%A0UI)
вы можете сделать приложение с системным интерфейсом, которое
будет выглядеть натурально на том устройстве, на котором запускается
приложение.

Когда приложение закончено (или даже в процессе), вы можете захотеть
показать его другу, клиенту или даже маме.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#sharing">
  </iframe>
</div>

Можно воспользоваться QR-кодом, упоминаемым в начале статьи. Он
принесет код с вашего компьютера на любое устройство. Но вы оба должны
быть подключены к одной сети.

Если вы хотите показать приложение удаленно, разместите код в облаке.
Для этого есть команда `steroids deploy`. В результате вы тоже получите
страницу с QR-кодом. Его можно считать при помощи `AppGyver Scaner` и
получить в своём телефоне приложение прямо из облака.

Вы можете делиться всеми своими приложениями из облака. А также
настраивать их и собирать релизы. Всё это делается через web-интерфейс
[cloud.appgyver.com](https://cloud.appgyver.com/applications).

Отсюда же приложения можно отправлять в AppStore и GooglePlay.

<div style="text-align:center;">
<img src="http://img-fotki.yandex.ru/get/9062/14441195.32/0_84265_d03d686e_orig.png" width="500" height="327" border="0" title="" alt=""/>
</div>

Видите, это просто. Настолько просто, что даже новичок может не только
разработать приложение, но и сделать об этом презентацию с живым кодом
на конференции.

<div class="slide">
  <iframe class="slide__frame"
    src="http://varya.me/start-with-steroids/?full#links">
  </iframe>
</div>

Узнать больше о Steroids и Cordova (в основе Steroids лежит PhoneGap)
можно в [AppGyver Academy](http://academy.appgyver.com/). Там есть:
* подробные обучающие материалы,
* документация,
* сообщество разработчиков.

И, конечно, вы можете читать [этот блог](/ru/posts). Я собираюсь
делиться своими следующими открытиями относительно Steroids в ближайшее время :-)
