import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Footer as GrommetFooter,
  Grid,
  ResponsiveContext,
  Text,
} from "grommet";
import { Paragraph, SocialLinks } from "@components";

/**
 * Footer component
 *
 */

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grid areas={areas[size]} {...props}>
      {children}
    </Grid>
  );
};

const Footer = () => {
  return (
    <GrommetFooter pad="medium" background="light-1" justify="center">
      <ResponsiveGrid
        columns={["25%", "25%", "25%", "25%"]}
        rows={["auto", "auto", "auto"]}
        areas={{
          small: [
            { name: "call-to-action", start: [0, 0], end: [3, 0] },
            { name: "social", start: [0, 1], end: [3, 1] },
            { name: "copyright", start: [0, 2], end: [3, 2] },
          ],
          medium: [
            { name: "call-to-action", start: [0, 0], end: [2, 0] },
            { name: "social", start: [3, 0], end: [3, 0] },
            { name: "copyright", start: [0, 1], end: [3, 1] },
          ],
          large: [
            { name: "call-to-action", start: [0, 0], end: [2, 0] },
            { name: "social", start: [3, 0], end: [3, 0] },
            { name: "copyright", start: [0, 1], end: [3, 1] },
          ],
        }}
      >
        <Box
          gridArea="call-to-action"
          align="center"
          direction="row"
          gap="large"
        >
          <Paragraph size="small">
            I am available for hire to consult, advise, and develop with
            passionate product teams across the globe. (Replace text)
          </Paragraph>
          <Button
            primary
            label="Get in touch"
            margin={{ horizontal: "xxsmall" }}
          />
        </Box>
        <Box gridArea="social" alignSelf="center" justify="end">
          <SocialLinks background="light-1" />
        </Box>

        <Box gridArea="copyright" align="center" margin={{ top: "medium" }}>
          <Text color="text-xweak" size="small">
            © Varvara Stepanova {new Date().getFullYear()}
          </Text>
        </Box>
      </ResponsiveGrid>
    </GrommetFooter>
  );
};

export default Footer;

ResponsiveGrid.propTypes = {
  children: PropTypes.node,
  areas: PropTypes.array,
};
