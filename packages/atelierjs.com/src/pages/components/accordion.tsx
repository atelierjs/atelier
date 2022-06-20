import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionTitle } from '@atelierjs/react';
import { Page } from '@components';

const ButtonPage: React.FC = () => {
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  return (
    <Page className="accordion-page">
      <h1 className="title">Accordion</h1>
      <Accordion
        style={{ marginTop: 16 }}
        expanded={accordionExpanded}
        onExpandedChange={() => setAccordionExpanded((prev) => !prev)}
      >
        <AccordionTitle>Accordion</AccordionTitle>
        <AccordionContent>Accordion Content</AccordionContent>
      </Accordion>
    </Page>
  );
};

export default ButtonPage;
