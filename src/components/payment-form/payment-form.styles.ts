import styled from 'styled-components';
import { ReactComponent as MealSvg } from '../../assets/meal.svg';
import { ReactComponent as ShySvg } from '../../assets/shy.svg';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.light[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
`;

export const FormTitle = styled.h4`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark[200]};
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const DialogSuccessImage = styled(MealSvg)`
  width: 80px;
  height: 80px;
`;

export const DialogFailedImage = styled(ShySvg)`
  width: 80px;
  height: 80px;
`;
