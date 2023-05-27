import { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import BasicLayout from './routes/basic-layout/basic-layout.component';
import Meals from './routes/meals/meals.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import Checkout from './routes/checkout/checkout.component';
import { checkUserSession } from './store/user/user.action';
import { fetchCategoriesStart } from './store/categories/categories.action';

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="meals/*" element={<Meals />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
