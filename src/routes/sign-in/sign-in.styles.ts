import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 6rem auto 0 auto;
  padding: 2rem;
`;

export const Separator = styled.hr`
  margin: 1rem 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.light[300]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FormTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.dark[200]};
`;

export const SignUpMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark[200]};
`;

export const SignUpLink = styled(Link)`
  margin-left: 0.3rem;
  text-decoration: underline;
`;
