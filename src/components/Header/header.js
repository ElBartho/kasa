import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/style/colors';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: auto;
  gap: 32px;
  .active {
    text-decoration: underline;
  }
`;

export const HomeLogo = styled.img`
  height: 47px;
  width: 145px;
  @media (min-width: 920px) {
    height: 68px;
    width: 210px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 24px;
  @media (min-width: 920px) {
    gap: 56px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-align: right;
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: ${colors.primary};
  text-decoration: none;
  text-transform: uppercase;
  @media (min-width: 920px) {
    font-size: 24px;
    text-transform: none;
  }
`;
