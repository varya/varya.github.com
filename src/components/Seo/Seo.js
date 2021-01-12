import React from "react";
import PropTypes from "prop-types";
const path = require("path");
import config from "../../../content/meta/config";
import Helmet from "react-helmet";

const Seo = ({ data, title, description, keywords, cover, location }) => {
  const pageTitle = ((data || {}).frontmatter || {}).title;
  const dataDescription =
    ((data || {}).frontmatter || {}).description ||
    (((data || {}).frontmatter || {}).meta || {}).desc;

  const pageDescription = dataDescription
    ? dataDescription
    : description || config.siteDescription;
  const pageCover = ((data || {}).frontmatter || {}).cover;
  const pageSlug =
    ((data || {}).fields || {}).slug || (location ? location.pathname : "");

  const canonical = ((data || {}).frontmatter || {}).canonical;
  let fullTitle;
  if (!title) {
    fullTitle = pageTitle
      ? `${pageTitle} - ${config.shortSiteTitle}`
      : config.siteTitle;
  } else {
    fullTitle = title;
  }

  const image = pageCover
    ? pageCover.childImageSharp.fluid.src
    : cover || config.siteImage;

  const imageUrl = path.join(config.siteUrl, image);
  const url = path.join(config.siteUrl, config.pathPrefix, pageSlug);

  const pageKeywords = keywords || config.defaultKeywords;
  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og: http://ogp.me/ns#",
      }}
      meta={[].concat(
        pageKeywords && pageKeywords.length > 0
          ? {
              name: "keywords",
              content: pageKeywords.join(", "),
            }
          : []
      )}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={pageDescription} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
      />
      <meta
        name="twitter:site"
        content={
          config.authorTwitterAccount ? `@${config.authorTwitterAccount}` : ""
        }
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array,
  cover: PropTypes.string,
  location: PropTypes.object,
};

export default Seo;
