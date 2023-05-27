import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0.2rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;
