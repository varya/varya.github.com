import React from "react";
import PropTypes from "prop-types";

import config from "@content/meta/config";
import Helmet from "react-helmet";

const getImageUrl = ({ data, cover }) => {
  const pageCover = ((data || {}).frontmatter || {}).cover;
  const image =
    pageCover && pageCover.childImageSharp
      ? pageCover.childImageSharp.gatsbyImageData
      : cover || config.siteImage;

  return config.siteUrl + image;
};

const Seo = ({ data, title, description, keywords, cover, location, imageWidth, imageHeight, noindex }) => {
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

  const imageUrl = getImageUrl({ data, cover });
  // Fix URL construction to avoid double slashes
  const cleanSlug = pageSlug.startsWith('/') ? pageSlug : `/${pageSlug}`;
  const url = config.pathPrefix 
    ? `${config.siteUrl}/${config.pathPrefix}${cleanSlug}`
    : `${config.siteUrl}${cleanSlug}`;

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
      <meta name="title" content={fullTitle} />
      <meta name="description" content={pageDescription} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      {imageWidth && <meta property="og:image:width" content={String(imageWidth)} />}
      {imageHeight && <meta property="og:image:height" content={String(imageHeight)} />}
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.shortSiteTitle} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
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
      {noindex && (
        <meta
          name="robots"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
      )}
      {noindex && (
        <meta
          name="googlebot"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
      )}
      {noindex && <meta name="bingbot" content="noindex, nofollow, noarchive" />}
      {noindex && <meta name="GPTBot" content="noindex, nofollow" />}
      {noindex && <meta name="ChatGPT-User" content="noindex, nofollow" />}
      {noindex && <meta name="ClaudeBot" content="noindex, nofollow" />}
      {noindex && <meta name="anthropic-ai" content="noindex, nofollow" />}
      {noindex && <meta name="Google-Extended" content="noindex, nofollow" />}
      {noindex && <meta name="PerplexityBot" content="noindex, nofollow" />}
      {noindex && <meta name="CCBot" content="noindex, nofollow" />}
      {/* DeviantArt / Mojeek convention for AI-training opt-out */}
      {noindex && <meta name="robots" content="noai, noimageai" />}
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
  noindex: PropTypes.bool,
};

export default Seo;

export const SeoImage = ({ data, cover }) => {
  const imageUrl = getImageUrl({ data, cover });
  return (
    <img
      src={imageUrl}
      width="0"
      height="0"
      alt="Preview image"
      aria-hidden="true"
    />
  );
};
