import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ListContainer = styled.dl`
  overflow: hidden;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25em;
`;

const ListTime = styled.dt`
  float: left;
  font-weight: bold;
  min-width: 3em;
`;

const ListItem = styled.dd`
  float: left;
  width: 90%;
  margin-bottom: 2em;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Timetable = ({ data }) => (
  <ListContainer>
    {data.map((item) => (
      <>
        <ListTime>{item.time}</ListTime>
        <ListItem>{item.content}</ListItem>
      </>
    ))}
  </ListContainer>
);

Timetable.propTypes = {
  data: PropTypes.object,
};

export default Timetable;
