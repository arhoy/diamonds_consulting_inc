import { graphql, useStaticQuery } from 'gatsby';

const useLatestArticles = () => {
  const data = useStaticQuery(graphql`
    query lastestArticles {
      allArticles: allContentfulKakuraArticles(
        limit: 5
        sort: { fields: publishDate, order: DESC }
      ) {
        nodes {
          slug
          title
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
