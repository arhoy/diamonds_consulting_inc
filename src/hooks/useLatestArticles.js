import { graphql, useStaticQuery } from 'gatsby';

const useLatestArticles = () => {
  const data = useStaticQuery(graphql`
    query lastestArticles {
      allArticles: allContentfulKakuraArticles(
        sort: { fields: publishDate, order: DESC }
      ) {
        nodes {
          slug
          title
          description {
            description
          }
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
