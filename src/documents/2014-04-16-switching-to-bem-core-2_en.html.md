---

title: Switching to bem-core#v2

categories: en issues

layout: post

---
The `bem-core` library goes futher and there already is `2.0.0` version
available. This blog was safely switched to the new major version with
[some diff to the
code](https://github.com/varya/varya.github.com/commit/f21f810b7cb4e16206ef3d088a8b2c38b615f8f3).
Now so can do you. Careful examination of the version changelog will help you
with it. Look how I did this.<excerpt/>

When a new bem library version is released its changelog is published on the
official BEM website. You can examine the [list of changes for bem-core
2.0.0](http://bem.info/libs/bem-core/2.0.0/changelog/).

The changelog is divided into 3 parts: breaking, marjor and minor changes.

Breaking changes takes most of your attention. As you can see, they declare
removing of some basic methods as well as hosting some code in different
repositories. Thus, if you used some of the listed methods, the switch pushes
you to refactor your code a little bit.

The major changes are less critical but might case some code changes as well. In
this version BEM team provided [new syntax for defining the blocks in
JavaScript](https://github.com/bem/bem-core/issues/382). This change is not
breaking as the old syntax still works. However it is nice to go through a small
refactoring and switch to the new type of module declaration keeping your code
neat for the future.

The same goes for the [change to DOM
helpers](https://github.com/bem/bem-core/issues/410). With getting the context
as a result of using those helpers you can get rid of a couple of lines per
block.

Summing it up, switcing to the new version should be your happiest time as you
have a ready-made excuse to dive into refactoring.
