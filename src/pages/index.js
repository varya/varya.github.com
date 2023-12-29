import * as React from "react";

import { Box, Text } from "grommet";
import { Page } from "@templates/Page";
import {
  Heading,
  ImageBlock,
  Avatar,
  Paragraph,
  Link,
  Section,
  Widget,
  WidgetContainer,
  WidgetMulti,
} from "@components";

import yaraLogo from "../images/png/yara-logo.png";
import fSecureLogo from "../images/png/f-secure-logo.png";
import appomniLogo from "../images/png/appomni-logo.png";
import bemLogo from "../images/png/bem-logo-margin.png";
import bfLogo from "../images/png/bf-logo-margin.png";
import elisaLogo from "../images/png/elisa-logo-margin.png";
import metroLogo from "../images/png/metro-logo-margin.png";
import yandexLogo from "../images/png/yandex-logo-margin.png";

const HeroContent = () => (
  <Heading>Varya Stepanova — a design systems architect</Heading>
);

const IndexPage = () => {
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
        description: `Independent consultant specializing in component-focused UI design
        and development, modern development practices, infrastructure and tooling, and
        managing development teams. Visit the website to read articles on these topics,
        get a sneak peek of past projects, and hire the consultant for your team's needs.`,
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
          I am Varya Stepanova, a <b>design systems architect</b> with extensive
          experience in management, design, and the technical side. In my ~20
          years of technical career, my focus has been on component-focused UI
          design and development, creating helpful tools for the subject, and
          spreading best practices across large organizations. I hold two
          Master&apos;s degrees - one in physics and one in computer science
          from Aalto University&apos;s{" "}
          <Link to="https://www.idbm.aalto.fi/" target="_blank" rel="noopener">
            IDBM
          </Link>{" "}
          program, which focuses on service design and business. I also have 15+
          years of engineering experience and have held several leading roles.
        </Paragraph>
      </ImageBlock>
      <Paragraph size="large" standout lead>
        Currently, my focus is on bringing design systems to the next level of
        success, which includes working cooperatively with a client company&apos;s
        design & development community and bridging the gap between designers,
        developers, and business specialists.
      </Paragraph>

      {/* <Workshop /> */}
      <Section heading="Services">
        <Box gap="large">
          <Box>
            As an independent consultant, I specialize in design systems and
            offer a range of services including team leadership, technical
            leadership in frontend and building development, and custom-tailored
            workshops. Some of the specific services I offer include:
            <ul>
              <li>
                <Link to="services/audit">Auditing</Link> existing products and
                development processes
              </li>
              <li>
                <Link to="services/strategy">Coaching</Link> to help your team
                improve their design operations and development skills
              </li>
              <li>
                Custom-tailored <Link to="services/workshops">workshops</Link>{" "}
                on design systems and related topics
              </li>
              <li>
                <Link to="services/development">Production</Link> of design
                systems and UI components
              </li>
            </ul>
            I am based in Helsinki, Finland, but am open to both on-site and
            remote projects, and don&apos;t mind traveling for the right
            opportunity. Although I am busy with current projects, I am always
            open to discussing potential opportunities and how I can help your
            team succeed.
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
          As a <Text weight="bold">design system architect</Text> , I am
          responsible for managing the processes related to design and
          development in organizations of all sizes. This involves conducting
          user interviews and analyzing data to shape and improve processes,
          implementing and managing tools, fostering a positive company culture,
          and providing technical infrastructure and guidance to design and
          development teams. Through this work, I have gained expertise in
          technical, design, and management aspects and am excited to share the
          results of my design systems activity on this page.
        </Paragraph>

        <WidgetContainer items={{ small: 1, medium: 2, large: 2 }}>
          <Widget
            background="neutral"
            title="What is a design system?"
            slug="/design-systems/what-is-a-design-system/"
            excerpt="Comprehensive explanation of what a design system is from
            the perspectives of design, development, and business. With this
            understanding, you will be better equipped to create useful and
            successful products. Whether you are new to design systems or have
            experience in the field, this page offers valuable insights and information."
          />
          <Widget
            background="accent"
            title="Pattern journey"
            slug="/design-systems/pattern-journey/"
            excerpt="Visual illustration of the journey that a pattern takes from identification
            to implementation, and how this process can vary depending on the situation.
            The Pattern Journey interactive tool is designed to help organizations involve
            more people in the co-creation of design and development value as part of their
            design systems efforts. Whether you are new to design systems or have experience
            in the field, this page offers valuable insights and information."
          />
          <Widget
            background="brand"
            title="Aligning UX designers and UI developers work with design systems"
            slug="/design-systems/aligning-ux-designers-and-ui-developers/"
            excerpt="This thesis explores the role of design systems as both an approach
            and an artifact in the creation of user interfaces (UI). The research focuses
            on the alignment between UX interface designers and UI software developers,
            and the impact of design systems on this process. The findings of this study
            have important implications for organizations looking to improve their UI
            creation process and foster collaboration between design and development teams. "
          />
          <Widget
            background="neutral"
            title="Design System Gems"
            slug="/design-systems/gems/"
            excerpt="Curated collection of the most useful resources related to design
            systems.  Whether you are a designer, developer, or product
            manager, you will find valuable articles, tutorials, and tools that cover all
            aspects of design systems, from creating a design system from scratch to
            maintaining and scaling it up to your organization's needs."
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
            excerpt="Watch the presentation on how a simple impact measuring tool
            turned into a comprehensive stakeholder management system for design teams.
            I share about the challenges and opportunities I faced along the way, and
            share insights and lessons learned from my journey. By the end of this
            presentation, you'll have a better understanding of the role of design
            systems in modern organizations and how to leverage them to drive success."
          />
          <WidgetMulti
            background="accent"
            title="Building Your Design System Infrastructure — A Practical Guide"
            height="auto"
            links={{
              Slides: "https://varya.me/react-finland-2019",
              Video: "https://youtu.be/gDkUpx0dVc0",
            }}
            excerpt="Design systems can help bridge the gap between designers and developers,
            communicate shared practices across an organization, and reduce production costs.
            But how do you actually implement a design system in practice? In this article
             I provide a practical guide to building your design system infrastructure using
             open source tools from the React ecosystem. With these tools, you can automate your
             development process, create high-level interactive documentation for the libraries
             in your system, and support collaboration within your organization."
          />
          <WidgetMulti
            background="brand"
            title="Design Thinking for Maintaining a Successful Design System — The Importance of User Research"
            links={{
              "Read on Medium":
                "https://medium.com/elisa-design/maintaining-design-systems-with-user-research-3ba5feafc336",
            }}
            excerpt="In this article for Elisa's Medium Publication, I explore the role of design
            thinking in maintaining a successful design system. By incorporating user research into
            the design process, we can better understand the needs and wants of our users and use
            this information to guide the development and growth of our design system. I provide
            tips and strategies for incorporating user research into the design process and discuss
            the benefits of this approach."
          />
          <WidgetMulti
            background="neutral"
            title="Building a Successful Design System — Tips and Strategies for Leveraging Your Designers, Developers, and Products"
            links={{
              "See Slides": "https://varya.me/design-systems-thinking/",
            }}
            excerpt="Design systems are a hot topic in the world of design and development, but
            the concept can mean different things to different people. In this talk, given at the
            WEBdeLDN meetup in London, I share my experience managing a design system at a large company and provide
            insight into the decision-making process, design thinking methods, community management,
            and technical tips that can help your organization build a successful design system."
          />
          <WidgetMulti
            background="accent"
            title="Design Systems Vocabulary — A Review of Key Terms and Concepts"
            links={{ "Read in my blog": "/blog/design-systems-review/" }}
            excerpt="Design systems are a powerful tool for standardizing and simplifying
            the process of interface design and development. They bring new approaches and form
            their own ecosystem, but there is often confusion about the concepts and terms used
            in the field. In order to address this issue and provide a more structured and professional
            language, this article will review the vocabulary used in the design systems domain.
            We will draw from a range of materials, including academic and popular sources, to
            provide a comprehensive overview of the key terms and concepts."
          />
        </WidgetContainer>
      </Section>
      <Section heading="Projects">
        <WidgetContainer items={{ small: 1, medium: 3, large: 3 }}>
        <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={yaraLogo}
            slug="/projects/yara/"
          >
            <Heading
              textAlign="center"
              fill
              level={3}
              style={{ marginTop: "0em" }}
            >
              Yara International Design System
            </Heading>
          </Widget>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={fSecureLogo}
            slug="/projects/f-secure-ds-strategy/"
          >
            <Heading
              textAlign="center"
              fill
              level={3}
              style={{ marginTop: "2em" }}
            >
              F-Secure's Design System Strategy
            </Heading>
          </Widget>
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
              style={{ marginTop: "1em" }}
            >
              Design System at METRO
            </Heading>
          </Widget>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={appomniLogo}
            slug="/projects/appomni/"
          >
            <Heading textAlign="center" fill level={3}>
              Design System at AppOmni
            </Heading>
          </Widget>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={elisaLogo}
            slug="/projects/elisa-renewal/"
          >
            <Heading
              textAlign="center" fill level={3}
              style={{ marginTop: "-0.5em" }}
              >
              Design System at Elisa
            </Heading>
          </Widget>
          <Widget
            margin={{ bottom: "medium" }}
            direction="column"
            imageSrc={bfLogo}
            slug="/projects/business-finland/"
          >
            <Heading
              textAlign="center" fill level={3}
              style={{ marginTop: "0" }}
              >
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

export default IndexPage;
