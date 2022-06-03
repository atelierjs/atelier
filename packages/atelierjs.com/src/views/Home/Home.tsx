import { Button, Card, ScrollTracker } from '@atelierjs/react';
import { Page } from '@components';

import './Home.scss';

const Home: React.FC = () => (
  <Page className="home">
    <div className="title">Home page</div>
    <Card style={{ marginBottom: 24 }}>This is an Atelier card component.</Card>
    <div>
      <Button>Primary</Button>
      <Button variant="secondary" style={{ marginLeft: 16 }}>
        Secondary
      </Button>
    </div>
    <div style={{ height: 2000 }}>Long component to add scroll</div>
    <ScrollTracker />
  </Page>
);

export default Home;
