import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { Main, CollapseWrapper } from './about';

function About() {
  return (
    <Main>
      <Banner background='about' />
      <CollapseWrapper>
        <Collapse
          title='Fiabilité'
          description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        />
        <Collapse
          title='Respect'
          description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <Collapse
          title='Service'
          description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <Collapse
          title='Securité'
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </CollapseWrapper>
    </Main>
  );
}

export default About;
