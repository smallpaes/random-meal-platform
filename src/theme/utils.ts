import { css } from 'styled-components';
import { ITheme } from './index';

export const Overlay = css<{
  readonly $opacity: keyof ITheme['opacity'];
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark[300]};
  opacity: ${({ theme, $opacity }) => theme.opacity[$opacity]};
`;
