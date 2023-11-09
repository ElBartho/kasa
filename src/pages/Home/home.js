import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  margin: auto;
  padding: 27px 0px;
  width: 335px;
  @media (min-width: 920px) {
    gap: 50px;
    min-width: 1240px;
    padding: 50px 0px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 25px;
  gap: 20px;
  grid-template-rows: 255px;
  grid-template-columns: repeat(1, 335px);
  @media (min-width: 920px) {
    background: #f6f6f6;
    gap: 60px;
    grid-template-rows: 340px;
    grid-template-columns: repeat(3, 340px);
    width: 100%;
    padding: 56px 0px 43px 0px;
  }
`;
