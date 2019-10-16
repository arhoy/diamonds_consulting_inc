import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
const StyledHero = ({ img, className, children, home }) => (
  <BackgroundImage className={className} fluid={img} home={home}>
    {children}
  </BackgroundImage>
);

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(50vh - 62px)' : '30vh')};

  background-position: center;
  background: ${props =>
    props.gradient
      ? 'linear-gradient(rgba(15,32,39,0.8), rgba(0, 0, 0, 0.5))'
      : 'linear-gradient(rgba(15,32,39,0.1),rgba(32,58,67,0.1))'};
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
