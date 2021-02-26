import React from "react";

import { Box } from "grommet";
import { Avatar, Heading, Paragraph } from "@components";

const Team = () => {
  const nikita = require("./nikita.jpg");
  const ira = require("./ira.jpg");
  const sherif = require("./sherif.jpg");

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
            engineering manager & team lead
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
            software architect & senior frontend engineer
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
            mid-level frontend developer
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
            Senior product designer and UX designer
          </Paragraph>
        </Box>
      </Box>
    </>
  );
};

export default Team;
