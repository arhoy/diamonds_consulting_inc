import React from 'react';
import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { H2 } from '../../reusableStyles/typography/Typography';
import {
  Container,
  TitleContainer,
  TitleNumber,
  Blurb,
} from '../styles/homePageReusableStyles';

const CustomSection = styled(Section)``;

const StyledTitleNumber = styled(TitleNumber)`
  background: #8cc8fc;
`;

export const Section5 = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <StyledTitleNumber>3</StyledTitleNumber>
        <H2> Data Visualization </H2>
      </TitleContainer>
      <Container>
        <Blurb>
          Diamonds Consulting Inc. taps into the power of visualization to
          communicate findings and results from the data obtained in an
          accessible way that highlights important aspects of the data such as
          trends, patterns, outliers, correlations between variables; that would
          go unnoticed without use of visualizations; thus telling a story of
          the data.
          <br /> <br />
          Package our Master Data Management service with our data science,
          modeling, business intelligence and machine learning services to make
          your business foolproof data-wise.
        </Blurb>
      </Container>
    </CustomSection>
  );
};
