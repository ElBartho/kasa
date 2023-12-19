import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  @media (min-width: 920px) {
    gap: 50px;
  }
`;

export const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  @media (min-width: 920px) {
    box-sizing: border-box;
    padding: 0 80px;
  }
`;
