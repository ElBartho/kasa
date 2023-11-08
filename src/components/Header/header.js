import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: auto;
  padding-top: 45px;
  padding-bottom: 50px;
  & a:focus {
    text-decoration: underline;
  }
`;

export const HomeLogo = styled.img`
  height: 68px;
  width: 210.322px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 57px;
`;

export const StyledLink = styled(Link)`
  text-align: right;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */
  color: ${colors.primary};
  text-decoration: none;
`;
