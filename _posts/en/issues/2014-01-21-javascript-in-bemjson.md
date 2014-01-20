---

title: JavaScript in BEMJSON

categories: en issues

layout: post

---
We usually start developing a web site with prototyping the interface and then
implementing HTML/CSS and bacis JavaScript. In case
of using full BEM stack a tranformation from prototype to a functioning web
site goes smoothly. You can clone the project from
[project-stub](https://github.com/bem/project-stub) and create a static web page
as it was [described
earlier](http://bem.info/articles/start-with-project-stub/).

Thanks to `BEMHTML` templates you do not need write all the HTML manually.
Describing page sructure in `BEMJSON` rather than writing all the tags manually
saves time. But sometimes this is still a lot of work to do especially for large
pages.

Luckily BEMJSON can include JavaScript pieces to produce some blocks dymamically.
I created an example of such usage:

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
[full
code](https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/index/index.bemjson.js)

This JavaScript creates 10 `button` blocks when building a page with `bem-tools`.
Check the [result page](http://varya.me/dynamic-bemjson/desktop.bundles/index/index.html)
to see them.

Indeed, this feature is not needed when BEMJSON is a result of 1st layer templates
(like BEMTREE, priv.js) you can produce as much BEMJSON as is necessary. But with
initial development of a static web page, the JavaScript tricks help to avoid
copy-paste.
