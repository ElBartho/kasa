import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  @media (min-width: 920px) {
  }
`;

export const HeaderChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 20px 0px 24px 0px;
  @media (min-width: 920px) {
    /* max-width: 1240px; */
    gap: 50px;
    padding: 45px 100px 50px 100px;
  }
`;
