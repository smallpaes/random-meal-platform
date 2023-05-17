import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartIconContainer,
  ShoppingCartIcon,
  CartIconCount,
} from './cart-icon.styles';
import { toggleCart } from '../../store/cart/cart.action';
import { selectCartCount } from '../../store/cart/cart.selector';

const CartIcon: FC = (): ReactElement => {
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  return (
    <CartIconContainer onClick={() => dispatch(toggleCart())}>
      <ShoppingCartIcon />
      <CartIconCount>{cartCount}</CartIconCount>
    </CartIconContainer>
  );
};

export default CartIcon;
