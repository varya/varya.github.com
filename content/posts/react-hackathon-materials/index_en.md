---
title: Materials for your React hackathon

date: 2016-04-16
v2: true
cover: thumb.png

layout: post

meta:
  desc: >
    Hackathon is a perfect solution for getting hands on React quickly. These materials ease the
    hardship of preparations. Take it to deliver a whole day hackathon into your company.
---

<div data-excerpt>

Being a frontend developer these days means to learn the new things every day. We read articles and blog posts,
examine the changelogs, follow the Twitter announcements and participate in the GitHub discussions.
This helps to keep up.

However,
when it comes to something bigger, like the exploring of a new framework or an ecosystem, it is not enough.
The perfect solution is to organize a whole day hackathon for the developers in your company.
At SC5 online, we took this advantage mastering the React development. Few ecosystem components such as
webpack and redux came along.

</div>

The private companies have hard time to find an opportunity and organize such event.
Moreover, the preparations for the hackathon consume a lot of resources. To ease the hardship, I've decided to share
the materials that I prepared for our event. The hackathon plan and the detailed description of slides are given below.
hackathon. Below you can find the hackathon plan and the slides explained.

It is the presentation that I used for a pre-coding section:
[varya.me/reactjs-hackathon](http://varya.me/reactjs-hackathon/).

At the moment, the slides were hosted online, and before starting I provided a short link to them.
During the coding event, the developers need a bunch of online materials, including starting projects, documentation,
tips and tricks. The links to these meterials were inserted in my presentation, and it was important to let the others
check them out. Also, we had a special Slack channel where the links were shared one more time.

The next slide showed the plan of event to the participants:

1. About the event
1. Choosing the projects
1. Introduction to React
1. Stub projects
1. Linking UI libraries
1. React Native
1. Relay&GraphQL
1. Coding

The slides included everything listed besides the coding part, which was devoted directly to the development.
Altogether, the presentation took about 50 minutes. This amount of time ensured that I made all the needed
introductions. Also, it was not too long to make people bored.

On the next stage, I offered the applications that we could write using React during the event.

Here are the listed options:

- Instagram-like
- Twitter dashboard
- Shopping list
- [Bars on map](http://kipp.is/map)
- [2048](https://claudiopro.github.io/2048-react/)
- Tetris
- [Snake game](https://reake-react-snake.firebaseapp.com/)
- Your own idea

I believe that the product goals should be defined at the start. It is especially important for the React hackathon.
People start to think how they would code it in the way they are used to work. When it comes to React, they are
impressed by the elegance and easiness of the approach.

After that, I provided the links to the official documentation and tutorials. It is evident that even whole day event
is not sufficient to learn how to work with a new framework. However, it lets ignite an initial interest that can lead
to the following independet research. A link to an interesting tutorial can be the first step.

At the time of hackathon, some developers had a React experience, some have read the articles, and some at least heard
about the approach. The hackathon is not a 'teach-you-how' workshop but a collaborative and even team-building event.
This why I wanted all the people to be involved.

When giving
a presentation, you can make a contact with the audience by asking the questions. Moreover, you can add the given
answers into the presentation on-the-go. One of my slides had the same a title as the famous Reddit's question
'[What is so great about React.js](https://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/)'.
I wrote the answers from the audience into a big textarea in the slide. It visualised the contribution that everyone
made in the introduction.

When it came to the React buzz words, we had not a solo talk but a proper discussion.

- ES2015 (ES6)
- React
- webpack
- Flux / Redux
- Relay & GraphQL

To save the developers' time in the codung section, I gave the definitions and explanations in advance.
Also, the most of the applications usually start with cloning the starter project. In the hackathon, I aimed not to give
a fish but to teach how to fish. To do that, I provided the link to the starter kit search:
[andrewhfarmer.com/starter-project](http://andrewhfarmer.com/starter-project/).

However, we were limited in our time, so I explained some essentials and shortcuts for the efficient start.

The top priority of the hackathon was diving into React ecosystem. The ultimate goal was to write an application
using ES2015 (aka ES6), build it with webpack and use Readux. However, it might have been too complicated for the
React beginners, and I did not want to exclude them.

To ensure the inclusiveness, I recommended the simplest React starter kit. Many developers did not realise that they
can code React applications by linking two scripts hosted at CDN that is similar to write-on-jQuery approach.

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

The other option is suited for those who are comfortable with builders and don't want to dedicate their time
for sort out ES2015 and prefer plain JavaScript. When I've started with React, I dived deeply into the new
things. However it took some time, which is not availabe during the one day event.
So, 'ES5 + builder' solution is reasonable for the developers who want get their hands on React quickly.
To provide the different options, I gave the links to the other starter kits:

- [with webpack](https://github.com/petehunt/ReactHack)
- [with gulp](https://github.com/artyomtrityak/react-hackathon)

The last stubs 'ES2015 + webpack' type. I've given two:

- [Essential](https://github.com/pheuter/essential-react)
- [varya/react-stub](https://github.com/varya/react-stub)
  - ES2015, BEM, PostCSS, webpack

Despite the existence of a good starter project Essential, I've created my own and recommended it.
I keep it minimalistic, so there is no redux linking there. I believe that the first project is better without
exessive complexity.

One more reason to create my starter kit was to demonstrate the different UI libraries linked and used
within the React project. Honestly, I don't see any ideal solution for the React UI library yet.
The ecosystem misses a crucial part, but the existing libraries can help at the initial bootstrapping stage.
Moreover, it provides a knowledge to use when it comes to building your own UI library for the React projects.

- [React ToolBox](http://react-toolbox.com/#/) -
  [react-stub@with-react-toolbox](https://github.com/varya/react-stub/tree/with-react-toolbox)
- [Material UI](http://www.material-ui.com/#/) -
  [react-stub@with-material-ui](https://github.com/varya/react-stub/tree/with-material-ui)
- [Belle](http://nikgraf.github.io/belle/#/?_k=xvldj2) -
  [react-stub@with-belle](https://github.com/varya/react-stub/tree/with-belle)

To demonstrate how React works with UI libraries, I prepared a branch for each option. These branches
are in the public GitHub repository and available for using. Also, I was able to run the code on my computer
and show how the application changes after I alter the code.

Live coding section always makes a good impression. Moreover, it connects the theory with actual coding.

Before the development, I provided the dummy JSONs for the applications based on the
third-party services data (Instagram or Twitter). That helped the developers to be focused on React rather
than exploring APIs.

During the hackathon, we had React Native and Relay & GraphQL sections for the advanced React users. These topics
were covered by my colleague [Anssi Herranen](https://fi.linkedin.com/in/anssiherranen) and our quest [Mikhail
Novikov](https://fi.linkedin.com/in/freiksenet) from [Reindex](https://www.reindex.io/).

After all the presentations, it was time to code. It is important that the hackathon organizers take care of the
developers' basic needs and let the people be focused on the programming. I'm thankful for our Head of Technology
[Lauri Svan](https://fi.linkedin.com/in/laurisvan) for ordering pizza and drinks, and organizing the people.
The developers can stay active much longer if they are taken care.

As a result of our hackathon, some developers came up with the applications and demostrated them in the demo part.
The others got stable base to continues their studies later. And no doubt we all had huge fun.

Feel free to take my presentation and materials for a hackathon in your company or at the community meeting. React
rocks! :-)
