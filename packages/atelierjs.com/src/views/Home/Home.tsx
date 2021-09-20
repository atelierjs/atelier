import { Card } from '@atelierjs/react';
import { Page } from '../../components';

import './Home.scss';

const Home: React.VFC = () => (
  <Page className="home">
    <div className="title">Home page</div>
    <Card flat>This is an Atelier card component.</Card>
  </Page>
);

export default Home;
