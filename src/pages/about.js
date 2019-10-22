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
    font-size: 1.7rem;
    color: ${props => props.theme.colors.darkgrey};
    margin: 1rem;
  }
`;

const Div = styled.div`
  padding: 1rem 0rem;
`;

const H3 = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  padding: 0;
  margin: 0;
  line-height: 2rem;
`;

const StyledSpan = styled.span`
  font-weight: bolder;
  font-size: 2.4rem;
`;

const StyledLi = styled.li`
  list-style: none;
  margin: 1rem;
  font-size: 1.8rem;
`;

const StyledUl = styled.ul`
  margin: 0 2rem;
  display: flex;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-wrap: wrap;
  }
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
            <Div>
              <p>
                To be inspired by clients, working hard to help businesses with
                data to reduce the bias in machine learning and this is how we
                will address them.
              </p>
            </Div>

            <Div>
              <H3> 1. Developers</H3>
              <p>
                Developers are required to determine feature relevance prior to
                training the model. The primary role of a developer is to
                develop a model or sort of design a model. For example, If we
                have gender in the dataset how relevant is it in determining
                this entry belongs to this category. Feature Relevance, Feature
                Extraction these are normally done during the data preprocessing
                stage.
              </p>
            </Div>

            <Div>
              <H3> 2. Validation</H3>
              <p>
                Validation is done after the training phase of the model to sort
                of deal with issues such as over fitting, and also to determine
                how the model is performing on small chunks of data picked
                randomly
              </p>
            </Div>
            <Div>
              <H3>3. Model Evaluation</H3>
              <p>
                Use of different metrics to find out the false alarm rates, etc
                So now the whole pipeline is beyond developing these systems.
                They have to be evaluated through a study is called
                <strong> FATE </strong>
                analysis:
              </p>
              <StyledUl>
                <StyledLi>
                  <StyledSpan>F</StyledSpan>airness
                </StyledLi>
                <StyledLi>
                  <StyledSpan>A</StyledSpan>ccountability
                </StyledLi>
                <StyledLi>
                  <StyledSpan>T</StyledSpan>ransparency
                </StyledLi>
                <StyledLi>
                  <StyledSpan>E</StyledSpan>thics
                </StyledLi>
              </StyledUl>
            </Div>
          </Container800>
        </Section>

        <SectionGrey>
          <Container800>
            <Div>
              <H2>Technolgies Used</H2>
              <p>We currently using the following technology and software</p>
              <ListInline fontSize="2.2rem" urls={currentWebsites} />
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
