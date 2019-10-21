import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';
import styled from '@emotion/styled';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

const ThankyouStyled = styled.div`
  p {
    margin-top: 1rem;
  }
`;

const Thankyou = () => {
  return (
    <Layout>
      <ThankyouStyled>
        <SEO title="Thank you form" description="This is the thank you page." />
        <Section>
          <Container1200>
            <h3>Thank you! Your form submission was recieved!</h3>
            <p>We will get back to you shortly</p>
          </Container1200>
        </Section>

        <Hero />
      </ThankyouStyled>
    </Layout>
  );
};

export default Thankyou;
