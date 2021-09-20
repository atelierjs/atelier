import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Header } from '@atelierjs/react';

import './App.scss';

const App: React.VFC = () => (
  <div className="atelier-app">
    <Header>Navigation and stuff</Header>
    <Switch>
      <Suspense fallback={<></>}>
        {Object.values(routes).map((x) => (
          <Route key={x.name} {...x} />
        ))}
      </Suspense>
    </Switch>
  </div>
);

export default App;
