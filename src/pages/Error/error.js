import styled from 'styled-components';
import { colors } from '../../utils/style/colors';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 112px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  color: ${colors.primary};
  padding: 50px 0;
  @media (min-width: 920px) {
    gap: 120px;
  }
`;

export const Title = styled.h1`
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 288px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  text-align: center;
  max-width: 260px;
  @media (min-width: 920px) {
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    max-width: 100%;
  }
`;

export const HomePageLink = styled(Link)`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.primary};
  text-decoration: underline;
`;
