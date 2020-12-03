import React from "react";

import Page from "../templates/page/Page";
import { InlineWidget } from "react-calendly";

import Paragraph from "../components/--Paragraph";
import Heading from "../components/--Heading";
import Link from "../components/--Link";
import { Box, Text, Button } from "grommet";

const HeroContent = () => (
  <>
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
  <Page hero={{ props: { background: "neutral" }, content: HeroContent }}>
    <Paragraph>
      Need to talk face2face? Book a video session with me via{" "}
      <Link to="https://calendly.com/var_ya">Calendly</Link>: I keep my calendar
      up to date, so you can easily see what times are available and choose the
      one which is good for you.
    </Paragraph>
    <InlineWidget
      styles={{ minWidth: "320px", height: "1000px" }}
      url="https://calendly.com/var_ya/30min"
    />
  </Page>
);

export default Contact;
