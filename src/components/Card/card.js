import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 10px;
  width: 340px;
  height: 340px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    #ff6060;
  border-radius: 10px;
`;

export const CardTitle = styled.span`
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  width: 300px;
`;