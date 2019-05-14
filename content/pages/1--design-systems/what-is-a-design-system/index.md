---
title: What is a design system?
subTitle: And why it is more than just a library or a style guide

cover: thumb.png

meta:
  desc: >
    The concept of design systems is much wider than how it is often understood. Design systems are shared practices -
    so they mean components and patterns; design systems are shared tools - so they mean automations and optimizations;
    design systems are processes - so they are in the management domain; and design systems are people - so they are
    about the community and collaboration.

---

Let's start with a story.

<i>

Recently, I was talking about design systems infrastructure at awesome React Finland conference. The day before the
conference, there was a traditional dinner for speakers. I like this tradition, it makes possible for us speakers to
know each other and the conference organizers so that the next days we work as a team to provide the very best event. As
usual, we were asking each other what the talks are about. When it was my turn, I started to explain that my talk is
going to be about building infrastructure for a design system and particularly a design system website. One person
interrupted me with a question "A style guide?". And that is the key issue. Many people think that **design systems**
are
equal to **style guides**. But it is much more, it must be much more. On this page, I show what is a design system from
different perspectives: design, development, project and even business.

</i>

![](thumb.png)


## What is a design system for me?

We can have a look at who are the actual or potential users of a design system, and what are their professional needs in
this context.

<comp-project-roles role="developer" side="left"></comp-project-roles>[
Design systems often understood as libraries of components. In this regard, with developers who are seeing the system
mostly from this perspective. Developers would like to have documentaion for every component, examples of usage and
maybe explanation of the implementation details. Apart from that, they would need information related to the whole
system. Such as release notes, instructions for linking the library to the project, etc. For contribution, they need to
know what is the library code style and contribution policy. To give feedback, they need the contact information of the
library team and/or access to a relevant board or chat.
]{.clearfix}

<comp-project-roles role="designer" side="right"></comp-project-roles>[
Designers also need documentation for every pattern, especially the reasons behind them. Other design-related
documentation such as color palette, spacing examples, tone of voice, and many more helps them to create new patterns
which are coherent with the rest of the system. They also need information about how to collaborate with other fellow
designers and what are the tools to use for that. Designers are interested in seeing their creations alive, thus they
need to know how the process goes further on the development and later stages.
]{.clearfix}

<comp-project-roles role="owner" side="left"></comp-project-roles> [
Project managers or owners need to have a basic representation of the design system since this is what is used for the
interface of their product. They are also interested in release notes as in something that has been implemented. But
also they need to know the design system's nearest future or, in particular, what new components are going to be
released and what are the upcoming changes to the existing ones. For that, managers need to see the design system's
roadmap and learn its strategy as well as be able to discuss this with the relevant people.
]{.clearfix}

<comp-project-roles role="business" side="right"></comp-project-roles> [
On the business levels of the company, especially if speaking about mid-size or large companies, a design system is seen
as an internal product and a tool. People of this specialization need to have a larger scale picture of the system.
Also, they must be especially interested into design system's meta information such as what is its impact, how it helps
in-team and cross-team collaboration and maybe even the numbers of how much the company earns and saves thanks to the
design system.
]{.clearfix}

## Design system — what is behind?

Design systems are yet evolving concept, our understanding of it is changing. But for sure a design system must serve the
needs of all the people involved in product creation and managing the company. This brings to the conclusion **a design
system is not equal to a library of components or to a style guide, it is something bigger**. From my experience, a
functioning and living design system means the following.

#### Shared practices
<comp-ds-aspects aspect="shared-practices" side="left"></comp-ds-aspects>[
Design system provides and documents shared practices, based on which you design your product or a bunch of products under
the same brand. A library of components and style guide as their documentation are such shared practices. However,
shared practices are not limited to them but also include more abstract or more design related things such as visual
language or tone of voice. Or on the contrary, they can be deeply technical and reflect your approach to code (aka code
style).
]{.clearfix}

#### Tools
<comp-ds-aspects aspect="tools" side="left"></comp-ds-aspects>[
This brings us to the tools which our company could have for all the developers and designers to share. This means
professional software to use and its plugins, scripts for processing and optimizing visuals and code, development and
design environment, etc.
]{.clearfix}

#### Processes
<comp-ds-aspects aspect="processes" side="left"></comp-ds-aspects>[
At the next level, design systems would mean the processes which are followed in the company to achieve the outlined
goals. Often spoken that design systems bridge the gap between specializations. This means that the design system should
establish the processes in a team or even on a company level.
]{.clearfix}

#### Community
<comp-ds-aspects aspect="community" side="left"></comp-ds-aspects>[
The processes bring us to those for whom they are created, or to the people. As mentioned above, design systems bridge
the gap between specializations and are meant to help the working collective as a whole. In this regard, having a design
system implies constant work with our fellow developers, designers and project owners as with a community.
]{.clearfix}

## Way to go

A comprehensive design system would have all the aspects listed above; not only a style guide or a library but
documentation and helpful tools for all the practices to follow, outlined and tuned processes for achieving the goals and
to smoothen the routines as well as own community-related documentations, instruments, and actions.

Creating and maintaining the design system is not limited to making visual designs and coding but does include service
design, project and community management. Moreover, being tightly connected to brand and business of the company, the
methods of running the design system have to be tailored for specific organization and teams. These are the topics for
many more articles and discussions (yet published [Maintaining design systems with proper user
research](https://medium.com/elisa-design/maintaining-design-systems-with-user-research-3ba5feafc336) and presented
[Building design systems that leverage your designers, developers, and
products](http://varya.me/design-systems-thinking/)).

<i>

Coming back to the story in very beginning, my talk was about documenting all the listed aspects at a company design
system website and  organizing the processes for its constant evolving: [slides](https://varya.me/react-finland-2019/),
[video](https://youtu.be/gDkUpx0dVc0?t=9993).

</i>

![](./ds-infrastructure.png)

##### Credits

<div class="small png--transparent" markdown="1">

This article is using icons made by [Freepik](https://www.freepik.com/) and
[Eucalyp](https://creativemarket.com/eucalyp) from [www.flaticon.com](https://www.flaticon.com/).
They are licensed by
[CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

</div>
