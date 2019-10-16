import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 60vh;
  background-position: center center;
  positiion: relative;
`;

const TextBoxContainer = styled.div`
  text-transform: uppercase;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${props => props.theme.colors.white};
  padding: 1rem;
  background: ${props => props.theme.colors.primaryTransparent};
  text-align: center;
`;

const TextPrimary = styled.span`
  font-size: 4rem;
  width: 100%;
  display: inline-block;
`;

const TextSecondary = styled.span`
  font-size: 2.5rem;
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground fluid={image.sharp.fluid} fadeIn="soft">
      <TextBoxContainer>
        <TextPrimary>DIAMONDS</TextPrimary>
        <TextSecondary>Passionate about Data</TextSecondary>
      </TextBoxContainer>
    </ImageBackground>
  );
};

export default Hero;
