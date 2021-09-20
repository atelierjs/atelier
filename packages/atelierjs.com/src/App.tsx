import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { AppBar, LeftNav } from './components';

import './App.scss';

const App: React.VFC = () => (
  <div className="atelier-app">
    <AppBar />
    <LeftNav />
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
