import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <div className="atelier-app">
    <Switch>
      <Suspense fallback={<></>}>
        {Object.values(routes).map((x) => (
          <Route {...x} />
        ))}
      </Suspense>
    </Switch>
  </div>
);

export default App;
