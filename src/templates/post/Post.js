import React from "react";
import PropTypes from "prop-types";

import Layout from "../../components/--Layout";
import Paragraph from "../../components/--Paragraph";

import PostHeader from "../../components/--PostHeader";
import { Box, Image } from "grommet";
import Img1 from "../../../content/posts/webfonts-with-sass-and-webpack/thumb.png";
import Img2 from "../../../content/posts/webfonts-with-sass-and-webpack/enjoy.png";

const Post = ({ imageUrl, tags, date, readingTime, title }) => (
  <Layout>
    <PostHeader
      imageUrl={imageUrl}
      tags={tags}
      date={date}
      readingTime={readingTime}
      title={title}
    />
    <Box width="xlarge" margin={{ horizontal: "auto" }}>
      <Paragraph lead>
        Bacon ipsum dolor amet chislic filet mignon cow, spare ribs short loin
        beef ribs pork chop. Tail frankfurter ribeye pork chop pig rump short
        ribs pork bresaola tongue shoulder jerky alcatra jowl. Boudin swine
        filet mignon, fatback kielbasa leberkas pork belly pig salami alcatra
        doner prosciutto t-bone. Ham bacon prosciutto, pork belly turkey tri-tip
        pancetta. Alcatra tenderloin t-bone buffalo beef ribs fatback burgdoggen
        spare ribs pork loin pork chop salami capicola hamburger pork drumstick.
        Drumstick jerky jowl, short ribs chislic turducken burgdoggen kevin
        venison shoulder pancetta cupim tongue meatball ham.
      </Paragraph>

      <Box fill height="large" flex={false}>
        <Image src={Img1} fit="contain" />
      </Box>
      <Paragraph>
        Turkey t-bone pork belly ball tip alcatra pork chop. Capicola meatloaf
        short loin burgdoggen ball tip, kevin andouille meatball biltong boudin
        landjaeger shoulder corned beef buffalo. Pork strip steak hamburger,
        sausage jerky pork chop ham drumstick kielbasa sirloin. Brisket pork
        chop rump fatback, jowl ball tip jerky swine boudin biltong. Chuck spare
        ribs strip steak, flank jerky ground round prosciutto pork loin rump
        capicola drumstick tail. Ground round porchetta sirloin jerky flank.
      </Paragraph>
      <Paragraph fill>
        Brisket jowl ground round drumstick ribeye corned beef pork chop tongue
        meatloaf beef ribs biltong rump buffalo. Porchetta pork leberkas, ham
        landjaeger boudin filet mignon short ribs shankle pastrami cow beef ribs
        ribeye jowl sirloin. Chicken swine picanha doner ball tip strip steak
        sirloin ham hock tail chislic jowl t-bone alcatra. Doner ham hock short
        ribs, salami pork chop flank turkey ham ribeye frankfurter kielbasa.
        Cupim beef andouille picanha chislic, shoulder filet mignon sirloin
        shankle frankfurter.
      </Paragraph>
      <Box fill height="large" flex={false}>
        <Image src={Img2} fit="contain" />
      </Box>
    </Box>
  </Layout>
);

Post.propTypes = {
  imageUrl: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  title: PropTypes.string,
};

export default Post;
