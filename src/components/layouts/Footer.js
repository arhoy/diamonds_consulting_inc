import React from 'react';

import socialIcons from '../../constants/socialIcons';

import styled from '@emotion/styled';
import { FaCube } from 'react-icons/fa';

const d = new Date().getFullYear();

const FooterStyle = styled.div`
  background: ${props => props.theme.colors.primaryDark};
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.black};
  font-size: 3rem;
  margin: 1rem;
  padding: 1rem;
`;

const StyledImage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
`;
const Attribution = styled.p`
  font-size: 1.2rem;
`;

const FooterBlurb = styled.p`
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        {socialIcons.map(icon => (
          <SocialIcon
            key={icon.url}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </SocialIcon>
        ))}
      </ul>
      <Div>
        Edmonton | Alberta |
        <StyledImage>
          <FaCube />
        </StyledImage>
      </Div>
      tel: 587-723-0825
      <FooterBlurb>Diamonds Consulting Inc {d} &copy; </FooterBlurb>
      <Attribution>
        Gatsby Web Development By{' '}
        <A target="_blank" rel="noopener noreferrer" href="https://theorderguys.com/">
          The Order Guys
        </A>
      </Attribution>
    </FooterStyle>
  );
};

export default Footer;
