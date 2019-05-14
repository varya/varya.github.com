import { injectGlobal } from 'styled-components'

import { colorScheme } from '../Colors/Colors.js';

/*
import LatoBoldEot from './fonts/lato-bold.eot';
import LatoBoldTtf from './fonts/lato-bold.ttf';
import LatoBoldSvg from './fonts/lato-bold.svg';
import LatoBoldWoff from './fonts/lato-bold.woff';
import LatoBoldWoff2 from './fonts/lato-bold.woff2';

import LatoBoldItalicEot from './fonts/lato-bolditalic.eot';
import LatoBoldItalicTtf from './fonts/lato-bolditalic.ttf';
import LatoBoldItalicSvg from './fonts/lato-bolditalic.svg';
import LatoBoldItalicWoff from './fonts/lato-bolditalic.woff';
import LatoBoldItalicWoff2 from './fonts/lato-bolditalic.woff2';

import LatoRegularEot from './fonts/lato-regular.eot';
import LatoRegularTtf from './fonts/lato-regular.ttf';
import LatoRegularSvg from './fonts/lato-regular.svg';
import LatoRegularWoff from './fonts/lato-regular.woff';
import LatoRegularWoff2 from './fonts/lato-regular.woff2';

import LatoItalicEot from './fonts/lato-italic.eot';
import LatoItalicTtf from './fonts/lato-italic.ttf';
import LatoItalicSvg from './fonts/lato-italic.svg';
import LatoItalicWoff from './fonts/lato-italic.woff';
import LatoItalicWoff2 from './fonts/lato-italic.woff2';
*/


injectGlobal`
/* cyrillic-ext */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX2fmRD8iI_wNU.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX_fmRD8iI_wNU.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX1fmRD8iI_wNU.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Tinos';
  font-style: normal;
  font-weight: 400;
  src: local('Tinos Regular'), local('Tinos-Regular'), url(https://fonts.gstatic.com/s/tinos/v11/buE4poGnedXvwjX7fmRD8iI_.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}



/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;



injectGlobal`
/* TODO: load from website for cyrillic pages only */

@font-face {
  font-family: 'Lato';
  src: url("/static/fonts/lato-bold.eot");
  src: local("Lato Bold"), local("Lato-Bold"), url("/static/fonts/lato-bold.eot") format("embedded-opentype"), url("/static/fonts/lato-bold.woff2") format("woff2"), url("/static/fonts/lato-bold.woff") format("woff"), url("/static/fonts/lato-bold.ttf") format("truetype"), url("/static/fonts/lato-bold.svg#lato") format("svg");
  font-weight: 700;
  font-style: normal; }
@font-face {
  font-family: 'Lato';
  src: url("/static/fonts/lato-bolditalic.eot");
  src: local("Lato Bold Italic"), local("Lato-BoldItalic"), url("/static/fonts/lato-bolditalic.eot") format("embedded-opentype"), url("/static/fonts/lato-bolditalic.woff2") format("woff2"), url("/static/fonts/lato-bolditalic.woff") format("woff"), url("/static/fonts/lato-bolditalic.ttf") format("truetype"), url("/static/fonts/lato-bolditalic.svg#lato") format("svg");
  font-weight: 700;
  font-style: italic; }
@font-face {
  font-family: 'Lato';
  src: url("/static/fonts/lato-regular.eot");
  src: local("Lato Regular"), local("Lato-Regular"), url("/static/fonts/lato-regular.eot") format("embedded-opentype"), url("/static/fonts/lato-regular.woff2") format("woff2"), url("/static/fonts/lato-regular.woff") format("woff"), url("/static/fonts/lato-regular.ttf") format("truetype"), url("/static/fonts/lato-regular.svg#lato") format("svg");
  font-weight: 400;
  font-style: normal; }
@font-face {
  font-family: 'Lato';
  src: url("/static/fonts/lato-italic.eot");
  src: local("Lato Italic"), local("Lato-Italic"), url("/static/fonts/lato-italic.eot") format("embedded-opentype"), url("/static/fonts/lato-italic.woff2") format("woff2"), url("/static/fonts/lato-italic.woff") format("woff"), url("/static/fonts/lato-italic.ttf") format("truetype"), url("/static/fonts/lato-italic.svg#lato") format("svg");
  font-weight: 400;
  font-style: italic; }
`;

injectGlobal`
* {
  font-family: 'Lato', 'Helvetica Neue', Helvetica;
  color: ${colorScheme.dark};
}

html, body {
  font-size: 20px;
  line-height: 2em;
  font-weight: 400;
}

h1 {
  font-size: 2.4em;
  font-weight: 400;
  line-height: 1.25em;
  margin-top: 0;
}

h2 {
  font-size: 2em;
  font-weight: bold;

}

h3 {
  font-size: 1.5em;
  font-weight: bold;
}

h4 {
  font-size: 1.25em;
  font-weight: bold;
}
h5 {
  font-size: 1em;
  font-weight: bold;
}

h1, h2, h3, h4, h5, h6 {
  .anchor {
    font-size: 0.75em;
    margin-left: -1em;

    svg {
      width: 0.75em;
      height: 0.75em;
    }
  }
}

a {
  color: ${colorScheme.primary}
  text-decoration: underline;
}

.clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
`;

export default {};
