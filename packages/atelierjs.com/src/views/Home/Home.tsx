import { Button, Card } from '@atelierjs/react';
import { Page } from '../../components';

import './Home.scss';

const Home: React.VFC = () => (
  <Page className="home">
    <div className="title">Home page</div>
    <Card style={{ marginBottom: 24 }}>This is an Atelier card component.</Card>
    <div>
      <Button>Primary</Button>
      <Button variant="secondary" style={{ marginLeft: 16 }}>
        Secondary
      </Button>
    </div>
  </Page>
);

export default Home;
