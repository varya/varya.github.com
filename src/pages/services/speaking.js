import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Heading, Paragraph, WidgetContainer, WidgetMulti } from "@components";
import Page from "@templates/Page";

import heroImage from "./hero-speaking.jpg";

const talks = [
  {
    title: "A practical guide to building your design system infrastructure",
    description:
      "A bunch of ideas and suggestions about implementing infrastructure and tools for building your design system, presented at Patterns Day 2019 in Brighton, England.",
    links: {
      Slides: "https://varya.me/patterns-day-2019",
      "Patterns Day 2019": "https://patternsday.com/",
      Video: "https://vimeo.com/345906543",
    },
  },

  {
    title: "Maintaining design systems with proper user research",
    description: `Design systems bridge the gap between designers and developers,
              communicate shared practices to all the company levels and
              significantly decrease production costs. We all have heard this
              but how to achieve that in practice? React ecosystem and community already provide a lot of efficient
              open source tools which can be used for building your design
              system infrastructure. With them, you can have the most automated
              development process, high-level interactive documentation for the
              libraries in your system and support contribution practices within
              your organisation.`,
    links: {
      Slides: "http://varya.me/react-finland-2019/",
      "React Finland 2019": "https://react-finland.fi/",
      Video: "https://youtu.be/gDkUpx0dVc0?t=9987",
    },
  },
  {
    title: "A practical guide to building your design system infrastructure",
    links: {
      Medium:
        "https://medium.com/elisa-design/maintaining-design-systems-with-user-research-3ba5feafc336",
    },
    description: `Article in Elisa's Medium Publication about the design thinking methods to help when choosing the next steps for the design system development and growth.`,
  },
  {
    title:
      "Building design systems that leverage your designers, developers and products",
    links: { Slides: "http://varya.me/design-systems-thinking/" },
    description: `Longer talk on how we pushed Elisa's design system forward with design thinking, user centered methods and creative
  ways of presenting boring documentation. This talk was given in London on 17th October 2018 at WEBdeLDN meetup.`,
  },
  {
    title:
      "Building design systems that leverage your designers, developers and products (Tallinn)",
    links: { Slides: "http://varya.me/ds-in-wild-tallinn/" },
    description: `Brief talk about applying design thinking approaches when managing and pushing forward design system in Finnish
  telecommunication company Elisa.`,
  },
  {
    title: "Component development with CSS in 2018",
    description: `Slightly updated annual lecture given in University of Turku.`,
    links: {
      Slides: "http://varya.me/component-development-css-2018/",
      Video: "https://youtu.be/bD3MNue38pg",
    },
  },
  {
    title: "Hands-on with Design Systems",
    description: `Full-day workshop about building design system and pattern library (React) in multidisciplinary team.`,
    links: { Workshop: "https://dsconference.com/ws-intergalactico/" },
  },
  {
    title: "Component development in CSS in 2017",
    description: `Lecture for Computer Science students of Aalto University on overall picture of developing interface
  components using modern CSS component approaches.`,
    links: { Slides: "http://varya.me/component-development-css-2017/" },
  },
  {
    title: "Pattern libraries through trial and error",
    description: `The talk given at DotCSS 2016 (Paris, France) summarize my 8-year-long experience in building pattern libraries.`,
    links: {
      Slides: "http://varya.me/dotcss-2016/",
      Video:
        "https://www.dotconferences.com/2016/12/varya-stepanova-pattern-libraries-through-trial-and-error",
    },
  },
  {
    title: "Component development in CSS in 2016",
    description: `Lecture for Computer Science students of Aalto University on overall picture of developing interface
  components using CSS.`,
    links: { Slides: "http://varya.me/component-development-css-2016/" },
  },
  {
    title: "Doing nothing for visual regression testing",
    description: `The talk given at DotCSS 2016 (Paris, France) summarize my 8-year-long experience in building pattern libraries.`,
    links: {
      Slides: "http://varya.me/fromthefront-2016/",
      Video: "https://youtu.be/UPciXG1MoYw",
    },
  },
  {
    title: "To BEM or not to BEM",
    description: `Interview to Cristiano Rastelli about using BEM in developing frontend.`,
    links: {
      Read:
        "http://www.didoo.net/to-bem-or-not-to-bem/05__interview-with--varya__stepanova.html",
    },
  },
  {
    title: "ReactJS Hackathon @ SC5",
    description: `Materials for making a hackathon on React for a beginner level.`,
    links: { Slides: "http://varya.me/reactjs-hackathon/" },
  },
  {
    title: "Doing nothing for visual regression testing",
    description: ` Visual regression testing approach wrapped into a nice and neat plugin for SC5 StyleGuide presented at HelsinkiJs
  meetup in October 2015.`,
    links: {
      Slides: "http://varya.me/doing-nothing-for-visual-regression-2015/",
    },
  },
  {
    title: "Driving Style-Guide-Driven Development",
    description: `This talk describes experience of brining Style-Guide-Driven Development into practise and reveals how it
  ended up with developing a special tool — Style Guide Generator by SC5. The presenttaion was given at EmpireJS 2015,
  New York and ScotlandJS 2015, Edinburgh.`,
    links: {
      Slides: "http://varya.me/empirejs-2015/",
      "Video from EmpireJS, New York": "https://youtu.be/bKI0amimw-k",
      "Video from ScotlandJs, Edinburgh": "https://youtu.be/gWzYMJjtx-Y",
    },
  },
  {
    title: "Automating Style-Guide-Driven Development",
    description: `This article at SmashingMagazine was published on 5th March 2105. It explained the motivation and benefits
  of style-guide-driven development and component-based approach in frontend.`,
    links: {
      Read:
        "http://www.smashingmagazine.com/2015/03/05/automating-style-guide-driven-development/",
    },
  },
  {
    title: "Styleguide generator by SC5",
    description: `With this presentation I introduced SC5 StyleGuide to frontend developers at Veikkaus and Elisa in December 2014 and January 2015 and Frontend.fi on January 2015.`,
    links: {
      Slides:
        "http://www.slideshare.net/VarvaraStepanova/sc5-style-guide-generator",
    },
  },
  {
    title: "BEM FAQ",
    description: `A list of frequently asked questions about BEM and detailed answers to them.`,
    links: {
      Read: "http://getbem.com/faq/",
    },
  },
  {
    title: "JSCS in use at SC5 Online",
    description: `This talk given 18th on November at HelsinkiJS meetup presents JSCS, a tool for checking JavaScript code style, and describes experience of using it in SC5 Online.`,
    links: {
      Slides: "http://varya.me/jscs-talk/",
    },
  },
  {
    title: "Tutorial on JavaScript components with i-bem.js",
    description: `This set of well-explained examples demonstrates how to create JavaScript components using the basic features of i-bem.js.`,
    links: {
      Read: "http://bem.info/tutorials/bem-js-tutorial/",
    },
  },
  {
    title: "Tutorial on JavaScript components with i-bem.js",
    description: `The talk at Front-Trends 2013 gives a birds-eye view of the sometimes surprising ideas behind BEM, and the benefits they offer
  developers.`,
    links: {
      Video: "https://vimeo.com/66474705",
    },
  },
  {
    title: "Maintainable Frontend Development with BEM",
    description: `This is a talk given at Metarefresh on 23 February 2013 in Bangalore (India). It shows how BEM helps to keep web interfaces
  easy-to-maintain and fast-to-develop.`,
    links: {
      Video:
        "http://hasgeek.tv/metarefresh/2013/496-maintainable-frontend-development-with-bem",
    },
  },
  {
    title: "Quick start with full BEM stack",
    description: `This tutorial shows how to run a BEM-project and enjoy helpful bem tools,
  efficient BEMHTML templates and declarative JavaScript i-bem.js.`,
    links: { Read: "http://bem.info/articles/start-with-project-stub/" },
  },
  {
    title: "What you can borrow from Yandex frontend dev",
    description: `The talk about BEM at WebConf Riga on 10 November 2012.
  Here it's explained at length what is BEM in terms of CSS. BEM-styled JavaScript
  is also mentioned as well as some nice tools for frontend development.`,
    links: {
      "WebConf Riga": "http://webconf.lv/",
      Video: "https://vimeo.com/53219242",
      Article: "http://bem.info/articles/yandex-frontend-dev/",
    },
  },
  {
    title: "Frontend evolution at Yandex",
    description: `Full 7-year evolution of BEM in 10 minutes. This is in the talk at Fronteers Jam
  Session, October 2012 in Amsterdam.`,
    links: {
      Video: "https://vimeo.com/51897014",
    },
  },
  {
    title: "A New Frontend Methodology: BEM",
    description: `The first article about BEM in English.`,
    links: {
      Read:
        "http://coding.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/",
    },
  },
  {
    title: "How to use BEM! outside Yandex",
    description: `Screencast based on my talk at Yandex.Saturday Conferece on 25 February 2012 in
  Chelyabinsk (Russia). Says that every team can enjoy BEM and improve its work.
  Inside you can find examples of using BEM with Haml and Django.`,
    links: { Video: "https://vimeo.com/38346573" },
  },
];
const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="medium"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Speaking
    </Text>
  </Heading>
);

const colors = ["brand", "accent", "neutral"];

const TalkWidget = ({
  index,
  talk: { title, description, links },
  ...props
}) => {
  return (
    <WidgetMulti
      alignContent="center"
      justify="center"
      background={colors[index % 3]}
      title={title}
      excerpt={description}
      links={links}
      {...props}
    />
  );
};

TalkWidget.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  talk: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    links: PropTypes.object,
  }),
  children: PropTypes.node,
};

const Speaking = () => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
  >
    <Paragraph>
      At this page you can find links on my articles, workshops and talks.
    </Paragraph>
    <WidgetContainer items={{ small: 1, medium: 1, large: 1 }}>
      {talks.map((talk, index) => (
        <TalkWidget index={index} key={index + talk.title} talk={talk} />
      ))}
    </WidgetContainer>
  </Page>
);

export default Speaking;
