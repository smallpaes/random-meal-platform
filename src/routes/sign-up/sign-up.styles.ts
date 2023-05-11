import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 6rem auto 0 auto;
  padding: 2rem;
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
