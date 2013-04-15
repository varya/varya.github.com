---

title: Tailled popup in CSS

categories: en issues

layout: post

invisible: true

---
The requirements are:

On a view,

 * a popup consists of a box and a tail,
 * depending on a theme, both a box and a tail can be colored,
 * a box and a tail, both bordered with semi-trasperent border,<br/>
 Notice, that it is not a popup's background to be appear underneath the border
 line.
 The border has to be a box' and tail's outline and reveal the page background.
 * to fit any background of a page, and this border can be of any width;

As for browser support, it is:

 * pixel-perfect for
  * Firefox, >=16
  * Google Chrome, >=23
  * IE 8, IE 9, IE 10
  * Opera, >=12.0
 * degradation
  * Google Chrome, 18.0
  * Firefox, 10 - 15
  * IE 7, IE 6
  * Safari

## Solutions

### Zero solution with a pseudo element and a background-clip property
The simples way is to equip a block with an additional element, a pseudo element,
and implement this tail on it with a rotated square. This is what's demonstrated here
[http://toivonen.github.io/tailed-popup/01-zero/index.html](http://toivonen.github.io/tailed-popup/01-zero/index.html).<br/>
The other trick is to set a `background-clip` property into a `padding-box`
value. Chris Coyer [explaines what it is and how it
works](http://css-tricks.com/transparent-borders-with-background-clip/). In
short, it's for page background and the other page stuffing to be shown through
the "border".

This solution brings the following problems.

Tail's border layers on the box' one. Depending on a page background, border
size and transperency as well as page scale that can be visible. And not only
the biggest tailes can look broken.

<img
src="http://img-fotki.yandex.ru/get/6444/14441195.29/0_73b82_46b24446_M.png.jpg"/>
<img
src="http://img-fotki.yandex.ru/get/6439/14441195.29/0_73b83_304d7f93_S.png.jpg"/>
