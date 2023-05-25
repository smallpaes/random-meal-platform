import styled from 'styled-components';
import { ReactComponent as MealSvg } from '../../assets/meal.svg';

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

export const DialogContentContainer = styled.div`
  min-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DialogImage = styled(MealSvg)`
  width: 80px;
  height: 80px;
`;

export const DialogTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark[200]};
  margin: 0.2rem 0;
`;

export const DialogMessage = styled.p`
  color: ${({ theme }) => theme.colors.dark[200]};
`;
