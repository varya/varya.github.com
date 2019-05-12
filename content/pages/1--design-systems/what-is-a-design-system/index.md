---
title: What is a design system?
subTitle: A process of maintaining and extending design systems

cover: thumb.png

meta:
  desc: >
    Description
---

Let's start with a story.

<i>

Recently, I was talking about design systems infrastructure at awespme React Finland conference. The day before the
conference, there was a traditional dinner for speakers. I like this tradition, it makes possible for us speakers to
know each other and the conference organizers so that the next days we work as a team to provide very best event. As
usual, we were asking each other what the talks are about. When it was my turn, I started to explain that my talk is
going to be about building infrastructure for a design system and particularly a design system website. One person
interrupted me with a question "A style guide?". And that is the key issue. Many people think that **design system** is
equal to **style guide**. But it is much more, it must be much more. On this page, I show what is a design system from
different perspectives: design, development, project and even business.

</i>

![](thumb.png)


## What is a design system for me?

We can have a look on who are the actual or potential users of a design system, and what are their professional needs in
this context.

<comp-project-roles role="developer" side="left"></comp-project-roles>[
Design systems often understood as libraries of components. In this regard, with developers who are seeing the system
mostly from this perspective. Developers would like to have documenttaion for every component, examples of usage and
maybe explanation of the implementation details. Apart from that, they would need infromation related to the whole
system. Such as release notes, instructions for linking the library to the project, etc. For contribution, they need to
know what is the library code style and contribution policy. To give feedback, they need contact information of the
library team and/or access to a relevant board or chat.
]{.clearfix}

<comp-project-roles role="designer" side="right"></comp-project-roles>[
Designers also need documentation for every pattern, especially the reasons behind them. Other design-related
documentation such as color palette, spacing examples, tone of voice, and many more helps them to create new patterns
which are coherent with the rest of the system. They also need information about how to collaborate with other fellow
designers and what are the tools to use for that. Designers are interested into seeing their creations alive, thus they
need to know how the process goes further on the development and later stages.
]{.clearfix}

<comp-project-roles role="owner" side="left"></comp-project-roles> [
Project managers or owners need to have basic representation of the design system since this is what is used for the
interface of their product. They are also interested in release notes as in something what has been implemented. But
also they need to know the design system's nearest future or, in particular, what new components are going to be
released and what are the upcoming changes to the existing ones. For that, managers need to see the design system's
roadmap and learn its strategy as well as be able to discuss this with the relevant people.
]{.clearfix}

<comp-project-roles role="business" side="right"></comp-project-roles> [
On the business levels of the company, espacially if speaking about mid-size or large companies, a design system is seen
as an internal product and a tool. People of this scpecialization need to have a larger scale picture about the system.
Also, they must be especially interested into design system's meta infromation such as what is its impact, how it helps
in-team and cross-team collaboration and maybe even the numbers of how much the company earns and saves thanks to the
design system.
]{.clearfix}

## Design system — what is behind?

Design systems is yet evolving concept, our undestanding of it is changing. But for sure a design system must serve the
needs of all the people involved into product creation and managing the company. This brings to the conclusion **a design
system is not equal to a library of components or to a style guide, it is something bigger**. From my experience, a
functioning and living design system means the following.

#### Shared practices
<comp-bw-icon path="icons/web-design/i042-solution.svg" side="left"></comp-bw-icon> [
Shared practises, based on which you design your product or bunch of products under the same brand. Components go
  here, but this is not only about them. The practises can be more abstract or more design related such as visual
  language or tone of voice. Or on the contrary, they can be deeply technical and reflect your approach to code.
]{.clearfix}

#### Tools
<comp-bw-icon path="icons/web-design/i029-settings.svg" side="right"></comp-bw-icon> [
This brings us to tools which our company could have for all the developers and designers to share. As we are speaking
about design systems as a way of standartizing, they fit there.
]{.clearfix}

#### Processes
<comp-bw-icon path="icons/user-experience/i040-algorithm.svg" side="left"></comp-bw-icon> [
At some level, design systems would mean the processes which are followed in the company to achieve the outlined
  goals.
]{.clearfix}

#### Community
<comp-bw-icon path="icons/web-design/i039-sharing.svg" side="right"></comp-bw-icon> [
Finally, working with our fellow developers, designers and project owners as with a community also resonates with
design system goals.
]{.clearfix}

Even though the components were only mentioned in the beginning, we can apply technologies to all of these aspects of
design systems.
In this presentation I will share some ideas how we can use React and its ecosystem to help design systems on all the
levels.
