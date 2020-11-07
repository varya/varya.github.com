import React from "react";
import MetaGroup from "./MetaGroup";
import Link from "gatsby-link";

export default {
  title: "Components/Meta Group",
  component: MetaGroup,
};

export const Basic = () => (
  <>
    <MetaGroup>
      <Link to="/somewhere"> Meta 1</Link>
      <Link to="/somewhere"> Meta 2</Link>
      <Link to="/somewhere"> Meta 3</Link>
    </MetaGroup>
    <div style={{ height: "50px" }} />
    <MetaGroup>
      <Link to="/somewhere"> Longer meta data </Link>
      <Link to="/somewhere"> Another really long meta data</Link>
      <Link to="/somewhere">
        Seriously long meta data which is supposed to wrap
      </Link>
    </MetaGroup>
  </>
);
