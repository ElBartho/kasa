import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    #ff6060;
  aspect-ratio: 16 / 9;
  @media (min-width: 920px) {
    aspect-ratio: 1;
  }
`;

export const CardTitle = styled.span`
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  max-width: 300px;
  padding: 20px;
`;
