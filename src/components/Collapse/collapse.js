import styled from 'styled-components';
import { colors } from '../../utils/style/colors';

export const CollapseSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  jusitfy-content: center;
  @media (min-width: 920px) {
    width: 85%;
  }
`;

export const CollapseSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
  box-sizing: border-box;
`;

export const CollapseSectionTitle = styled.h2`
  width: 100%;
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 24px;
  }
`;

export const CollapseSectionIcon = styled.img`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  &.rotate {
    transform: rotate(-180deg);
  }
  @media (min-width: 920px) {
    width: 32px;
    height: 32px;
  }
`;

export const CollapseSectionDescription = styled.div`
  transition: max-height 0.5s;
  overflow: hidden;
  max-height: 0;
  &.open {
    opacity: 1;
    max-height: 300px;
  }
`;

export const Description = styled.div`
  background: ${colors.secondary};
  border-radius: 5px;
  color: ${colors.primary};
  font-size: 18px;
  line-height: 140%;
  font-weight: 400;
  font-style: normal;
  padding: 20px;
  box-sizing: border-box;
`;
