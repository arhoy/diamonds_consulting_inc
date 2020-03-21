import styled from '@emotion/styled';

const Container = styled.div`
  padding: 2rem 2rem;

  margin: 0 auto;
  max-width: ${props => props.theme.pageWidth.homePageSectionContentWidth};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TitleNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background: #fc8c8c;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bold;
`;

const Blurb = styled.p`
  text-indent: 3rem;
  opacity: 0.9;
`;

export { Container, TitleContainer, TitleNumber, Blurb };
