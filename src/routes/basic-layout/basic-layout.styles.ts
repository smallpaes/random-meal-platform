import styled from 'styled-components';

export const BasicLayoutContainer = styled.div`
  margin-top: 50px;
  overflow-y: auto;
`;

export const BasicLayoutContent = styled.main`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.light[200]};
  overflow-y: auto;
`;
