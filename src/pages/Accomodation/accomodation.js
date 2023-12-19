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
  gap: 16px;
  @media (min-width: 920px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TitleLocationTagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (min-width: 920px) {
    gap: 16px;
  }
`;

export const TitleLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HostRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 920px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-style: normal;
  margin: 0;
  /* margin: 5px 0; */
  font-weight: 500;
  @media (min-width: 920px) {
    font-size: 32px;
  }
`;

export const Location = styled.h2`
  font-size: 16px;
  font-style: normal;
  margin: 0;
  /* margin: 5px 0; */
  font-weight: 500;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  /* margin: 5px 0; */
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
  @media (min-width: 920px) {
    font-size: 16px;
    padding: 4px 24px;
  }
`;

export const HostContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  @media (min-width: 920px;) {
    justify-content: flex-end;
  }
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 32px;
  @media (min-width: 920px) {
    width: 64px;
  }
`;

export const HostName = styled.div`
  text-align: right;
  max-width: 50px;
  @media (min-width: 920px) {
    font-size: 18px;
  }
`;

export const RatingStarsContainer = styled.div`
  display: flex;
`;

export const StarSvg = styled.svg`
  height: 18px;
  @media (min-width: 920px) {
    height: 36px;
  }
`;

export const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 920px) {
    flex-direction: row;
    gap: 8vw;
    justify-content: space-between;
  }
`;
