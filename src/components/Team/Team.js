import React from "react";

import { Box } from "grommet";
import { Avatar, Heading, Paragraph } from "@components";

import nikita from "./nikita.jpg";
import ira from "./ira.jpg";
import sherif from "./sherif.jpg";

const Team = () => {
  return (
    <>
      <Heading level={2}>Need a whole team? I have one for you!</Heading>
      <Paragraph>
        If you do not have your own specialists but are interested in getting a
        bunch of professionals working together, my business partners and I can
        offer a well-worked team that has proved itself at many projects.
      </Paragraph>
      <Box direction="row" gap="large">
        <Box flex={false}>
          <Avatar align="left" size="m" />
        </Box>
        <Box>
          <Paragraph size="large" standout lead>
            Varya Stepanova
            <br />
            Engineering manager & team lead
          </Paragraph>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Box flex={false}>
          <Avatar align="left" size="m" image={nikita} />
        </Box>
        <Box>
          <Paragraph size="large" standout lead>
            Nikita Sherbakov
            <br />
            Software architect & senior frontend engineer
          </Paragraph>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Box flex={false}>
          <Avatar align="left" size="m" image={ira} />
        </Box>
        <Box>
          <Paragraph size="large" standout lead>
            Irina Illustrova
            <br />
            Mid-level frontend developer
          </Paragraph>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Box flex={false}>
          <Avatar align="left" size="m" image={sherif} />
        </Box>
        <Box>
          <Paragraph size="large" standout lead>
            Sherif Saleh
            <br />
            Senior product designer
          </Paragraph>
        </Box>
      </Box>
    </>
  );
};

export default Team;
