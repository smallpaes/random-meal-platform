import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import BasicLayout from './routes/basic-layout/basic-layout.component';

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
