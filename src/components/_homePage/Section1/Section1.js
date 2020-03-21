import React from 'react';
import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { H2 } from '../../reusableStyles/typography/Typography';

const CustomSection = styled(Section)`
  padding: 4rem 2rem;
  background: ${props => props.theme.colors.white}
  );
`;

const Container = styled.div`
  padding: 2rem 2rem;
  margin: 0 auto;
  max-width: ${props => props.theme.pageWidth.homePageSectionContentWidth};
  display: flex;
  justify-content: space-around;
  align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Blurb = styled.p`
  opacity: 0.9;
`;

export const Section1 = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <H2> The Master Managers of your Data </H2>
      </TitleContainer>
      <Container>
        <Blurb>
          Data is changing all the time and it can be difficult to manage it all
          without compromising its quality. However, its management is critical
          to the success of your company. As a business owner, you want to
          ensure you implement all the tools, processes and most importantly,
          the relevant body to manage this ever-changing data. At Diamonds
          Consulting Inc., we are your focal point for all things data driven.
          We ensure that your data is accessible to your employees while
          protecting its accuracy, integrity, reliability and timelessness.
        </Blurb>
      </Container>
    </CustomSection>
  );
};
