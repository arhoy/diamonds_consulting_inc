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

const CustomSection = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
`;

const StyledTitleNumber = styled(TitleNumber)`
  background: #8cfcc8;
`;

export const Section4 = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <StyledTitleNumber>2</StyledTitleNumber>
        <H2> Data Analysis </H2>
      </TitleContainer>
      <Container>
        <Blurb>
          <strong> Data = knowledge </strong>– Data analytics is no one time jog
          in the park. It should be deeply rooted into your business processes,
          from strategy to execution. Diamonds Consulting Inc. design solutions
          provides the knowledge you need each and every day, to stay on track
          and ahead of your competition. Performing both descriptive and
          predictive analytics; we generate insights and patterns to get an
          unprecedented view from the data such as customer behavior,
          preferences and product perception - to be able to aid companies in
          making data-driven decisions. It doesn’t matter if your analytics
          challenges are small or massive, we will resolve these issues all the
          time, anytime. Knowledge is power and Diamonds Consulting Inc. ensures
          you have all you need to be the Superman in your field.
        </Blurb>
      </Container>
    </CustomSection>
  );
};
