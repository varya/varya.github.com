import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/--Layout";
import Paragraph from "../../components/--Paragraph";

import PostHeader from "../../components/--PostHeader";
import { Box } from "grommet";
import Tag from "../../components/--Tag";
import Image from "../../components/--Image";
import PrevNextNav from "../../components/--PrevNextNav";
import Img1 from "../../../content/posts/webfonts-with-sass-and-webpack/thumb.png";
import Img2 from "../../../content/posts/webfonts-with-sass-and-webpack/enjoy.png";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({
  data: {
    mdx,
    site: { siteMetadata },
  },
  pageContext: { next, prev, fileSourceUrl },
  location,
}) => {
  const { tags, date, readingTime } = mdx.fields;
  console.log(
    "🚀 ~ file: Post.js ~ line 24 ~ tags, date, readingTime",
    tags,
    date,
    readingTime
  );
  const { title, subTitle, cover } = mdx.frontmatter;
  console.log(
    "🚀 ~ file: Post.js ~ line 31 ~ mdx.frontmatter",
    mdx.frontmatter
  );
  console.log(
    "🚀 ~ file: Post.js ~ line 26 ~ title, subTitle, cover",
    title,
    subTitle,
    cover
  );

  // pageContext: { imageUrl, tags = [], date, readingTime, title },
  return (
    <Layout>
      <PostHeader
        // imageUrl={cover}
        tags={tags}
        date={date}
        // readingTime={`${Math.round(readingTime.minutes)} min`}
        title={title}
      />
      <Box
        flex="grow"
        width="xlarge"
        margin={{ horizontal: "auto" }}
        pad="medium"
        direction="column"
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Paragraph lead>
          Bacon ipsum dolor amet chislic filet mignon cow, spare ribs short loin
          beef ribs pork chop. Tail frankfurter ribeye pork chop pig rump short
          ribs pork bresaola tongue shoulder jerky alcatra jowl. Boudin swine
          filet mignon, fatback kielbasa leberkas pork belly pig salami alcatra
          doner prosciutto t-bone. Ham bacon prosciutto, pork belly turkey
          tri-tip pancetta. Alcatra tenderloin t-bone buffalo beef ribs fatback
          burgdoggen spare ribs pork loin pork chop salami capicola hamburger
          pork drumstick. Drumstick jerky jowl, short ribs chislic turducken
          burgdoggen kevin venison shoulder pancetta cupim tongue meatball ham.
        </Paragraph>

        <Box flex={false}>
          <Image
            src={Img1}
            caption="test caption"
            copyright={{ text: "Jane Doe" }}
          />
        </Box>
        <Paragraph>
          Turkey t-bone pork belly ball tip alcatra pork chop. Capicola meatloaf
          short loin burgdoggen ball tip, kevin andouille meatball biltong
          boudin landjaeger shoulder corned beef buffalo. Pork strip steak
          hamburger, sausage jerky pork chop ham drumstick kielbasa sirloin.
          Brisket pork chop rump fatback, jowl ball tip jerky swine boudin
          biltong. Chuck spare ribs strip steak, flank jerky ground round
          prosciutto pork loin rump capicola drumstick tail. Ground round
          porchetta sirloin jerky flank.
        </Paragraph>
        <Paragraph fill>
          Brisket jowl ground round drumstick ribeye corned beef pork chop
          tongue meatloaf beef ribs biltong rump buffalo. Porchetta pork
          leberkas, ham landjaeger boudin filet mignon short ribs shankle
          pastrami cow beef ribs ribeye jowl sirloin. Chicken swine picanha
          doner ball tip strip steak sirloin ham hock tail chislic jowl t-bone
          alcatra. Doner ham hock short ribs, salami pork chop flank turkey ham
          ribeye frankfurter kielbasa. Cupim beef andouille picanha chislic,
          shoulder filet mignon sirloin shankle frankfurter.
        </Paragraph>
        <Box flex={false}>
          <Image src={Img2} fit="contain" />
        </Box>
        <Box
          direction="row"
          fill="horizontal"
          justify="center"
          margin={{ bottom: "auto" }}
          wrap="true"
          pad={{ vertical: "medium" }}
        >
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => <Tag key={tag} name={tag} margin="xsmall" />)}
        </Box>
        <PrevNextNav
          flex={false}
          prevSlug="#"
          nextSlug="#"
          prevTitle="Remote work in a design system team"
          nextTitle="Flatten array with Javascript reduce function"
          pad={{ vertical: "medium" }}
        />
      </Box>
    </Layout>
  );
};
Post.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  imageUrl: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  title: PropTypes.string,
};

export default Post;

export const pageQuery = graphql`
  query PostBySlug2($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        readingTime {
          minutes
        }
        slug
        prefix
        disqusIdentifier
      }
      frontmatter {
        title
        subTitle
        date(formatString: "DD MMMM YYYY")
        v2
        old
        tumblr
        meta {
          desc
        }
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
