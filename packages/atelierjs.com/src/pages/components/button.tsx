import React from 'react';
import { Button } from '@atelierjs/react';
import { Page } from '@components';

const ButtonPage: React.FC = () => {
  return (
    <Page className="home">
      <h1 className="title">Home page</h1>
      <Button>Primary</Button>
      <Button variant="secondary" style={{ marginLeft: 16 }}>
        Secondary
      </Button>
    </Page>
  );
};

export default ButtonPage;
