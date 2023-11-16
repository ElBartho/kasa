import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  width: 100%;
  @media (min-width: 920px) {
    gap: 50px;
    max-width: 1240px;
  }
`;
