import React from 'react';
import { Card } from '@atelierjs/react';
import { Page } from '@components';

const CardPage: React.FC = () => {
  return (
    <Page className="card-page">
      <h1 className="title">Card</h1>
      <Card>This is an Atelier card component.</Card>
    </Page>
  );
};

export default CardPage;
