import React from "react";
import styled, { injectGlobal } from "styled-components";

import { Typography as AntTypography } from "antd";
import { typography, colors } from "../tokens";

/* Inject local font */
injectGlobal`
/* roboto-300 - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.eot'); /* IE9 Compat Modes */
  src: local('Roboto Light'), local('Roboto-Light'),
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.woff') format('woff'), /* Modern Browsers */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-300italic - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  src: url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.woff') format('woff'), /* Modern Browsers */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-700 - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.eot'); /* IE9 Compat Modes */
  src: local('Roboto Bold'), local('Roboto-Bold'),
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.woff') format('woff'), /* Modern Browsers */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.svg#Roboto') format('svg'); /* Legacy iOS */
}
`;

const StyledTitle = styled(AntTypography.Title)`
  && {
    font-family: ${typography.type.primary};
    color: ${colors.character.title};
    line-height: 1.8;
  }
`;

const Title = (props) => <StyledTitle {...props} />;

const StyledText = styled(AntTypography.Text)`
  font-family: ${typography.type.primary};
  color: ${colors.character.primary};
  line-height: 1.8;
  font-size: 1rem;
`;

const Text = (props) => <StyledText {...props} />;

const StyledParagraph = styled(AntTypography.Paragraph)`
  font-family: ${typography.type.primary};
  color: ${colors.character.primary};
  line-height: 1.8;
  font-size: 1rem;
  text-align: justify;
`;

const Paragraph = (props) => <StyledParagraph {...props} />;

export { Text, Title, Paragraph };
