import { CollapseSection, CollapseTitle, CollapseIcon } from './collapse';
import Arrow from '../../assets/arrow.svg';

const Collapse = ({ title }) => {
  return (
    <CollapseSection>
      <CollapseTitle>{title}</CollapseTitle>
      <CollapseIcon src={Arrow} />
    </CollapseSection>
  );
};

export default Collapse;
