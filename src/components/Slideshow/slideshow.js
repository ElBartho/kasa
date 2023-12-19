import styled from 'styled-components';

export const SlideShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 255px;
  background: ${({ slide }) => `url(${slide}), rgba(0, 0, 0, 0.1)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  align-items: space-between;
  justify-content: center;
  border-radius: 10px;
  background-position: center;
  @media (min-width: 920px) {
    border-radius: 25px;
    min-height: 415px;
  }
`;

export const ArrowImage = styled.img`
  width: 24px;
  aspect-ratio: 1;
  position: absolute;
  cursor: pointer;
  align-items: flex-start;
  transform: ${({ $front }) => ($front ? 'rotate(-50%)' : '')};
  ${({ $back }) => $back && 'left: 8px;'}
  ${({ $front }) => $front && 'right: 8px;'}
  @media (min-width: 920px) {
    width: 40px;
    height: 80px;
    ${({ $back }) => $back && 'left: 24px;'}
    ${({ $front }) => $front && 'right: 24px;'}
  }
`;

export const BackgroundIndex = styled.div`
  display: none;
  bottom: 24px;
  left: 50%;
  position: absolute;
  color: white;
  @media (min-width: 920px) {
    display: inherit;
  }
`;
