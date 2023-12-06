import styled from 'styled-components';
import { colors } from '../../utils/style/colors';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  width: 100%;
  @media (min-width: 920px) {
    gap: 50px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 25px;
  gap: 16px;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 920px) {
    background: ${colors.secondary};
    gap: 56px;
    grid-template-columns: repeat(3, calc(28%));
    padding: 56px 0px 40px 0px;
  }
`;
