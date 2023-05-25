import styled from 'styled-components';

export const BasicLayoutContainer = styled.div`
  padding-top: 50px;
`;

export const BasicLayoutContent = styled.main`
  position: relative;
  z-index: 1;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.light[200]};
  overflow-y: auto;
`;
