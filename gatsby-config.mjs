/**
 * @type {import('gatsby').GatsbyConfig}
 */
import remarkGfm from "remark-gfm";
import configuration from "./content/meta/config.js";
import postcssPresetEnv from "postcss-preset-env";

const config = {
  siteMetadata: {
    title: configuration.siteTitle,
    description: configuration.siteDescription,
    siteUrl: configuration.siteUrl,
    pathPrefix: configuration.pathPrefix,
    facebook: {
      appId: process.env.FB_APP_ID ? process.env.FB_APP_ID : "",
    },
    author: "Varya Stepanova",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [postcssPresetEnv({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
              backgroundColor: "transparent",
              wrapperStyle: "width: 100%;",
            },
          },
          "gatsby-remark-unwrap-images",
          `gatsby-remark-copy-relative-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`, `h3`, `h4`, `h5`, `h6`],
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       "gatsby-remark-unwrap-images",
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 590,
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VNR46J539J",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `./content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `life`,
        path: `./content/life`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `design-systems`,
        path: `./content/design-systems`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: configuration.manifestName,
        short_name: configuration.manifestShortName,
        start_url: configuration.manifestStartUrl,
        background_color: configuration.manifestBackgroundColor,
        theme_color: configuration.manifestThemeColor,
        display: configuration.manifestDisplay,
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /src/,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@static": "static",
          "@common": "src/common",
          "@content": "content",
        },
        extensions: ["js"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
  ],
};

export default config;
