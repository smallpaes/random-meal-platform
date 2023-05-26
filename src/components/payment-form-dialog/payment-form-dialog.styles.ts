import styled from 'styled-components';

export const DialogContentContainer = styled.div`
  min-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DialogTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark[200]};
  margin: 0.2rem 0;
`;

export const DialogMessage = styled.p`
  color: ${({ theme }) => theme.colors.dark[200]};
`;
