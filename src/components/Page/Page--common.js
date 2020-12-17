// import React from "react";
// import PropTypes from "prop-types";

// import { graphql, StaticQuery } from "gatsby";
// import { MDXProvider } from "@mdx-js/react";
// import styled from "styled-components";

// import Footer from "../Footer";
// import Header from "../Header";
// import { LayoutSimple } from "../Layout/Layout";
// import Prompt from "../Prompt";
// // eslint-disable-next-line
// import Typography from "../Typography";
// import Children from "react-children-utilities";
// import breakpoint from "styled-components-breakpoint";

// export const SiteContainer = styled.div`
//   ${breakpoint("desktop")`
//     max-width: 1200px;
//     margin: 0 auto;
//   `}
// `;

// const MdxWrapper = ({ onlyExcerpt = false, excerptBackup, children }) => {
//   if (onlyExcerpt) {
//     let updatedChildren = [...children];

//     updatedChildren = children.filter((child) => {
//       return child.props && child.props["data-excerpt"];
//     });

//     if (updatedChildren.length === 0) {
//       return <>{excerptBackup}</>;
//     }
//     // Keep only text from excerpt to avoid side effects of inner html tags
//     return <>{Children.onlyText(updatedChildren)}</>;
//   }

//   return <>{children}</>;
// };

// MdxWrapper.propTypes = {
//   onlyExcerpt: PropTypes.bool,
//   excerptBackup: PropTypes.object,
//   children: PropTypes.array,
// };

// export default function PageCommon({ content, left, location }) {
//   left = left || <Prompt />;
//   return;
//   //  (
//     // <StaticQuery
//     //   query={graphql`
//     //     query LayoutQuery {
//     //       pages: allMdx(
//     //         filter: { fileAbsolutePath: { regex: "//pages//" } }
//     //         sort: { order: ASC }
//     //       ) {
//     //         edges {
//     //           node {
//     //             fields {
//     //               slug
//     //               level
//     //             }
//     //             frontmatter {
//     //               title
//     //               menuTitle
//     //             }
//     //           }
//     //         }
//     //       }
//     //     }
//     //   `}
//     //   render={(data) => {
//     //     const {
//     //       pages: { edges: pages },
//     //     } = data;
//     //     return (
//     //       <MDXProvider
//     //         components={{
//     //           wrapper: MdxWrapper,
//     //         }}
//     //       >
//     //         <SiteContainer>
//     //           <LayoutSimple
//     //             header={<Header path={location.pathname} pages={pages} />}
//     //             content={content}
//     //             prompt={left}
//     //             footer={<Footer />}
//     //           />
//     //         </SiteContainer>
//     //       </MDXProvider>
//     //     );
//     //   }}
//     // />
//   // );
// }

// PageCommon.propTypes = {
//   left: PropTypes.node,
//   content: PropTypes.node,
//   location: PropTypes.object,
// };
