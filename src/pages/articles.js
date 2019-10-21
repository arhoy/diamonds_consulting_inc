import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';
import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Articles from '../components/articles/Articles';
import { DefaultPageContainer } from '../components/layouts/PageContainers';
import { H1 } from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';

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

const CustomSection = styled(Section)`
  padding: 0.5rem;
`;

const articles = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Diamonds Articles on data and business intelligence"
        description="Please see all the articles below, articles on Full Stack React and Gatsby and more"
      />
      <DefaultPageContainer>
        <CustomSection>
          <H1>Articles</H1>
          <Articles articles={data.allArticles.nodes} />
        </CustomSection>
      </DefaultPageContainer>
    </Layout>
  );
};

export default articles;
