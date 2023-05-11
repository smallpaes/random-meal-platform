import { FC, ReactElement } from 'react';
import { BaseButton, PrimaryButton, SecondaryButton } from './button.styles';

export enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonTypes;
  isOutline?: boolean;
  isLoading?: boolean;
}

const getButton = (
  buttonType: ButtonTypes = ButtonTypes.PRIMARY,
): typeof BaseButton => {
  return {
    [ButtonTypes.PRIMARY]: PrimaryButton,
    [ButtonTypes.SECONDARY]: SecondaryButton,
  }[buttonType];
};

const Button: FC<IButton> = ({
  children,
  buttonType,
  isOutline,
  ...otherProps
}): ReactElement => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton $isOutline={isOutline} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
