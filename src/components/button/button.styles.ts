import styled, { css } from 'styled-components';

interface ButtonProps {
  readonly $isOutline?: boolean;
}

export const disabledStyles = css`
  background-color: ${({ theme }) => theme.colors.light[300]};
  color: ${({ theme }) => theme.colors.light[100]};
  border: none;
  cursor: not-allowed;
`;

export const BaseButton = styled.button<ButtonProps>`
  border: none;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.light[100]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.light[100] : theme.colors.primary};
  color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.primary : theme.colors.light[100]};
  border-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.primary : 'none'};
  ${({ disabled }) => disabled && disabledStyles};
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.light[100] : theme.colors.secondary};
  color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.secondary : theme.colors.light[100]};
  border-color: ${({ theme, $isOutline }) =>
    $isOutline ? theme.colors.secondary : 'none'};
  ${({ disabled }) => disabled && disabledStyles};
`;
