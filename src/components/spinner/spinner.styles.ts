import styled from 'styled-components';
import { ReactComponent as PizzaSvg } from '../../assets/pizza.svg';

export const SpinnerOverlay = styled.div<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div<{ $size: string }>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerIcon = styled(PizzaSvg)`
  display: inline-block;
  width: 50px;
  height: 50px;
`;
