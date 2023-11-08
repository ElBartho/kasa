import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1240px;
  align-items: center;
  margin: auto;
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 60px;
  /* justify-items: center; */
  /* grid-template-rows: 340px 340px; */
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background: #f6f6f6;
  border-radius: 25px;
  width: 100%;
`;
