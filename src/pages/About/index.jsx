import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { Main } from './about';

function About() {
  return (
    <Main>
      <Banner background='about' />
      <Collapse title='Fiabilité' />
      <Collapse title='Respect' />
      <Collapse title='Service' />
      <Collapse title='Securité' />
    </Main>
  );
}

export default About;
