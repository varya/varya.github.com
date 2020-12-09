import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Community from "./community.svg";
import Processes from "./processes.svg";
import SharedPractices from "./shared-practices.svg";
import Tools from "./tools.svg";

const Container = styled.span`
  width: 150px;
  padding: 15px;
  margin-right: ${(props) => (props.side === "left" ? "15px" : "0")};
  margin-left: ${(props) => (props.side === "right" ? "15px" : "0")};
  float: ${(props) => props.side};
`;

class DsAspects extends React.Component {
  render() {
    const Icon =
      {
        "shared-practices": SharedPractices,
        tools: Tools,
        processes: Processes,
        community: Community,
      }[this.props.aspect] || Tools;

    return (
      <Container side={this.props.side || "left"}>
        <Icon />
      </Container>
    );
  }
}

DsAspects.propTypes = {
  aspect: PropTypes.string,
  side: PropTypes.string,
};

export default DsAspects;
