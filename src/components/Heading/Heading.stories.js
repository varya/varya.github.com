import React from "react";
import PropTypes from "prop-types";

import { Box, Grid } from "grommet";

import Heading from "./Heading.js";
export default {
  title: "Typography/Heading",
  component: Heading,
};

const H = ({ level, size }) => (
  <Heading level={level} size={size}>
    {`Heading ${level} ${size}`}
  </Heading>
);

H.propTypes = {
  level: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

const Set = ({ size }) => (
  <div>
    {[1, 2, 3, 4, 5, 6].map((level) => (
      <H key={level} level={level} size={size} />
    ))}
  </div>
);

Set.propTypes = {
  size: PropTypes.string.isRequired,
};

export const Sizes = () => (
  <Grid columns="large" gap="medium">
    <Set size="medium" />
    <Set size="small" />
    <Set size="large" />
    <Set size="xlarge" />
  </Grid>
);

// All possible properties and values to generate a story.
const styleProps = {
  alignSelf: ["start", "center", "end"],
  color: ["brand", "accent", "neutral"],
  textAlign: ["start", "center", "end"],
  textCase: ["uppercase", "lowercase", "capitalize", undefined],
  underline: [true, false],
  spaced: [true, false],
};

export const Styles = () => {
  return (
    <Box>
      {Object.entries(styleProps).map(([propName, propValuesArray]) => {
        return (
          <Box key={propName}>
            <Heading level={2} color="text-xweak" margin="medium" underline>
              {propName}:
            </Heading>
            {propValuesArray.map((propValue) => (
              <Heading
                margin="small"
                level={3}
                size="medium"
                key={propValue}
                {...{ [propName]: propValue }}
              >{`Sample Heading {${propName}: ${propValue}}`}</Heading>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export const DesignPresets = () => {
  return (
    <>
      <Box direction="row-responsive" pad="medium" fill>
        <Box basis="1/3">Blog post heading (h1)</Box>
        <Box background="text-xweak" margin={{ left: "medium" }}>
          <Heading margin={{ top: "auto" }} color="text-invert">
            Sample heading
          </Heading>
        </Box>
      </Box>
      <Box direction="row-responsive" pad="medium" fill>
        <Box basis="1/3">Blog post subheading</Box>
        <Box background="text-xweak" margin={{ left: "medium" }}>
          <Heading level={3} spaced color="text-invert">
            Sample subheading which is usually longer then heading
          </Heading>
        </Box>
      </Box>
      <Box direction="row-responsive" pad="medium" fill>
        <Box basis="1/3">Post nav heading</Box>
        <Box margin={{ left: "medium" }}>
          <Heading
            color="text-weak"
            level="6"
            margin="none"
            textAlign="start"
            spaced
            underline
            textCase="uppercase"
          >
            Previous Post
          </Heading>
        </Box>
      </Box>
    </>
  );
};
