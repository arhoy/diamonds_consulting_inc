import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
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
import Hero from '../components/heros/Hero';
import { Section1 } from '../components/_homePage/Section1/Section1';
import { Section2 } from '../components/_homePage/Section2/Section2';
import { Section3 } from '../components/_homePage/Section3/Section3';
import { Section4 } from '../components/_homePage/Section4/Section4';
import { Section5 } from '../components/_homePage/Section5/Section5';
const CustomSectionGrey = styled(SectionGrey)`
  padding-top: 4rem;
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
          info="Helping companies with optimizing data sets, data intelligence and making better informed decisions using data analytics"
        />
      </StyledHero>

      <Section1 />
      <Section2 />
      <Fade bottom>
        <Section3 />
      </Fade>
      <Fade bottom>
        <Section4 />
      </Fade>
      <Fade bottom>
        <Section5 />
      </Fade>
      <CustomSectionGrey>
        <Container800>
          <H2>Our Blog</H2>
          <Articles articles={useLatestArticles()} />
        </Container800>
      </CustomSectionGrey>
      <Section>
        <Container800>
          <H2>Contact US</H2>
          <SimpleNetlifyForm />
        </Container800>
      </Section>
      <Hero />
    </Layout>
  );
};
