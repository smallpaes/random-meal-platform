import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';

export const DialogContainer = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  &::backdrop {
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    inset: 0;
  }
`;

export const DialogCloseIcon = styled(CloseSvg)`
  fill: ${({ theme }) => theme.colors.dark[100]};
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
