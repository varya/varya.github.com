---

title: Tag cloud of random sizes in pure CSS

date: 2015-11-02

layout: post

meta:
  desc: >
    Tag cloud of different with random sizes of the words with pure CSS.

---
Last week I faced a need to make a fake tag cloud, where the words need to be of different size. This was needed for
a presentation slide, and as my slides are always in HTML/CSS, must be implemented with these technologies. It is always
possible to inject some JavaScript and code anything. But what about pure CSS, do we get random sizes there?

<excerpt/>

<div class="testings" markdown="1">

<ul class="cloud">
<li>performance testing</li>
<li>stress testing</li>
<li>conformance testing</li>
<li>acceptane testing</li>
<li>smoke testing</li>
<li>regression testing</li>
<li>white box testing</li>
<li>functional testing</li>
<li>system testing</li>
<li>black box testing</li>
<li>load testing</li>
<li>compatibility testing</li>
<li>unit testing</li>
</ul>

</div>

<style>
.testings {
    text-align: center;
    width: 400px;
}
.testings .cloud {
    display: inline;
    list-style-type: none;
    width: 400px;
}
.testings .cloud li {
    list-style: none;
    display: inline;
}

/* Random sizes */

.testings .cloud li:nth-of-type(3n + 1) {
    font-size: 1.25em;
}
.testings .cloud li:nth-of-type(4n+3) {
    font-size: 1.5em;
}
.testings .cloud li:nth-of-type(5n - 3) {
    font-size: 1em;
}

</style>

The tag cloud you see above is what I get. You may notice it's not real random; after refreshing you will always get the
same result. But still looks like a tag cloud of different sizes and works perfectly as an example.

This is a list, it's easy to generate from markdown:

```html
<ul class="cloud">
    <li>performance testing</li>
    <li>stress testing</li>
    <li>conformance testing</li>
    <li>acceptane testing</li>
    <li>smoke testing</li>
    ...
</ul>
```

Then, flattened as usual:

```css
.cloud {
    display: inline;
    list-style-type: none;
    width: 400px;
}
.cloud li {
    list-style: none;
    display: inline;
}
```

And then different sizes are made with a few `nth-of-type` combined in different variants:

```css
.cloud li:nth-of-type(3n + 1) {
    font-size: 1.25em;
}
.cloud li:nth-of-type(4n+3) {
    font-size: 1.5em;
}
.cloud li:nth-of-type(5n - 3) {
    font-size: 1em;
}
```

I tuned the `nth-of-type` values so that it would look nicely. Depending on the length of the words used, you may need
to play arownd with the values and maybe use more than 3 sizes.
