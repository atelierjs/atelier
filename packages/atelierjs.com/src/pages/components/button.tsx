import React from 'react';
import { Button } from '@atelierjs/react';
import { Page } from '@components';

const ButtonPage: React.FC = () => {
  return (
    <Page className="button-page">
      <h1 className="title">Button</h1>
      <Button>Primary</Button>
      <Button variant="secondary" style={{ marginLeft: 16 }}>
        Secondary
      </Button>
    </Page>
  );
};

export default ButtonPage;
