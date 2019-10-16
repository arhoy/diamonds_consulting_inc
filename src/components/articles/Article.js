// Each Article in the Article List component
import React from 'react';
import styled from '@emotion/styled';
import NoStyleLink from '../Links/NoStyleLink';
import Image from 'gatsby-image';

const StyledLink = styled(NoStyleLink)`
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-column-gap: 3rem;

  justify-content: flex-end;
  align-items: center;
  margin: 4rem 0;
  flex-wrap: nowrap;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }

  align-items: center;
  justify-items: center;
`;

const ContentContainer = styled.div`
  height: 100%;
`;

const StyledImage = styled(Image)`
  border-radius: 1rem;
  max-width: 100%;
  max-height: 100%;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primaryDark};
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 2rem;
`;

const P = styled.p`
  margin-bottom: 1rem;
`;

const Date = styled.p`
  font-style: italic;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.darkgrey};
  display: flex;
`;

const Article = ({ article }) => {
  console.log(article);
  return (
    <StyledLink to={`articles/${article.slug}`}>
      <StyledImage
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        fluid={article.heroImage.fluid}
        alt={article.title}
      />
      <ContentContainer>
        <Title>{article.title}</Title>
        <P>{article.description.description}</P>
        <Date> {article.publishDate}</Date>
      </ContentContainer>
    </StyledLink>
  );
};

export default Article;
