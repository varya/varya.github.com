---

title: Checking your JIRA hypothesis

date: 2020-02-04
cover: thumb.jpg

layout: post

meta:
  desc: >
    With JIRA, you can make a custom set up for your project or board. But that requires admin
    rights which you may not have. Before you ask an administrator for the needed changes, you
    can try how it is going to be with the new settings. Prefixing the components may help you
    and your team model the situation and try out the new approach.

---

It may happen that default JIRA project settings or board does not fully respond the needs of your project, similarly to how it was for the project I am currently working at. Our team once realised that we would benefit from custom issue types which we use for filtering and organising our Kanban board. However, "realised" is maybe not 100% suitable word since initially that was more kind of *hypothesis* which we could prove or not. Simply speaking, we must try before we know.

<excerpt/>

<div class="small" markdown="1">

![](thumb.jpg)<br/>
Image source:
[https://www.freepik.com/free-photos-vectors/business](https://www.freepik.com/free-photos-vectors/business)

</div>

JIRA is a very much customisable tool and introdusing suitable issue types should not be any problem. However, the is always a "but". Often happens, especially in large organizations, that project managers do not have necessary admin rights to change such settings but they need to make a request to those who have, say IT support or even special JIRA administrators. In this case, it is better to be sure when asking for changes. This was exactly our case. So, we should have somehow prototype the settings we want, try them out and decide if we want to request them.

The case I am describing needed custom issue types, filters based on those types and a Kanban board with swimlanes filtered by the types. The prototyping meant that the filters and swimlanes would be done by some other properties but assiming that they are future-to-be issue types. Usually, project managers and often other team members have no restrictions to managing the project JIRA components and adding new ones. This was out case as well.

So, the way out would be to use components instead of issue types, try out the hypothesis and then decide. But as components were already in use for representing ... actual components, this could have made a mess. Unless there is a way to separate components from *components*. And this can be done in conventional mode by using prefixes.

Initially, the components we had were as the following:

* Header
* Footer
* Form elements

We kept them but renamed given them a prefix `§`:

* § Header
* § Footer
* § Form elements

Future-to-be issue types were also implemented as issue components but with a different prefix:

* \# Research
* \# Development
* \# Education

Voilà! Good enough for marking all the issues accrodingly, making filters and board(s) and trying out for a sprint or two. As the components can be changed any time, their final list can also be formed while experiment goes. After a while, we had *certain request* about the needed issue types for our JIRA administrators. And we were *fully certain* that we are asking about something we were going to use for a long time.

PS: Lately, we continued use such prefixes for groupping our components. But that's different story.
