// Mirror gatsby-browser.js so the same global stylesheet is also applied
// during server-side rendering (avoids a flash of unstyled code blocks on
// first paint).

import "./src/styles/prism-theme.css";
