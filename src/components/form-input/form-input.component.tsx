import { FC, ReactElement, InputHTMLAttributes } from 'react';
import { FormInputContainer } from './form-input.styles';

const FormInput: FC<InputHTMLAttributes<HTMLInputElement>> = (
  inputProps,
): ReactElement => {
  return <FormInputContainer {...inputProps} />;
};

export default FormInput;
