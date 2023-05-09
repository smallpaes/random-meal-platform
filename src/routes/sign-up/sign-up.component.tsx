import { FC, ReactElement, useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

export type ISignUp = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormData: ISignUp = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp: FC = (): ReactElement => {
  const [formData, setFormData] = useState<ISignUp>(defaultFormData);
  const { name, email, password, confirmPassword } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      if (!userCredential) throw new Error('Error creating the account');
      await createUserDocumentFromAuth(userCredential.user, {
        displayName: name,
      });
      setFormData(defaultFormData);
    } catch (e) {
      if ((e as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email already in use');
      }
    }
  };

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          autoComplete="name"
          placeholder="Display Name"
          minLength={1}
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          autoComplete="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          autoComplete="new-password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          value={confirmPassword}
          autoComplete="new-password"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
