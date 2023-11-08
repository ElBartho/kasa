import styled from 'styled-components';
import HomeBackground from '../../assets/KasaHomeBackground.png';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${HomeBackground}), rgba(0, 0, 0, 0.3);
  background-position: 0% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 223px;
  border-radius: 25px;
  background-blend-mode: darken;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const BoxTitle = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 60px;
  line-height: 142.6%;
  text-align: center;
`;
