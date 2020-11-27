const path = require("path");
const config = require("./content/meta/config");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    pathPrefix: config.pathPrefix,
    facebook: {
      appId: process.env.FB_APP_ID ? process.env.FB_APP_ID : "",
    },
    author: "Varya Stepanova",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,

      options: {
        plugins: ["gatsby-remark-unwrap-images", "gatsby-remark-images"], //becaiuse of this: https://github.com/cedricdelpoux/gatsby-remark-unwrap-images/issues/2#issuecomment-526953234
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: path.resolve("./src/components/Page/Page--outer"),
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-unwrap-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
              backgroundColor: "transparent",
            },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`, `h3`, `h4`, `h5`, `h6`],
            },
          },
        ],
      },
    },
    // {
    //   // Prevent wrapping images with p tag, when parsing markdown.
    //   // Wrapping is undesired bevause it affects style of images
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: ["gatsby-remark-unwrap-images"],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `life`,
        path: `${__dirname}/content/life`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icons: [
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /src/,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
  ],
};
