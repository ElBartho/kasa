import { useParams } from 'react-router-dom';
import { accomodationsList } from '../../utils/data/accomodations';
import { useEffect, useState } from 'react';
import Error from '../Error';
import SlideShow from '../../components/Slideshow';
import {
  Main,
  DescriptionContainer,
  TitleLocationTagsContainer,
  HostRatingContainer,
  Title,
  Location,
  TagsContainer,
  Tags,
  HostContainer,
  ProfilePicture,
} from './accomodation';
import Collapse from '../../components/Collapse';

function Accomodation() {
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
              <Title>{item.title}</Title>
              <Location>{item.location}</Location>
              <TagsContainer>
                {item.tags &&
                  item.tags.map((tag) => <Tags key={tag}>{tag}</Tags>)}
              </TagsContainer>
            </TitleLocationTagsContainer>
            <HostRatingContainer>
              <span>{item.rating}</span>
              {item.host && (
                <HostContainer>
                  <span>{item.host.name}</span>
                  <ProfilePicture src={item.host.picture} alt='host profile' />
                </HostContainer>
              )}
            </HostRatingContainer>
          </DescriptionContainer>
          <Collapse title='Description' />
          <Collapse title='Équipements' />
        </Main>
      )}
    </>
  );
}

export default Accomodation;
