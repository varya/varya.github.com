import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Heading from "../../components/--Heading";
import Widget from "../../components/--Widget";
import WidgetContainer from "../../components/--WidgetContainer";
import Page from "../../templates/page/Page";

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

const colorByType = {
  study: "accent",
  workshop: "neutral",
  job: "brand",
};
const Projects = ({ data }) => {
  const posts = data.projects.edges;
  return (
    <Page
      hero={{
        props: { background: "transparent", height: "small" },
        content: HeroContent,
      }}
    >
      <WidgetContainer items={{ small: 1, medium: 2, large: 3 }}>
        {posts.map((post) => {
          const { title, type } = post.node.frontmatter;
          const { slug } = post.node.fields;
          const excerpt = post.node.frontmatter.meta.desc || post.node.excerpt;
          return (
            <Widget
              key={title}
              title={title}
              slug={`/projects${slug}`}
              excerpt={excerpt}
              background={colorByType[type]}
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
            type
            meta {
              desc
            }
          }
        }
      }
    }
  }
`;
