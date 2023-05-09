import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import BasicLayout from './routes/basic-layout/basic-layout.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
