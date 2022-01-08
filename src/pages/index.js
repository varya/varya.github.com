import React from "react";

import { Box, Text } from "grommet";
import {
  Avatar,
  Heading,
  ImageBlock,
  Link,
  Paragraph,
  Section,
  Widget,
  WidgetContainer,
  WidgetMulti,
  // Workshop,
} from "@components";
import Page from "@templates/Page";

import bemLogo from "../images/png/bem-logo-margin.png";
import bfLogo from "../images/png/bf-logo-margin.png";
import elisaLogo from "../images/png/elisa-logo-margin.png";
import metroLogo from "../images/png/metro-logo-margin.png";
import yandexLogo from "../images/png/yandex-logo-margin.png";

const HeroContent = () => (
  <Heading>Varya Stepanova — a design systems architect</Heading>
);

const Index = () => {
  return (
    <Page
      hero={{
        props: {
          background: "transparent",
          height: "small",
          hasOverlay: false,
        },
        content: HeroContent,
      }}
      seo={{
        title:
          "Varya Stepanova — design systems architect and engineering manager",
        description: `Component-focused UI design and development, infrastructure and tooling,
modern development practices, managing the development and multidisciplinary teams. Check varya.me
for the articles on the topic, sneak peeks of the projects or to hire me.`,
        keywords: [
          "design systems",
          "design system",
          "frontend",
          "contractor",
          "consulting",
          "consulter",
        ],
      }}
    >
      <ImageBlock imageRight image={<Avatar />} margin={{ top: "medium" }}>
        <Paragraph size="large" standout lead margin={{ vertical: "none" }}>
          I am Varya Stepanova, a <b>design systems architect</b> with an
          extensive experience in management, design, and technical side. In the
          15+ years of technical career, my major focus was component-focused UI
          design and development, creating helpful tooling for the subject and
          spreading the practices across large or regular organizations. I have
          two Master degrees — in physics and computer science (Aalto
          University,{" "}
          <Link to="https://www.idbm.aalto.fi/" target="_blank" rel="noopener">
            IDBM
          </Link>{" "}
          program focused on service design and business), years of engineering
          experience and several leading roles behind.
        </Paragraph>
      </ImageBlock>
      <Paragraph size="large" standout lead>
        Nowadays my focus is on bringing design systems to the next level of
        success which includes cooperative work in the company development
        community and bridging the gap for designers, developers, and business
        specialists.
      </Paragraph>

      {/* <Workshop /> */}

      <Section heading="Services">
        <Box gap="large">
          <Box>
            I am working as an independent consultant open for new projects. My
            roles include team leading of the design systems projects, technical
            leadership in frontend and building development.
            <ul>
              <li>
                <Link to="services/audit">Audit</Link> of existing products and
                development processes
              </li>
              <li>
                <Link to="services/strategy">Coaching</Link> to boots your
                design operations and development to the next level
              </li>
              <li>
                Custom-tailored <Link to="services/workshops">workshops</Link>{" "}
                on the related topics
              </li>
              <li>
                Design systems and UI components{" "}
                <Link to="services/development">production</Link>
              </li>
            </ul>
            I am based in Helsinki (Finland), flexible for both on-site and
            remote projects and dont mind traveling.
          </Box>
          <Box>
            <Widget slug="/services" background="brand" height="small">
              <Heading textAlign="center" level={3} size="large" fill={true}>
                Services&nbsp;→
              </Heading>
            </Widget>
          </Box>
        </Box>
      </Section>

      <Section heading="Concepts">
        <Paragraph>
          My work as a <Text weight="bold">design system architect</Text>{" "}
          includes running the processes related to the design and development
          in large or regular organizations. It means inventing and shaping the
          processes through user interviews and data analysis, tuning the
          management tools and running new ones, working on company culture and
          increasing people&apos;s involvement, providing the technical
          infrastructure and guiding in design and development. In this way, I
          make a lot of research and discoveries in technical, design and
          managing aspects. On this page, I present the public artifacts of my
          design-systems activity.
        </Paragraph>

        <WidgetContainer items={{ small: 1, medium: 2, large: 2 }}>
          <Widget
            background="neutral"
            title="What is a design system?"
            slug="/design-systems/what-is-a-design-system/"
            excerpt="Experience-proven explanation on what is (or should be) a design system from design, development and business
  perspective. If we want to shape the product so that it is useful, first we must understand it on all its levels."
          />
          <Widget
            background="accent"
            title="Pattern journey"
            slug="/design-systems/pattern-journey/"
            excerpt="Visual illustration and explanation of what happens to a pattern on its way from identifying to actual implementation
  and how different the path might be depending on the situation. The Pattern Journey interactive tool helps to make
  more people in the organization involved into co-creation of design and development value under the Design Systems
  umbrella."
          />
        </WidgetContainer>
      </Section>

      <Section heading="Workshops">
        <Paragraph>
          My experience offers to launch and maintain design systems projects,
          run{" "}
          <Link to="/services/workshops">training sessions and workshops</Link>,
          cherish in-house design and development culture in the organizations
          and so on.
        </Paragraph>

        <WidgetContainer items={{ small: 1, medium: 3, large: 3 }}>
          <Widget
            truncate={5}
            background="accent"
            title="Design systems 101"
            slug="/design-systems/design-systems-101/"
            excerpt="Introductary non-technical workshop for all the specialists (designers, developers, managers) to get common understanding
  on the concept of design systems and figure out the first steps towards your own."
          />
          <Widget
            truncate={5}
            background="brand"
            title="Hands-on with Design Systems"
            slug="/design-systems/hands-on-workshop/"
            excerpt="Full-day workshop about building design system and pattern library (React) in multidisciplinary team. This workshop was
  given twice - as a part of DSConf Helsinki, and the second time on its own."
          />
          <Widget
            truncate={5}
            background="neutral"
            title="How to build a Design System as a team"
            slug="/design-systems/team-process-workshop/"
            excerpt="Half-day workshop for teams and individuals interested in managing design system teams and running smooth processes for
  such projects."
          />
        </WidgetContainer>
        <Box background="light-1" justify="center" pad="medium">
          <Paragraph>
            For private running, I shape workshop editions tailored to the needs
            of a specific company. The same applies to the conferences. You can
            contact me by email{" "}
            <Link to="mailto:mail@varya.me">mail@varya.me</Link> to discuss.
          </Paragraph>
        </Box>
      </Section>

      <Section heading="Talks, articles and posts">
        <Paragraph>
          Besides, I frequently speak at tech and design conferences and
          meetups. The topics I cover are related to my own experience. You can
          find here{" "}
          <Link to="/services/speaking">the list of my articles and talks</Link>
          .
        </Paragraph>
        <WidgetContainer>
          <WidgetMulti
            background="neutral"
            title="Design system: from bookkeeping to championing"
            height="auto"
            links={{
              Slides: "https://varya.me/into-design-systems-2021/",
              Video: "https://youtu.be/OaqBxIp15hg",
            }}
            excerpt="How an impact measuring tool turned into a stakeholder management system."
          />
          <WidgetMulti
            background="accent"
            title="A practical guide to building your design system infrastructure"
            height="auto"
            links={{
              Slides: "https://varya.me/react-finland-2019",
              Video: "https://youtu.be/gDkUpx0dVc0",
            }}
            excerpt="Design systems bridge the gap between designers and developers,
              communicate shared practices to all the company levels and
              significantly decrease production costs. We all have heard this
              but how to achieve that in practice? React ecosystem and community already provide a lot of efficient
              open source tools which can be used for building your design
              system infrastructure. With them, you can have the most automated
              development process, high-level interactive documentation for the
              libraries in your system and support contribution practices within
              your organisation."
          />
          <WidgetMulti
            background="brand"
            title="Maintaining design systems with proper user
  research"
            links={{
              "Read on Medium":
                "https://medium.com/elisa-design/maintaining-design-systems-with-user-research-3ba5feafc336",
            }}
            excerpt="Article in Elisa's Medium Publication about the design thinking methods to help when choosing the next steps for the
  design system development and growth."
          />
          <WidgetMulti
            background="neutral"
            title="Building design systems that leverage your designers, developers and
  products"
            links={{
              "See Slides": "https://varya.me/design-systems-thinking/",
            }}
            excerpt="If we compare design systems of several companies, it is visible that this concept has different meanings to different
  people. So, how to decide which path to follow and what aspects of design systems should be in focus at your
  organisation? In this talk given at WEBdeLDN meetup in London I told a story of managing a design system in a large
  company, making decision on its further focus and approaches behind the implementing which include design thinking
  methods, community management, and technical tips."
          />
          <WidgetMulti
            background="accent"
            title="Design Systems — review of vocabulary and terms"
            links={{ "Read in my blog": "/blog/design-systems-review/" }}
            excerpt="Design systems standardise and simplify the process of interface design and development, they bring new
  approaches and form their own ecosystem. However, there is no solid understanding of the concepts and terms forming
  the design systems. To solve the term inconsistency and provide structured professional language, this article
  focuses on the vocabulary used in the design systems domain by observing a range of materials on the topic, from
  both academic and popular sources."
          />
        </WidgetContainer>
      </Section>
      <Section heading="Projects">
        <WidgetContainer items={{ small: 1, medium: 3, large: 3 }}>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={metroLogo}
            slug="/projects/metro-design-system/"
          >
            <Heading
              textAlign="center"
              fill
              level={3}
              style={{ marginTop: "1.75em" }}
            >
              Design System at METRO
            </Heading>
          </Widget>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={elisaLogo}
            slug="/projects/elisa-renewal/"
          >
            <Heading textAlign="center" fill level={3}>
              Design System at Elisa
            </Heading>
          </Widget>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={bfLogo}
            slug="/projects/business-finland/"
          >
            <Heading textAlign="center" fill level={3}>
              Business Finland Design System
            </Heading>
          </Widget>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={bemLogo}
            slug="/projects/bem-project/"
          >
            <Heading textAlign="center" fill level={3}>
              BEM project by Yandex
            </Heading>
          </Widget>
          <Widget
            direction="column"
            imageSrc={yandexLogo}
            slug="projects/lego-project"
          >
            <Heading textAlign="center" fill level={3}>
              Lego Project By Yandex
            </Heading>
          </Widget>

          <Widget
            alignContent="center"
            justify="center"
            slug="/projects"
            background="brand"
          >
            <Heading level={3} size="large" margin={{ vertical: "auto" }}>
              More Projects&nbsp;→
            </Heading>
          </Widget>
        </WidgetContainer>
      </Section>
    </Page>
  );
};

export default Index;
