import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import { AppBar, LeftNav } from './components';

import './App.scss';

const App: React.FC = () => (
  <div className="atelier-app">
    <AppBar />
    <LeftNav />
    <Suspense fallback={<></>}>
      <Routes>
        {Object.values(routes).map((x) => (
          <Route key={x.name} {...x} />
        ))}
      </Routes>
    </Suspense>
  </div>
);

export default App;
