import styled from 'styled-components';
import HomeBackground from '../../assets/KasaHomeBackground.jpeg';

export const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 335px;
  aspect-ratio: 3.1;
  align-items: center;
  background: url(${HomeBackground}), rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-blend-mode: darken;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media (min-width: 920px) {
    max-width: 1240px;
    /* aspect-ratio: 50 / 9; */
    aspect-ratio: 5;
    max-height: 223px;
    border-radius: 25px;
    background-size: cover;
    background-position: 0% 50%;
    justify-content: center;
  }
`;

export const BoxTitle = styled.h1`
  color: white;
  padding-left: 16px;
  font-weight: 500;
  font-size: 24px;
  width: 180px;
  line-height: 100%;
  @media (min-width: 920px) {
    font-size: 60px;
    width: auto;
  }
`;
