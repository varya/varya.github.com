---

title: JavaScript в BEMJSON

categories: ru issues

layout: post

---
Обычно разработка страницы начинается с прототипирования интерфейса и затем
продолжается созданием статической странички при помощи HTML/CSS и элементарного
JavaScript. Если использууется полный стек БЭМ, переход от прототипирования к
полноценному сайту происходит постепенно. Можно склонировать проект
[project-stub](https://github.com/bem/project-stub)
и сделать статическую страницу, об этом уже опубликован
[туториал](http://bem.info/articles/start-with-project-stub/).

Благодаря `BEMHTML` вам не нужно писать весь HTML для страницы вручную. Описывая
страницу в BEMJSON, вы экономите время, ведь не нужно писать каждый тег. Но в
случае больших страниц этого мало.

К счастью, в BEMJSON можно включать JavaScript, результатом которого будет
описание блоков.
Вот пример такой страницы:

```js
({
    block: 'page',
    ...
    content:[
        ...
        {
            block: 'content',
            content: (function() {
                var res = [];
                for(var i = 0; i < 10; i++) {
                    res.push({
                        block: 'button',
                        content: 'Button ' + (i + 1)
                    });
                }
                return res;
            })()
        },
        ...
    ]
})
```
[полный
код](https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page1/page1.bemjson.js)

Когда страница собирается при помощи `bem-tools`, этот JavaScript создает 10
блоков `button`.
Можете проверить [результирующую страницу](http://varya.me/dynamic-bemjson/desktop.bundles/page1/page1.html)
чтобы увидеть их.

Ещё одним примером может служить блок `menu`.
Another example is a `menu` block. Such interface pieces usually consist of a
lot of items with minor differences which cases a lot of copy-paste on a page.
With JavaScript in BEMJSON this can be easily reduced.

```js
({
    block: 'page',
    ...
    content:[
        ...
        {
            block: 'menu',
            content: [
                {
                    title: 'Index',
                    isSelected: false,
                },
                {
                    title: 'Products',
                    isSelected: true
                },
                {
                    title: 'Contact',
                    isSelected: false
                }
            ].map(function(item){
                var block = {
                    block: 'menu',
                    elem: 'item',
                    content: item.title,
                    mods: {
                        selected: item.isSelected
                    }
                };
                return block;
            })
        },
        ...
    ]
})
```
[full
code](https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page2/page2.bemjson.js)

This gives a [page with a menu of 3 items](http://varya.me/dynamic-bemjson/desktop.bundles/page2/page2.html).
The bigger is the array of items, the more you save. Especially when the structure
of every item changes while developing.

Конечно, этой возможностью не придется пользоваться, если BEMJSON — это
результат первого слоя шаблонов (таких как BEMTREE или priv.js) — там вы можете
произвести столько BEMJSON, сколько требуется. Но на первом этапе разработки,
когда делается статическая страница, трюки с JavaScript в BEMJSON помогут
избежат копипаста.
