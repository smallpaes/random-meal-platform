import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.light[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  box-shadow: 0 1px 4px #00000014, 0 0 0 1px #0000000a;
`;

export const FormTitle = styled.h4`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark[200]};
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
