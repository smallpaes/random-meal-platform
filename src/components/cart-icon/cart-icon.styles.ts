import styled from 'styled-components';
import { ReactComponent as CartSvg } from '../../assets/cart.svg';

export const CartIconContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
`;

export const ShoppingCartIcon = styled(CartSvg)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.dark[100]};
`;

export const CartIconCount = styled.span`
  position: absolute;
  top: 20%;
  left: 40%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: bold;
  user-select: none;
`;
