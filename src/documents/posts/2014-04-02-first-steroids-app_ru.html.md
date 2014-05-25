---

title: Мобильное приложение на Steroids

categories: ru issues

old: true

layout: post

---
На днях я написала своё первое мобильное приложение. Суммарно это заняло всего
пару часов, и всё благодаря фреймворку
[Steroids](http://www.appgyver.com/steroids) от AppGyver. С его помощью делать
гибридные приложения (это когда HTML5/JavaScript внутри) очень легко, а
инструменты `Steroids` позволяют легко деплоить приложение и делиться им с
друзьями.<excerpt/>

### Легко посмотреть приложение
Приложение у меня пока "игрушечное" — это всего одна страница, где озвучены
случайные числительные на финском языке.

<div style="text-align:center;">
<img
src="http://img-fotki.yandex.ru/get/9827/14441195.30/0_81ae7_60ff43b1_L.png"
width="282" height="500" title="" alt="" border="0"/>
</div>

Сейчас увидеть работающее приложение в телефоне можно только через `Appgyver
Scaner` — вспомогательную программу для обмена Steroids-based мобильными
приложениями до релиза. Поставьте сейчас, чтобы позже загрузить моё приложение:

<div style="text-align:center;">
<a href="https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8"
target="_blank"><img alt="Appstore" class="appstore_icon"
src="https://share.appgyver.com/assets/appstore-df950585b54bd081a7826913fc715cd4.png"></a>
<a
href="https://play.google.com/store/apps/details?id=com.appgyver.android&amp;feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5hcHBneXZlci5hbmRyb2lkIl0."
target="_blank"><img alt="Googleplay" class="appstore_icon"
src="https://share.appgyver.com/assets/googleplay-2cef882d62e402fbdbfe8cdac5794069.png"></a>
</div>

Теперь вы можете открыть в компьютере эту
[страницу с QR-кодом](http://bit.ly/finnish-counting-001). Отсканируйте QR-код
при помощи
свежеустановленного AppGyver Scaner, и моё приложение загрузится к вам в
телефон.

Я сознательно не релизила пока приложение. Во-первых, оно ещё сырое. А
во-вторых, хочу, чтобы вы увидели как легко поделиться готовящимся
приложением с другими, причем на любом этапе разработки.

### Запустить dev-версию
Код приложения открытый, хостится на Github:
[varya/finnish-counting](https://github.com/varya/finnish-counting). Чтобы
развернуть проект у себя на машине, понадобится npm-пакет `steroids`:

```
npm install steroids -g
```

Если до этого npm-пакеты на машину не устанавливались, то придется пройти через
все шаги [инструкции по
установке](http://academy.appgyver.com/categories/1/contents/1).

Затем нужно склонировать код проекта и установить зависимости:

```
git clone git@github.com:varya/finnish-counting.git -b develop
cd finnish-counting
npm install
```

Для начала работы с проектом запускаем

```
steroids connect --watch
```

Ключ `--watch` нужен для отслеживания изменений и перезагрузки приложения.

После запуска этой команды в браузере откроется страница с QR-кодом.
Отсканировав QR-код всё тем же AppGyver Scaner, вы получите приложение прямо в
телефоне. Только имейте в виду, что телефон и компьютер должны находиться в
одной сети. При каждой редакции кода приложение будет обновляться – очень
удобно, особенно если работаешь над внешним видом интерфейса.

Если телефона под рукой нет, можно открыть приложение на макет в iOS simulator.
Для этого в терминале с запущенным `steroids` нужно просто написать

```
simulator
```

### Что писать?
Основной код приложения находится в
[www/application.js](https://github.com/varya/finnish-counting/blob/vesions/0.0.1/www/javascripts/application.js).
Оно ещё маленькое и не использует все возможности Steroids. Но уже очевидно, что
когда страниц станет больше, мне понадобится [Steroids Native
UI](http://docs.appgyver.com/en/edge/steroids_Steroids%20Native%20UI_index.md.html#Steroids%C2%A0Native%C2%A0UI).

Другие возможности фреймворка такие как удобное обращение к камере, файловой
системе телефона, нотификациям — хорошо задокументированы на страницах [API
Docs](http://docs.appgyver.com/en/edge/index.html). Там же есть примеры
использования `Cordova API` — именно с его помощью в моём приложении
проигрывается звук.

Новые приложения появляются каждый день, можно релизить и хвастаться в [AppGyver
Apps Gallery](http://x.appgyver.com/xapps). Только успевай с идеями: я вот
хотела написать мобильный аналог игры 2048, а он уже там есть. Значит, буду
развивать свою «считалку» :-)

Кстати, у кого есть телефон на Андроиде — проверьте, скачивается у вас моё
приложение, работает ли? Я пока могу проверить только на iOS, а одно из
преимуществ приложений на Steroids — то, что они кросс-платформенные, с
нативными фичами для каждой платформы, конечно.
