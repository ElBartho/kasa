import styled from 'styled-components';
import { colors } from '../../utils/style/colors';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  color: ${colors.primary};
  @media (min-width: 920px) {
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const TitleLocationTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HostRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-style: normal;
  line-height: 100%;
  margin: 5px 0;
  font-weight: 500;
`;

export const Location = styled.h2`
  font-size: 16px;
  font-style: normal;
  margin: 5px 0;
  font-weight: 500;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 5px 0;
  gap: 10px;
`;

export const Tags = styled.span`
  color: white;
  border-radius: 10px;
  padding: 4px 16px;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  background-color: ${colors.primary};
`;

export const HostContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 32px;
`;
