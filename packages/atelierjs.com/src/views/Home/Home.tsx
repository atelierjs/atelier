import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  Button,
  Card,
  ScrollTracker,
} from '@atelierjs/react';
import { Page } from '@components';

import './Home.scss';

const Home: React.FC = () => {
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  return (
    <Page className="home">
      <h1 className="title">Home page</h1>
      <Card style={{ marginBottom: 24 }}>
        This is an Atelier card component.
      </Card>
      <div>
        <Button>Primary</Button>
        <Button variant="secondary" style={{ marginLeft: 16 }}>
          Secondary
        </Button>
      </div>
      {/* <div style={{ height: 2000 }}>Long component to add scroll</div> */}
      <Accordion
        style={{ marginTop: 16 }}
        expanded={accordionExpanded}
        onExpandedChange={() => setAccordionExpanded((prev) => !prev)}
      >
        <AccordionTitle>Accordion</AccordionTitle>
        <AccordionContent>Accordion Content</AccordionContent>
      </Accordion>
      <ScrollTracker />
    </Page>
  );
};

export default Home;
