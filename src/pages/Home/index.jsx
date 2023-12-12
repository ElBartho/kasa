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
            id={card.id}
            title={card.title}
            cover={card.cover}
          />
        ))}
      </CardContainer>
    </Main>
  );
}

export default Home;
