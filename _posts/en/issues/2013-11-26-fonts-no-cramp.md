---

title: Custom fonts with no cramp

categories: en issues

layout: post

---
A developer using custom fonts in web (don't say this is evil) usually face a
dilemma.

The users' main interest is the content of the page not the
view. It is nice to provide it as fast as possible and then apply a custom font.
This blog used to work this way. I provided a script among others in the bundle
linked by the end of the page.

```js
(function(d){

function addFont(url, h, l) {
h = d.getElementsByTagName('head')[0];
l = d.createElement('link');
l.href = url;
l.type = 'text/css';
l.rel = 'stylesheet';
h.appendChild(l);
}

addFont('http://fonts.googleapis.com/css?' +
'family=Noto+Serif&subset=latin,cyrillic-ext,cyrillic');

})(document);
```

The drawback is obvious. Once a font is loaded and apllied, a user notice
twitching as a page is being re-rendering. It is recommended to define a
suitable system font in the `font-face`. But there never is a good fit.
Otherwise there was no need in a custom font.

The only way to avoid the font rendering jerk is to provide the font in advance.
With inlining a base64 of a font into CSS and linking it in `<head>` no
twitching is guaranteed as well as increasing page loading time.

For a while I was deciding between the two variants until my colleague [Roman
Komarov aka kizu](http://kizu.ru/en/) suggested an elegant solution which is in
use right now.

At the first time a user opens any page of this site, a CSS with the font is
loaded and stored as a piece of text in the `localStorage`.

```js
$(function(){

    if (typeof(Storage) === 'undefined') {
        return;
    }
    if (localStorage.getItem('varya.me.fonts') === null) {

        $.ajax({
            url: '../../data/fonts.css',
            success: function(response){
                localStorage.setItem('varya.me.fonts', response);
            },
            dataType: 'text'
        });

    }

});
```

But I do not apply this CSS after loading. So, not jerks. As request is only to
fill up the storage, it goes after the `domReady`.

By the time of requesting the next page the custom font is already in the user's
computer. Checking that it is available I apply it to the page. The faster the
better, and as the action costs almost nothing an inline `<head>` script goes
here.

```js
(function(d, s, l, r) {
if (typeof(s) !== 'undefined' && l.getItem('varya.me.fonts')) {
    r = [
        '<style>',
        l.getItem('varya.me.fonts'),
        '</style>'
    ];
    document.write(r.join(''));
}

})(document, Storage, localStorage);
```

With that the blog looks as it should do with 2+ pages loaded. I consider this
price for no-twitching custom font as reasonable.

Any ideas of making it even better?
