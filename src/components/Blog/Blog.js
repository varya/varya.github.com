import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

import Item from "./Item";

const Container = styled.main`
  a {
    text-decoration: none;
  }
`;

const Blog = props => {

  return (<StaticQuery
      query={graphql`
      query BlogQuery {
        posts: allMdx(
          filter: { fileAbsolutePath: { regex: "//posts/.*/" }, fields: { lang: {eq: "en" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                cover {
                  childImageSharp{
                    sizes(maxWidth: 250) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        }
      }
      `}
      render={(data) => <BlogComponent data={data} />
    }
  />);
};

export default Blog;

export const BlogComponent = (props) => {
  const posts = props.data.posts.edges;
  return (
    <Container>
      {posts.map(post => {
        const node = post.node;
        const slug = post.node.fields.slug;
        return <Item key={slug} post={node} />;
      })}
    </Container>
  )
}