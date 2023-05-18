import { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { User } from 'firebase/auth';
import {
  onAuthStateChangesListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import BasicLayout from './routes/basic-layout/basic-layout.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import Checkout from './routes/checkout/checkout.component';
import { setUser } from './store/user/user.action';

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangesListener(
      async (receivedUser: User | null) => {
        if (receivedUser) {
          const userDoc = await createUserDocumentFromAuth(receivedUser);
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          dispatch(setUser(userDoc!.data()));
        } else {
          dispatch(setUser(receivedUser));
        }
      },
    );
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
