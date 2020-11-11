import { Box, Text } from "grommet";
import React from "react";
import MetaGroup from "./MetaGroup";
export default {
  title: "Components/Meta Group",
  component: MetaGroup,
};

export const Basic = () => (
  <Box align="center" fill background={"dark-4"} pad="medium">
    <MetaGroup>
      <Text color="text-invert">Meta 1</Text>
      <Text color="text-invert">Meta 2</Text>
      <Text color="text-invert">Meta 3</Text>
    </MetaGroup>
    <MetaGroup>
      <Text color="text-invert">Longer meta data </Text>
      <Text color="text-invert">Another really long meta data</Text>
      <Text color="text-invert">
        Seriously long meta data which is supposed to wrap
      </Text>
    </MetaGroup>
  </Box>
);
