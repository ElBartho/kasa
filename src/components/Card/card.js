import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
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
  text-decoration: none;
  @media (min-width: 920px) {
    aspect-ratio: 1;
  }
`;

export const CardTitle = styled.span`
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  max-width: 300px;
  padding: 20px;
`;
