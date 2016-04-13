---

title: Materials for your React hackathon

date: 2016-04-15

layout: post

meta:
  desc: >
    The materials for React hackathon.

---

In modern frontend development, it is required to learn new things constantly. Every day, we read articles and blog posts, we examine the changelogs, follow the twitter announces and GitHub discussions. This helps us to keep on.

However,
when it comes to studying something bigger, like the good parts of a new framework and ecosystem around it, more effort
should be given. Organizing a whole-day hackathon for the developers in your company is a perfect solution to catch up
the trend. At my company, SC5 online, we did so for mastering React development. Some ecosystem components such as
webpack and redux came along.

<excerpt/>

For a commercial company, it is hard enough to find time for the whole-day learning event. Besides, the preparations for
such thing consume a lot of time. When I realised this, I decided to share the materials, which I developed for our
hackathon. Below you can find the hackathon plan and the slides explained.

This is the presentation I used for pre-coding section:
[varya.me/reactjs-hackathon](http://varya.me/reactjs-hackathon/).

By the time of presenting, the slides were hosted online, and in the beginning, I provide a short link to them. In the coding event, the developers align with a lot of online materials, such as starting projects, documentation, different tips. As my presentation has the links to them, it was important to give the others proceed these links. Besides, we had a special Slack channel, where all the links were shared again.

In the next slide, I introduce the plan of our event to the colleagues:


1. About the event
1. Choosing the projects
1. Introduction to React
1. Stub projects
1. Linking UI libraries
1. React Native
1. Relay&QraphQL
1. Coding

Everything listed here was covered by slides. Besides the coding part, which was the developers' time. Even so, the
presentation took about 50 minutes. In this amount of time, I was able to provide all the needed introductions. On the
other hand, it is good that not-yet-coding part took less than an hour. This way, people did not get bored.

At the next stage, I proposed the applications we could write with React that day. Here are the options:

* Instagram-like
* Twitter dashboard
* Shopping list
* [Bars on map](http://kipp.is/map)
* [2048](https://claudiopro.github.io/2048-react/)
* Tetris
* [Snake game](https://reake-react-snake.firebaseapp.com/)
* Your own idea

I think, the product goals should be revealed in the beginning. Especially, in the case of React hackathon. This way, people start thinking how they would code this in the technologies they are used to. But when it comes to using React, they are amazed at the elegance and easiness of the approach.

After that, I provide the links to official documentation and tutorials. Clear enough, that even whole-day coding event is not sufficient time to study a new framework. However, after getting interested, people should have a path to go further. A link to an interesting tutorial, preferably in video, serves this.

By the time of hackathon, there might be that some developers have already gotten React experience, some have read the articles, and some at least heard about the approach. Also, an in-company hackathon is not I-will-teach-you event, it is a collaborative and even team-building event. This why I wanted all the people to be involved.

When giving
a presentation, you can make a contact with the audience by asking them questions. Moreover, the answers they give
can become the content of the presentation. In one of the slides I have a title the same as the famous question on
Reddit '[What is so great about React.js](https://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/)'.
The answers, which I got from my audience, was written in a big textarea in the slide. It was visualised how everyone
made their impact into the introduction.

When it came to the list of React buzz words, we had not a solo talk but a proper discussion.

* ES2015 (ES6)
* React
* webpack
* Flux / Redux
* Relay & GraphQL

The words and the explanations were given to save the developers' time when they google in the coding section.

Then, most of the applications start with cloning the starter project. In the hackathon, the goal was not to give a fish
but to teach how to fish. In this regard, I provided the link to the starter kit search:
[andrewhfarmer.com/starter-project](http://andrewhfarmer.com/starter-project/).

However, we were limited in time, and as a shortcuti, I explained some ways to start in details.

The main goal was diving into React ecosystem. So, ideally, in the coding section everyone would write an application
with ES2015 (aka ES6), build it with webpack and use readux. In reality, it might look too complicated for
the React beginners. At the same time, they must not be excluded.

Assuming this, I first recommended the simplest React starter kit. Many did not realise that they can code React
applications by linking two scripts hosted at CDN. Similar to write-on-jQuery approach.

```js
<script src="https://fb.me/react-0.14.7.js"
    integrity="sha384-xQae1pUPdAKUe0u0KUTNt09zzdwheX4VSUsV8vatqM+t6X7rta01qOzessL808ox"
    crossorigin="anonymous"></script>
<script src="https://fb.me/react-dom-0.14.7.js"
    integrity="sha384-A1t0GCrR06cTHvMjaxeSE8XOiz6j7NvWdmxhN/9z748wEvJTVk13Rr8gMzTUnd8G"
    crossorigin="anonymous"></script>
```

With these two scripts and a single one local JavaScript file, you can follow [the official documentation](https://facebook.github.io/react/downloads.html)
and start your React application right away.

The other option suited for those, who are comfortable with builders but did not want to dedicate their time
for studying ES2015 and prefer plain JavaScript. When I started with React, I dived deeply into all the new
things. But I do remember that it took some time. Assuming this, 'ES5 + builder' solution is reasonable. For
this, I provided two links to the possible starter kits:

* [with webpack](https://github.com/petehunt/ReactHack)
* [with gulp](https://github.com/artyomtrityak/react-hackathon)

The last stubs 'ES2015 + webpack' type. I've given two:

* [Essential](https://github.com/pheuter/essential-react)
* [varya/react-stub](https://github.com/varya/react-stub)
  * ES2015, BEM, PostCSS, webpack

Although there was already a nice starter project called Essential, I also created my own and recommended it.
I keep it minimalistic. For example, there is no redux linking there. I think, that for a first project it is better
to start this way, then constantly bring complexity into.

Another reason of creating my own starter is was that I demonstrated different UI libraries linked and used
with the React project. Honestly, I don't yet see any ideal solution for the React UI library. This is the
part which ecosystem is missing. But such libraries are very helpful at the initial bootstrapping stage. Also,
it is good to be familiar with a few when the time comes to building UI for your own React project.

* [React ToolBox](http://react-toolbox.com/#/) -
  [react-stub@with-react-toolbox](https://github.com/varya/react-stub/tree/with-react-toolbox)
* [Material UI](http://www.material-ui.com/#/) -
  [react-stub@with-material-ui](https://github.com/varya/react-stub/tree/with-material-ui)
* [Belle](http://nikgraf.github.io/belle/#/?_k=xvldj2) -
  [react-stub@with-belle](https://github.com/varya/react-stub/tree/with-belle)

For showing how React project works with UI libraries, I prepared a branch for each option. These branches
are in the public GitHub repository and available for usage. Also, I was able to run the code on my computer
and demonstrate how the application changes after I alter the code.

The live coding section always makes a good impression. And it bridges the theory with actual coding.

Before we started with the applications, I also provided the dummy JSONs for the applications based on
third-party services data, such as Instagram and Twitter. This helped the developers keep focus on React rather
than studying APIs.

In our hackathon, we had React Native and Relay & GraphQL sections for the advanced React users. These presentations
were given by my colleague [Anssi Herranen](https://fi.linkedin.com/in/anssiherranen) and our quest [Mikhail
Novikov](https://fi.linkedin.com/in/freiksenet) from [Reindex](https://www.reindex.io/).

Then, the most important, coding, section started. At this step, you need to keep people focused on the programming
and take care of all the basic needs. SC5's Head of Technology [Lauri Svan](https://fi.linkedin.com/in/laurisvan)
helped with it. As a general idea, provide the developers with food and drinks. Having eaten, they manage to
stay longer and finish their studies.
