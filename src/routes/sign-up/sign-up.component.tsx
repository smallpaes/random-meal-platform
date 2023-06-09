import { FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { FormInputContainer } from '../../components/form-input/form-input.styles';
import {
  Form,
  FormContainer,
  FormTitle,
  SignInContainer,
} from './sign-up.styles';
import Button, { ButtonTypes } from '../../components/button/button.component';

import { signUpStart } from '../../store/user/user.action';

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
  const dispatch = useDispatch();
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
      dispatch(signUpStart(email, password, name));
      setFormData(defaultFormData);
    } catch (e) {
      if ((e as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email already in use');
      }
    }
  };

  return (
    <SignInContainer>
      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormInputContainer
            type="text"
            name="name"
            id="name"
            value={name}
            autoComplete="name"
            placeholder="Name"
            minLength={1}
            required
            onChange={handleChange}
          />
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
          <FormInputContainer
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={confirmPassword}
            autoComplete="new-password"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
          <Button type="submit" buttonType={ButtonTypes.PRIMARY}>
            Sign Up
          </Button>
        </Form>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignUp;
