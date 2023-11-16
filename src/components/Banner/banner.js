import styled from 'styled-components';
import { backgrounds } from '../../utils/style/colors';

export const Box = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
  background: ${({ background }) =>
    background === 'home'
      ? `url(${backgrounds.home}), rgba(0, 0, 0, 0.3)`
      : `url(${backgrounds.about}), rgba(0, 0, 0, 0.3)`};
  min-height: 111px;
  align-items: center;
  background-size: cover;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-blend-mode: darken;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media (min-width: 920px) {
    min-height: 223px;
    border-radius: 25px;
    background-size: cover;
    background-position: 0% 50%;
    justify-content: center;
  }
`;

export const BoxTitle = styled.h1`
  color: white;
  padding-left: 16px;
  font-weight: 500;
  font-size: 24px;
  max-width: 180px;
  line-height: 100%;
  @media (min-width: 920px) {
    font-size: 60px;
    max-width: 705px;
  }
`;
