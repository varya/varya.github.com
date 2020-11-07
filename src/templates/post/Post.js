import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Layout from "../../components/--Layout";
import PostHeader from "../../components/--PostHeader";
import { Paragraph } from "../../components/--Typography";
import Img1 from "../../../content/posts/webfonts-with-sass-and-webpack/thumb.png";

const PostContent = styled.div`
  max-width: 1140px;
  margin: 2em auto 0 auto;
`;
const Post = ({ imageUrl, tags, date, readingTime, title }) => (
  <Layout>
    <PostHeader
      imageUrl={imageUrl}
      tags={tags}
      date={date}
      readingTime={readingTime}
      title={title}
    />
    <PostContent>
      <Paragraph strong>
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
      <img src={Img1} />
      <Paragraph>
        Turkey t-bone pork belly ball tip alcatra pork chop. Capicola meatloaf
        short loin burgdoggen ball tip, kevin andouille meatball biltong boudin
        landjaeger shoulder corned beef buffalo. Pork strip steak hamburger,
        sausage jerky pork chop ham drumstick kielbasa sirloin. Brisket pork
        chop rump fatback, jowl ball tip jerky swine boudin biltong. Chuck spare
        ribs strip steak, flank jerky ground round prosciutto pork loin rump
        capicola drumstick tail. Ground round porchetta sirloin jerky flank.
      </Paragraph>
      <Paragraph>
        Brisket jowl ground round drumstick ribeye corned beef pork chop tongue
        meatloaf beef ribs biltong rump buffalo. Porchetta pork leberkas, ham
        landjaeger boudin filet mignon short ribs shankle pastrami cow beef ribs
        ribeye jowl sirloin. Chicken swine picanha doner ball tip strip steak
        sirloin ham hock tail chislic jowl t-bone alcatra. Doner ham hock short
        ribs, salami pork chop flank turkey ham ribeye frankfurter kielbasa.
        Cupim beef andouille picanha chislic, shoulder filet mignon sirloin
        shankle frankfurter.
      </Paragraph>
    </PostContent>
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
