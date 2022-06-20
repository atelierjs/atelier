import React from 'react';
import { Page } from '@components';
import { Button } from '@atelierjs/react';
import { navigate } from 'gatsby';

import '@styles/pages/404.scss';

const ErrorPage = () => (
  <Page className="error-page">
    <h2 className="error-page--oops">Oops, this page does not exist.</h2>
    <div className="error-page--return">
      <h3>Click here to return home:</h3>
      <Button
        className="error-page--return-button"
        onClick={() => void navigate('/')}
      >
        Take Me Home
      </Button>
    </div>
  </Page>
);

export default ErrorPage;
