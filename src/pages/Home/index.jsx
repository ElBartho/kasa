import { Main, CardContainer } from './home';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { accomodationsList } from '../../utils/data/accomodations';

function Home() {
  return (
    <Main>
      <Banner title='Chez vous, partout et ailleurs' background='home' />
      <CardContainer>
        {accomodationsList.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            cover={card.cover}
            pictures={card.pictures}
            host={card.host}
            rating={card.rating}
            location={card.location}
            equipments={card.equipments}
            tags={card.tags}
          />
        ))}
      </CardContainer>
    </Main>
  );
}

export default Home;
