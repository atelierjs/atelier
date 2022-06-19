import React from 'react';
import { AppBar, LeftNav } from '@components';
import { AppContextProvider } from '@context';
import { FCWithChildren } from 'types';

import '@styles/layouts/App.scss';

const App: FCWithChildren = ({ children }) => (
  <AppContextProvider>
    <div className="atelier-app">
      <AppBar />
      <LeftNav />
      {children}
    </div>
  </AppContextProvider>
);

export default App;
