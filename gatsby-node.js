const path = require("path");
const config = require("./content/meta/config");
const readingTime = require("reading-time");

const { createFilePath } = require(`gatsby-source-filesystem`);

const REPO_URL = "https://github.com/varya/varya.github.com";
const REPO_BRANCH = "develop";

// TODO: move to separate file
//#Source https://bit.ly/2neWfJ2
const toKebabCase = (str) =>
  str &&
  str
    .trim()
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  const isOldPost = (node) => node.frontmatter.v2 || node.frontmatter.old;
  const createNewSlug = (fileNode, filePath, isOld) => {
    const slugBase = fileNode.relativeDirectory;
    const slugPrefix =
      // for newer posts replace "posts" in path to "blog" to match previous urls
      !isOld && fileNode.sourceInstanceName === "posts"
        ? "blog"
        : fileNode.sourceInstanceName;

    if (isOld) {
      const langPrefix = filePath.split("index_")[1] || "";
      return `${langPrefix}${slugPrefix}/${slugBase}/`;
    }
    return `${slugPrefix}/${slugBase}/`;
  };

  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode, basePath: `/` });

    let slug = createNewSlug(fileNode, filePath, isOldPost(node));

    createNodeField({
      node,
      name: `slug`,
      value: slug,
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

    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.body),
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
  const postTemplate = path.resolve("./src/templates/Post.js");
  const blogTemplate = path.resolve("./src/templates/BlogIndex.js");
  const tagTemplate = path.resolve("./src/templates/TagIndex.js");

  const postsProjectsData = await graphql(`
    query {
      projectPosts: allMdx(
        filter: { internal: { contentFilePath: { regex: "//projects//" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              date
              link
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  const postsDesignSystemData = await graphql(`
    query {
      designSystemsPosts: allMdx(
        # filter: { fileAbsolutePath: { regex: "//design-systems//" } }
        filter: {
          internal: { contentFilePath: { regex: "//design-systems//" } }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
              readingTime {
                minutes
              }
            }
          }
        }
      }
    }
  `);

  const postsBlogData = await graphql(`
    query {
      blogPosts: allMdx(
        filter: {
          internal: { contentFilePath: { regex: "//posts//" } }
          fields: { lang: { eq: "en" } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              disqusIdentifier
              level
              fileRelativePath
              lang
              readingTime {
                minutes
              }
            }
            frontmatter {
              title
              subTitle
              link
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

  const postsRuData = await graphql(`
    query {
      ruPosts: allMdx(
        filter: {
          internal: { contentFilePath: { regex: "//posts//" } }
          fields: { lang: { ne: "en" } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              disqusIdentifier
              level
              fileRelativePath
              lang
              readingTime {
                minutes
              }
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

  const postsLifeData = await graphql(`
    query {
      lifePosts: allMdx(
        filter: { internal: { contentFilePath: { regex: "//life//" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              disqusIdentifier
              level
              fileRelativePath
              lang
              readingTime {
                minutes
              }
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

  if (
    postsRuData.errors ||
    postsLifeData.errors ||
    postsProjectsData.errors ||
    postsDesignSystemData.errors ||
    postsBlogData.errors
  ) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const blogPosts = postsBlogData.data.blogPosts.edges;
  const projectPosts = postsProjectsData.data.projectPosts.edges;

  const otherPosts = [
    ...postsRuData.data.ruPosts.edges,
    ...postsLifeData.data.lifePosts.edges,
    // ...postsProjectsData.data.projectPosts.edges,
    ...postsDesignSystemData.data.designSystemsPosts.edges,
  ];

  const tagSet = new Set();

  blogPosts.forEach(({ node }, index) => {
    const slug = node.fields && node.fields.slug;
    const next = index === 0 ? undefined : blogPosts[index - 1].node;
    const prev =
      index === blogPosts.length - 1 ? undefined : blogPosts[index + 1].node;
    const fileSourceUrl = `${REPO_URL}/edit/${REPO_BRANCH}/content/posts/${node.fields.fileRelativePath}`;

    // Generate a list of tags
    const tags = node.frontmatter.tags && node.frontmatter.tags.split(",");
    if (tags) {
      tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
        prev,
        next,
        fileSourceUrl,
      },
    });
  });

  projectPosts.forEach(({ node }) => {
    const slug = node.fields.slug;


    createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug,
      },
    });
  });

  // Create all the old post which only need to be served t the urls, but do not need to appear in blog index.
  otherPosts.forEach(({ node }) => {
    const slug = node.fields.slug;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });

  // Create blog index pages
  // Adapted from: https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
  const { postsPerPage } = config || 10; //default value
  const pageCount = Math.ceil(blogPosts.length / postsPerPage);

  [...Array(pageCount)].forEach((_val, pageNum) => {
    createPage({
      path: pageNum === 0 ? `/blog` : `/blog/${pageNum + 1}/`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: pageNum * postsPerPage,
        pageCount,
        currentPage: pageNum + 1,
      },
    });
  });

  //  Create tag pages
  tagSet.forEach((tag) => {
    const tagSlug = toKebabCase(tag);
    createPage({
      path: `/blog/${tagSlug}/`,
      component: tagTemplate,
      context: { tag, tagSlug },
    });
  });
};
