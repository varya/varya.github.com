---

title: Week 44, 2016

date: 2016-11-08

layout: post

meta:
  desc: >
    TODO: Description

---

First thing first, I'm staring weekly posts about findings that are somehow related to work. This is a mature but not yet
implemented idea. Although, a friend of mine [Vladimir Starkov sometimes practises the same](https://iamstarkov.com/).

In this issue there are tips on organizing Google Calendar, nice project management addition for GitHub, Styleguide
solutions for React projects and a couple of good reads.

<excerpt/>


## Week numbers in Google calendar

In Finland, the week numbers are widely used. People easily make agreements on let's say "the beginning on week 45". For
this purpose and also for the actual weekly reports, I have subscribed for a special Google calendar
which provides a small week number at the top right corner or every monday.

![](/posts/week-44-2016/CalendarWeekNumbers3.png)

Here are the instructions:
[http://www.daimto.com/how-to-add-week-numbers-to-your-google-calendar/](http://www.daimto.com/how-to-add-week-numbers-to-your-google-calendar/).

## ZenHub — a GitHub issue tracker

[ZenHub](https://www.zenhub.com/) is an add-on, which makes different boards with columns on top of GitHub issues.

![](/posts/week-44-2016/zenhub-task-board.jpg)

It looks like a competitor of embedded [GitHub
Projects](https://github.com/blog/2256-a-whole-new-github-universe-announcing-new-tools-forums-and-features) but with
more features.

## React Storybook and React Styleguidist

In the project I have started on Monday, we faced the need to document React components. There were two candidates
among the tools to use — [React Storybook](https://getstorybook.io/) and [React
Styleguidist](https://github.com/sapegin/react-styleguidist). Both with their pros and cons.

By now, we ended up with Styleguidist. Anyway, this is not a mature solution, and we can probably think back.

The Storybook was super easy to install. However, it requires more typing for every story and does not read the props out
of the documenting comments.

The Styleguidist was a tricky thing to run. Everything goes smoothly at simple projects but this was not our case. There
were some difficulties with the pages wrapped into `react-hot-loader` container. I solved it by introducing proper file
structure. We should have it anyway. Now, there is a dedicated folder for the components and we taught the Styleguidist
to work with it.

As a piece of advice to friends, I can give the following: try to reuse your normal webpack config and not to write another one
in the `styleguide.config.js` file. It will save you some time when changing the building process. This is our version:

```
const siteWebpack = require("./webpack.config.js");

module.exports = {
  title: 'My Great Style Guide',
  components: './src/components/**/*.jsx',
  updateWebpackConfig(webpackConfig) {
    siteWebpack.module.loaders.forEach(function(loader) {
      webpackConfig.module.loaders.push(loader);
    });
    webpackConfig.postcss = siteWebpack.postcss;

    return webpackConfig;
  },
};
```

## How to Write a Git Commit Message

The article [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) by Chris Beams has already
turned 2 years but still actual. I have read it previously and try to follow. But I do not recollect me shring the link
to it. So, here it is.

## 4 different kinds of React component style

Setting up a new project I have scanned a lot of recent articles about React. One of them is [4 different kinds of React
component style](https://www.peterbe.com/plog/4-different-kinds-of-react-component-styles). I had doubts if to put it in
this blog post or not because it did not tell me much new. On the other hand, it's not a long read and finely summarizes
different kinds of React components.
