import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`;

export const HeaderChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 24px 32px;
  box-sizing: border-box;
  @media (min-width: 920px) {
    max-width: 1240px;
    gap: 50px;
    padding: 48px 32px;
  }
`;
