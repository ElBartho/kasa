import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  margin: auto;
  /* padding: 0px 100px; */
  /* padding: 27px 0px; */
  width: 100%;
  @media (min-width: 920px) {
    gap: 50px;
    max-width: 1240px;
    /* padding: 50px 0px; */
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
  max-width: 335px;
  margin: auto;
  /* grid-template-rows: 255px; */
  grid-template-columns: repeat(1, 335px);
  @media (min-width: 920px) {
    background: #f6f6f6;
    gap: 56px;
    /* grid-template-rows: 340px; */
    grid-template-columns: repeat(3, calc(28%));
    max-width: 1240px;
    padding: 56px 0px 40px 0px;
  }
`;
