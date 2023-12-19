import { useParams } from 'react-router-dom';
import { accomodationsList } from '../../utils/data/accomodations';
import { useEffect, useState } from 'react';
import Error from '../Error';
import SlideShow from '../../components/Slideshow';
import {
  Main,
  DescriptionContainer,
  TitleLocationTagsContainer,
  TitleLocationContainer,
  HostRatingContainer,
  Title,
  Location,
  TagsContainer,
  Tags,
  HostContainer,
  ProfilePicture,
  HostName,
  RatingStarsContainer,
  StarSvg,
  CollapseContainer,
} from './accomodation';
import Collapse from '../../components/Collapse';
import { colors } from '../../utils/style/colors';

const Star = ({ rate, index }) => {
  const getColor = (index) => {
    return index + 1 <= rate ? `${colors.primary}` : '#E3E3E3';
  };

  return (
    <StarSvg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='_Rate'>
        <g id='star-active 1'>
          <path
            id='Vector_5'
            d='M9.43233 4.3376C9.29777 4.05833 9.01344 3.88062 8.70117 3.88062C8.38891 3.88062 8.10711 4.05833 7.97001 4.3376L6.3376 7.6964L2.69197 8.23462C2.38732 8.28032 2.13345 8.49358 2.03951 8.78553C1.94558 9.07749 2.02174 9.39992 2.24007 9.61572L4.88544 12.2332L4.26091 15.9322C4.21014 16.2368 4.33707 16.5466 4.58841 16.7268C4.83975 16.9071 5.17232 16.9299 5.4465 16.7852L8.70371 15.0462L11.9609 16.7852C12.2351 16.9299 12.5677 16.9096 12.819 16.7268C13.0703 16.544 13.1973 16.2368 13.1465 15.9322L12.5194 12.2332L15.1648 9.61572C15.3831 9.39992 15.4618 9.07749 15.3654 8.78553C15.2689 8.49358 15.0176 8.28032 14.7129 8.23462L11.0647 7.6964L9.43233 4.3376Z'
            fill={getColor(index - 1)}
          />
        </g>
      </g>
    </StarSvg>
  );
};

function Accomodation() {
  function arrayToString(equipments) {
    const initialValue = '';
    return equipments.reduce(
      (accumulator, currentValue) =>
        accumulator === ''
          ? accumulator + currentValue
          : accumulator + ' ' + currentValue,
      initialValue
    );
  }
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setItem(accomodationsList.find((accomodation) => accomodation.id === id));
  }, [id, item]);

  if (!item) {
    return <Error />;
  }

  return (
    <>
      {item && (
        <Main>
          <SlideShow imagesArray={item.pictures} />
          <DescriptionContainer>
            <TitleLocationTagsContainer>
              <TitleLocationContainer>
                <Title>{item.title}</Title>
                <Location>{item.location}</Location>
              </TitleLocationContainer>
              <TagsContainer>
                {item.tags &&
                  item.tags.map((tag) => <Tags key={tag}>{tag}</Tags>)}
              </TagsContainer>
            </TitleLocationTagsContainer>
            <HostRatingContainer>
              <RatingStarsContainer>
                {[1, 2, 3, 4, 5].map((index) => (
                  <Star rate={item.rating} index={index} />
                ))}
              </RatingStarsContainer>
              {item.host && (
                <HostContainer>
                  <HostName>{item.host.name}</HostName>
                  <ProfilePicture src={item.host.picture} alt='host profile' />
                </HostContainer>
              )}
            </HostRatingContainer>
          </DescriptionContainer>
          <CollapseContainer>
            <Collapse title='Description' description={item.description} />
            <Collapse title='Équipements' description={item.equipments} />
          </CollapseContainer>
        </Main>
      )}
    </>
  );
}

export default Accomodation;
