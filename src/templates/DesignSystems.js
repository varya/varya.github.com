import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Box } from "grommet";
import {
  Heading,
  Layout,
  Pagination,
  Paragraph,
  Widget,
  WidgetContainer,
} from "@components";

const DesignSystems = ({ posts }) => (
  <Layout>
    <Heading alignSelf="center" responsive size="large">
      <Text size="inherit" color="brand">
        Design&nbsp;
      </Text>

      <Text size="inherit" color="accent">
        Systems
      </Text>
    </Heading>
    <Box
      flex="grow"
      width="xlarge"
      margin={{ horizontal: "auto" }}
      pad="medium"
      direction="column"
    >
      <Box background="light-1">
        <Paragraph
          standout
          textAlign="center"
          margin={{ horizontal: "xlarge", vertical: "medium" }}
        >
          My work as a{" "}
          <Text style={{ fontWeight: "900" }}>design system architect</Text>{" "}
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
      </Box>

      <WidgetContainer items={{ small: 1, medium: 1, large: 2 }}>
        {posts.map((post) => (
          <Widget
            key={post.title}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            height="auto"
          />
        ))}
      </WidgetContainer>
    </Box>
    <Pagination totalPages={3} currentPage={1} />
  </Layout>
);

DesignSystems.propTypes = {
  posts: PropTypes.object,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
};

export default DesignSystems;
