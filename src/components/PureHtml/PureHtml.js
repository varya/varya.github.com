import React from "react";

const PureHtml = ({ html }) => {

  return (
    <div dangerouslySetInnerHTML={{ __html: html }}/>
  );
};

export default PureHtml;
