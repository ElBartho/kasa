import styled from 'styled-components';
import { colors } from '../../utils/style/colors';

export const CollapseSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

export const CollapseTitle = styled.h1`
  width: 100%;
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

export const CollapseIcon = styled.img`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
