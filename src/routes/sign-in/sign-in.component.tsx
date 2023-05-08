import { FC, ReactElement } from 'react';
import {
  signInWIthGoogle,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn: FC = (): ReactElement => {
  const logGoogleUser = async () => {
    const { user } = await signInWIthGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
