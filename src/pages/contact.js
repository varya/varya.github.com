import React from "react";

import { Box, Button, Text } from "grommet";
import { Heading, Link, Paragraph } from "@components";
import Page from "@templates/Page";

import { InlineWidget } from "react-calendly";

const HeroContent = () => (
  <>
    <Heading
      level={1}
      alignSelf="center"
      responsive
      size="large"
      margin="small"
    >
      <Text size="inherit" color="brand">
        Let&apos;s Talk!
      </Text>
    </Heading>
    <Box>
      <Button
        primary
        size="large"
        pad="medium"
        label="Email me at mail@varya.me"
        href="mailto:mail@varya.me"
        target="_blank"
        rel="noopener"
      ></Button>
    </Box>
  </>
);

const Contact = () => (
  <Page hero={{ props: { background: "light-8" }, content: HeroContent }}>
    <Paragraph>
      Need to talk face2face? Book a video session with me via{" "}
      <Link to="https://calendly.com/var_ya">Calendly</Link>: I keep my calendar
      up to date, so you can easily see what times are available and choose the
      one which is good for you.
    </Paragraph>
    <InlineWidget
      styles={{ minWidth: "320px", height: "1000px" }}
      url="https://calendly.com/var_ya/60min"
    />
  </Page>
);

export default Contact;
