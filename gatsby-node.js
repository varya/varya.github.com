//const webpack = require("webpack");
const _ = require("lodash");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const Promise = require("bluebird");

const { createFilePath } = require(`gatsby-source-filesystem`);

const REPO_URL = 'https://github.com/varya/varya.github.com';
const REPO_BRANCH = 'develop';

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    let slug = createFilePath({ node, getNode, basePath: `pages` });

    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    // detect Node language
    let lang = 'en';
    if (fileNode.base.endsWith('_ru.md')) {
      lang = 'ru';
    }
    createNodeField({
      node,
      name: `lang`,
      value: lang
    });

    createNodeField({
      node,
      name: 'fileRelativePath',
      value: fileNode.relativePath
    })

    // only for posts
    if (fileNode.sourceInstanceName === 'posts' || fileNode.sourceInstanceName === 'life') {

      //const folder = node.frontmatter.old ? 'issues' : fileNode.sourceInstanceName;
      const folder = fileNode.sourceInstanceName;

      if (node.frontmatter.v2 || node.frontmatter.old) {

        let paths = fileNode.relativePath.split('index_en.md');
        if (paths[1] === '') {
          slug = `en/${folder}/${paths[0]}`
        }
        paths = fileNode.relativePath.split('index_ru.md');
        if (paths[1] === '') {
          slug = `ru/${folder}/${paths[0]}`
        }
      } else {
        slug = `blog${slug}`
      }

    }

    createNodeField({
      node,
      name: `slug`,
      value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
    });
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });

    let disqusIdentifier = slug.split('/').filter(item => item != '');
    if (node.frontmatter.v2) {
      if (disqusIdentifier[0] === 'en' || disqusIdentifier[0] === 'ru') {
        disqusIdentifier.shift();
      }
      disqusIdentifier.push('index');
      disqusIdentifier.push(lang);
    }
    if (node.frontmatter.old) {
      disqusIdentifier = disqusIdentifier.map(item => item === 'posts' ? 'issues' : item)
    }
    disqusIdentifier = disqusIdentifier.join('-');

    createNodeField({
      node,
      name: `disqusIdentifier`,
      value: disqusIdentifier
    });

    const level = (fileNode.relativePath.match(/\//g) || []).length;
    createNodeField({
      node,
      name: `level`,
      value: level
    });

  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "//posts|pages|life//" } }
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fileAbsolutePath
                  excerpt(format: HTML)
                  fields {
                    slug
                    prefix
                    lang
                    disqusIdentifier
                    level
                    fileRelativePath
                  }
                  frontmatter {
                    title
                    subTitle
                    v2
                    old
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // Create posts
        const posts = items.filter(item => /posts/.test(item.node.fileAbsolutePath));
        posts.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          const old = node.frontmatter.old;
          const next = index === 0 ? undefined : posts[index - 1].node;
          const prev = index === posts.length - 1 ? undefined : posts[index + 1].node;

          const fileSourceUrl = `${REPO_URL}/edit/${REPO_BRANCH}/content/posts/${node.fields.fileRelativePath}`;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
              fileSourceUrl
            },
          });
        });

        // Create life  posts
        const lifePosts = items.filter(item => /life/.test(item.node.fileAbsolutePath));
        lifePosts.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          const next = index === 0 ? undefined : lifePosts[index - 1].node;
          const prev = index === lifePosts.length - 1 ? undefined : lifePosts[index + 1].node;

          const fileSourceUrl = `${REPO_URL}/edit/${REPO_BRANCH}/content/life/${node.fields.fileRelativePath}`;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
              fileSourceUrl
            }
          });
        });

        // and pages.
        const pages = items.filter(item => /pages/.test(item.node.fileAbsolutePath));
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          let breadCrumbs = [];
          /* making bread crumbs */
          if (node.fields.level > 1) {
            const slugItems = node.fields.slug.split('/').filter(item => item !== '');
            slugItems.reduce((acc, val) => {
              /* find parent page */
              const p = pages.find(item => item.node.fields.slug === acc) || {
                node: {
                  fields: {
                    slug: '/'
                  },
                  frontmatter: {
                    title: 'Home'
                  }
                }
              }
              breadCrumbs.push(p);
              return acc + val + '/';
            }, '/')
            breadCrumbs.push({node, last: true});
          }

          const fileSourceUrl = `${REPO_URL}/edit/${REPO_BRANCH}/content/pages/${node.fields.fileRelativePath}`;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              breadCrumbs,
              fileSourceUrl
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  switch (stage) {
    case "build-javascript":
      {
        // let components = store.getState().pages.map(page => page.componentChunkName);
        // components = _.uniq(components);
        // config.plugin("CommonsChunkPlugin", webpack.optimize.CommonsChunkPlugin, [
        //   {
        //     name: `commons`,
        //     chunks: [`app`, ...components],
        //     minChunks: (module, count) => {
        //       const vendorModuleList = []; // [`material-ui`, `lodash`];
        //       const isFramework = _.some(
        //         vendorModuleList.map(vendor => {
        //           const regex = new RegExp(`[\\\\/]node_modules[\\\\/]${vendor}[\\\\/].*`, `i`);
        //           return regex.test(module.resource);
        //         })
        //       );
        //       return isFramework || count > 1;
        //     }
        //   }
        // ]);


        actions.setWebpackConfig({
          module: {
            rules: [
              {
                test: /\.yaml$/,
                include: path.resolve("data"),
                loader: "yaml"
              },
            ],
          },
          plugins: [
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              reportFilename: "./report/treemap.html",
              openAnalyzer: true,
              logLevel: "error",
              defaultSizes: "gzip"
            })
          ],
        })

      }
      break;
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
      name: "syntax-dynamic-import",
      name: "dynamic-import-webpack",
      name: "import",
      options: {
        libraryName: "antd",
        style: "css"
      },
      name: "styled-jsx/babel",
      options: {
        plugins: [
          "styled-jsx-plugin-postcss",
          [
            "styled-jsx-plugin-stylelint",
            {
              stylelint: {
                rules: {
                  "block-no-empty": true,
                  "color-no-invalid-hex": true,
                  "unit-no-unknown": true,
                  "property-no-unknown": true,
                  "declaration-block-no-shorthand-property-overrides": true,
                  "selector-pseudo-element-no-unknown": true,
                  "selector-type-no-unknown": true,
                  "media-feature-name-no-unknown": true,
                  "no-empty-source": true,
                  "no-extra-semicolons": true,
                  "function-url-no-scheme-relative": true,
                  "declaration-no-important": true,
                  "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
                  "shorthand-property-no-redundant-values": true,
                  "no-duplicate-selectors": null,
                  "declaration-block-no-duplicate-properties": null,
                  "no-descending-specificity": null
                }
              }
            }
          ]
        ]
      }
  });
};
