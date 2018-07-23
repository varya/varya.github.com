---
title: Pattern Journey
subTitle: A process of maintaining and extending design systems
---

Design System artifacts wether it is a library of components, UI kit in Sketch, description of UI tokens or pieces of
documentation for the visual language are maintained and developed similarly to regular products. However, usually there
is a difference. Bridging the gap between disciplines and between the teams across the organization, a Design System
requires their mutual involvement and contribution into its extending and growth. To make this the most sucessful,
Design System needs transparent processes and tools communicating these processes to all the people involved.

A research made at a the real projects I am a part of, revealed that the lack of information is the most painful point for the
usual Design System users. Even well-documented Design Systems face this problem. Often a potential design-system
contributor do not have focus on Design Systems as a concept and sometimes even experience in maintaining the libraries.
At the same time, these representatives of the projects using Design Systems are the most important people to be
involved. Developing the actual projects, they have the most knowledge about business needs of the company applications
and are much more connected to the users than abstract design-system developers. Making these people smoothly contribute
into the Design System ensures its coverage, actuality and instant expanding as well as saves the resources. This can be
achieved with a very detailed guidance not only for technical or design aspects of the Design System but also for its
processes.

To start contribution, it is crusial to have clear vision what to do in specific situations and have a support for
making decisions. This aspect is being actively discussed in the community and some offer their solutions, for example
Brad Frost presents a decision tree:

![](./pattern-addition-flowchart.png)<br/>
Source: "Maintaining Design Systems" http://atomicdesign.bradfrost.com/chapter-5/

Below, I offer an altered version in a form an interactive component. This is a visual illustration of what happens to a patten
on its way from dentifying to actual implementation and how different the path might be depending on situation. This
process is called **Pattern Journey**.

<comp-pattern-journey></comp-pattern-journey>

Th scheme shows possible paths from identifying the need in a pattern to implementing it. Answers to the displayed questions help to
choose the right way. Note that **you can click on the questions** to get additional guidance on how to get the answer.
For a specific project, the instructions can be more detailed and contain links to communication channels, pages of
documentation, repositories, Abstract spaces or Dropbox.

In the video, you can see how it works.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kKnTN3EswnU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Examples of paths through Pattern Journey

The patterns make different journey if it is a completely new UI element, changing or expending the existing one or
migrating from a project to the library. Let me show you some (but not all situations). In each of them, a potential
contributor starts from the top of the scheme and goes further navigated with the questions and answers to them. The
additional text is what they see in the popup when they are wondering how they should find an answer to the questions.

### Implementing a new component

![](./pattern-journey__pattern-library--implement-new.png)

Takes steps are:

#### 1. Is the pattern in the library?

You can search for patterns at the <i>Design System / Pattern Libarary website</i>.
Figure out what could be a name or a keyword for the pattern you are looking for, and use if in the website search.

If you don't find anything suitable, you can also ask other people in the
<i>instant communication channels</i> like Slack / Flowdock / Mattermost etc.

Answer: *No. There is no pattern in the library.*

#### 2. Anything similar at other projects?

Ask around if people at other projects implement anything similar. You can instantly ask in the
instant communication channels (Slack, Flowdock, etc)
or raise this quesion in regular Design or Develoment meetings. Also, you can ask people directly.

Answer: *No. I could not find anything similar.*

#### 3. Can it be used by other projects in the future?

Is there future need for such component at other projects? Discuss this with the other teams, and
do this publically in the
communication channels (Slack, Flowdock, etc).
You can also ask people directly or raise this question at regular cross-company Design or Development meetings.

Answer: *Yes. There are at least two more teams interested in the pattern.*

#### 4. Implement the pattern

It seems that you need to add this pattern into the
Design System / Pattern Library.
To start with process, usually you need to create a ticket in the task tracker system
(JIRA, Trello, etc) and/or communicate about what you are going to do directly to the people.
Follow the workflow for implementing new patterns which usually includes task flow, communication standards and code style.

*Wait for release*

#### 5. Use it

Your desired pattern is already a part of the Design System / Pattern Library. Check the
<i>Design System / Pattern Library website</i>
for its documentation.
Use the component as it is documented. If you have question, do not hesitate to ask in the
instant communication channels (Slack, Flowdock, etc).
The suggestions and pull requests for the documentation improvement are very welcome.

### Taking the pattern from another project

![](./pattern-journey__pattern-library--from-other-project.png)

#### 1. Is the pattern in the library?

Answer: *No. There is no pattern in the library.*

#### 2. Anything similar at other projects?

Answer: *Yes. The is similar pattern at other project.*

#### 3. Can you take it as it is?

Can you borrow the code of this component and use it without any change? So that both you and the "donor" project would
be using the same code?

Answer: *No. It is similar to what I need but I have to alter it.*

#### 4. Do other teams ready to use new altered version?

If you change the existing component so that it meets your requirements,
are the current users of it able to use the altered version?
Ask them directly or raise this question publically. As usual,
you can communicate in the
communication channels (Slack, Flowdock, etc).

Answer: *Yes. They are happy with my changes.*

#### 5. Implement the pattern

*Wait for release*

#### 6. Use it

### Fix existing pattern

![](./pattern-journey__pattern-library--fix-pattern.png)

#### 1. Is the pattern in the library?

Answer: *Yes. I found its documenttaion and examples.*

#### 2. Does it fulfill all the requirements?

Study the pattern documentation at the
<i>Design System / Pattern Library website</i>
and all the examples provided. This way, you can understand if the pattern is suitable
for your specific task.

If there is no example covering your case, but you suppose that it is still possible
without changing its code, play around with example HTML. For confirmation, ask in the
people in communication channels (Slack, Flowdock, etc)
if the pattern examples can be extended with your case. If they can, it would be nice if you
make a pull request illustrating your specific usage.

Answer: *No. It is close what I need but I need extended functionality.*

#### 3. Can it be changed to suit your new requirements while still  fitting existing requirements?

Figure out the requirements for the existing component based on the documentation and examples. If you have doubts, ask in the
instant communication channels (Slack, Flowdock, etc), at regular meetings
or in person.

Does it look that you can provide changes and the component will not be broken in the places it is used now?

Answer: *Yes. I can provide changes, and nothing will be broken.*

#### 4. Implement the pattern

*Wait for release*

## Usage

This decision helper is meant to be a part of a Design System documentation. Beign a React component it can be easily
altered due to the needs of a specific company or product. Similarly, it can be constantly updated while the processes
in the Design System are changed and shapen.
