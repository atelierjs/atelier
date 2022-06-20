import React from 'react';
import { Page } from '@components';

import '@styles/pages/index.scss';

const Home: React.FC = () => {
  return (
    <Page className="home">
      <h1 className="title">Home page</h1>
      {/* <div style={{ height: 2000 }}>Long component to add scroll</div> */}
    </Page>
  );
};

export default Home;
