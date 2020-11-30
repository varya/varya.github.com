import React from "react";

import SEO from "../../components/Seo";

import { Text, Button } from "grommet";
import Layout from "../../components/--Layout";
import Paragraph from "../../components/--Paragraph";
import Heading from "../../components/--Heading";
import SocialLinks from "../../components/--SocialLinks";
import { Box } from "grommet";
import Hero from "../../components/--Hero";

const Contact = () => (
  <Layout>
    <SEO
      title="Varya Stepanova — design systems architect and engineering manager"
      keywords={["design systems", "design system", "frontend"]}
      defer={false}
    />
    <Hero background="neutral" align="center" justify="between">
      <Heading
        level={1}
        alignSelf="center"
        responsive
        size="large"
        margin="small"
      >
        <Text size="inherit" color="accent">
          Let&apos;s&nbsp;
        </Text>
        <Text size="inherit" color="brand">
          Talk!
        </Text>
      </Heading>
      <Paragraph size="large" textAlign="center">
        I&apos;m always keen to hear from you.
      </Paragraph>
      <Button
        primary
        size="large"
        pad="medium"
        label="Email me at mail@varya.me"
        href="mailto:mail@varya.me"
        target="_blank"
        rel="noopener"
      ></Button>
    </Hero>
    <Box width="xlarge" margin={{ horizontal: "auto" }} pad="medium">
      <Paragraph>
        Don&apos;t hesitate to get in touch with me if you have some project to
        discuss or just want to say hi. You are also welcome to follow me if you
        want to stay in touch.
      </Paragraph>
      <SocialLinks pad="medium" align="center" />
    </Box>
  </Layout>
);

export default Contact;
