import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Box, Button } from "grommet";
// import { Calendar } from "grommet-icons";
// import { Heading, Image, Link, Paragraph } from "@components";
import { Widget } from "../../components/Widget";

/**
 * Post Preview widget with multiple links
 * Main difference from the base widget - it's not wrapped with link itself, but render multiple lonks at the bottom.
 * @param  {string} cover, title, excerpt, slug, readingTime, date - post data
 * @param {string} direction - horizontal/vertical layout
 * @param {string} height - in row layot, height of the whole widget. In column layout - height of a cover
 */

const StyledLink = styled(Button)`
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;

const WidgetMulti = ({ title, excerpt, links, ...props }) => (
  <Widget title={title} excerpt={excerpt} fill="horizontal" {...props}>
    {links && (
      <Box direction="row" justify="start" gap="large">
        {Object.entries(links).map(([label, href]) => (
          <StyledLink
            margin={{ top: "medium" }}
            plain
            key={label}
            label={label}
            href={href}
            target="_blank"
            rel="noopener"
          />
        ))}
      </Box>
    )}
  </Widget>
);

WidgetMulti.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  links: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default WidgetMulti;
