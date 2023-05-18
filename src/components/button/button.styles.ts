import styled, { css } from 'styled-components';

interface ButtonProps {
  readonly $isOutline?: boolean;
}

export const disabledStyles = css`
  background-color: ${({ theme }) => theme.colors.light[300]};
  color: ${({ theme }) => theme.colors.light[100]};
  border: none;
  cursor: not-allowed;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light[300]};
    color: ${({ theme }) => theme.colors.light[100]};
  }
`;

export const BaseButton = styled.button<ButtonProps>`
  border: none;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.light[100]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: 100%;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.light[100] : theme.colors.primary};
  color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.primary : theme.colors.light[100]};
  border-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.primary : 'none'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light[100]};
    filter: ${({ $isOutline }) => ($isOutline ? 'none' : 'brightness(0.9)')};
  }
  ${({ disabled }) => disabled && disabledStyles};
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.light[100] : theme.colors.secondary};
  color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.secondary : theme.colors.light[100]};
  border-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.secondary : 'none'};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light[100]};
    filter: ${({ $isOutline }) => ($isOutline ? 'none' : 'brightness(0.9)')};
  }
  ${({ disabled }) => disabled && disabledStyles};
`;
