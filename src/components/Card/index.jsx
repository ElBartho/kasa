import { CardWrapper, CardTitle } from './card';

function Card({ id, title, cover }) {
  return (
    <CardWrapper to={`/accomodation/${id}`}>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

export default Card;
