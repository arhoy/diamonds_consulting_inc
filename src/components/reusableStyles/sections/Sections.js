// Emotion Styled Element
import styled from '@emotion/styled';

const Section = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8rem 4rem;
`;

const SectionGrey = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
`;

const Container1200 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container800 = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export { Section, SectionGrey, Container1200, Container800 };
