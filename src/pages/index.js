import React from 'react';
import styled from '@emotion/styled';
import useLatestArticles from '../hooks/useLatestArticles';
import Articles from '../components/articles/Articles';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import {
  Section,
  SectionGrey,
  Container800,
} from '../components/reusableStyles/sections/Sections';
import StyledHero from '../components/heros/StyledHero';
import Banner from '../components/reusableStyles/banner/Banner';

import { H2 } from '../components/reusableStyles/typography/Typography';
import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';

const CustomSectionGrey = styled(SectionGrey)`
  padding-top: 0.5rem;
`;

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ({ data }) => {
  console.log('articles are ', useLatestArticles());
  return (
    <Layout full={true}>
      <SEO title="Diamonds Consulting" description="We do data consulting" />
      <StyledHero
        home="true"
        gradient="true"
        img={data.defaultBcg.childImageSharp.fluid}
      >
        <Banner
          title="DIAMONDS CONSULTING"
          info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minima consectetur culpa ullam optio laboriosam officiis"
        />
      </StyledHero>
      <CustomSectionGrey>
        <Container800>
          {/* <H2>
            Lastest Articles{' '}
            <NavlinkButton2 to="/articles"> View All</NavlinkButton2>
          </H2> */}
          <Articles articles={useLatestArticles()} />
        </Container800>
      </CustomSectionGrey>
      <Section>
        <Container800>
          <H2>Contact US</H2>
          <SimpleNetlifyForm />
        </Container800>
      </Section>
    </Layout>
  );
};
