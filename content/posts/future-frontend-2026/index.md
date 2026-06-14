---
title: Notes from the last Future Frontend (2026)

date: 2026-06-15
cover: dipoli.jpg

meta:
  desc: >
    Notes from the final Future Frontend 2026 in Espoo: design systems becoming agent-facing schemas, trust as the architecture question, agency as daily practice, and endings done with craft.

---

<div data-excerpt>

I have been around this conference since it was [React Finland](https://react-finland.fi/) in 2018. I attended the first edition, came back as a speaker in 2019 with [_A practical guide to building your design system infrastructure_](https://youtu.be/gDkUpx0dVc0?t=9987), and ran [workshops in 2022](https://medium.com/react-finland/design-systems-with-andrey-and-varya-bc8ae922cab0) with [Andrey Okonetchnikov](https://okonet.ru/) on design system ROI and governance. The conference then changed its name to [Future Frontend](https://futurefrontend.com/), reflecting how much the frontend world had outgrown a single library.

</div>

This year was [the last edition in the current format](https://survivejs.com/blog/future-frontend-interview/). Juho Vepsäläinen, the organiser, was open about it: geopolitical shifts, the energy a small local conference asks for, and the fact that the world is genuinely changing. Maybe 2027 brings something new in lighter form. Or not.

Four threads ran through the two days. **Design systems become schemas**: the component library is the surface agents render against. **Trust is the architecture question**: where you put it, how you verify it. **Agency is a daily practice**: in a platform changing this fast, small decisions are where shape gets made. **Endings deserve craft**, this conference included. Here are the notes that got me there.

So, two days at [Dipoli](https://www.meetabit.com/events/future-frontend-2026-conference) in Espoo, on June 8 and 9, 2026. I missed a few sessions: some were too early in the morning, and a couple of slots collided with work meetings. For those I add what I found later from the speakers' own materials.

## Day 1: Design

### Designing futures (missed)

The day opened with two talks I did not catch. [Pasi Sillanpää](https://www.linkedin.com/in/pasi-sillanp%C3%A4%C3%A4-1592b75/) gave _We Don't Have an Idea Problem. We Have a Permission Problem._ From his writing, the core seems to be that organisations rarely run out of ideas; they run out of permission to act on them. The bottleneck is structural, not creative. It matches a pattern I have seen in design systems work: teams know what to fix, they just cannot get a slot to fix it.

[Joe Macleod](https://www.andend.co/) followed with _Endineering_, based on his [book of the same name](https://www.andend.co/endineeringbook). His thesis is that products and services are designed to start well and end badly: the hoarding, the unread emails, the unsubscribed accounts, the landfill. He calls for the same craft we put into onboarding to go into off-boarding. It is a useful frame right now, when AI is multiplying outputs everywhere. We are good at starting things, including conversations with agents. Few people think about how they end.

### Future of work

[Laura Snellman-Junna](https://fi.linkedin.com/in/lsnellma) gave _Not Loud, Still Powerful: Taking Agency Without Becoming Someone Else_. Her thesis: this revolution is technology-driven, not money- or government-driven, which means software engineers shape the future through their daily decisions. Agency, in her framing, is influence used on purpose. It grows in a loop: use your skills, collect evidence of impact, strengthen the belief that you can act, repeat. The common failure mode is that engineers underestimate their own influence while easily seeing others'.

[Anastasiia Zvenigorodskaia](https://sessionize.com/zvenigorodskaia/) presented _Designing Leadership Growth in Tech Teams (When Developers Just Want to Code)_. The piece I took away: her skills assessment matrix. List every team member against the skills the company actually needs, have multiple managers score independently, average. The goal is not to find the stars; it is to shift the whole average to the right. She also argued for trust over performance when picking leads, because reliability is character and productivity is trainable.

There is a connection to design systems here. A design system is a leadership problem: who decides, who has permission to break the rules, who carries the cost of consistency. Anastasiia's matrix is the kind of tool I would steal for design system maturity assessments.

### Resilience

[Darío Gutiérrez Mori](https://permacomputing.net/) gave _This is not the tech I signed up for!_, an introduction to [permacomputing](https://permacomputing.net/). Permacomputing borrows from permaculture: care for the hardware you have, observe before adding more, embrace not-doing as a valid solution. He named the hyper-productivity cycle directly: same salary, more output, more features, more AI-driven acceleration. He cited [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox) (cheaper resources get used more, not less) and [Wirth's law](https://en.wikipedia.org/wiki/Wirth%27s_law) (software gets slower as hardware gets faster). His own experiment: switching back to a 2008 phone with only SMS and calls.

None of us in the room are about to ditch our laptops. The talk still made the cost of "more" visible. For AI work specifically, every prompt has a footprint. Every generated component has a maintenance tail. The permacomputing question, applied to a design system, is: how many components does this system actually need to maintain? Probably fewer than it has.

[Georgios Diamantopoulos](https://x.com/georgiosd) gave _Building Resilience: Sustain the Maker_, treating the developer's body the same way we treat production systems. Per Diamantopoulos, arteries lose 2-4% elasticity after three hours of sitting; 4,500 genes shift expression after three days of heavy sitting; 73% of nine-year-olds already have bulging discs. (I have not verified the specific numbers, but the direction matches what I have read elsewhere.) We monitor servers constantly and ignore our own warning signals. His framing is that bone, muscle, and cardio show anti-fragility, like chaos engineering: controlled stress makes them stronger. The payoff for building capacity is highest now and shrinks the longer you wait.

This was the talk that made the room quietest.

### Accessibility

[Daniel Yuschick](https://danyuschick.com/) gave _Accessibility Adventures: The Lost Secrets of Forced Colors Mode_. Forced colors mode is the Windows accessibility feature that overrides website colors with user-defined themes. About 4% of Windows machines use some form of it. It is the rare accessibility feature that is forced on the product rather than opted into, which means it surfaces a lot of broken styling: invisible buttons, lost focus outlines, white-on-white logos. His practical advice: use transparent borders so the mode can override them, lean on the new [system color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) (`button-face`, `canvas-text`), and never rely on color alone.

For design systems, this work rarely makes the roadmap and regularly shows up in support tickets. Worth adding to the token audit.

[Ramona Schwering](https://ramona.codes/) gave _The Cake Is a Lie... And So Is Your Login's Accessibility_, focused on authentication flows. Her core point: accessibility is a spectrum and we are all temporarily on different parts of it. Eye drops, a child on your hip, a loud room. The [European Accessibility Act](https://ec.europa.eu/social/main.jsp?catId=1202) is now a year old and AA compliance is no longer optional in many contexts. Her concrete asks: never disable copy-paste (it breaks password managers), provide passkey and magic-link alternatives, extend OTP time limits, always pair QR codes with a text alternative. Her error message advice stuck with me: tell the user what to do next, balance helpful detail against giving an attacker too much.

[Tejas Kumar](https://tej.as/) closed the day with _Frontend after AI: The new UX_. The argument is that taste is now the differentiator, because anyone can build anything. He pulled the definition of taste from research: a trainable skill for tacitly judging quality against external standards. Not innate, not internal preference. Developed through immersion and corrective feedback. His example: a junior sees a button as blue; an experienced designer sees placement, fold visibility, network impact.

The second half was a live demo of [Model Context Protocol](https://modelcontextprotocol.io/) and what Anthropic now calls [MCP Apps](https://modelcontextprotocol.io/specification/draft) (apps as embeddable UI inside AI clients). He showed the conference data rendered as branded cards inside the agent, next to the soulless plain-text ChatGPT version. The contrast was the point. He is right that the current web is hostile (cookie banners, sign-in walls, compliance over user need) and that the agentic shift is a real chance to fix it. I do not yet know how a design system survives this shift without becoming a structured schema that an agent can render against.

## Day 2: Development

### Simplicity

[Una Kravets](https://una.im/) and [Juho Vepsäläinen](https://survivejs.com/) shared the simplicity session. Una covered modern UI patterns and the cross-browser work Chrome does with Firefox and Safari engineers (the [Interop 2026](https://web.dev/blog/interop-2026) program), reframing modern CSS as actually-standards rather than Chrome-only. Juho made the case for [hypermedia](https://hypermedia.systems/) as a credible replacement for framework-heavy approaches in many use cases. Their panel landed on something I keep thinking about: more apps than ever, but downloads are not growing proportionally. The value is moving from syntax to architecture and design decisions. Code generation is getting cheaper, so higher-level decisions matter more.

### Architecture

[Matthew Mamonov](https://futurefrontend.com/speakers/) gave _Bringing a bit of architecture in your frontend application_, a clean-architecture refactor of a Vue map application. The demonstration was practical: he swapped the geocoding backend (Photon to Nominatim), the map library (MapLibre to OpenLayers), and the UI framework itself (Vue to Svelte), with the core business logic untouched. His "swappability test" is the cleanest articulation I have seen of when separation of concerns is actually working: if you cannot swap a dependency without rewriting the core, your layers are not separated.

The framing I took: web developers are not exempt from software architecture. We have been pretending otherwise. The cost compounds.

[Rashmi Suralkar](https://futurefrontend.com/speakers/) gave _AI-first frontend architecture_. The core shift she described is from static deterministic UIs to generative interfaces that adapt to user intent. Schema-driven generation, where the AI selects from an approved component library, prevents hallucinated components and keeps design consistency. Her live demo showed a fashion app responding to "evening dresses" with curated results plus size recommendations, and "what to pack for Finland" pulling in real weather data.

This was the talk most directly about design systems and AI together, and it confirmed something I have been writing about: the design system becomes the schema. The component library is the safe surface the AI is allowed to assemble from. The work is no longer "build a component"; it is "make this component legible enough for an agent to choose it correctly." She also mentioned the [Universal Commerce Protocol](https://ucp.dev/) that Google announced with Shopify and others, and the [Agent Payments Protocol (AP2)](https://agentpaymentsprotocol.org/). Worth tracking.

### Agentic development

[Ohans Emmanuel](https://www.ohansemmanuel.com/) gave _The AI Velocity Trap: Shipping Faster Without Breaking More_. His framing of the velocity problem: AI accelerates the build phase, but code review, QA, and monitoring do not scale at the same rate. Deploy and infrastructure scale with money. Human review does not.

He pulled out two principles. First: intent as a first-class citizen. What you want to build, plus how you will know it has been accomplished, captured early and referenceable at every stage. A wrong line in a plan produces hundreds of wrong lines in code, so reviewing the plan is more leveraged than reviewing the PR. Intent storage needs to be accessible to agents (Jira, Linear), not local markdown that background agents cannot reach. Second: zero-trust harnesses across the lifecycle. Don't trust agents blindly. Every stage verifies against the original intent, not just the diff. Code review agents check intent, not just code. QA agents drive a real preview URL. Monitoring agents spin up on merge and watch production for a window, correlating anomalies back to the intent of the merged PR.

For me this was the most important talk of the conference. It names the problem directly: shipping faster is not shipping better unless the verification layer keeps up. And the verification layer is itself an agent system. That work has barely started.

[Christoffer Niska](https://niska.dev/) closed the agentic development block with _Building My Own Coding Agent_, walking through [Acolyte](https://github.com/cniska/acolyte). He started with three weeks of vibe coding (mostly with Codex), producing 18,000 lines of code, 60% rewritten by the agent. Then he removed almost everything: modes (exploration, plan, build, verification), guards (hard rules blocking the model), evaluators (regenerating outputs that did not meet a bar). All three came from not trusting the model. Capable models self-correct. Less code, fewer bugs.

His soul prompt for the agent is one line: _"I prefer evidence over assumption, action over deliberation, and working code over discussion."_ That is a design statement.

The thread between Ohans and Christoffer: trust is the design decision. Ohans builds zero-trust harnesses to verify intent. Christoffer removes guards because guards assume failure. Ohans is about the system's view of the agent's output. Christoffer is about the agent's view of itself. Both end up at "design for the actual model you have, not the worst-case one."

### Agentic use cases (missed)

The last session ran into work meetings. [Alex Booker](https://github.com/bookercodes) and [Tony Kovanen](https://www.linkedin.com/in/tony-kovanen-36991a74/) (a Next.js co-creator) presented _Agents at the Application Layer_, drawing on their work at [Mastra](https://mastra.ai/), a TypeScript framework for building production AI agents. Their workshop series on [agent harnesses](https://mastra.ai/workshops/) is worth reading.

[Rachel-Lee Nabors](https://nearestnabors.com/) gave _The Headless Web_. Reading her [recent slides](https://www.slideshare.net/slideshow/the-death-of-the-browser-rachel-lee-nabors-agentql/277168377) and writing, the argument is that the browser is becoming a runtime for agents rather than just for humans. [WebMCP](https://developer.chrome.com/docs/ai/webmcp), the W3C draft Chrome shipped earlier this year, lets websites expose structured tools to AI agents directly, with [claimed 89% token savings](https://hyperframeresearch.com/2026/05/29/googles-webmcp-bet-exposes-the-browsers-agentic-ai-problem/) over screenshot-based automation. About 12% of enterprise sites are adopting it, e-commerce moving fastest at 41%. It is the same shift Tejas and Rashmi were pointing at, from the platform side.

## What I took home

**🤖 Design systems become schemas**

The component library is no longer just a humans-browse-it product. It is also the surface agents render against. Rashmi showed it from the application layer. Tejas showed it from the agent client. Rachel-Lee, from the platform.

So if AI ships interfaces and our future is generated UIs, where does design actually go? The mission does not disappear. It moves.

The old job was: design every screen. The new job is: design the system that designs every screen well. That sounds abstract until you list what it actually means.

- **Component intents, not just appearances.** A button is not "blue, 16px, 8px radius." It is "the primary action a user takes when they have decided." That intent is what an agent picks against. Without it, the agent guesses, and the average quality of the product drops to the floor of the model.
- **Allowed contexts and anti-patterns, written down.** "Use this card on a list of items, not on a single result page. Never combine with a modal." This currently lives in the head of the senior designer. It has to live in the schema.
- **Constraint tokens, not just style tokens.** Tone, motion, voice, density. The narrow band of brand the agent must stay inside across infinitely many compositions. Style tokens used to be the whole brand expression. They are the easy part now.
- **Canonical examples, curated as a dataset.** Tejas defined taste as trained judgment, formed by immersion in good and bad examples with corrective feedback. That training set is part of the design system now. Someone curates it. Someone keeps the bad examples too.
- **Failure modes and fallbacks.** What does the agent render when intent is ambiguous, data is missing, or the user asked for something the system cannot honour? Today, mostly a half-broken screen. The design system has to ship the skeleton, the empty state, the disambiguation prompt, the polite refusal.
- **Evaluation criteria.** What does "good" look like for this generated screen, on this device, for this user, against the brand? Designers hold the evaluator that catches the model's bad output before users see it. Without that evaluator, the [prompt-generate-validate loop](https://www.copilotkit.ai/blog/a2ui-whats-new-in-google-generative-ui-spec) is incomplete.

The pattern across all of these: design moves from rendering pixels to defining the rules pixels are generated from. The craft does not vanish. It surfaces at the layer above. Same care, applied to the system instead of the screen.

The same shift is being formalised in the platform underneath. Google published [A2UI v0.9](https://developers.googleblog.com/a2ui-v0-9-generative-ui/) earlier this year, an open protocol for agents to emit declarative UI that any client renders with its own components (React, Flutter, Lit, and Angular renderers ship today). [Figma's MCP server](https://www.figma.com/blog/design-systems-ai-mcp/) lets agents query design tokens, variants, allowed props, and implementation constraints while they generate code. The plumbing is arriving. The schema is the design work.

The honest part is that most systems are not ready. [Into Design Systems](https://www.intodesignsystems.com/blog/design-system-not-ready-for-ai-agents) put it cleanly: the system was written for humans in prose, and the new user is a model that needs structured metadata. They also cite a number that matches what I see in the field: 30-40% of design system team time goes to pure maintenance, with accessibility regressions, token misuse, and documentation drift. That tax does not go away when the agent shows up. It gets bigger if the system is not legible.

The design system team becomes a small platform team for the agent layer. Same craft, different consumer.

**Trust is the architecture question.**

Ohans builds zero-trust harnesses across the lifecycle. Christoffer removes guards because guards assume failure. Matthew tests separation by trying to swap. Different talks, same architectural decision: where do you put trust, and how do you verify it?

This is the discipline the industry is naming right now. Anthropic [published a 36-page "Zero Trust for AI Agents" guide](https://pasqualepillitteri.it/en/news/4408/ai-agent-security-anthropic-zero-trust-guide) in May, breaking an agent into four layers: model, harness, tools, environment. Microsoft released [Zero Trust for AI (ZT4AI)](https://particula.tech/blog/microsoft-zt4ai-zero-trust-ai-agents) in March, treating AI as a 7th Zero Trust pillar alongside Identity, Devices, Data. A [2026 industry report](https://www.zentera.net/blog/zero-trust-architecture-for-agentic-ai) found only 47% of deployed agents are actively monitored or secured. InfoQ now calls this whole field [harness engineering](https://www.infoq.com/podcasts/mcp-vibe-coding-harness-engineering/).

[Fortune put it bluntly](https://fortune.com/2026/04/02/in-the-age-of-vibe-coding-trust-is-the-real-bottleneck/): in the age of vibe coding, trust is the real bottleneck. AI does not change the architectural question. It makes the answers more expensive to get wrong, and forces them earlier. The verification layer used to be optional. It is not now.

**Agency is a daily practice.**

Laura's framing was the one I keep returning to. Agency is influence used on purpose, grown in a loop. Use your skills, collect evidence, strengthen the belief, repeat. Anastasiia gave the org version: shift the team average to the right, not just the stars. Georgios and Darío gave the body version and the resource version: build capacity before you need it, observe before you add more.

The broader discourse this year rhymes with all of them. The line I keep seeing is that the value of a software professional has shifted from syntax production to constraint definition. The work is in choosing what to build, what to verify, what to leave out. Those are agency decisions, and they show up in small ways: which PR to write, which review to refuse, which meeting to skip for a walk. Engineers easily underestimate their own influence while seeing everyone else's. The remedy is the loop. Collect evidence. Strengthen the belief.

**Endings deserve craft.**

Joe Macleod's _Endineering_ thesis: products and services are designed to start well and end badly. The conference itself is one example, handled openly. AI is another, and it is sharper than most people realise. In 2026 alone, GPT-4o retired, Claude 3.7 Sonnet was shut down, the Assistants API gets removed in late August, with [further sunset waves into 2027](https://presenc.ai/research/ai-model-deprecation-tracker-2026). Model lifecycles have compressed to [6-12 months](https://tianpan.co/blog/2026-04-27-model-deprecation-treadmill-pre-sunset-discipline), down from 18-24. Some [retirements landed with two weeks' notice](https://www.theregister.com/software/2026/01/30/openai-axes-chatgpt-models-with-just-two-weeks-warning/4980615). If your product hard-codes a model id, the ending was already designed badly.

This is the part of Joe's frame that most of us are still missing. Onboarding is funded; off-boarding rarely is. The same logic applies to features, components, design tokens, and yes, conferences. The world is changing, and the small craft of ending well is going to matter more, not less. Endings done well leave room for what comes next.

If something new grows out of this, I will be there. If it does not, the eight years of single-track Finnish frontend community I got from React Finland and Future Frontend were already a lot.

Thanks to the organisers, the speakers, and everyone in the hallway.
