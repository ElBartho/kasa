import {
  CollapseSection,
  CollapseSectionHeader,
  CollapseSectionTitle,
  CollapseSectionIcon,
  CollapseSectionDescription,
  Description,
} from './collapse';
import { useState } from 'react';
import Arrow from '../../assets/arrow.svg';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSection() {
    setIsOpen(!isOpen);
  }

  return (
    <CollapseSection>
      <CollapseSectionHeader>
        <CollapseSectionTitle>{title}</CollapseSectionTitle>
        <CollapseSectionIcon
          src={Arrow}
          onClick={toggleSection}
          isOpen={isOpen}
        />
      </CollapseSectionHeader>
      <CollapseSectionDescription isOpen={isOpen}>
        <Description>
          {description instanceof Array
            ? description.map((str, index) => (
                <div key={index}>
                  {str}
                  <br />
                </div>
              ))
            : description}
        </Description>
      </CollapseSectionDescription>
    </CollapseSection>
  );
};

export default Collapse;
