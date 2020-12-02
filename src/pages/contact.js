import React from "react";

import SEO from "../components/Seo";

import { Text, Button } from "grommet";
import Layout from "../components/--Layout";
import Paragraph from "../components/--Paragraph";
import Heading from "../components/--Heading";
import Link from "../components/--Link";
import { Box } from "grommet";
import Hero from "../components/--Hero";
import { InlineWidget } from "react-calendly";

const Contact = () => (
  <Layout>
    <SEO
      title="Varya Stepanova — design systems architect and engineering manager"
      keywords={["design systems", "design system", "frontend"]}
      defer={false}
    />
    <Hero height="small" background="neutral" align="center" justify="between">
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
    </Hero>
    <Box width="xlarge" margin={{ horizontal: "auto" }} pad="medium">
      <Paragraph>You can contact me:</Paragraph>
      <Box width="medium" margin={{ horizontal: "auto" }} gap="medium">
        <Button
          fill="horizontal"
          alignSelf="center"
          primary
          pad="large"
          label="By email mail@varya.me"
          href="mailto:mail@varya.me"
          target="_blank"
          rel="noopener"
          style={{ textAlign: "center" }}
        ></Button>
        <Button
          alignSelf="center"
          fill="horizontal"
          pad="medium"
          label="in Telegram"
          href="http://t.me/var_ya"
          target="_blank"
          rel="noopener"
          style={{ textAlign: "center" }}
        ></Button>
        <Button
          alignSelf="center"
          fill="horizontal"
          pad="medium"
          label="in Whatsapp"
          href="http://wa.link/ou89i8"
          target="_blank"
          rel="noopener"
          style={{ textAlign: "center" }}
        ></Button>
      </Box>

      <Paragraph>
        Need to talk face2face? Book a video session with me via{" "}
        <Link to="https://calendly.com/var_ya">Calendly</Link>: I keep my
        calendar up to date, so you can easily see what times are available and
        choose the one which is good for you.
      </Paragraph>
      <InlineWidget
        styles={{ minWidth: "320px", height: "650px" }}
        url="https://calendly.com/var_ya/30min"
      />
      {/* <Box>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/var_ya/30min"
          style={{ minWidth: "320px", height: "630px" }}
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </Box> */}
    </Box>
  </Layout>
);

export default Contact;
