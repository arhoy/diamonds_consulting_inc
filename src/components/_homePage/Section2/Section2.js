import React from 'react';
import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { H2 } from '../../reusableStyles/typography/Typography';

const CustomSection = styled(Section)`
  padding: 4rem 2rem;
  background: ${props => props.theme.colors.lightgrey};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const SubTitle = styled.h4`
  text-align: center;
  opacity: 0.7;
`;

const SectionLinks = styled.div`
  text-align: center;
`;

export const Section2 = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <H2> How We Do It </H2>
        <SubTitle>We outline our three step process below</SubTitle>
        <SectionLinks>
          Data Wrangling | Data Visualization | Data Analysis
        </SectionLinks>
      </TitleContainer>
    </CustomSection>
  );
};
