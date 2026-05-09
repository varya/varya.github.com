import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { Box } from "grommet";
import {
  Heading,
  Hero,
  Link,
  Paragraph,
  PortfolioLayout,
  PortfolioNotice,
  Seo,
  Widget,
  WidgetContainer,
} from "@components";

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
      Projects Portfolio
    </Heading>
  </>
);

const colors = ["accent", "neutral", "brand"];

const ProjectsPortfolio = ({ data }) => {
  const posts = data.portfolioProjects.edges;

  // Slugs already covered in the portfolio section (last path segment, e.g. "manychat")
  const portfolioNames = new Set(
    posts.map(({ node }) => {
      const parts = node.fields.slug.split("/").filter(Boolean);
      return parts[parts.length - 1];
    })
  );

  const otherProjects = data.allProjects.edges.filter(({ node }) => {
    const parts = node.fields.slug.split("/").filter(Boolean);
    return !portfolioNames.has(parts[parts.length - 1]);
  });

  return (
    <PortfolioLayout>
      <Seo
        title="Projects Portfolio — Varya Stepanova"
        description="Extended case studies of Varya Stepanova's design systems projects."
      />
      <Hero
        align="center"
        justify="between"
        background="transparent"
        height="small"
      >
        <HeroContent />
      </Hero>
      <Box width="xlarge" margin={{ horizontal: "auto" }} pad="medium">
      <PortfolioNotice />
      <WidgetContainer items={{ small: 1, medium: 2, large: 2 }}>
        {posts.map((post, index) => {
          const { title, link } = post.node.frontmatter;
          const { slug } = post.node.fields;
          const resolvedSlug = link ? link : `/${slug}`;
          const excerpt =
            post.node.frontmatter.description || post.node.excerpt;
          const background = colors[index % 3];
          return (
            <Widget
              key={title}
              title={title}
              slug={resolvedSlug}
              excerpt={excerpt}
              background={background}
            />
          );
        })}
      </WidgetContainer>

      <Box margin={{ top: "large" }}>
        <Paragraph>
          These are not all my projects — I have worked on many more. They are
          all described in my{" "}
          <Link to="/projects/">public portfolio</Link>.
        </Paragraph>
        <WidgetContainer items={{ small: 2, medium: 3, large: 4 }}>
          {otherProjects.map(({ node }) => {
            const { title, link } = node.frontmatter;
            const { slug } = node.fields;
            const resolvedSlug = link ? link : `/${slug}`;
            return (
              <Box key={title} pad="small">
                <Link to={resolvedSlug} unstyled>
                  <Box
                    background="light-2"
                    pad="small"
                    justify="center"
                    align="start"
                  >
                    <Heading level={5} margin="none">
                      {title}
                    </Heading>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </WidgetContainer>
      </Box>
      </Box>
    </PortfolioLayout>
  );
};

ProjectsPortfolio.propTypes = {
  data: PropTypes.object,
};

export default ProjectsPortfolio;

export const projectsPortfolioQuery = graphql`
  query ProjectsPortfolioIndexQuery {
    portfolioProjects: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "//projects-portfolio//" } }
      }
      sort: { frontmatter: { date: DESC } }
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
            link
            meta {
              desc
            }
            cover {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
    allProjects: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "//content/projects//" } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            link
          }
        }
      }
    }
  }
`;
