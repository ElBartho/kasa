import { Main, Box, BoxTitle, CardContainer } from './home';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { logementsList } from '../../utils/data/logements';

function Home() {
  console.log(logementsList);
  return (
    <Main>
      <Banner />
      <CardContainer>
        {logementsList.map(({ title, id }) => (
          <Card key={id} title={title} />
        ))}
      </CardContainer>
    </Main>
  );
}

export default Home;
