import React from "react";

import { Box, Heading } from "grommet";

import Paragraph from "./Paragraph.js";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
};
// eslint-disable-next-line react/prop-types
export const Default = ({ truncate, standout, lead, ...args }) => (
  <Box width="large" margin="medium">
    <Heading level="3">Just a paragraph</Heading>
    <Paragraph {...args}>
      Bacon ipsum dolor amet chislic filet mignon cow, spare ribs short loin
      beef ribs pork chop. Tail frankfurter ribeye pork chop pig rump short ribs
      pork bresaola tongue shoulder jerky alcatra jowl. Boudin swine filet
      mignon, fatback kielbasa leberkas pork belly pig salami alcatra doner
      prosciutto t-bone. Ham bacon prosciutto, pork belly turkey tri-tip
      pancetta. Alcatra tenderloin t-bone buffalo beef ribs fatback burgdoggen
      spare ribs pork loin pork chop salami capicola hamburger pork drumstick.
      Drumstick jerky jowl, short ribs chislic turducken burgdoggen kevin
      venison shoulder pancetta cupim tongue meatball ham.
    </Paragraph>
    <Heading level="3">
      Standout paragraph - to bring attention to the text, mainly to use for the
      section description
    </Heading>
    <Paragraph standout={standout} {...args}>
      Bacon ipsum dolor amet chislic filet mignon cow, spare ribs short loin
      beef ribs pork chop. Tail frankfurter ribeye pork chop pig rump short ribs
      pork bresaola tongue shoulder jerky alcatra jowl. Boudin swine filet
      mignon, fatback kielbasa leberkas pork belly pig salami alcatra doner
      prosciutto t-bone. Ham bacon prosciutto, pork belly turkey tri-tip
      pancetta. Alcatra tenderloin t-bone buffalo beef ribs fatback burgdoggen
      spare ribs pork loin pork chop salami capicola hamburger pork drumstick.
      Drumstick jerky jowl, short ribs chislic turducken burgdoggen kevin
      venison shoulder pancetta cupim tongue meatball ham.
    </Paragraph>
    <Heading level="3">
      Lead paragraph - for article lead, a very first pragraph introducing
      content
    </Heading>
    <Paragraph lead={lead} {...args}>
      Bacon ipsum dolor amet chislic filet mignon cow, spare ribs short loin
      beef ribs pork chop. Tail frankfurter ribeye pork chop pig rump short ribs
      pork bresaola tongue shoulder jerky alcatra jowl. Boudin swine filet
      mignon, fatback kielbasa leberkas pork belly pig salami alcatra doner
      prosciutto t-bone. Ham bacon prosciutto, pork belly turkey tri-tip
      pancetta. Alcatra tenderloin t-bone buffalo beef ribs fatback burgdoggen
      spare ribs pork loin pork chop salami capicola hamburger pork drumstick.
      Drumstick jerky jowl, short ribs chislic turducken burgdoggen kevin
      venison shoulder pancetta cupim tongue meatball ham.
    </Paragraph>
    <Heading level="3">
      Truncated paragraph. Specify number of lines to truncate text. The one
      below has 3:
    </Heading>
    <Paragraph truncate={truncate} {...args}>
      Bacon ipsum dolor amet chislic filet mignon cow, spare ribs short loin
      beef ribs pork chop. Tail frankfurter ribeye pork chop pig rump short ribs
      pork bresaola tongue shoulder jerky alcatra jowl. Boudin swine filet
      mignon, fatback kielbasa leberkas pork belly pig salami alcatra doner
      prosciutto t-bone. Ham bacon prosciutto, pork belly turkey tri-tip
      pancetta. Alcatra tenderloin t-bone buffalo beef ribs fatback burgdoggen
      spare ribs pork loin pork chop salami capicola hamburger pork drumstick.
      Drumstick jerky jowl, short ribs chislic turducken burgdoggen kevin
      venison shoulder pancetta cupim tongue meatball ham.
    </Paragraph>
  </Box>
);

Default.args = { truncate: 3, lead: true, standout: true };
