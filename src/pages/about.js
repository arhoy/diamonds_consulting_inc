import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import styled from '@emotion/styled';

import { H1, H2 } from '../components/reusableStyles/typography/Typography';
import { ListInline } from '../components/reusableStyles/lists/List';
import { ListVertical as ListWithDescription } from '../components/reusableStyles/lists/ListWithDescription';
import currentWebsites from '../constants/currentWebsites';
import { Margin2 } from '../components/reusableStyles/modular/modularStyles';
import currentlyUsing from '../constants/currentlyUsing';

import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';
import {
  SectionGrey,
  Container800,
  Section,
} from '../components/reusableStyles/sections/Sections';
import Hero from '../components/heros/Hero';

const AboutStyled = styled.div`
  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.darkgrey};
  }
`;

const Div = styled.div`
  padding: 1rem 0rem;
`;

const about = () => {
  return (
    <Layout>
      <AboutStyled>
        <SEO
          title="About Diamonds Consulting"
          description="About Diamonds Consulting"
        />

        <Section>
          <Container800>
            <Div>
              <H1>What is Diamonds Consulting</H1>
              <p>
                We hope to be a <strong>leader</strong> in using data to help
                other companies remodel their business toward growth, decision
                making and strategic investments.
              </p>
              <p>
                Our core values are company growth, customer satisfaction,
                innovation and team building.
              </p>
            </Div>
          </Container800>
        </Section>
        <SectionGrey>
          <Container800>
            <Div>
              <H2>Our Mission</H2>
              <p>
                At <strong>Diamonds</strong> we help companies optimize data
                sets, use data intelligence to make better informed decisions
                and create company growth through data Analytics.
              </p>
            </Div>
          </Container800>
        </SectionGrey>

        <Section>
          <Container800>
            <H2>Our Purpose</H2>
            <p>
              To be inspired by clients, working hard to help businesses with
              data to reduce the bias in machine learning and this how we gone
              to address then.
            </p>
          </Container800>
        </Section>

        <SectionGrey>
          <Container800>
            <Div>
              <H2>Porfolio</H2>
              <p>Companies we work with</p>
              <ListInline fontSize="3rem" urls={currentWebsites} />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in.
              </p>
            </Div>
          </Container800>
        </SectionGrey>

        <SectionGrey>
          <Container800>
            <Div>
              <H2>How to use data and analytics?</H2>
              <p>We use the following 4 step approach</p>
              <Margin2>
                <ListWithDescription margin="1rem 0" items={currentlyUsing} />
              </Margin2>
            </Div>
          </Container800>
        </SectionGrey>

        <Section>
          <Container800>
            <Div>
              <H2>Contact Me</H2>
              <SimpleNetlifyForm />
            </Div>
          </Container800>
        </Section>
        <Hero />
      </AboutStyled>
    </Layout>
  );
};

export default about;
