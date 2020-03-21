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

export const Section3 = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <TitleNumber>1</TitleNumber>
        <H2> Data Wrangling </H2>
      </TitleContainer>
      <Container>
        <Blurb>
          A process that involves preprocessing the data to make it suitable for
          analysis. This includes dealing with erroneous values, duplicates,
          missing values, noise; a perfect example being context of social media
          data, ill-formatted data and messy data.
          <br /> <br />
          Eliminating the doubles - Data duplication and inaccuracy often go
          under the radar. After all, some company have more data than there is
          sand on the beach (or the beaches in the world). It’s challenging to
          know what’s where and what’s what. A simple mistake goes a long and
          often disastrous way. Imagine an employee enters the wrong address,
          name or the cost of a product. It can be a simple typo that gets
          entered into your system. No harm, no foul, right? Actually wrong,
          that information is processed as true until it’s time to analyze the
          data then that’s where it escalates into a messy situation. Diamonds
          Consulting Inc. ensures your data is free of duplicates, standardizing
          and maintaining its quality.
        </Blurb>
      </Container>
    </CustomSection>
  );
};
