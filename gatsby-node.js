const path = require("path");

const { createFilePath } = require(`gatsby-source-filesystem`);

const REPO_URL = "https://github.com/varya/varya.github.com";
const REPO_BRANCH = "develop";
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    let slug = createFilePath({ node, getNode, basePath: `pages` });

    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    // only for posts
    if (
      fileNode.sourceInstanceName === "posts" ||
      fileNode.sourceInstanceName === "life"
    ) {
      //const folder = node.frontmatter.old ? 'issues' : fileNode.sourceInstanceName;
      const folder = fileNode.sourceInstanceName;

      if (node.frontmatter.v2 || node.frontmatter.old) {
        let paths = fileNode.relativePath.split("index_en.md");
        if (paths[1] === "") {
          slug = `en/${folder}/${paths[0]}`;
        }
        paths = fileNode.relativePath.split("index_ru.md");
        if (paths[1] === "") {
          slug = `ru/${folder}/${paths[0]}`;
        }
      } else {
        slug = `blog${slug}`;
      }
    }

    const newSlug = `${separtorIndex ? "/" : ""}${slug.substring(
      shortSlugStart
    )}`;
    createNodeField({
      node,
      name: `slug`,
      value: newSlug,
    });

    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : "",
    });

    // detect Node language
    let lang = "en";
    if (fileNode.base.endsWith("_ru.md")) {
      lang = "ru";
    }
    createNodeField({
      node,
      name: `lang`,
      value: lang,
    });

    let disqusIdentifier = slug.split("/").filter((item) => item != "");
    if (node.frontmatter.v2) {
      if (disqusIdentifier[0] === "en" || disqusIdentifier[0] === "ru") {
        disqusIdentifier.shift();
      }
      disqusIdentifier.push("index");
      disqusIdentifier.push(lang);
    }
    if (node.frontmatter.old) {
      disqusIdentifier = disqusIdentifier.map((item) =>
        item === "posts" ? "issues" : item
      );
    }
    disqusIdentifier = disqusIdentifier.join("-");

    createNodeField({
      node,
      name: `disqusIdentifier`,
      value: disqusIdentifier,
    });

    createNodeField({
      node,
      name: "fileRelativePath",
      value: fileNode.relativePath,
    });

    const level = (fileNode.relativePath.match(/\//g) || []).length;
    createNodeField({
      node,
      name: `level`,
      value: level,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const postsData = await graphql(`
    query {
      blogPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//posts//" }
          fields: { lang: { eq: "en" } }
        }
        sort: {
          fields: [fields___prefix, frontmatter___date]
          order: [DESC, DESC]
        }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              prefix
              disqusIdentifier
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              v2
              old
              date
              layout
              tags
            }
          }
        }
      }
      ruPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//posts//" }
          fields: { lang: { ne: "en" } }
        }
        sort: {
          fields: [fields___prefix, frontmatter___date]
          order: [DESC, DESC]
        }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              prefix
              disqusIdentifier
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              v2
              old
              date
              layout
              tags
            }
          }
        }
      }
      lifePosts: allMdx(
        filter: { fileAbsolutePath: { regex: "//life//" } }
        sort: {
          fields: [fields___prefix, frontmatter___date]
          order: [DESC, DESC]
        }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              prefix
              disqusIdentifier
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              v2
              old
              date
              layout
              tags
            }
          }
        }
      }
    }
  `);

  if (postsData.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const blogPosts = postsData.data.blogPosts.edges;

  const otherPosts = [
    ...postsData.data.ruPosts.edges,
    ...postsData.data.lifePosts.edges,
  ];

  blogPosts.forEach(({ node }, index) => {
    const slug = node.fields && node.fields.slug;
    const next = index === 0 ? undefined : blogPosts[index - 1].node;
    const prev =
      index === blogPosts.length - 1 ? undefined : blogPosts[index + 1].node;
    const fileSourceUrl = `${REPO_URL}/edit/${REPO_BRANCH}/content/posts/${node.fields.fileRelativePath}`;

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/post/Post.js`),
      context: {
        slug,
        prev,
        next,
        fileSourceUrl,
      },
    });
  });

  // Create all the old post which only need to be served t the urls, but do not need to appear in blog index.
  otherPosts.forEach(({ node }) => {
    const slug = node.fields.slug;

    createPage({
      path: slug,
      component: path.resolve(`./src/components/Page/Page--post.js`),
      context: {
        slug,
      },
    });
  });
};

// This is a shortcut so MDX can import components without gross relative paths.
// Example: import { Image } from '$components';
// Borrowed from: https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/57a13c119a4c23b3d7c14c971fb61a3625b9fb4a/gatsby-node.js

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { $components: path.resolve(__dirname, "src/components") },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-export-default-from",
  });
};
