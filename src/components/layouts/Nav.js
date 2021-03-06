import React from 'react';
import { FaPhone } from 'react-icons/fa';

import styled from '@emotion/styled';

import links from '../../constants/navLinks';
import DropDownMenu1 from '../Links/DropDownMenu1';
import Navlink from '../Links/Navlink';
import { FaCube } from 'react-icons/fa';
const Header = styled.header`
  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 2.5rem;

  border-bottom: 1rem solid ${props => props.theme.colors.primary};

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 12rem;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
  }
`;

const FaCubeStyled = styled(FaCube)`
  font-weight: bold;
  font-size: 4rem;
`;

const Logo = styled.span`
  color: ${props => props.theme.colors.primary};
  line-height: 1.8rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-top: 1.2rem;
  }

  & i {
    font-weight: bold;
    color: ${props => props.theme.colors.primaryDark};
  }
  & ${Navlink} {
    text-decoration: none !important;
    font-size: 3.2rem;
  }
`;

const LogoSpan = styled.span`
  margin-left: 3px;
`;

const LogoBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoPhone = styled.span`
  margin-right: 3px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  &.hideNav {
    display: none;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: row;
    margin-top: 7rem;
    position: absolute;
  }
  &.hideMe {
    display: none;
  }
`;

const Nav = () => {
  return (
    <Header>
      <Logo>
        <Navlink to="/">
          <FaCubeStyled /> <LogoSpan>Diamonds</LogoSpan>
        </Navlink>
        <LogoBottom>
          <LogoPhone>587-723-0825</LogoPhone>
          <FaPhone />
        </LogoBottom>
      </Logo>

      <NavContainer>
        {links.map(link => (
          <Navlink key={link.path} activeClassName="currentPage" to={link.path}>
            {link.text}
          </Navlink>
        ))}
        <DropDownMenu1 />
      </NavContainer>
    </Header>
  );
};

export default Nav;
