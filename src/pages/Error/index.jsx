import { Main, Title, SubTitle, HomePageLink } from './error';

function Error() {
  return (
    <Main>
      <Title>404</Title>
      <SubTitle>Oups! La page que vous demandez n'existe pas.</SubTitle>
      <HomePageLink to='/'>Retourner sur la page d'accueil</HomePageLink>
    </Main>
  );
}

export default Error;
