import { FC, ReactElement, useState } from 'react';
import {
  signInWIthGoogle,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { FormInputContainer } from '../../components/form-input/form-input.styles';
import { Form, FormContainer, FormTitle, Separator } from './sign-in.styles';
import Button, { ButtonTypes } from '../../components/button/button.component';

export type SignInForm = {
  email: string;
  password: string;
};

const defaultFormData: SignInForm = {
  email: '',
  password: '',
};

const SignIn: FC = (): ReactElement => {
  const [formData, setFormData] = useState<SignInForm>(defaultFormData);
  const { email, password } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password || !email) return;
    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(userCredential);
      if (!userCredential) throw new Error('Error logging in user');
      setFormData(defaultFormData);
    } catch (e) {
      alert('Sign in info incorrect');
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWIthGoogle();
    await createUserDocumentFromAuth(user);
  };

  return (
    <section>
      <FormContainer>
        <FormTitle>Sign In</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormInputContainer
            type="email"
            name="email"
            id="email"
            value={email}
            autoComplete="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <FormInputContainer
            type="password"
            name="password"
            id="password"
            value={password}
            autoComplete="new-password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <Button type="submit" buttonType={ButtonTypes.PRIMARY}>
            Sign In
          </Button>
        </Form>
        <Separator />
        <Button buttonType={ButtonTypes.SECONDARY} onClick={logGoogleUser}>
          Sign In With Google
        </Button>
      </FormContainer>
    </section>
  );
};

export default SignIn;
