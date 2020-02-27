import React from "react"
import PropTypes from "prop-types"

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = '';
    //stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

const googleAnalytics = `
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-128056453-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-128056453-1');
</script>
`;

export default function HTML(props) {
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
  }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {css}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#D0E0D8" />
        <meta name="apple-mobile-web-app-title" content="Lazywill" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-57x57.png" sizes="57x57" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-60x60.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180x180.png" sizes="180x180" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div dangerouslySetInnerHTML={{ __html: googleAnalytics }} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
