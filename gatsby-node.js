const path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      all: allContentfulKakuraArticles {
        nodes {
          slug
        }
      }
    }
  `);

  console.log('The data is ', data);

  // create pages also for Alex Quasar Article Content Model
  data.all.nodes.forEach(article => {
    createPage({
      path: `articles/${article.slug}`,
      component: path.resolve('./src/templates/Article.js'),
      context: {
        slug: article.slug,
      },
    });
  });
};
