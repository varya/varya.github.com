---
title: METRO Design System
date: 2023-09-01
logo: ./images/logo.png
feat: true
description: >
  As Product Owner at METRO digital, I turned an invisible design system into a
  measured product. Nightly usage data and cost-savings dashboards justified
  growing the team from 2 people to 7, and unique imports rose by up to 35%
  every six months.
---

From July 2021 to September 2023 I was Product Owner of the design system at METRO digital, the technology arm of METRO AG, one of Europe's largest B2B wholesale groups. I co-owned the system with the Domain Design Lead and led the team that ran it.

## Situation

METRO digital builds the applications behind METRO's wholesale business: 20+ product teams, 20+ applications, millions of customers, 22 countries.

A design system was already there when I joined. Product teams had a React component library and design libraries in Sketch and Figma, and they were using them. The team behind it was one designer and one engineer.

What the company did not have was a picture of that use. The library was helpful, and almost no one outside the team could say how helpful. Some senior stakeholders did not know the system existed. There was no community around it, and no figure leadership could use when deciding whether to fund it.

## Task

I joined as Product Owner and as a domain coach for that two-person team. The role sat inside the product-design organisation. I reported to the Domain Design Lead, who reported to the VP of Product Design & Project Management, and I was the engineering voice in that line and a design system expert owning the know-how. I supervised the engineers and the designers on the design system team and owned the design system as a product.

Owning the design system as a product included: vision, roadmap, and day-to-day operations. In the organisation, the design system adoption was voluntary, so the system had to earn its place. I needed product teams to recognise it and use it, and I needed leadership to see a return clear enough to grow the team. I co-owned that plan with the Domain Design Lead. We challenged the why together and aligned on one roadmap.

## Action

### Make the value visible

The team and I built an internal tracker that scanned METRO's product repositories every night. By morning we could read the data in either direction: every application using a given component, and every component used by a given application. A change to Accordion came with the list of teams to warn. The app for delivery drivers came with the list of components it actually rendered.

On that data I designed cost-savings dashboards, open to the whole company and refreshed whenever someone opened them. Each product could see what the system cost to run and what that product saved by consuming shared UI.

The same data steered the roadmap. We ran OKRs against adoption — unique imports, installs, active users — and tracked DORA metrics for the team. When the Domain Design Lead and I disagreed on the next quarter — visual consistency or adoption tooling — we laid both proposals on the shared OKR: 35% adoption growth every six months. One proposal mapped onto it. That settled the call.

I also wrote a maturity model so we could judge the system on technical, organisational, and adoption dimensions, and see where the next quarter should go.

### Change in the organisation, and the conversation with leadership

The library was already in the products. The change was in the organisation around it: adoption was voluntary, the team's work was easy to miss, and some senior stakeholders did not know the system existed. Product designers and engineers had to meet the system, choose it, and sometimes contribute to it, so the shift spread through the people who used it. Upwards, the job was to make the design system a business entity the company would fund. With the Domain Design Lead I took the usage and cost numbers to C-level stakeholders. The calculation we opened with was deliberately simple: design and build a component once, or pay that cost again in every product, sometimes multiplied by the hourly rate of the people doing the work. That round figure was there to start the conversation. Leadership knows the business better than a design-system team does, and in those meetings they improved the formula with us. Where someone cared about time to market, we brought the raw adoption data and shaped the metric together, because a clean time-to-market number is hard to isolate. The OKRs carried the same conversation into everyday work: a public target for adoption growth, checked often enough that leadership could see the work was pointed the right way. That recognition is what turned into financing and into the larger team.

### Coach the team, then grow it

The team I joined was shipping solid components that the rest of the company rarely discussed. I brought in how other organisations run a design system as a product: measurement, contribution, and a case for the team's own existence. The work shifted from a ticket queue to the system around the library.

I then hired. I ran sourcing, interviews, and onboarding, and grew the team from one engineer and one designer to five engineers and two designers, distributed across three countries. The dashboards made that headcount legible before leadership approved it. Regular 1:1s, team syncs, and a yearly gathering held the group together across countries. We mapped how each of us preferred to communicate and to receive feedback, and used that map so the same message landed clearly for everyone.

With the larger team I set the operating model:

- **Hybrid governance.** The design system team kept the core. Product teams had a documented way to contribute, and a local extension layer — a design laboratory — that inherited global tokens and primitives. A pattern that proved itself had a path back into the core.
- **An open backlog.** The Jira board was visible to anyone in the company. A request that had to wait came with the queue in front of it.
- **Shared design and engineering practice.** Bi-weekly reviews of Figma and code side by side, a definition of done that required sign-off from both, and a token vocabulary we named together.
- **Written workflows** for how the team operated and how someone outside the team contributed.

Under launch pressure I kept the quality bar explicit. A product team needed eight components in six weeks. Hitting that date meant skipping accessibility testing and documentation. I proposed five components, fully tested, covering about 80% of the launch, and the other three in the following sprint. The stakeholders accepted it because the constraint and the path were both on the table.

The team also shipped a Web Components library, so products could adopt the system whatever frontend framework they used. I set the priority and the scope. The engineers built it.

### Build a community that kept going

Because adoption was voluntary, I treated it as a community to host.

- Monthly onboarding for engineers who had just joined, later part of formal engineering onboarding. It became [a recurring event on the company calendar](https://www.linkedin.com/feed/update/urn:li:activity:6896797119584329728/).
- Monthly library demos at design gatherings.
- Design System Cafe, an informal meetup for designers and developers with no fixed agenda. Concerns from product teams surfaced there early, while they were still easy to act on. The same format later became the public Casual Design System Breakfast.
- A contribution path modelled on inner source, so product engineers could change the system themselves.

I checked whether any of this depended on me promoting it. For one month I stopped pushing the onboarding session. Attendance held. The practice stayed on the calendar without the design system team dragging it there.

When product engineers said bug fixes were too slow, I interviewed them as users of the system. The interviews pointed at contribution friction: long review cycles, an unclear way in, and a heavy design sync. We invested in those. Ownership of the system spread into the product teams, and the research made the case to management.

## Result

- The team grew from 1 engineer and 1 designer to 5 engineers and 2 designers. Leadership approved the headcount on the cost and adoption dashboards.
- Unique imports from the design system libraries into product codebases rose by up to 35% every six months, through migration off legacy UI and fresh adoption.
- Developer satisfaction, measured in regular CSAT surveys of the people using the system, moved from moderate scores to above 80%.
- By the end, the team operated a multi-library ecosystem: React, Web Components, Sketch and Figma libraries, a Storybook for each code library, design tokens, and documentation on Zeroheight. It served 20+ product teams and 20+ applications, for millions of customers across 22 countries.
- The nightly tracker and the dashboards stayed in everyday use. The design system team could see who used what. Product managers could see the saving on their own product.
- I left when the freelance contract reached its two-year limit. I took part in hiring my replacement. The system was still running after I left.

I later distilled the measurement and stakeholder side of this work into [Design System: From Bookkeeping to Championing](https://varya.me/into-design-systems-2021/) at Into Design Systems 2021.
