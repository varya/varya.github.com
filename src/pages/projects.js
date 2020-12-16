import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { Heading, Widget, WidgetContainer } from "@components";
import Page from "@templates/Page";

const HeroContent = () => (
  <>
    <Heading
      level={1}
      alignSelf="center"
      responsive
      size="large"
      margin="small"
      color="brand"
    >
      Projects
    </Heading>
  </>
);

const colors = ["accent", "neutral", "brand"];
const Projects = ({ data }) => {
  const posts = data.projects.edges;
  return (
    <Page
      hero={{
        props: { background: "transparent", height: "small" },
        content: HeroContent,
      }}
    >
      <WidgetContainer items={{ small: 1, medium: 2, large: 2 }}>
        {posts.map((post, index) => {
          const { title } = post.node.frontmatter;
          const { slug } = post.node.fields;
          const excerpt =
            post.node.frontmatter.description || post.node.excerpt;
          const background = colors[index % 3];
          return (
            <Widget
              key={title}
              title={title}
              slug={`/projects${slug}`}
              excerpt={excerpt}
              background={background}
            />
          );
        })}
      </WidgetContainer>
    </Page>
  );
};

Projects.propTypes = {
  data: PropTypes.object,
};

export default Projects;

export const projectsQuery = graphql`
  query ProjectsIndexQuery {
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "//projects//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          body
          excerpt(pruneLength: 600)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            description
            meta {
              desc
            }
          }
        }
      }
    }
  }
`;
