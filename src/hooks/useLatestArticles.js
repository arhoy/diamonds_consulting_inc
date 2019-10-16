import { graphql, useStaticQuery } from 'gatsby';

const useLatestArticles = () => {
  const data = useStaticQuery(graphql`
    query lastestArticles {
      allArticles: allContentfulDiamondArticles(
        sort: { fields: publishDate, order: DESC }
        limit: 10
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          id
          slug
          title
          description
          publishDate(formatString: "MMM Do YYYY")

          heroImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);
  const articles = data.allArticles.nodes;
  return articles;
};

export default useLatestArticles;
