import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 90%;
  right: 1.5rem;
  width: 250px;
  height: 350px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.light[100]};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const CartDropdownItems = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyMessage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark[200]};
  user-select: none;
`;
