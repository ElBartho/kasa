import { CardWrapper, CardTitle } from './card';

function Card({ title }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

export default Card;
