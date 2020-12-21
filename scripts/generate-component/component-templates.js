// component.js
exports.component = (name) => `import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
  
/**
 * __DESCRIBE A COMPONENT__
 * 
 */

const Styled${name} = styled.div\`\`;

const ${name} = () => {
  return (
    <Styled${name}/>
  )
}

${name}.propTypes = {
  children: PropTypes.node,
};

export default ${name};
  `;

// component.stories.js
exports.story = (name) => `import React from 'react';
import ${name} from './${name}.js';

export default {
  title: 'Components/${name}',
  component: ${name},
};
export const Default = (args) => <${name} {...args}/>;
`;

// index.js
exports.index = (name) => `export { default } from "./${name}";

`;
