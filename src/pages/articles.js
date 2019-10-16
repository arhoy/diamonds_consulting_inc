import React from 'react';
import Layout from '../components/layouts/Layout';
import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Articles from '../components/articles/Articles';
import { DefaultPageContainer } from '../components/layouts/PageContainers';
import { H1 } from '../components/reusableStyles/typography/Typography';
import { MarginT6V } from '../components/reusableStyles/modular/modularStyles';

export const getArticles = graphql`
  query {
    allArticles: allContentfulDiamondArticles(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      nodes {
        slug
        title
        publishDate(formatString: "MMM Do YYYY")
        description
        heroImage {
          fluid {
            src
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const articles = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Alex Quasar Articles on Gatsby and Full Stack React"
        description="Please see all the articles below, articles on Full Stack React and Gatsby and more"
      />
      <DefaultPageContainer>
        <MarginT6V />
        <H1>Articles</H1>
        <Articles articles={data.allArticles.nodes} />
      </DefaultPageContainer>
    </Layout>
  );
};

export default articles;
