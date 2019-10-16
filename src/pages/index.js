import React from 'react';
import styled from '@emotion/styled';
import useLatestArticles from '../hooks/useLatestArticles';
import Articles from '../components/articles/Articles';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import {
  Section,
  SectionGrey,
  Container1200,
  Container800,
} from '../components/reusableStyles/sections/Sections';
import StyledHero from '../components/heros/StyledHero';
import Banner from '../components/reusableStyles/banner/Banner';
import { NavlinkButton2 } from '../components/Links/NavLinkButton';
import { H2 } from '../components/reusableStyles/typography/Typography';
import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';

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
      <SectionGrey>
        <Container800>
          <H2>
            Lastest Articles{' '}
            <NavlinkButton2 to="/articles"> View All</NavlinkButton2>
          </H2>
          <Articles articles={useLatestArticles()} />
        </Container800>
      </SectionGrey>
      <Section>
        <Container800>
          <SimpleNetlifyForm />
        </Container800>
      </Section>
    </Layout>
  );
};
