import styled from 'styled-components';

export const FormInputContainer = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.light[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: block;
  width: 100%;
  padding: 0.7rem;
  line-height: 1.3rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
